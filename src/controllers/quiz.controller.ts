import { NextFunction, Request, Response } from 'express';
import { CreateQuizDto } from '@dtos/quiz.dto';
import { Quiz } from '@interfaces/quiz.interface';
import QuizService from '@services/quiz.service';
import { CreateMcqQuestionsDto } from '@/dtos/mcqQuestions.dto';
import { McqQuestions } from '@/interfaces/mcqQuestions.interface';
import { CreateScoreBoardDto } from '@/dtos/scoreBoard.dto';
import { ScoreBoard } from '@/interfaces/scoreBoard.interface';
import { User } from '@/interfaces/users.interface';
import userService from '@services/users.service';

class QuizController {
  public quizService = new QuizService();
  public userService = new userService();
  //   public getCategorys = async (req: Request, res: Response, next: NextFunction) => {
  //     try {
  //       const findAllCategory: Quiz[] = await this.categoryService.getAllCategorys();

  //       res.status(200).json({ data: findAllCategory, message: 'findAll' });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  public createQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const quizData: CreateQuizDto = req.body;
      const createQuizData: Quiz = await this.quizService.createQuiz(quizData);

      res.status(201).json({ data: createQuizData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getQuizById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const quizId = Number(req.params.id);
      const findOneQuizData: Quiz = await this.quizService.findQuizById(quizId);

      res.status(200).json({ data: findOneQuizData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public updateQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const quizId = Number(req.params.id);
      const quizData: CreateQuizDto = req.body;
      const updateQuizData: Quiz = await this.quizService.updateQuiz(quizId, quizData);

      res.status(200).json({ data: updateQuizData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public createQuizQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const quizQuestionData: CreateMcqQuestionsDto = req.body;
      const createQuizQuestion: McqQuestions = await this.quizService.createQuizQuestion(quizQuestionData);

      res.status(201).json({ data: createQuizQuestion, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getQuestionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const questionId = Number(req.params.id);
      const getQuestion: McqQuestions = await this.quizService.getQuestionById(questionId);

      res.status(200).json({ data: getQuestion, message: 'get' });
    } catch (error) {
      next(error);
    }
  };

  public getAllQuestionByQuizId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const quizId = Number(req.params.id);
      const getQuestion: McqQuestions = await this.quizService.getAllQuestionByQuizId(quizId);

      res.status(200).json({ data: getQuestion, message: 'getallquestions' });
    } catch (error) {
      next(error);
    }
  };

  public updateGetQuestionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const questionid = Number(req.params.id);
      const questionByIdPayload: CreateMcqQuestionsDto = req.body;
      const updateGetQuestionById: McqQuestions = await this.quizService.updateGetQuestionById(questionid, questionByIdPayload);

      res.status(200).json({ data: updateGetQuestionById, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public inviteParticipantInQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const participateData: CreateScoreBoardDto = req.body;
      const inviteParticipateData: ScoreBoard = await this.quizService.inviteParticipantInQuiz(participateData);

      res.status(201).json({ data: inviteParticipateData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateParticipantScore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const quizId = Number(req.params.id);
      const updateScoreDate: CreateScoreBoardDto = req.body;
      const updateParticipateScoreDate: ScoreBoard = await this.quizService.updateParticipantScore(quizId, updateScoreDate);

      res.status(200).json({ data: updateParticipateScoreDate, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public adminGetAllParticipantScore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const quizId = Number(req.params.id);
      const updateParticipateScoreDate: any = await this.quizService.adminGetAllParticipantScore(quizId);
      console.log('updateParticipateScoreDate: ', updateParticipateScoreDate);

      res.status(200).json({ data: updateParticipateScoreDate, message: 'getAll' });
    } catch (error) {
      next(error);
    }
  };
}

export default QuizController;
