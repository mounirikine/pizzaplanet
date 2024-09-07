<template>
    <section>
        <TopHeader />
        <section class="h-[70vh] flex items-center justify-center flex-col">
  <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white w-10/12 md:w-8/12 text-center">
    بدأت قصتنا في عام 1984
  </h1>
  <p class="text-white mx-auto text-center w-11/12 md:w-9/12 leading-relaxed">
    لقد بدأنا رحلتنا منذ أكثر من ثلاثة عقود، مستوحين شغفنا لتقديم أفضل تجارب الطعام لعملائنا. نسعى دائمًا إلى تحسين وتطوير خدماتنا لتلبية توقعات كل من يزورنا.
  </p>
</section>
<section class="bg-white py-10 lg:px-16">
  <div class="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
    <!-- Images section -->
    <div class="w-full md:w-9/12 flex flex-wrap items-center justify-center gap-4 md:gap-8">
      <img :src="a1" alt="Logo 1" class="" />
      <img :src="a2" alt="Logo 2" class="" />
      <img :src="a3" alt="Logo 3" class="" />
      <img :src="a4" alt="Logo 4" class="" />
    </div>

    <!-- Text section -->
    <div class="w-full md:w-3/12 text-center md:text-right">
      <h1 class="text-xl font-bold text-gray-700"> : كما شوهد في</h1>
    </div>
  </div>
</section>
<section class="bg-black text-white py-10 px-14">
  <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
    <!-- Image section -->
    <div class="w-full md:w-6/12">
      <img src="https://assets-global.website-files.com/63456fcaf05b4668dc4c98d6/63472c3e5cce9286c2494fda_Image%20Left-p-800.jpg" alt="Founders Image" class="w-full h-auto" />
    </div>
    
    <!-- Text section -->
    <div class="w-full md:w-6/12 text-center md:text-right">
      <h1 class="text-3xl lg:text-5xl  font-bold mb-12">كيف التقى مؤسسونا</h1>
      <p class="leading-relaxed">
        بدأت قصة مؤسسينا بلقاء غير متوقع قاد إلى تأسيس شركتنا. كان لديهم رؤية مشتركة وشغف لتقديم تجربة فريدة في مجال المطاعم.<br><br>
        لقد ألهمهم حب الطعام والرغبة في تقديم الأفضل إلى الشروع في هذا المشروع الذي حقق نجاحاً باهراً على مر السنين.
      </p>
    </div>
  </div>
</section>
<section class="bg-black text-white py-10 px-6 md:px-14">
  <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
    <!-- Text section -->
    <div class="w-full md:w-6/12 text-center md:text-right">
      <h1 class="text-3xl lg:text-5xl font-bold mb-12">قصة أول مطعم لنا</h1>
      <p class="leading-relaxed">
        بدأت رحلتنا في عالم المطاعم منذ افتتاح أول مطعم لنا. كنا نسعى لتقديم تجربة فريدة من نوعها من خلال توفير أجواء رائعة وأطباق مميزة، مما جعل مطعمنا وجهة محبوبة لعشاق الطعام من كل مكان.
      </p>
    </div>
    
    <!-- Image section -->
    <div class="w-full md:w-6/12">
      <img src="https://assets-global.website-files.com/63456fcaf05b4668dc4c98d6/63472e3bdee4345244b4c7bf_Image%20Right-p-800.jpg" alt="Restaurant Image" class="w-full h-auto" />
    </div>
  </div>
</section>
<section class="bg-white py-16 px-6 md:px-14 text-center md:text-right">
  <h1 class="text-3xl lg:text-5xl font-bold mb-4 text-center">تعرف على فريقنا</h1>
  <p class="text-lg leading-relaxed text-center">
    نقدم لكم فريقنا المتفاني الذي يعمل بجد لضمان تقديم أفضل تجربة لعملائنا. يتمتع أعضاء فريقنا بخبرة كبيرة وشغف حقيقي بما يفعلونه.
  </p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center mt-20 px-6 md:px-0">
  <!-- Team Member 1 -->
  <div class="flex flex-col items-center justify-center shadow-lg py-16 px-10 transform transition-transform duration-300 hover:scale-105">
    <div class="bg-red-500 rounded-full overflow-hidden w-64">
      <img :src="t1" alt="Team Member 1" />
    </div>

    <h1 class="mt-10 text-2xl font-bold text-center transition-colors duration-300 hover:text-red-500">جون كارتر</h1>
    <h2 class="text-3xl mt-3 font-bold text-red-500 text-center">الشريك المؤسس والمدير</h2>

    <p class="text-lg mt-7 text-center leading-relaxed">
      جون كارتر هو أحد المؤسسين الرئيسيين للشركة، وقادها إلى النجاح من خلال رؤيته وخبرته في إدارة الأعمال.
    </p>
  </div>

  <!-- Team Member 2 -->
  <div class="flex flex-col items-center justify-center shadow-lg py-16 px-10 transform transition-transform duration-300 hover:scale-105">
    <div class="bg-red-500 rounded-full overflow-hidden w-64">
      <img :src="t2" alt="Team Member 2" />
    </div>

    <h1 class="mt-10 text-2xl font-bold text-center transition-colors duration-300 hover:text-red-500">أندي سميث</h1>
    <h2 class="text-3xl mt-3 font-bold text-red-500 text-center">الشريك المؤسس ورئيس الطهاة</h2>

    <p class="text-lg mt-7 text-center leading-relaxed">
      أندي سميث هو القوة الدافعة وراء كل طبق يُقدّم في مطعمنا، حيث يجمع بين الشغف والخبرة في الطهي.
    </p>
  </div>

  <!-- Team Member 3 -->
  <div class="flex flex-col items-center justify-center shadow-lg py-16 px-10 transform transition-transform duration-300 hover:scale-105">
    <div class="bg-red-500 rounded-full overflow-hidden w-64">
      <img :src="t3" alt="Team Member 3" />
    </div>

    <h1 class="mt-10 text-2xl font-bold text-center transition-colors duration-300 hover:text-red-500">صوفي مور</h1>
    <h2 class="text-3xl mt-3 font-bold text-red-500 text-center">رئيسة الموظفين</h2>

    <p class="text-lg mt-7 text-center leading-relaxed">
      صوفي مور تدير فريق الموظفين بكفاءة عالية، وتضمن تقديم أفضل خدمة لعملائنا في كل زيارة.
    </p>
  </div>
</div>
<hr class="w-10/12 mx-auto bg-white border-red-500  mt-14">
</section>


<section class="bg-white min-h-screen pt-10">
  <main class="px-6 md:px-10">
    <!-- Main heading -->
    <h1 class="text-center text-3xl md:text-5xl font-bold mb-8">
      القيم التي توجه كل ما نقوم به
    </h1>

    <!-- Values Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center w-full pt-10 lg:px-10">
      <div v-for="value in values" :key="value.id" class="flex items-center justify-center flex-col px-4 py-6 ">
        <img :src="value.img" alt="Value Image" class="mb-5">
        <h2 class="text-center text-xl md:text-2xl font-bold mb-3">{{ value.title }}</h2>
        <p class="text-center text-base md:text-lg leading-relaxed">
          {{ value.desc }}
        </p>
      </div>
    </div>
  </main>
</section>
<ContanctForm />

<Footer />
       
    </section>
</template>
<script>
import TopHeader from '../components/TopHeader.vue';
import a1 from '../assets/a1.svg';
import a2 from '../assets/a2.svg';
import a3 from '../assets/a3.svg';
import a4 from '../assets/a4.svg';

import v1 from '../assets/v1.svg';
import v2 from '../assets/v2.svg';
import v3 from '../assets/v3.svg';
import v4 from '../assets/v4.svg';
import v5 from '../assets/v5.svg';
import v6 from '../assets/v6.svg';

import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';
import Footer from '../components/Footer.vue';
import ContanctForm from '../components/ContanctForm.vue';

export default {
  name: "about",

  components: {
    TopHeader,
    Footer,
    ContanctForm
  },

  data() {
    return {
      a1,
      a2,
      a3,
      a4,
      t1,
      t2,
      t3,
      v1,
      v2,
      v3,
      v4,
      v5,
      v6,

      values: [
        {
          id: 1,
          img: v1,
          title: "الحب والشغف",
          desc: "نضع كل الحب والشغف في كل ما نقدمه لضمان تجربة لا تُنسى لعملائنا.",
        },
        {
          id: 2,
          img: v2,
          title: "النكهة",
          desc: "نستخدم أفضل المكونات لضمان تميز كل طبق بنكهة غنية ومذاق لذيذ.",
        },
        {
          id: 3,
          img: v3,
          title: "الاهتمام والحرفية",
          desc: "نهتم بكل التفاصيل، من اختيار المكونات إلى تقديم الأطباق بأعلى مستوى من الحرفية.",
        },
        {
          id: 4,
          img: v4,
          title: "العملاء أولاً",
          desc: "عملاؤنا هم محور اهتمامنا، ونسعى دائماً لتقديم الأفضل لضمان رضاهم.",
        },
        {
          id: 5,
          img: v5,
          title: "العمل الجماعي",
          desc: "نؤمن بأن النجاح يعتمد على التعاون والعمل الجماعي بين جميع أفراد الفريق.",
        },
        {
          id: 6,
          img: v6,
          title: "الجودة",
          desc: "الجودة هي أساس كل ما نقدمه، حيث نحرص على تقديم الأفضل في كل وجبة.",
        },
      ],
    };
  },
};
</script>
