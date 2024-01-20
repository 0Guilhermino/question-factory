import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ParticipantService} from "./participant.service";
import {Participant} from "./participant.model";

@Controller('question')
export class ParticipantController {
    constructor(private readonly participantService: ParticipantService) {}

    @Get()
    getAllParticipant(): Participant[]{
        return this.participantService.getAllParticipant();
    }

    @Get(':id')
    getParticipantById(@Param('id') id: number): Participant | undefined{
        return this.participantService.getParticipantById(id);
    }

    @Post()
    createParticipant(@Body() participant: Participant):Participant{
        return this.participantService.createParticipant(participant);
    }

    @Put()
    updateParticipant(@Body() participant: Participant): Participant | undefined{
        return this.participantService.updateParticipant(participant);
    }

    @Delete(':id')
    deleteQuestion(@Param('id') id: number){
        this.participantService.deleteParticipant(id);
    }



}
