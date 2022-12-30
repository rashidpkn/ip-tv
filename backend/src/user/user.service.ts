import { Injectable } from '@nestjs/common';
import { user } from 'src/database/model/user.entity';

@Injectable()
export class UserService {
    async create(fname: string, lname: string, phone: string, address: string, emirates: string, packages: string, email: string, password: string) {
        const found = await user.findOne({ where: { email } })
        if (found) {
            return {
                loginStatus: false,
                error: 'User Already Exist'
            }
        } else {
            user.create({ fname, lname, phone, address, emirates, packages, email, password })
            return {
                loginStatus: true,
                error: ''
            }
        }



    }

    async login(email: string, password: string) {
        const found = await user.findOne({where:{email,password},raw:true})
        if(found){
            return {
                loginStatus: true,
                role: found.role,
                error: "",
                fname: found.fname,
                lname: found.lname,
                packages : found.packages
            }
        } else{
            return {
                loginStatus: false,
                role: '',
                error: "Please Check Your Password",
                fname: '',
                lname: ''
            }
        }
        
    }

    delete() {
        return true
    }


}
