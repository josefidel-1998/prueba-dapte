import type { Data} from '~/types/login';
import users from '~/data/users.json'

export default ((dataLogin: Data) => {
    const nameError = useState<String>('nameError');
    const passwordError = useState<String>('passwordError');
    
    const bandera = ref<boolean>(false)

    const validateEmpty = ():void => {
        bandera.value = false;

        if(dataLogin.name !== users.name){
            nameError.value = "El nombre de usuario no coincide con los datos de prueba";
            bandera.value = true
        }
        if(dataLogin.password !== users.password){
            passwordError.value = "La contraseña no coincide con los datos de prueba";
            bandera.value = true
        }

        if(dataLogin.name.length === 0){
            nameError.value = "El nombre no puede quedar vacio";
            bandera.value = true
        }

        if(dataLogin.password.length === 0){
            passwordError.value = "La contraseña no puede quedar vacio";
            bandera.value = true
        }
    }
    return {
        validateEmpty,
        bandera
    }
})