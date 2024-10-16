import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserrepoService {
    constructor(private readonly prisma: PrismaService) { }

    async findRole(id: number) {
        return await this.prisma.user.findFirst({
            where: {
                id
            },
            select: {
                role: true
            }
        })
    }
}
