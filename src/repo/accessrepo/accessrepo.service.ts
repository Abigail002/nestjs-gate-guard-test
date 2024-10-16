import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccessrepoService {
    constructor(private readonly prisma: PrismaService){}

    async findOne(id_gate:number, id_badge: number){
        return await this.prisma.access.findFirst({
            where:{
                badgeId: id_badge,
                porteId: id_gate
            }
        })
    }
}
