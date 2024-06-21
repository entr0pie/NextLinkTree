import { Test, TestingModule } from '@nestjs/testing';
import { PublicProfileControllerController } from './public-profile-controller.controller';

describe('PublicProfileControllerController', () => {
  let controller: PublicProfileControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicProfileControllerController],
    }).compile();

    controller = module.get<PublicProfileControllerController>(PublicProfileControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
