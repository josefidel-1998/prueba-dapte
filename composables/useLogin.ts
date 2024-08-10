import type {Data} from '~/types/login';
import validations from '~/utils/validations'
export default ((dataLogin:Data) => {
    const {validateEmpty, bandera} =  validations(dataLogin);

    const userCockie = useCookie<Data | null>('data_user');

    const login = async ():Promise<void> => {
        validateEmpty();
        if(!bandera.value){

            const {data, status} = await useLazyFetch<Data>('/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(dataLogin)
            });
            if(status.value == 'success'){
                userCockie.value = data.value;
                navigateTo('/productos')
            }
        }
    }
    return {
        login,
    }
})