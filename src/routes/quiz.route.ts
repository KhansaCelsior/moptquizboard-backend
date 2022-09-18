import { Router } from 'express';
import QuizController from '@controllers/quiz.controller';
import { CreateQuizDto } from '@dtos/quiz.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@/middlewares/auth.middleware';

class QuizRoute implements Routes {
  public path = '/quiz';
  public questionPath = '/quiz/question';
  public router = Router();
  public quizController = new QuizController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(CreateQuizDto, 'body'), this.quizController.createQuiz);
    this.router.get(`${this.path}/:id(\\d+)`, this.quizController.getQuizById);
    this.router.patch(`${this.path}/:id(\\d+)`, this.quizController.updateQuiz);
    this.router.post(`${this.questionPath}`, this.quizController.createQuizQuestion);
  }
}

export default QuizRoute;
