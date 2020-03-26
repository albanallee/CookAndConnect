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

<style lang="less">
body {
	font-family: sans-serif;
	text-align: center;
	padding: 3rem;
	font-size: 1.125rem;
	line-height: 1.5;
  transition: all 725ms ease-in-out;
  margin: auto;
  background-color: #FFFEFD;
}
h1 {
	font-size: 2rem;
	font-weight: bolder;
	margin-bottom: 1rem;
}
p {
	margin-bottom: 1rem;
	color: tomato;
}
</style>
