import { StaticImageData } from "next/image";

export default interface User {
    zaloUserId: string
    email: string
    googleUserId: string
    phoneNumber: string
    company: string
    firstName: string
    lastName: string
    // password: string
    facebookUserId: string
    gender: string
    birthday: string
    avatar: string | StaticImageData
    id: string
}

export type AddUser = Omit<User, 'id'>