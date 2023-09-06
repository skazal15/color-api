// src/color/color.controller.ts

import { Controller, Get } from '@nestjs/common';
import { ColorService } from './color.service';
import { getColor } from './dto/get-color';

@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Get()
  async getRandomColor(): Promise<getColor | undefined> {
    const color= await this.colorService.getRandomColor();
    if(!color){
      return undefined;
    }

    const colorDto: getColor = {
      id:color.id,
      name:color.name
    };
    return colorDto;
  }
}
