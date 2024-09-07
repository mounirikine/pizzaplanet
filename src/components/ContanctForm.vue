<template>
    <section class="bg-white">
  <img src="https://cdn.prod.website-files.com/63456fcaf05b4668dc4c98d6/63503471ee6d3e34dbf7cf5b_Image%20Decorative%20Top.svg" alt="">
  <section class="bg-white bg-yellow-500:bg-black">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black  :text-white">تواصل معنا</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 bg-yellow-500:text-gray-400 sm:text-xl">
        هل لديك مشكلة تقنية؟ تريد إرسال ملاحظات حول ميزة تجريبية؟ تحتاج إلى تفاصيل حول خطتنا التجارية؟ دعنا نعرف.
      </p>
      <form action="#" class="space-y-8">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-white bg-yellow-500:text-gray-300">بريدك الإلكتروني</label>
          <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-yellow-500:bg-gray-700 bg-yellow-500:border-gray-600 bg-yellow-500:placeholder-gray-400 bg-yellow-500:text-white bg-yellow-500:focus:ring-primary-500 bg-yellow-500:focus:border-primary-500 bg-yellow-500:shadow-sm-light" placeholder="name@gmail.com" required>
        </div>
        <div>
          <label for="subject" class="block mb-2 text-sm font-medium text-white bg-yellow-500:text-gray-300">الموضوع</label>
          <input type="text" id="subject" class="block p-3 w-full text-sm text-white bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-yellow-500:bg-gray-700 bg-yellow-500:border-gray-600 bg-yellow-500:placeholder-gray-400 bg-yellow-500:text-white bg-yellow-500:focus:ring-primary-500 bg-yellow-500:focus:border-primary-500 bg-yellow-500:shadow-sm-light" placeholder="أخبرنا كيف يمكننا مساعدتك" required>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-sm font-medium text-white bg-yellow-500:text-gray-400">رسالتك</label>
          <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-white bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-yellow-500:bg-gray-700 bg-yellow-500:border-gray-600 bg-yellow-500:placeholder-gray-400 bg-yellow-500:text-white bg-yellow-500:focus:ring-primary-500 bg-yellow-500:focus:border-primary-500" placeholder="اترك تعليقًا..."></textarea>
        </div>
        <button type="submit" class="bg-yellow-500 px-16 font-bold py-4">إرسال الرسالة</button>
      </form>
    </div>
    
  </section>
</section>
</template>
<script>

export default {
    name:"contactForm"
}
</script>