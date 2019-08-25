<template>

    <div class="owk-message" v-if="isShow" :class="{'info':type ==='info','success':type ==='success','warning':type === 'warning', 'wrong':type === 'wrong'}">
        <i :class="{'owk owk-icon-information': type==='info',
                'owk owk-icon-success': type==='success',
                'owk owk-icon-warning1': type==='warning',
                'owk owk-icon-wrong': type ==='wrong'}"/>
        {{text}}
    </div>

</template>

<script>
    export default {
        name: "Message",
        type:'info'
    }
</script>

<style scoped>
    @import "./iconFont/iconfont.css";
    .owk-message {
        position: fixed;
        width: 500px;
        left: 40%;
        top: 5%;
        padding:10px;
        background: #ceced6;
        color: #3c3c3c;
        border: 1px solid #ceced6;
        border-radius: 5px;
        font-size: 14px;
    }
    .info {
        border-color: #ebebeb;
        color: #7b7d81;
        background: #f4f6fa;
    }
    .success {
        border-color: #d0ffb4;
        color: #11ff67;
        background: #ddffb9;
    }
    .warning {
        border-color: #fff1a6;
        color: #ffbf10;
        background: #fff5c3;
    }
    .wrong {
        border-color: #ffcdd7;
        color: #ff96af;
        background: #ffe6e1;
    }
</style>