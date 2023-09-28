import {ref} from 'vue';
const getListPost = () => {
  const posts = ref([]);
  const error = ref(null);
  const loaddata = async () => {
    try {
      const data = await fetch('http://localhost:3000/posts');
      console.log(data);
      if (!data.ok) {
        throw Error('No data available!');
      }
      else {
        posts.value = await data.json();
      }
    }
    catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  }
  return {posts, error, loaddata}
}

export default getListPost;
