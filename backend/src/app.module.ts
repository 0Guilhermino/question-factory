import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import {ParticipantModule} from "./participant/participant.module";

@Module({
  imports: [QuestionModule,
  ParticipantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
