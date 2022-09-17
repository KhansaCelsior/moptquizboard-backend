import { IsString } from 'class-validator';

export class CreateCategoryDto {
  
  @IsString()
  public categoryname: string;
}