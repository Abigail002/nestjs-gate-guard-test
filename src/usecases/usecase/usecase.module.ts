import { Module } from '@nestjs/common';
import { PermissionusecaseService } from '../permissionusecase/permissionusecase.service';
import { RepoModule } from 'src/repo/repo/repo.module';

@Module({
    imports: [RepoModule],
    providers:[PermissionusecaseService],
    exports:[PermissionusecaseService]
})
export class UsecaseModule {}
