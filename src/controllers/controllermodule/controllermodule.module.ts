import { Module } from '@nestjs/common';
import { AccesController } from '../acces/acces.controller';
import { UsecaseModule } from 'src/usecases/usecase/usecase.module';
import { PermissionusecaseService } from 'src/usecases/permissionusecase/permissionusecase.service';
import { RepoModule } from 'src/repo/repo/repo.module';

@Module({
    imports:[UsecaseModule, RepoModule],
    controllers:[AccesController],
})
export class ControllermoduleModule {}
