<template>
    <div class="h-screen flex items-center justify-center ">
        <img :src="logo" alt="">
    </div>
</template>

<script>
import logo from '../assets/logo.svg'
export default {
    name:"loader",
    data(){
        return{
            logo
        }
    }
}
</script>