import { Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feed } from './entities/feed.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(Feed) private readonly feedRepository: Repository<Feed>,
  ) {}
  create(createFeedDto: CreateFeedDto) {
    return this.feedRepository.save(createFeedDto);
  }

  findAll() {
    return this.feedRepository.find();
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return this.feedRepository.update(id, updateFeedDto);
  }

  remove(id: number) {
    return this.feedRepository.delete(id);
  }
}
