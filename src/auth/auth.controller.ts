import { Body, Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() user: UserDto) {
    return this.authService.registerAccount(user);
  }

  @Post('login')
  login(@Request() req: { user: UserDto }) {
    return this.authService.login(req.user);
  }
}
