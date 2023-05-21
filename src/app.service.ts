import { Injectable } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Injectable()
export class AppService {
  constructor(private mailService: MailService) {}
  async getHello(): Promise<{ message: string }> {
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    await this.mailService.sendUserConfirmation(
      'sandesh',
      'hattorin184@gmail.com',
      token,
    );

    return {
      message: 'Mail sent successfully',
    };
  }
}
