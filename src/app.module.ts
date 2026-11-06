import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InicioController } from './inicio/inicio.controller';

@Module({
  imports: [],
  controllers: [AppController, InicioController],
  providers: [AppService],
})
export class AppModule {}
