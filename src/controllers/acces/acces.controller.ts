import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermissionusecaseService } from 'src/usecases/permissionusecase/permissionusecase.service';

@Controller('acces')
@ApiTags('access')
export class AccesController {
    constructor(private readonly permissionUseCase: PermissionusecaseService){}

    @Get('/check:id_badge?:id_gate')
    check(@Param ('id_badge')id_badge: number, @Param ('id_gate')id_gate:number,){
        return this.permissionUseCase.check(+id_badge, +id_gate)
    }
}
