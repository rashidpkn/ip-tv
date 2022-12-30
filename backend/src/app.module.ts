import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';



const Static = ServeStaticModule.forRoot({
  rootPath:join(__dirname,'..','build')
})



@Module({
  imports: [UserModule, DatabaseModule,Static],
  controllers: [],
  providers: [],
})
export class AppModule {}
