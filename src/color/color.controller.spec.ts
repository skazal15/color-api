//color.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ColorController } from './color.controller';
import { ColorService } from './color.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Color } from './entities/color.entity';

describe('ColorController', () => {
  let controller: ColorController;
  let service: ColorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColorController],
      providers: [
        ColorService,
        {
          provide: getRepositoryToken(Color),
          useValue: {}, // Mock the repository methods here if needed
        },
      ],
    }).compile();

    controller = module.get<ColorController>(ColorController);
    service = module.get<ColorService>(ColorService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a random color', async () => {
    // Mock the behavior of the service
    const mockColor = { id: 1, name: 'blue' };
    const getRandomColorSpy = jest.spyOn(service, 'getRandomColor').mockResolvedValue(mockColor);

    // Call the controller method
    const result = await controller.getRandomColor();

    // Assertions
    expect(result).toEqual({ id: mockColor.id, name: mockColor.name });
    expect(getRandomColorSpy).toHaveBeenCalled();
  });

  it('should handle undefined color', async () => {
    // Mock the behavior of the service to return undefined
    jest.spyOn(service, 'getRandomColor').mockResolvedValue(undefined);

    // Call the controller method
    const result = await controller.getRandomColor();

    // Assertions
    expect(result).toBeUndefined();
  });
});
