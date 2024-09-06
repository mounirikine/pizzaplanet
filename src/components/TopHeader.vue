<template>
  <section>
    <header class="bg-[#ffbc11] font-semibold py-3 w-full">
      <nav class="flex items-center justify-between px-4 sm:px-10">
        <!-- Contact Information -->
        <div class="flex lg:w-4/12">
          <h1>اتصل بنا: (413) 345 - 9821</h1>
        </div>
        <!-- Icons Section -->
        <div class="lg:flex items-center justify-end hidden w-5/12 gap-5">
          <h1 class="text-sm sm:text-xl">اطلب الآن:</h1>
          <img :src="o1" alt="شعار" class="h-3 sm:h-5" />
          <img :src="o2" class="h-3 sm:h-5" />
          <img :src="o3" class="h-3 sm:h-5" />
          <img :src="o4" class="h-3 sm:h-5" />
        </div>
      </nav>
    </header>

    <div class="flex flex-row items-center justify-between py-3 px-4 sm:px-10">
      <!-- Logo Section -->
      <div class="w-8/12 sm:w-3/12 mb-2 sm:mb-0">
        <img :src="logo" class="lg:w-60 w-56" />
      </div>
      <!-- Navigation Menu -->
      <li class="  w-1/12 flex items-center justify-end xl:hidden "><img :src="shop" class="w-6 sm:w-8" /></li>

      <div class="drawer lg:hidden w-2/12">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label htmlFor="my-drawer" class="btn bg-white border-none">
            <img :src="menu" class="w-8" alt="" srcset="" />
          </label>
        </div>
        <div class="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul
            class="menu flex-col items-center  bg-red-500 pt-10 z-[9999999999] min-h-full w-80 p-4"
          >
            <img :src="logo" class="lg:w-24 w-56 mb-20" />

            <li class="">
              <router-link
                to="/"
                class="hover:text-black transition-colors duration-300 text-lg bg-white w-full px-20 mb-2 hover:bg-yellow-400 "
                >الرئيسية</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="hover:text-black transition-colors duration-300"
                >من نحن</router-link
              >
            </li>
            <li>
              <router-link
                to="/menu"
                class="hover:text-black transition-colors duration-300"
                >القائمة</router-link
              >
            </li>
            <li>
              <router-link
                to="/pages"
                class="hover:text-black transition-colors duration-300"
                >الصفحات</router-link
              >
            </li>
            <li>
              <router-link
                to="/contact"
                class="hover:text-black transition-colors duration-300"
                >اتصل بنا</router-link
              >
            </li>
            <button
          class="bg-[#ffbc11] px-6 sm:px-10 py-3 sm:py-4 font-semibold hover:text-white transition-colors duration-300 w-full"
        >
          اطلب عبر الإنترنت
        </button>
          </ul>
        </div>
      </div>
      <div class="w-full sm:w-6/12 mb-2 sm:mb-0 hidden lg:flex">
        <ul
          class="flex flex-row items-center justify-end gap-4 sm:gap-8 uppercase text-white text-sm sm:text-lg font-semibold"
        >
          <!-- Vue Router links for navigation -->
          <li>
            <router-link
              to="/"
              class="hover:text-black transition-colors duration-300"
              >الرئيسية</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              class="hover:text-black transition-colors duration-300"
              >من نحن</router-link
            >
          </li>
          <li>
            <router-link
              to="/menu"
              class="hover:text-black transition-colors duration-300"
              >القائمة</router-link
            >
          </li>
          <li>
            <router-link
              to="/pages"
              class="hover:text-black transition-colors duration-300"
              >الصفحات</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact"
              class="hover:text-black transition-colors duration-300"
              >اتصل بنا</router-link
            >
          </li>
          <li class=""><img :src="shop" class="w-6 sm:w-8 " /></li>
        </ul>
      </div>
      <!-- Button -->
      <div class="w-full sm:w-2/12 mb-2 sm:mb-0 hidden lg:flex">
        <button
          class="bg-[#ffbc11] px-6 sm:px-10 py-3 sm:py-4 font-semibold hover:text-white transition-colors duration-300 w-full"
        >
          اطلب عبر الإنترنت
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import o1 from "../assets/o1.svg";
import o2 from "../assets/o2.svg";
import o3 from "../assets/o3.svg";
import o4 from "../assets/o4.svg";
import menu from "../assets/menu.svg";
import logo from "../assets/logo.svg";
import shop from "../assets/shop.svg";

export default {
  name: "TopHeader",
  data() {
    return {
      o1,
      o2,
      o3,
      o4,
      logo,
      shop,
      menu,
    };
  },
};
</script>
