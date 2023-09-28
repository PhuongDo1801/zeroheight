<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <br>
    <button @click="showPost">Show post</button>
    <div v-if="posts.length">
      <PostList :posts = "posts" v-if="isShowPost">
      </PostList>
    </div>
    <div v-else>Loading ...</div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import { ref } from 'vue'
import getListPost from '@/composables/getListPost'
export default {
  name: "Home",
  components: {PostList},
  setup(){
    const isShowPost = ref(true);
    const { posts, error, loaddata } = getListPost();
    const showPost = function(){
      this.isShowPost = !this.isShowPost;
    }
    loaddata();
    return { posts, isShowPost, showPost, error }
  }
  
}
</script>
