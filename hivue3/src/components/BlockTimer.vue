<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        <p>Click me</p>
    </div>
</template>

<script>
    export default {
        props: ['delay'],
        data(){
            return {
                showBlock: false,
                timer: null,
                reactionTime: 0,
            }
        },
        mounted(){
            setTimeout(() => {
                this.showBlock = true;
                this.startTimer();
            }, this.delay)
        },
        methods: {
            startTimer(){
                this.timer = setInterval(() => {
                    this.reactionTime += 10;
                }, 10)
            },
            stopTimer(){
                clearInterval(this.timer);
                this.$emit('end', this.reactionTime);
            }
        }
    }    
</script>

<style>
.block{
    background-color: greenyellow;
    width: 200px;
    height: 200px;
    margin-top: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>