import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import { UserRole } from "../entities/user-role.enum";

export class CreateUserDto {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsEnum(UserRole)
  role: UserRole;

  createdAt: Date;
}
