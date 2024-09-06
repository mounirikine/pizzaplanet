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
</section>




       
    </section>
</template>
<script>
import TopHeader from '../components/TopHeader.vue';
import a1 from '../assets/a1.svg'
import a2 from '../assets/a2.svg'
import a3 from '../assets/a3.svg'
import a4 from '../assets/a4.svg'
export default{
    name  : "about",

    components:{
        TopHeader,
        
    },
    data(){
        return{
            a1,a2,a3,a4
        }
    }
}

</script>