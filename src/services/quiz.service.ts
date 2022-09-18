import { CreateMcqQuestionsDto } from '@/dtos/mcqQuestions.dto';
import { McqQuestions } from '@/interfaces/mcqQuestions.interface';
import DB from '@databases';
import { CreateQuizDto } from '@dtos/quiz.dto';
import { HttpException } from '@exceptions/HttpException';
import { Quiz } from '@interfaces/quiz.interface';
import { isEmpty } from '@utils/util';
import generateQuizLink from '@utils/linkGenerator';
import sendQuizMail from '@utils/mailer';
import { ScoreBoard } from '@/interfaces/scoreBoard.interface';
import { CreateScoreBoardDto } from '@/dtos/scoreBoard.dto';
import { User } from '@/interfaces/users.interface';
import merge from 'lodash.merge';

class QuizService {
  public quiz = DB.quiz;
  public quizMcqQuestions = DB.mcqquestions;
  public scoreboard = DB.scoreboard;
  public users = DB.Users;

  //   public async getAllCategorys(): Promise<Category[]> {
  //     const allCategory: Category[] = await this.categorys.findAll();
  //     return allCategory;
  //   }

  public async createQuiz(quizData: CreateQuizDto): Promise<Quiz> {
    if (isEmpty(quizData)) throw new HttpException(400, 'quizData is empty');
    const createQuizData: Quiz = await this.quiz.create({ ...quizData });
    return createQuizData;
  }

  public async findQuizById(quizId: number): Promise<Quiz> {
    if (isEmpty(quizId)) throw new HttpException(400, 'quizId is empty');

    const findQuiz: Quiz = await this.quiz.findByPk(quizId);
    if (!findQuiz) throw new HttpException(409, "User doesn't exist");
    return findQuiz;
  }

  public async updateQuiz(quizId: number, quizData: CreateQuizDto): Promise<Quiz> {
    if (isEmpty(quizData)) throw new HttpException(400, 'quizData is empty');
    const { userid } = quizData;
    const findQuiz: Quiz = await this.quiz.findByPk(quizId);
    if (!findQuiz) throw new HttpException(409, "Quiz doesn't exist");

    await this.quiz.update({ ...quizData }, { where: { quizid: quizId } });

    const updatequiz: Quiz = await this.quiz.findByPk(quizId);
    return updatequiz;
  }

  //Create MCQ questins using Quiz Id
  public async createQuizQuestion(quizQuestionData: CreateMcqQuestionsDto): Promise<McqQuestions> {
    if (isEmpty(quizQuestionData)) throw new HttpException(400, 'Quiz Question Data is empty');
    const createQuizQuestionsData: McqQuestions = await this.quizMcqQuestions.create({ ...quizQuestionData });
    return createQuizQuestionsData;
  }

  public async getQuestionById(questionid: number): Promise<McqQuestions> {
    if (isEmpty(questionid)) throw new HttpException(400, 'questionid is empty');

    const findQuestion: McqQuestions = await this.quizMcqQuestions.findByPk(questionid);
    if (!findQuestion) throw new HttpException(409, "question doesn't exist");
    return findQuestion;
  }

  public async updateGetQuestionById(questionid: number, questionData: CreateMcqQuestionsDto): Promise<McqQuestions> {
    if (isEmpty(questionData)) throw new HttpException(400, 'score data is empty');

    await this.quizMcqQuestions.update({ ...questionData }, { where: { questionid: questionid } });

    const updateQuestion: McqQuestions = await this.quizMcqQuestions.findOne({
      where: { questionid: questionid },
    });
    return updateQuestion;
  }

  public async inviteParticipantInQuiz(participateData: CreateScoreBoardDto): Promise<ScoreBoard> {
    if (isEmpty(participateData)) throw new HttpException(400, 'Invite Participate Data is empty');
    const getGenerateLink: any = generateQuizLink(participateData.quizid, participateData.userid);
    console.log('getGenerateLink: ', getGenerateLink);
    const mail = sendQuizMail();
    console.log('mail: ', mail);
    participateData.quizlink = getGenerateLink;
    const inviteParticipateData: ScoreBoard = await this.scoreboard.create({ ...participateData });
    return inviteParticipateData;
  }

  public async updateParticipantScore(quizId: number, participateData: CreateScoreBoardDto): Promise<ScoreBoard> {
    if (isEmpty(participateData)) throw new HttpException(400, 'score data is empty');

    await this.scoreboard.update({ ...participateData }, { where: { quizid: quizId, userid: participateData.userid } });

    const updatequiz: ScoreBoard = await this.scoreboard.findOne({
      where: { quizid: quizId, userid: participateData.userid },
    });
    return updatequiz;
  }

  public async adminGetAllParticipantScore(quizId: number): Promise<any> {
    if (isEmpty(quizId)) throw new HttpException(400, 'quizId is empty');
    const findQuiz: Quiz = await this.quiz.findOne({ where: { quizid: quizId } });
    if (!findQuiz) throw new HttpException(409, `This quiz name ${findQuiz.quizname} not exists`);
    const getParticpantScore: ScoreBoard[] = await this.scoreboard.findAll({
      //include: [this.users],
      raw: true,
      where: { quizid: quizId },
    });
    //return getParticpantScore;
    console.log('getParticpantScore: ', getParticpantScore);
    let quizAllParticipantScore: any;
    const getUser = [];
    // let findUser;
    // if (getParticpantScore.length) {
    //   getParticpantScore.forEach(async ele => {
    //     findUser = await this.users.findOne({ raw: true, where: { userid: ele.userid } });
    //     console.log('findUser: ', findUser);
    //     //getUser.push(findUser);
    //   });
    // }
    // let test = [...findUser];
    // console.log('getUser: ', getUser);
    //const userQuiz = merge(getUser, getParticpantScore);

    // eslint-disable-next-line prefer-const
    quizAllParticipantScore = {
      quiz: findQuiz,
      getParticpantScore,
    };
    return quizAllParticipantScore;
  }
}

export default QuizService;
