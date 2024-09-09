<template>
<section>
    <TopHeader />
    <section class="min-h-screen bg-white px-4 py-12 md:px-10 md:py-24">
    <div class="flex flex-col md:flex-row items-center">
        <div class="w-full md:w-8/12 mb-8 md:mb-0">
            <ContanctForm />
        </div>
        <div class="w-full md:w-4/12">
            <img :src="tp" alt="Image" srcset="">
        </div>
    </div>
</section>

    <Footer />
</section>
</template>
<script>
import ContanctForm from '../components/ContanctForm.vue';
import Footer from '../components/Footer.vue';
import TopHeader from '../components/TopHeader.vue';
import tp from '../assets/tp.png'

export default{
    name:"contact",
    components:{
        TopHeader,
        Footer,
        ContanctForm
    },
    data(){
        return{
            tp
        }
    }
}
</script>