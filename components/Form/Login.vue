<template>
  <div class="w-full mx-auto grid md:grid-cols-2 grid-cols-1 place-content-around items-center ">
    <form class="w-1/3 mx-auto " @submit.prevent="login">
        <fieldset class="w-full flex flex-col items-center justify-center gap-8">
            <legend class="text-gray-900 text-lg font-bold title-font text-center">Login</legend>
            <div class="w-full">
              
              <input 
              type="text" 
              id="name"
              v-model="dataLogin.name" 
              name="name" 
              class="input__login"
              placeholder="Nombre"
              @input="nameError = ''"
              />
            </div>
            <span class="text-red-500 font-bold text-md" v-if="nameError">{{ nameError }}</span>
            <div class="w-full">
              
              <input 
              type="password" 
              id="password" 
              v-model="dataLogin.password"
              name="password" 
              placeholder="Contraseña"
              class="input__login"
              @input="passwordError = ''"
              />
            </div>
            <span class="text-red-500 font-bold text-md" v-if="passwordError">{{ passwordError }}</span>
            <button class="btn__submit">Submit</button>
        </fieldset>
    </form>
    <div class="w-full">
        <img class="w-screen h-screen object-cover md:block hidden" src="/login.jpg" alt="portada login" />
    </div>   
  </div>
  
</template>

<script setup lang="ts">
    import type {Data} from '~/types/login';
    
    const dataLogin = reactive<Data>({name: '',password: '', id: 1});
    const nameError = useState<String>('nameError', () => '')
    const passwordError = useState<String>('passwordError', () => '')

    const {login} = useLogin(dataLogin); 
    onMounted(() => {
      window.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
          login();
        }
      })
    })

</script>