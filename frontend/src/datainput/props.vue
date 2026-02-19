<template>
    <div class="border border-blue-500 flex flex-col justify-center items-center">
        <div class="flex  ">
            <div>{{ name }}</div>
            <div>
                <img src="../../public/vite.svg" alt="" v-show="checkimg" class="w-[100px]">
            </div>
        </div>
        <div>
            {{ desc }}
        </div>
        <div>
            <button @click="toggle">show and hide</button>
        </div>

    </div>
</template>
<script>
export default{
    props:{
        name:String,
        desc:String,
        check:Boolean
    },
    data(){
        return {
            checkimg : this.check,
        }
    },methods:{
        toggle(){
            this.checkimg = !this.checkimg;
        }
    }
}
</script>