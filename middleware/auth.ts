import useAuth from "~/composables/useAuth"

export default defineNuxtRouteMiddleware((to, from) => {
    const {isAuthenticated} = useAuth()
    if (!isAuthenticated()) {
        return navigateTo('/login')
    }
})