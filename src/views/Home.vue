<template>
  <section>
    <TopHeader />

    <section class="text-black body-font ">
  <div class="container mx-auto flex flex-col-reverse md:flex-row gap-4 px-5 py-4 items-center">
    <!-- Left content -->
    <div class="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
      <h1 class="title-font lg:text-6xl font-semibold font-lato text-white sm:text-4xl text-3xl mb-4">
        <img :src="wra" class="w-24 mx-auto md:mx-0" alt="Logo" /> 
        أفضل مكان لتناول البيتزا بسهولة
      </h1>
      <p class="mb-8 leading-relaxed text-gray-200 text-lg">
        نقدم تجربة فريدة لعشاق البيتزا بمكونات طازجة وخيارات متنوعة تناسب جميع الأذواق، في أجواء مريحة وعصرية.
      </p>
      <div class="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-start w-full">
        <button class="bg-black px-6 py-4 font-semibold text-white transition-colors duration-300">
          احجز طاولة
        </button>
        <button class="bg-[#ffbc11] px-6 py-4 font-semibold hover:text-white transition-colors duration-300">
          اطلب عبر الإنترنت
        </button>
      </div>
    </div>
    <!-- Right content (Pizza image) -->
    <div class="md:w-1/2 w-full flex justify-center">
      <img class="object-cover object-center rounded rotate-animation max-w-full h-auto" alt="Pizza" :src="pizza" />
    </div>
  </div>
</section>


    <section class="bg-white px-4 sm:px-10 py-12 sm:py-24">
      <main>
        <!-- Title -->
        <h1 class="text-center text-4xl sm:text-5xl mb-6 sm:mb-8 font-semibold">
          قائمة بيتزا بلانيت
        </h1>

        <!-- Description -->
        <p class="text-center w-full sm:w-10/12 mx-auto text-lg sm:text-xl">
          متطلبات تتعلق بالأطعمة مع التركيز على تحضير كل نوع من الأنواع بحب
          وعناية. كل طبق من أطباقنا يتم تحضيره بأجود المكونات الطازجة لتلبية
          جميع الأذواق وتقديم تجربة مميزة. تعال واستمتع بجو مريح وأطعمة لذيذة.
        </p>

        <!-- Menu Categories -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 px-4 sm:px-10 mt-12">
          <div class="p-8 flex items-center justify-center flex-col gap-4">
            <img :src="p1" alt="Pizzas" class="w-54 sm:w-72" />
            <h2 class="text-3xl sm:text-4xl font-semibold">البيتزا</h2>
          </div>
          <div class="p-8 flex items-center justify-center flex-col gap-4">
            <img :src="p2" alt="Drinks" class="w-54 sm:w-72" />
            <h2 class="text-3xl sm:text-4xl font-semibold">المشروبات</h2>
          </div>
          <div class="p-8 flex items-center justify-center flex-col gap-4">
            <img :src="p3" alt="Desserts" class="w-54 sm:w-72" />
            <h2 class="text-3xl sm:text-4xl font-semibold">الحلويات</h2>
          </div>
        </div>

        <!-- Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10"
        >
          <button
            class="bg-black px-6 py-3 sm:px-16 sm:py-6 font-semibold text-white transition-colors duration-300"
          >
            احجز طاولة
          </button>
          <button
            class="bg-[#ffbc11] px-6 py-3 sm:px-16 sm:py-6 font-semibold hover:text-white transition-colors duration-300"
          >
            اطلب عبر الإنترنت
          </button>
        </div>
      </main>
    </section>

    <main class="min-h-screen bg-black overflow-hidden">
      <img
        src="https://cdn.prod.website-files.com/63456fcaf05b4668dc4c98d6/63503471ee6d3e34dbf7cf5b_Image%20Decorative%20Top.svg"
        alt=""
        class="w-full"
      />

      <div
        class="flex flex-col md:flex-row justify-between items-center overflow-hidden"
      >
        <div class="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src="https://assets-global.website-files.com/63456fcaf05b4668dc4c98d6/6345a9fa979d5e131dc96ce8_Photo.jpg"
            class="object-cover w-full h-auto"
            alt="Pizza"
          />
        </div>
        <div class="w-full md:w-1/2 text-white px-1 lg:px-32">
          <h1 class="text-5xl text-right font-semibold mb-4">
            عن بيتزا بلانيت
          </h1>
          <p class="leading-relaxed text-right">
            بيتزا بلانيت هي وجهتك المثالية لعشاق البيتزا، حيث نقدم لك تجربة طعام
            استثنائية باستخدام مكونات طازجة ومتنوعة. نحن نعتني بكل تفصيلة، من
            اختيار المكونات إلى طريقة التحضير، لضمان حصولك على أفضل تجربة طعام
            في أجواء مريحة وعصرية. انضم إلينا لتستمتع بأشهى أنواع البيتزا التي
            تُعد بعناية وحب.
          </p>

          <ul class="mt-20">
            <li class="flex items-center gap-1 justify-end text-xl mb-4">
              losangeles@pizzaplanet.com
              <img
                :src="mail"
                class="text-white p-1 bg-yellow-500 w-10"
                alt=""
              />
            </li>
            <li class="flex items-center gap-1 justify-end text-xl mb-4">
              (414) 857 - 0107
              <img
                :src="phone"
                class="text-white p-1 bg-yellow-500 w-10"
                alt=""
              />
            </li>
            <li class="flex items-center gap-1 justify-end text-xl text-right">
              837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
              <img
                :src="map"
                class="text-white p-1 bg-yellow-500 w-10"
                alt=""
              />
            </li>
          </ul>

          <div class="flex flex-col sm:flex-row items-center justify-center mt-8 sm:mt-16 gap-4 sm:gap-5">
  <button
    class="text-black border-2 border-white hover:text-yellow-500 transition-all text-base sm:text-lg font-semibold px-10 sm:px-14 py-4 sm:py-6 bg-white"
  >
    من نحن
  </button>
  <button
    class="text-white hover:text-black text-base sm:text-lg font-semibold px-10 sm:px-14 py-4 sm:py-6 hover:bg-white border-2 border-white hover:border-black transition-all"
  >
    احجز طاولة
  </button>
</div>

        </div>

      </div>
      <img src="https://cdn.prod.website-files.com/63456fcaf05b4668dc4c98d6/6350359f9301717c12627c4e_Image%20Decorative%20Bottom.svg" class="w-full" alt="">

    </main>

    <main class="bg-white px-6 md:px-10 py-10 md:py-20">
  <h1 class="text-center text-3xl md:text-5xl font-semibold">
    تصفح قائمتنا
  </h1>
  <p class="text-center text-lg w-11/12 md:w-8/12 mx-auto pt-6 md:pt-10">
    نقدم مجموعة متنوعة من الأطباق الشهية التي تجمع بين المكونات الطازجة
    والنكهات المحلية. استمتع بتجربة طعام فريدة من نوعها مستوحاة من
    التقاليد، مصممة لتناسب جميع الأذواق.
  </p>

  <Map />
</main>

<section>
  <main class="flex flex-col md:flex-row overflow-hidden h-auto md:h-screen">
    <div class="w-full md:w-6/12 p-6 md:p-10 flex flex-col justify-center">
      <img :src="wra" class="w-24 float-left" alt="" />
      <h1 class="text-2xl md:text-7xl text-right mb-8 font-bold text-white ">
        تذوق أشهى بيتزا في المغرب
      </h1>
      <p class="mt-4 text-lg md:text-xl text-right text-white">
        استمتع بتجربة طعام لا تُنسى، مع مكونات طازجة ونكهات لذيذة، مصممة لتلبي
        جميع الأذواق.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center mt-8 sm:mt-16 gap-4 sm:gap-5">
  <button
    class="text-black border-2 border-white hover:text-yellow-500 transition-all text-base sm:text-lg font-semibold px-10 sm:px-14 py-4 sm:py-6 bg-white"
  >
    من نحن
  </button>
  <button
    class="text-white hover:text-black text-base sm:text-lg font-semibold px-10 sm:px-14 py-4 sm:py-6 bg-yellow-500 border-2 border-yellow-500 transition-all"
  >
    احجز طاولة
  </button>
</div>
    </div>
    <div class="w-full md:w-6/12">
      <img
        class="h-64 md:h-screen w-full object-cover"
        src="https://assets-global.website-files.com/63456fcaf05b4668dc4c98d6/63503c5847883d4c2032fbf5_Home-pizzalplanet-image.jpg"
        alt="Delicious Pizza in Morocco"
      />
    </div>
  </main>
</section>
<section class="bg-white">
  <main class="px-6 py-16 sm:px-10 sm:py-20">
    <div class="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-8 sm:py-6">
      <button class="mt-4 sm:mt-0 text-base sm:text-lg font-semibold bg-black text-white py-4 px-12 sm:py-5 sm:px-16 hover:bg-yellow-500 transition-all">
        تصفح جميع المقالات
      </button>
      <h1 class="text-2xl sm:text-4xl md:text-5xl font-bold">
        مقالاتنا
      </h1>
    </div>

    <main class="px-6 py-10 transition-all cursor-pointer">
      <div class="flex flex-col md:flex-row items-center shadow-lg">
        <div class="w-full md:w-5/12 overflow-hidden h-full relative">
          <img class="hover:scale-105 h-64 md:h-full w-full object-cover transition-all" src="https://cdn.prod.website-files.com/63456fcaf05b46ced94c98d7/6345f107ef0aab81bf9d2b1e_Authentic%20italian%20Pizza-p-800.jpg" alt="بيتزا إيطالية" />
          <button class="absolute top-2 right-4 bg-white text-red-600 px-10 py-3 font-bold">
            المقالات
          </button>
        </div>
        <div class="w-full md:w-7/12 p-6">
          <h1 class="text-lg text-gray-500 mb-4">28 نوفمبر 2022</h1>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 hover:text-red-600">
            5 أماكن رائعة لتناول البيتزا الإيطالية الأصلية في لوس أنجلوس
          </h1>
          <p class="text-black">
            تجربة بيتزا مميزة مع مكونات طازجة ونكهات فريدة تجمع بين الأصالة
            والإبداع. تذوقها الآن!
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 pt-7 transition-all">
        <div class="shadow-lg cursor-pointer">
          <img class="h-64 w-full object-cover" src="https://cdn.prod.website-files.com/63456fcaf05b46ced94c98d7/6345f0f323351859a2cc4a17_Pizza%20delivery%20via%20our%20app-p-500.jpg" alt="توصيل البيتزا عبر التطبيق" />
          <h1 class="pt-6 px-6 text-gray-500">28 نوفمبر 2022</h1>
          <h1 class="mt-2 text-lg sm:text-xl font-semibold px-6 mb-5 hover:text-red-600">
            نقدم الآن خدمة توصيل البيتزا عبر تطبيقنا
          </h1>
          <p class="px-6 mb-6 text-base sm:text-lg">
            استمتع بالبيتزا الإيطالية أينما كنت، فقط بضغطة زر!
          </p>
        </div>

        <div class="shadow-lg cursor-pointer">
          <img class="h-64 w-full object-cover" src="https://cdn.prod.website-files.com/63456fcaf05b46ced94c98d7/6345f0de6cdf0e818bd18e0b_Iconic%20Pizzas-p-500.jpg" alt="بيتزا كلاسيكية" />
          <h1 class="pt-6 px-6 text-gray-500">28 نوفمبر 2022</h1>
          <h1 class="mt-2 text-lg sm:text-xl font-semibold px-6 mb-5 hover:text-red-600">
            دليل تحضير أفضل خمس أنواع بيتزا كلاسيكية
          </h1>
          <p class="px-6 mb-6 text-base sm:text-lg">
            تعلم كيفية إعداد البيتزا الكلاسيكية المفضلة بأسهل الطرق.
          </p>
        </div>

        <div class="shadow-lg cursor-pointer">
          <img class="h-64 w-full object-cover" src="https://cdn.prod.website-files.com/63456fcaf05b46ced94c98d7/6345f0ca6cdf0e9aadd18dc1_First%20Pizza-p-500.jpg" alt="من اخترع البيتزا" />
          <h1 class="pt-6 px-6 text-gray-500">28 نوفمبر 2022</h1>
          <h1 class="mt-2 text-lg sm:text-xl font-semibold px-6 mb-5 hover:text-red-600">
            من اخترع البيتزا؟ القصة الحقيقية وراءها
          </h1>
          <p class="px-6 mb-6 text-base sm:text-lg">
            اكتشف القصة المثيرة وراء ابتكار هذا الطبق الشهير.
          </p>
        </div>
      </div>
    </main>
  </main>
</section>

<ContanctForm />

<Footer />


                                            
  </section>

</template>

<script>
import TopHeader from "../components/TopHeader.vue";
import pizza from "../assets/pizza.png";
import wra from "../assets/wra.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import logo from '../assets/logo.svg';
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import insta from "../assets/insta.svg";
import map from "../assets/map.svg";
import Map from '../components/Map.vue'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Footer from "../components/Footer.vue";
import ContanctForm from "../components/ContanctForm.vue";

export default {
  components: {
    TopHeader,
    FontAwesomeIcon, // Register the FontAwesomeIcon component
    Map,
    Footer,
    ContanctForm
  },
  data() {
    return {
      pizza,
      wra,
      p1,
      p2,
      p3,
      insta,
      map,
      mail,
      phone,
      logo
    };
  },
};
</script>

<style scoped>



</style>
