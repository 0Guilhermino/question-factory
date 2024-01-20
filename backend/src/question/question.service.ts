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

    createQuestion(question: Question): Question{
        const newQuestion = new Question(
            this.questions.length + 1,
            question.question,
            question.questionInfo,
            question.answer
        );
        this.questions.push(newQuestion);
        return newQuestion
    }

    updateQuestion(updatedQuestion: Question) {
        const index = this.questions.findIndex(question => question.id === updatedQuestion.id)
        if (index !== -1){
            const newQuestion = new Question(
                this.questions[index].id,
                updatedQuestion.question,
                updatedQuestion.questionInfo,
                updatedQuestion.answer
            );
            this.questions[index] = newQuestion;
            return this.questions[index]
        }
    }

    deleteQuestions(questionId: number){
        this.questions = this.questions.filter(question => question.id !== questionId);
    }


}
