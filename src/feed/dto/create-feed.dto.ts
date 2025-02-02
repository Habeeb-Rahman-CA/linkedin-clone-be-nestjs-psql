import { User } from 'src/auth/entities/auth.entity';

export class CreateFeedDto {
  id: number;
  body: string;
  createdAt: Date;
  author: User;
}
