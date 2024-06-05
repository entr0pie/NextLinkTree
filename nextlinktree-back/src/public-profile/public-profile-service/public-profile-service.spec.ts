import { Test, TestingModule } from '@nestjs/testing';
import { PublicProfileService } from './public-profile-service';

describe('PublicProfileServiceService', () => {
  let service: PublicProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicProfileService],
    }).compile();

    service = module.get<PublicProfileService>(PublicProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
