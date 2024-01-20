import { Injectable } from '@nestjs/common';
import {Participant} from "./participant.model";

@Injectable()
export class ParticipantService {
    private participants: Participant[] = []

    getAllParticipant() {
        return this.participants;
    }

    getParticipantById(id: number) {
        return this.participants.find(participant => participant.id === id);
    }

    createParticipant(participant: Participant): Participant{
        const newQuestion = new Participant(
            this.participants.length + 1,
            participant.name,
            participant.age,
            participant.email
        );
        this.participants.push(newQuestion);
        return newQuestion
    }

    updateParticipant(updatedParticipant: Participant) {
        const index = this.participants.findIndex(participant => participant.id === updatedParticipant.id)
        if (index !== -1){
            const newQuestion = new Participant(
                this.participants[index].id,
                updatedParticipant.name,
                updatedParticipant.age,
                updatedParticipant.email
            );
            this.participants[index] = newQuestion;
            return this.participants[index]
        }
    }

    deleteParticipant(questionId: number){
        this.participants = this.participants.filter(participant => participant.id !== questionId);
    }


}
