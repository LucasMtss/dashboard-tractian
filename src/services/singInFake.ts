import { Token } from 'interfaces/token';
import { User } from 'interfaces/user';

interface SignIn {
  data: {
    user: User;
    token: Token;
  };
}

export function signInFake(login: string, password: string): Promise<SignIn> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login === 'teste@teste.com' && password === 'teste') {
        resolve({
          data: {
            user: {
              id: '1',
              name: 'teste',
              email: 'teste@teste.com',
            },
            token: {
              access_token:
                'eyJhbIAaishdiqIAIS73MMh8dkosjhd9120h0R5cCI6IkpXVCJ9',
              refresh_token:
                'eyJhbIAaishdiqIAIS73MMh8dkosjhd9120h0R5cCI6IkpXVCJ9',
            },
          },
        });
      } else {
        reject(new Error('400'));
      }
    }, 2000);
  });
}
