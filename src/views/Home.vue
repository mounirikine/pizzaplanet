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
          <p class="text-white">
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
          <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-yellow-500:bg-gray-700 bg-yellow-500:border-gray-600 bg-yellow-500:placeholder-gray-400 bg-yellow-500:text-white bg-yellow-500:focus:ring-primary-500 bg-yellow-500:focus:border-primary-500 bg-yellow-500:shadow-sm-light" placeholder="name@flowbite.com" required>
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



<footer class="w-full text-white font-semibold">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!--Grid-->
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                <img :src="logo" alt="" srcset="">
                
                <p class="py-8 text-sm text-white lg:max-w-xs text-center lg:text-left">موثوق في أكثر من 100 دولة و5 مليون عميل. لديك أي استفسار؟</p>
                <a href="javascript:;" class="py-2.5 px-5 h-9 block w-fit bg-yellow-500 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
                    اتصل بنا
                </a>
            </div>
            <!--End Col-->
            <div class="lg:mx-auto text-left">
                <h4 class="text-lg text-white font-medium mb-7 uppercase">pizzaplanet</h4>
                <ul class="text-sm transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;" class="text-white hover:text-white">الرئيسية</a></li>
                    <li class="mb-6"><a href="javascript:;" class="text-white hover:text-white">من نحن</a></li>
                    <li class="mb-6"><a href="javascript:;" class="text-white hover:text-white">التسعير</a></li>
                    <li><a href="javascript:;" class="text-white hover:text-white">الميزات</a></li>
                </ul>
            </div>
            <!--End Col-->
            <div class="lg:mx-auto text-left">
                <h4 class="text-lg text-white font-medium mb-7">المنتجات</h4>
                <ul class="text-sm transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;" class="text-white hover:text-white">أصول الأيقونات</a></li>
                    <li class="mb-6"><a href="javascript:;" class="text-white hover:text-white">الكتل المتجاوبة</a></li>
                    <li><a href="javascript:;" class="text-white hover:text-white">مكتبة المكونات</a></li>
                </ul>
            </div>
            <!--End Col-->
            <div class="lg:mx-auto text-left">
                <h4 class="text-lg text-white font-medium mb-7">الموارد</h4>
                <ul class="text-sm transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;" class="text-white hover:text-white">الأسئلة الشائعة</a></li>
                    <li class="mb-6"><a href="javascript:;" class="text-white hover:text-white">البداية السريعة</a></li>
                    <li class="mb-6"><a href="javascript:;" class="text-white hover:text-white">الوثائق</a></li>
                    <li><a href="javascript:;" class="text-white hover:text-white">دليل المستخدم</a></li>
                </ul>
            </div>
            <!--End Col-->
            <div class="lg:mx-auto text-left">
                <h4 class="text-lg text-white font-medium mb-7">المدونات</h4>
                <ul class="text-sm transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;" class="text-white hover:text-white">الأخبار</a></li>
                    <li class="mb-6"><a href="javascript:;" class="text-white hover:text-white">نصائح وحيل</a></li>
                    <li class="mb-6"><a href="javascript:;" class="text-white hover:text-white">التحديثات الجديدة</a></li>
                    <li><a href="javascript:;" class="text-white hover:text-white">الفعاليات</a></li>
                </ul>
            </div>
        </div>
        <!--Grid-->
        <div class="py-7 border-t border-gray-200">
                <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span class="text-sm text-white  ">©<a href="https://pagedone.io/">PIZZAPLANET</a> 2024, All rights reserved.</span>
                    <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                        <a href="javascript:;"  class="w-9 h-9 rounded-full bg-yellow-500 flex justify-center items-center hover:bg-yellow-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g id="Social Media">
                            <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white"/>
                            </g>
                          </svg>
                        </a>
                        <a href="javascript:;"  class="w-9 h-9 rounded-full bg-yellow-500 flex justify-center items-center hover:bg-yellow-500">
                            <svg class="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                        <a href="javascript:;"  class="w-9 h-9 rounded-full bg-yellow-500 flex justify-center items-center hover:bg-yellow-500">
                            <svg class="w-[1rem] h-[1rem] text-white" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                        <a href="javascript:;"  class="w-9 h-9 rounded-full bg-yellow-500 flex justify-center items-center hover:bg-yellow-500">
                            <svg class="w-[1.25rem] h-[0.875rem] text-white" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                    </div>
                </div>
            </div>
    </div>
</footer>

                                            
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

export default {
  components: {
    TopHeader,
    FontAwesomeIcon, // Register the FontAwesomeIcon component
    Map
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
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotate-animation {
  animation: spin 100s linear infinite;
}
</style>
