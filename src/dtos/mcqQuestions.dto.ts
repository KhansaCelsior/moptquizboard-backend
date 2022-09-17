import { IsString, IsNumber } from 'class-validator';

export class CreateMcqQuestionsDto {
  @IsNumber()
  public quizId: number;
  @IsString()
  public questionType: string;
  @IsString()
  public question: string;
  @IsString()
  public correctAnswer: string;
  @IsString()
  public options: string;
}
