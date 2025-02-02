import { Role } from '../entities/role.enum';

export class UserDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: Role;
}
