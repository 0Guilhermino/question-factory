import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {QuestionService} from "./question.service";
import {Question} from "./person.model";

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) {}

    @Get()
    getAllQuestions(){
        return this.questionService.getAllQuestions()
    }

    @Get(':id')
    getQuestionsById(@Param('id') id: number){
        return this.questionService.getQuestionsById(id);
    }

    @Post()
    createQuestion(@Body question: Question){
        this.questionService.createQuestion(question);
        return question;
    }



}
