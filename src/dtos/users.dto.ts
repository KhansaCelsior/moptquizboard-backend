import { IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;
  @IsString()
  public password: string;
  @IsString()
  public firstname: string;
  @IsString()
  public lastname: string;
  @IsNumber()
  public isadmin: number;
}
