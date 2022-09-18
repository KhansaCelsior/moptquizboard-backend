import { NextFunction, Request, Response } from 'express';
import { CreateQuizDto } from '@dtos/quiz.dto';
import { Quiz } from '@interfaces/quiz.interface';
import QuizService from '@services/quiz.service';
import { CreateMcqQuestionsDto } from '@/dtos/mcqQuestions.dto';
import { McqQuestions } from '@/interfaces/mcqQuestions.interface';

class QuizController {
  public quizService = new QuizService();
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
}

export default QuizController;
