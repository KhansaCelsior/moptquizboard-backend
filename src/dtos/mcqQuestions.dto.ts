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
  public options: string;
}
