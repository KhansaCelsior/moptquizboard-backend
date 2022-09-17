import { IsString, IsNumber } from 'class-validator';

export class CreateFillUpQuestionsDto {
  @IsNumber()
  public quizId: number;
  @IsString()
  public questionType: string;
  @IsString()
  public question: string;
  @IsString()
  public correctAnswer: string;
}