export default(() => {
    const userCockie = useCookie<null | boolean>('data_user');

    const isAuthenticated = ():boolean => {
        return !!userCockie.value
    }
    const logout = ():void => {
        userCockie.value = null;
        navigateTo('/login');
      }
    return {
        isAuthenticated,
        logout
    }
})