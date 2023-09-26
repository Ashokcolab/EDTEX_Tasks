export interface UserRegister{
    role:string,
    name:string,
    mobile:string,
    email:string,
    password:string,
    leaves:Leave[],
    numberOfLeaves:number,
    remaining_leaves:Number
}
export interface UserLogin{
    email:string,
    password:string,
}
export interface Leave{
    id?:any,
    email:string,
    name:string,
    type:string,
    startDate:string,
    endDate:string,
    reason:string,
    status:string,
    managerReason:string,
}