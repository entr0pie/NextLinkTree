import { Controller, Post, Body } from '@nestjs/common';
import { AccountService } from '../account-service/account.service';
import { ApiTags } from '@nestjs/swagger';
import { AccountRegister } from '../dto/AccountRegister'; // À Corrigir


@ApiTags("Account")
@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) { }

    @Post("register") // Corrigido o nome do método
    async register(@Body() accountRegister: AccountRegister): Promise<AccountRegister> {
        const { email, password } = accountRegister;
        // Chama o serviço para registrar a conta
        return this.accountService.register(email, password);
    }
}
