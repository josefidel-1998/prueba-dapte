<template>
  <div class="w-full mx-auto grid md:grid-cols-2 grid-cols-1 place-content-around items-center ">
    <form class="w-1/3 mx-auto" @submit.prevent="login">
        <fieldset class="w-full flex flex-col items-center justify-center gap-8">
            <legend class="text-gray-900 text-lg font-bold title-font text-center">Login</legend>
            <div class="w-full">
              <label for="name" class="leading-7 text-md">Nombre</label>
              <input 
              type="text" 
              id="name"
              v-model="dataLogin.name" 
              name="name" 
              class="input__login"
              @input="nameError = ''"
              />
            </div>
            <span class="text-red-500 font-bold text-md" v-if="nameError">{{ nameError }}</span>
            <div class="w-full">
              <label for="password" class="leading-7 text-md">Contraseña</label>
              <input 
              type="password" 
              id="password" 
              v-model="dataLogin.password"
              name="password" 
              class="input__login"
              @input="passwordError = ''"
              />
            </div>
            <span class="text-red-500 font-bold text-md" v-if="passwordError">{{ passwordError }}</span>
            <button class="btn__submit">Submit</button>
        </fieldset>
    </form>
    <div class="w-full">
        <img class="max-w-full h-auto" width="700" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKS4mvvx18WOK8ELNaCrZcRkzdmOaDVEOm9g&s" alt="portada login" />
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