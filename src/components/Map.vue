<template>
<div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 md:px-10 pt-10 md:pt-20 gap-6 md:gap-10">
      <div v-for="Pizza in pizzas" :key="Pizza.id" class="flex flex-col items-center justify-center">
        <div class="bg-[#e93037] rounded-full  md:w-full md:h-full">
          <img :src="Pizza.img" class="w-full h-full object-cover rounded-full">
        </div>
        <h1 class="pt-4 text-xl md:text-2xl font-bold">{{ Pizza.name }}</h1>
        <h1 class="text-[#e93037] text-2xl md:text-3xl font-bold mt-4">$ {{ Pizza.price }}</h1>
      </div>


    </div>
    <div class="flex flex-col sm:flex-row items-center justify-center mt-8 sm:mt-16 gap-4 sm:gap-5">
  <button
    class="bg-black border-2 border-black hover:text-yellow-500 transition-all text-base sm:text-lg font-semibold px-10 sm:px-14 py-4 sm:py-6 text-white"
  >
    من نحن
  </button>
  <button
    class="bg-white text-black text-base sm:text-lg font-semibold px-10 sm:px-14 py-4 sm:py-6 hover:bg-yellow-400 border-2 border-black hover:border-yellow-400 transition-all"
  >
    احجز طاولة
  </button>
</div>
</div>
  </template>
  
<script>

import pizzas from '../data/index'
export default {
    name : "Map",
    data(){
        return{
            pizzas
        }
    }
}
</script>