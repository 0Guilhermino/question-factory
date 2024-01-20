import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {QuestionService} from "./question.service";
import {Question} from "./person.model";

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) {}

    @Get()
    getAllQuestions(): Question[]{
        return this.questionService.getAllQuestions();
    }

    @Get(':id')
    getQuestionsById(@Param('id') id: number): Question | undefined{
        return this.questionService.getQuestionsById(id);
    }

    @Post()
    createQuestion(@Body() question: Question):Question{
        return this.questionService.createQuestion(question);
    }

    @Put()
    updateQuestion(@Body() question: Question): Question | undefined{
        return this.questionService.updateQuestion(question);
    }

    @Delete(':id')
    deleteQuestion(@Param('id') id: number){
        this.questionService.deleteQuestions(id);
    }



}
