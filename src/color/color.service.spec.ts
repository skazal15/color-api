import { Test, TestingModule } from '@nestjs/testing';
import { ColorService } from './color.service';
import { Color } from './entities/color.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ColorService', () => {
  let service: ColorService;
  let colorRepository: Repository<Color>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ColorService,
        {
          provide: getRepositoryToken(Color),
          useClass: Repository, // Use the actual TypeORM Repository class
        },
      ],
    }).compile();

    service = module.get<ColorService>(ColorService);
    colorRepository = module.get<Repository<Color>>(getRepositoryToken(Color));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a color', async () => {
    // Mock the behavior of the createQueryBuilder method
    const mockQueryBuilder = {
      select: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
      limit:jest.fn().mockReturnThis(),
      getOne: jest.fn().mockResolvedValue({ id: 1, name: 'blue' }),
    };

    // Replace the createQueryBuilder method with the mock implementation
    jest.spyOn(colorRepository, 'createQueryBuilder').mockReturnValue(mockQueryBuilder as any);

    const color = await service.getRandomColor();

    // Assertions
    expect(color).toEqual({ id: 1, name: 'blue' });
    expect(colorRepository.createQueryBuilder).toHaveBeenCalledWith('color');
    expect(mockQueryBuilder.orderBy).toHaveBeenCalledWith('RANDOM()');
    expect(mockQueryBuilder.getOne).toHaveBeenCalled();
  });

  // Add more test cases as needed
});
