import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule , { cors: true } );
  // app.get((req : any , res :any)=>{
  //   res.sendFile(`${__dirname}/build/index.html`)
  // })
  await app.listen(3001);
  
}
bootstrap();
