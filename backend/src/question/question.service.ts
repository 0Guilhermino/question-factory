import { Injectable } from '@nestjs/common';
import {Question} from "./person.model";

@Injectable()
export class QuestionService {
    private questions: Question[] = []

    getAllQuestions() {
        return this.questions;
    }

    getQuestionsById(id: number) {
        return this.questions.find(question => question.id === id);
    }

    createQuestion(question: Question){
        this.questions.push(question);
    }

    updateQuestion(updatedQuestion: Question) {
        const index = this.questions.findIndex(question => question.id === updatedQuestion.id)
        if (index !== -1){
            this.questions[index] = updatedQuestion;
        }
    }

    deleteQuestions(questionId: number){
        this.questions = this.questions.filter(question => question.id !== questionId);
    }


}
