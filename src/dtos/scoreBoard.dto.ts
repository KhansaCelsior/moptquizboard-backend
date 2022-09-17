import { IsNumber } from 'class-validator';

export class CreateScoreBoardDto {
  @IsNumber()
  public userId: number;
  @IsNumber()
  public quizId: number;
  @IsNumber()
  public score: number;

}