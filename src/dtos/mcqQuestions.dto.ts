import { IsString, IsNumber } from 'class-validator';

export class CreateMcqQuestionsDto {
  @IsNumber()
  public quizid: number;
  @IsString()
  public questiontype: string;
  @IsString()
  public question: string;
  @IsString()
  public correctanswer: string;
  @IsString()
  public option1: string;
  @IsString()
  public option2: string;
  @IsString()
  public option3: string;
  @IsString()
  public option4: string;
}
