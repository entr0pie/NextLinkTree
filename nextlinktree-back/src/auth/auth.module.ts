import { Module, forwardRef  } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
//import { JwtStrategy } from './jwt.strategy'; // Adicionar a provider quando criado
import { AuthService } from './auth-service/auth-service.service';
import { AccountService } from 'src/account/account-service/account.service';
import { AccountModule } from 'src/account/account.module';

@Module({
    imports: [
        JwtModule.register({
            secret: 'minhabundaeumsegredo', // Use uma chave secreta segura e de preferência armazene em variáveis de ambiente
            signOptions: { expiresIn: '1h' }, // Configuração de expiração do token
        }),
        forwardRef(() => AccountModule),
    ],
    providers: [AuthService, AccountService],
    exports: [AuthService],
})
export class AuthModule {}
