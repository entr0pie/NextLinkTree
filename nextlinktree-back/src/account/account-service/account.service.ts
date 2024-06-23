import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from 'src/schemas/account-schema/account-schema';
import { AccountRegister } from '../dto/AccountRegister';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth-service/auth-service.service';

@Injectable()
export class AccountService {
    constructor(
        @InjectModel(Account.name) private accountSchema: Model<Account>,
        private readonly authService: AuthService,
    ) { }

    async register(email: string, password: string): Promise<AccountRegister> {
        try {
            if (!email || !password) {
                throw new Error('Email e senha são obrigatórios.');
            }

            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(password, salt);
            const createdAt = new Date();

            const newAccount = await this.accountSchema.create({
                email,
                password: hashedPassword,
                createdAt,
            });

            return newAccount;
        } catch (error) {
            throw new Error('Erro ao criar conta: ' + error.message);
        }
    }

    async login(email: string, password: string): Promise<{ access_token: string }> {
        try {
            if (!email || !password) {
                throw new Error('Email e senha são obrigatórios.');
            }

            const account = await this.accountSchema.findOne({ email });
            if (!account) {
                throw new Error('Conta não encontrada.');
            }

            const isPasswordValid = await bcrypt.compare(password, account.password);
            if (!isPasswordValid) {
                throw new Error('Senha inválida.');
            }

            const token = await this.authService.generateToken(account);
            return { access_token: token };
        } catch (error) {
            throw new Error('Erro ao efetuar o login: ' + error.message);
        }
    }
}
