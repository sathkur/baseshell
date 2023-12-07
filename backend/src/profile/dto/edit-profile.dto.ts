import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditProfileDto {

  @IsNumber()
  @IsOptional()
  user_id?: number;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  gender?: string;

}
