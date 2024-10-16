import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BadgerepoService {
    constructor(private readonly prisma : PrismaService){}

    async findAll(){
        return this.prisma.badge.findMany()
    }

    async findOne(id: number){
        return this.prisma.badge.findFirst({
            where:{
                id
            }
        })
    }
}
