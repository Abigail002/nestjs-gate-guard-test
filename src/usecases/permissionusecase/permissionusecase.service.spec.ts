import { Test, TestingModule } from '@nestjs/testing';
import { PermissionusecaseService } from './permissionusecase.service';

describe('PermissionusecaseService', () => {
  let service: PermissionusecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionusecaseService],
    }).compile();

    service = module.get<PermissionusecaseService>(PermissionusecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
