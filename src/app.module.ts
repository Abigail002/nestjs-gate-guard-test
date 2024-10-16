import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllermoduleModule } from './controllers/controllermodule/controllermodule.module';

@Module({
  imports: [ControllermoduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}