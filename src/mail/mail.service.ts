import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: string, email: string, token: string) {
    const url = `gmail.com/auth/confirmation?token=${token}`;

    await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to my website',
      template: '../templates/confirmation',
      context: {
        name: user,
        url,
      },
    });
  }
}
