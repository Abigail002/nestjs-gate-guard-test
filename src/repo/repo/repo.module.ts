import { Module } from '@nestjs/common';
import { AccessrepoService } from '../accessrepo/accessrepo.service';
import { BadgerepoService } from '../badgerepo/badgerepo.service';
import { UserrepoService } from '../userrepo/userrepo.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    providers:[AccessrepoService, BadgerepoService, UserrepoService, PrismaService],
    exports:[AccessrepoService, BadgerepoService, UserrepoService]
})
export class RepoModule {}
