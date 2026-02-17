<template>
    <div class="flex justify-evenly  items-center *:rounded-[5px] w-full">
        <div class="w-50 h-20 bg-blue-100">
                <h1 class="text-center font-sans text-bue-900 p-2 uppercase">USERs </h1>
                <div class="text-center text-blue-900 font-bold text-3xl">{{ userhave }}</div>
        </div>
        <div class="w-50 h-20 bg-blue-200">
                 <h1 class="text-center font-sans text-bue-900 p-2">PRODUCTS</h1>
                <div class="text-center text-blue-900 font-bold text-3xl">{{ producthave }}</div>
        </div>
        <div class="w-50 h-20 bg-blue-200">
                <h1 class="text-center font-sans text-bue-900 p-2 uppercase">a FEW of stock</h1>
                <div class="text-center text-blue-900 font-bold text-3xl">{{ fewproducthave }}</div>
        </div>
        <div class="w-50 h-20 bg-blue-200">
                <h1 class="text-center font-sans text-bue-900 p-2 uppercase">out of stock</h1>
                <div class="text-center text-blue-900 font-bold text-3xl">{{ outofstockhave }}</div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                userhave:10000,
                producthave:9870,
                fewproducthave:0,
                outofstockhave:0
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>