<template>
    <div class="result">
        <p >Reaction time: {{ score }} ms</p>
    </div>
</template>

<script>
    export default {
        props: ['score'],
    }
</script>

<style>
.result {
    margin-top: 10px;
}
</style>