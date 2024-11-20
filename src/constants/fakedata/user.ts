import User from "@/types/user";
import { Gender } from "..";
import images from "@/assets";

export const users: User[] = [
    {
        id: 'user1',
        zaloUserId: 'zaloUserId1',
        email: 'tri2000@gmail.com',
        googleUserId: 'googleUserId1',
        phoneNumber: '0123456789',
        company: 'BidaHub',
        firstName: 'Ngo',
        lastName: 'Duc Minh Tri',
        facebookUserId: 'fakebookUserId1',
        gender: Gender.Male,
        birthday: '21/06/2000',
        avatar: images.defaultAvatar,
    }
]