import { Module } from '@nestjs/common';
import { Participant } from './participant.controller';
import { ParticipantService } from './participant.service';

@Module({
  controllers: [Participant],
  providers: [ParticipantService]
})
export class ParticipantModule {}
