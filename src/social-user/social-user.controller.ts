import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialUserService } from './social-user.service';
import { CreateSocialUserDto } from './dto/create-social-user.dto';
import { UpdateSocialUserDto } from './dto/update-social-user.dto';

@Controller('social-user')
export class SocialUserController {
  constructor(private readonly socialUserService: SocialUserService) {}

  @Post()
  create(@Body() createSocialUserDto: CreateSocialUserDto) {
    return this.socialUserService.create(createSocialUserDto);
  }

  @Get()
  findAll() {
    return this.socialUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialUserDto: UpdateSocialUserDto) {
    return this.socialUserService.update(+id, updateSocialUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialUserService.remove(+id);
  }
}
