import { Test, TestingModule } from '@nestjs/testing';
import { Participant } from './participant.controller';

describe('QuestionController', () => {
  let controller: Participant;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Participant],
    }).compile();

    controller = module.get<Participant>(Participant);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
