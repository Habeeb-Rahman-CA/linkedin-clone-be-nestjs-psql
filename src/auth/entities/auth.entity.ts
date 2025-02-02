import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.enum';
import { Feed } from 'src/feed/entities/feed.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @OneToMany(() => Feed, (feedPost) => feedPost.author)
  feedPosts: Feed[];
}
