import { User } from 'src/auth/entities/auth.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('feed_post')
export class Feed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  body: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.feedPosts)
  author: User;
}
