import { Controller, Post, Body } from '@nestjs/common';
import { AccountService } from '../account-service/account.service';
import { ApiTags } from '@nestjs/swagger';
import { AccountRegister } from '../dto/AccountRegister';
import { AccountLogin } from '../dto/AccountLogin'; // Novo DTO

@ApiTags("Account")
@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) { }

    @Post("register")
    async register(@Body() accountRegister: AccountRegister): Promise<AccountRegister> {
        const { email, password } = accountRegister;
        return this.accountService.register(email, password);
    }

    @Post("login")
    async login(@Body() accountLogin: AccountLogin): Promise<{ access_token: string }> {
        const { email, password } = accountLogin;
        return this.accountService.login(email, password);
    }
}
