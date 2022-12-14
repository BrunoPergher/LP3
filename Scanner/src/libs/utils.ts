export function signIn(email: string, password: string) {
    if(email === 'login' && password === 'login'){
        return true;
    }

    return false;
}

export const api: string = 'http://api.linkpreview.net/';
export const key: string = '53aece18a7ec07dbcfc34f26feaeaa29';