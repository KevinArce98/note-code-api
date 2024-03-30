import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCodeDto } from 'src/dtos';
import { Code } from 'src/entities';

@Injectable()
export class CodeService {
  constructor(@InjectRepository(Code) private codeRepository: Repository<Code>) {}

  async create(createCodeDto: CreateCodeDto): Promise<Code> {
    return this.codeRepository.save(createCodeDto);
  }

  async getOne(id: string): Promise<Code> {
    const code = await this.codeRepository.findOne({ where: { id } });
    if (!code || code === null) {
      throw new NotFoundException('Code not found');
    }
    return code;
  }
}
