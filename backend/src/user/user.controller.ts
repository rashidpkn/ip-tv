import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  login(
    @Body('email') email : string,
    @Body('password') password :string
  ){
    return this.userService.login(email, password)
  }

  @Post('/create')
  create(
    @Body('fname') fname : string,
    @Body('lname') lname :string,
    @Body('phone') phone  :string,
    @Body('address') address :string,
    @Body('emirates') emirates :string,
    @Body('packages') packages :string,
    @Body('email') email : string,
    @Body('password') password :string
  ){
    return this.userService.create(fname,lname,phone,address,emirates,packages,email,password)
  }
}
