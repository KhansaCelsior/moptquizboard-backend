import { IsNumber, IsString } from 'class-validator';

export class CreateScoreBoardDto {
  @IsNumber()
  public userid: number;
  @IsNumber()
  public quizid: number;
  @IsNumber()
  public score: number;
  @IsString()
  public quizlink: string;
  @IsString()
  public quizcode: string;
}
