import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from 'src/schemas/account-schema/account-schema';
//import { AccountRegister } from '../dto/AccountRegister';


@Injectable()
export class AccountService {
    constructor(
        @InjectModel(Account.name) private accountSchema: Model<Account>,
    ) { }

    async register(email: string, password: string): Promise<Account> {
        try {
            // Verifica se o email e a senha são válidos
            if (!email || !password) {
                throw new Error('Email e senha são obrigatórios.');
            }

            // Cria uma nova conta
            const newAccount = await this.accountSchema.create({
                email,
                password,
            });

            return newAccount;
        } catch (error) {
            // Trate erros aqui (por exemplo, log ou lance exceções personalizadas)
            throw new Error('Erro ao criar conta: ' + error.message);
        }
    }
}
