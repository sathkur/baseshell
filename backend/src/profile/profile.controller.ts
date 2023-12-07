import { Body, Controller, ForbiddenException, Post, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { EditProfileDto } from './dto';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { AccessControlService } from 'src/access-control/access-control.service';


@UseGuards(JwtGuard)
@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService, private readonly ac: AccessControlService) {}

    @Post('edit')
    edit(@Body() dto: EditProfileDto, @GetUser() currentUser: any) {

        if(dto?.user_id === undefined) {
            dto.user_id = currentUser.id;
        }

        const permission = this.ac.canUser({
                resource: "profile",
                action: "update"
            },
            currentUser,
            dto.user_id
        );

        if (!permission) {
            throw new ForbiddenException('Permission Denied');
        }

        return this.profileService.editProfile(dto);
    }

}
