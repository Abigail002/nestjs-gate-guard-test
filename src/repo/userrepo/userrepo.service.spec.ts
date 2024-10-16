import { Test, TestingModule } from '@nestjs/testing';
import { UserrepoService } from './userrepo.service';

describe('UserrepoService', () => {
  let service: UserrepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserrepoService],
    }).compile();

    service = module.get<UserrepoService>(UserrepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
