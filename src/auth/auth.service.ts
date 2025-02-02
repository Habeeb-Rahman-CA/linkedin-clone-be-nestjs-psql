import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { from, map, switchMap } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/auth.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  hashPassword(password: string | undefined) {
    return from(bcrypt.hash(password ?? '', 12));
  }

  registerAccount(user: UserDto) {
    const { firstName, lastName, email, password } = user;
    return this.hashPassword(password).pipe(
      switchMap((hashedPassword: string) => {
        return from(
          this.userRepository.save({
            firstName,
            lastName,
            email,
            password: hashedPassword,
          }),
        ).pipe(
          map((user: UserDto) => {
            delete user.password;
            return user;
          }),
        );
      }),
    );
  }
}
