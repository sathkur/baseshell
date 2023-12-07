import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditProfileDto } from './dto';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService) {}

    async editProfile(dto: EditProfileDto) {
        const profile = await this.prisma.profile.findUnique({
            where: {
                user_id: dto.user_id
            }
        });

        if(!profile) {
            throw new NotFoundException('Profile not found');
        }

        let updatedProfile = await this.prisma.profile.update({
            where: {
                user_id: dto.user_id,
            },
            data: {
                ...dto,
            },
        });

        return (({id, user_id, ...p}) => p)(updatedProfile);
    }


}
