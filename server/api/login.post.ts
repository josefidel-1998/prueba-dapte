import users from '@/data/users.json'
import type {Data} from '~/types/login';
export default defineEventHandler (async event => {
    const body: Data = await readBody(event);
    const {name, password} = body;

    if(name == ''){
        throw new Error('El nombre de usuario no puede estar vacío')
    }
    if(password == ''){
        throw new Error('La clave no puede estar vacía')
    }

    if(name !== users.name){
        throw new Error('Nombre de usuario incorrecto')
    }
    if(password !== users.password){
        throw new Error('Clave incorrecta incorrecto')
    }
 
    return users
}); 