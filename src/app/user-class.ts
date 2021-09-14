export class UserClass {
    _id!: string;
    _rev!: string;
    name!: string;
    userName!: string;
    email!: string;
    dob!: string;
    contactNo!: number;
    password!: string

    setData(registerData: any) {
        this.name = registerData.name;
        this.userName = registerData.username;
        this.dob = registerData.dob;
        this.contactNo = registerData.contactNo;
        this.password = registerData.password;
        this.email = registerData.email;
    }

}
