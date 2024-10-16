import { Test, TestingModule } from '@nestjs/testing';
import { BadgerepoService } from './badgerepo.service';

describe('BadgerepoService', () => {
  let service: BadgerepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BadgerepoService],
    }).compile();

    service = module.get<BadgerepoService>(BadgerepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
