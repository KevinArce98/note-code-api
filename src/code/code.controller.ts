import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CodeService } from './code.service';
import { CreateCodeDto } from 'src/dtos';

@Controller('code')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Post()
  async create(@Body() createCodeDto: CreateCodeDto) {
    return await this.codeService.create(createCodeDto);
  }

  @Get(':id')
  async getOne(@Param() { id }: { [key: string]: string }) {
    return await this.codeService.getOne(id);
  }
}
