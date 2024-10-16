import { Injectable } from '@nestjs/common';
import { AccessrepoService } from 'src/repo/accessrepo/accessrepo.service';
import { BadgerepoService } from 'src/repo/badgerepo/badgerepo.service';

@Injectable()
export class PermissionusecaseService {
    constructor(
        // private readonly userRepo: UserrepoService,
        private readonly badgeRepo: BadgerepoService,
        private readonly accessRepo: AccessrepoService
    ){}

    async check(id_badge: number, id_gate : number){
        const badge = await this.badgeRepo.findOne(id_badge)

        if(badge){
            // const role = await this.userRepo.findRole(badge.userId);
            const access = await this.accessRepo.findOne(id_gate, id_badge)
            if(access){
                return "Accès autorisé";
            }else return "Accès non autorisé";
        }else return "Badge inexistant";
    }
}
