import { IsString, IsNumber } from 'class-validator';

export class CreateQuizDto {
  @IsNumber()
  public userId: number;
  @IsString()
  public quizName: string;
  @IsNumber()
  public categoryId: number;
  @IsString()
  public questionType: string;
  @IsString()
  public quizLink: string; 
}
