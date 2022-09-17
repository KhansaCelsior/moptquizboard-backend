import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateQuizDto {
  @IsNumber()
  public userid: number;
  @IsString()
  public quizname: string;
  @IsNumber()
  public categoryid: number;
  @IsString()
  public questiontype: string;
  @IsString()
  public quizlink: string; 
  @IsDate()
  public startdate: Date; 
  @IsDate()
  public enddate: Date; 
}
