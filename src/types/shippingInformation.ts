import User from "./user";

export default interface ShippingInformation {
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    city: string,
    district: string,
    ward: string,
    detailAddress: string,
    isDefault: boolean,
    user: User['id']
}