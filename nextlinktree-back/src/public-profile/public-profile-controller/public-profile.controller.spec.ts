import { Test, TestingModule } from '@nestjs/testing';
import { PublicProfileController } from './public-profile.controller';

describe('PublicProfileControllerController', () => {
  let controller: PublicProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicProfileController],
    }).compile();

    controller = module.get<PublicProfileController>(PublicProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
