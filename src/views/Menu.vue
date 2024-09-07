<template>
  <section>
    <TopHeader />
    <!-- Menu Section -->
    <section class="min-h-screen bg-white py-16 px-1 md:px-10">
      <!-- Main heading -->
      <h1 class="text-center text-4xl md:text-6xl mb-5 font-bold">
        قائمة طعامنا
      </h1>
      <!-- Description -->
      <p
        class="text-center mx-auto px-2 md:px-10 text-lg md:text-xl font-semibold mb-16"
      >
        نقدم لكم مجموعة من أشهى وألذ الأطباق، تم تحضيرها بعناية باستخدام أفضل
        المكونات الطازجة لإرضاء جميع الأذواق.
      </p>

      <!-- Pizza Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:px-20 lg:pt-20"
      >
        <div
          v-for="Pizza in pizzas"
          :key="Pizza.id"
          class="flex flex-col items-center justify-center w-full"
        >
          <!-- Pizza Image -->
          <div
            class="bg-[#e93037] rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-full md:h-full overflow-hidden"
          >
            <img
              :src="Pizza.img"
              alt="Pizza Image"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Pizza Name -->
          <h1 class="pt-4 text-xl md:text-2xl font-bold">{{ Pizza.name }}</h1>
          <!-- Pizza Price -->
          <h2 class="text-[#e93037] text-2xl md:text-3xl font-bold mt-4">
            $ {{ Pizza.price }}
          </h2>
        </div>
      </div>
    </section>

    <section class="min-h-screen text-white py-20">
      <!-- Main heading -->
      <h1 class="text-center text-4xl md:text-6xl mb-5 font-bold">
    الطلب عبر التطبيق
  </h1>
  <!-- Description -->
  <p class="text-center mx-auto px-4 md:px-10 text-lg md:text-xl font-semibold mb-16">
    حمل تطبيقنا الآن واطلب بكل سهولة أينما كنت! اختر البيتزا المفضلة لديك واستمتع بخدمة سريعة ومريحة.
  </p>
      <div class="px-6 md:px-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">        <div class="bg-white flex items-center justify-center px-10 py-8  hover:scale-105 transition-all cursor-pointer shadow">
            <img :src="c1" alt="">
        </div>
        <div class="bg-white flex items-center justify-center px-10 py-8 hover:scale-105 transition-all cursor-pointer shadow">
            <img :src="c2" alt="">
        </div>
        <div class="bg-white flex items-center justify-center px-10 py-8 hover:scale-105 transition-all cursor-pointer shadow">
            <img :src="c3" alt="">
        </div>
        <div class="bg-white flex items-center justify-center px-10 py-8 hover:scale-105 transition-all cursor-pointer shadow">
            <img :src="c4" alt="">
        </div>
        <div class="bg-white flex items-center justify-center px-10 py-8 hover:scale-105 transition-all cursor-pointer shadow">
            <img :src="c5" alt="">
        </div>
        <div class="bg-white flex items-center justify-center px-10 py-8 hover:scale-105 transition-all cursor-pointer shadow">
            <img :src="c6" alt="">
        </div>
        <div class="bg-white flex items-center justify-center px-10 py-8 hover:scale-105 transition-all cursor-pointer shadow">
            <img :src="c7" alt="">
        </div>
        <div class="bg-white flex items-center justify-center px-10 py-8 hover:scale-105 transition-all cursor-pointer shadow">
            <img :src="c8" alt="">
        </div>
      </div>
    </section>
    <hr class="w-10/12 mx-auto"> 
    <Footer />
  </section>
</template>

<script>
import TopHeader from "../components/TopHeader.vue";
import pizzas from "../data/index";

import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
import c4 from "../assets/c4.svg";
import c5 from "../assets/c5.svg";
import c6 from "../assets/c6.svg";
import c7 from "../assets/c7.svg";
import c8 from "../assets/c8.svg";
import Footer from "../components/Footer.vue";

export default {
  name: "menu",
  components: {
    TopHeader,
    Footer
  },
  data() {
    return {
      pizzas,
      c1,
      c2,
      c3,
      c4,
      c5,
      c6,
      c7,
      c8
    };
  },
};
</script>
