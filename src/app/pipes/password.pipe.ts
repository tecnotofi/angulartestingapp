import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'password'})
export class PasswordPipe implements PipeTransform {
    transform(password: string, show: boolean = true): string {
        if (!show) {
            return password;
        }
        else {
            let hiddenPassword = '';
            const length = password.length;

            for (let i = 0; i < length; i++) {
                hiddenPassword += '*';
            }
            return hiddenPassword;
        }
    }
}