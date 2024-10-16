import { Test, TestingModule } from '@nestjs/testing';
import { AccessrepoService } from './accessrepo.service';

describe('AccessrepoService', () => {
  let service: AccessrepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessrepoService],
    }).compile();

    service = module.get<AccessrepoService>(AccessrepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
