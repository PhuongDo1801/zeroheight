<template>
    <div class="single-post">
        <h3>{{  post.title }}</h3>
        {{ post.body }}
    </div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from 'vue';
export default {
    props: ["post"],
    setup(props){
        const snippet = computed(() => {
            return props.post.body.subtring(0, 100);
        })
        // onMounted(() => {
        //    console.log("onMounted"); 
        // })
        // onUnmounted(() => {
        //     console.log("onUnmounted");
        // })
        // onUpdated(() => {
        //     console.log("Updated");
        // })
    return { snippet }
    }
}
</script>
<style></style>