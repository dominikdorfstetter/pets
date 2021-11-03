import { Test } from '@nestjs/testing';
import { HelloController } from './hello.controller';

describe('Hello Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [HelloController],
    }).compile();

    controller = module.get(HelloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
