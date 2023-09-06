// src/color/color.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from './entities/color.entity';
import { ColorRepository } from './color.repository';

@Injectable()
export class ColorService {
  constructor(
    @InjectRepository(Color)
    private readonly colorRepository:ColorRepository,
  ) {}

  async getRandomColor(): Promise<Color | undefined> {
    // Implement logic to fetch a random color from the database.
    const randomColor = await this.colorRepository.createQueryBuilder('color').orderBy('RANDOM()').limit(1).getOne();
    return randomColor
  }
}
