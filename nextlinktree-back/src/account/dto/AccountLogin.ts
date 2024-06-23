import { ApiProperty } from '@nestjs/swagger';

export class AccountLogin {
    @ApiProperty({ description: 'Endereço de email', example: 'usuario@example.com' })
    readonly email: string;

    @ApiProperty({ description: 'Senha da conta', example: 'senha123' })
    readonly password: string;
}