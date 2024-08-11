import type {Users} from '~/types/users'
export default(() => {
    const users = useState<Users[]>('users', () => []);
    const registerUsers = useState<Users[]>('registerUsers', () => []);

    const getUsers = async ():Promise<void> => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos');
        const jsonData = await data.json();
        users.value = jsonData;
    }
    const filterUsers = (filter: string):void => {
        let filtro = users.value.filter((f:Users) => f.title.toLowerCase().startsWith(filter.toLowerCase()));
        registerUsers.value = filtro;
    }
    return {
        getUsers,
        filterUsers
    }
})