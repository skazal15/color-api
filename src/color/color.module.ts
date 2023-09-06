// src/color/color.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';
import { Color } from './entities/color.entity'; // Import the Color entity.

@Module({
  imports: [TypeOrmModule.forFeature([Color])], // Include the Color entity here.
  controllers: [ColorController],
  providers: [ColorService],
})
export class ColorModule {}
