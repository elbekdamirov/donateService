import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialUserDto } from './create-social-user.dto';

export class UpdateSocialUserDto extends PartialType(CreateSocialUserDto) {}
