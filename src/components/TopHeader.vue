<template>
  <section>
    <!-- Header Section -->
    <header class="bg-[#ffbc11] font-semibold py-3 w-full">
      <nav class="flex items-center justify-between px-4 sm:px-10">
        <!-- Contact Information -->
        <div class="flex lg:w-4/12">
          <h1>اتصل بنا: (413) 345 - 9821</h1>
        </div>
        <!-- Icons Section (hidden on small screens) -->
        <div class="lg:flex items-center justify-end hidden w-5/12 gap-5">
          <h1 class="text-sm sm:text-xl">اطلب الآن:</h1>
          <img :src="o1" alt="شعار" class="h-3 sm:h-5" />
          <img :src="o2" alt="Icon 2" class="h-3 sm:h-5" />
          <img :src="o3" alt="Icon 3" class="h-3 sm:h-5" />
          <img :src="o4" alt="Icon 4" class="h-3 sm:h-5" />
        </div>
      </nav>
    </header>

    <div class="flex flex-row items-center justify-between py-3 px-4 sm:px-10">
      <!-- Logo Section -->
      <div class="w-8/12 sm:w-3/12 mb-2 sm:mb-0">
        <img :src="logo" alt="Logo" class="lg:w-60 w-56" />
      </div>

  

      <!-- Drawer Menu for Mobile -->
    

      <!-- Desktop Menu -->
      <div class="w-full sm:w-6/12 mb-2 sm:mb-0 hidden lg:flex">
        <ul
          class="flex flex-row items-center justify-end gap-4 sm:gap-8 uppercase text-white text-sm sm:text-lg font-semibold"
        >
          <li>
            <router-link
              to="/"
              :class="{ 'text-black': $route.path === '/' }"
              class="hover:text-black transition-colors duration-300"
              active-class="text-black"
            >
              الرئيسية
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              :class="{ 'text-black': $route.path === '/about' }"
              class="hover:text-black transition-colors duration-300"
              active-class="text-black"
            >
              من نحن
            </router-link>
          </li>
          <li>
            <router-link
              to="/menu"
              :class="{ 'text-black': $route.path === '/menu' }"
              class="hover:text-black transition-colors duration-300"
              active-class="text-black"
            >
              القائمة
            </router-link>
          </li>
          <li>
            <router-link
              to="/pages"
              :class="{ 'text-black': $route.path === '/pages' }"
              class="hover:text-black transition-colors duration-300"
              active-class="text-black"
            >
              الصفحات
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              :class="{ 'text-black': $route.path === '/contact' }"
              class="hover:text-black transition-colors duration-300"
              active-class="text-black"
            >
              اتصل بنا
            </router-link>
          </li>
          
        </ul>
      </div>
        <span>
            <button class="" @click="showModal">
              <img :src="shop" alt="Shop Icon" class="w-6 sm:w-8" />
            </button>
            <dialog id="my_modal_4" class="modal ">
              <div class="modal-box w-11/12 max-w-5xl bg-white rounded-none text-black">
  <h3 class="font-bold text-lg text-right ">سلة المشتريات</h3>
  <hr class="border border-red-500">
  <p class="py-4 text-right">لا توجد منتجات.</p>
  <div class="modal-action">
    <button class="btn bg-yellow-400" @click="closeModal">إغلاق</button>
  </div>
</div>

            </dialog>
          </span>

          <div class="drawer lg:hidden w-2/12">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="my-drawer" class="btn bg-white border-none">
            <img :src="menu" alt="Menu Icon" class="w-8" />
          </label>
        </div>

        <!-- Sidebar Drawer -->
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu flex-col items-center bg-red-500 pt-10 z-[9999999999] min-h-full w-80 p-4">
            <img :src="logo" alt="Logo" class="lg:w-24 w-56 mb-20" />
            <li>
              <router-link
                to="/"
                :class="{
                  'hover:text-black transition-colors duration-300 text-lg bg-white w-full px-20 mb-2 hover:bg-yellow-400': $route.path === '/'
                }"
                active-class="text-black"
              >
                الرئيسية
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                :class="{
                  'hover:text-black transition-colors duration-300 text-lg bg-white w-full px-20 mb-2 hover:bg-yellow-400': $route.path === '/about'
                }"
                active-class="text-black"
              >
                من نحن
              </router-link>
            </li>
            <li>
              <router-link
                to="/menu"
                :class="{
                  'hover:text-black transition-colors duration-300 text-lg bg-white w-full px-20 mb-2 hover:bg-yellow-400': $route.path === '/menu'
                }"
                active-class="text-black"
              >
                القائمة
              </router-link>
            </li>
            <li>
              <router-link
                to="/pages"
                :class="{
                  'hover:text-black transition-colors duration-300 text-lg bg-white w-full px-20 mb-2 hover:bg-yellow-400': $route.path === '/pages'
                }"
                active-class="text-black"
              >
                الصفحات
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                :class="{
                  'hover:text-black transition-colors duration-300 text-lg bg-white w-full px-20 mb-2 hover:bg-yellow-400': $route.path === '/contact'
                }"
                active-class="text-black"
              >
                اتصل بنا
              </router-link>
            </li>
            <button
              class="bg-[#ffbc11] px-6 sm:px-10 py-3 sm:py-4 font-semibold hover:text-white transition-colors duration-300 w-full"
            >
              اطلب عبر الإنترنت
            </button>
          </ul>
        </div>
      </div>
      <!-- Order Button for Desktop -->
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
  methods: {
    showModal() {
      document.getElementById('my_modal_4').showModal();
    },
    closeModal() {
      document.getElementById('my_modal_4').close();
    },
  },
};
</script>
