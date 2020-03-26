<template>
  <div class="hello">
    <p>{{ name }}</p>
    <Carousel />
    <Documentation />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import Documentation from "@/components/Documentation";

export default {
  name: 'HomeComponent',
  components: {
    Carousel,
    Documentation,
  },
  data () {
    return {
      name: 'Cook&Connect'
    }
  }
}
</script>

<style scoped lang="less">  
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
