import { CreateMcqQuestionsDto } from '@/dtos/mcqQuestions.dto';
import { McqQuestions } from '@/interfaces/mcqQuestions.interface';
import DB from '@databases';
import { CreateQuizDto } from '@dtos/quiz.dto';
import { HttpException } from '@exceptions/HttpException';
import { Quiz } from '@interfaces/quiz.interface';
import { isEmpty } from '@utils/util';
import generateQuizLink from '@utils/linkGenerator';
import sendQuizMail from '@utils/mailer';

class QuizService {
  public quiz = DB.quiz;
  public quizMcqQuestions = DB.mcqquestions;

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
    const getGenerateLink:any = generateQuizLink(quizId, userid);
    console.log('getGenerateLink: ', getGenerateLink);
    const mail = sendQuizMail();
    console.log('mail: ', mail);
    quizData.quizlink = getGenerateLink;
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
}

export default QuizService;
