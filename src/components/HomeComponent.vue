<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <Carousel />
    <Documentation />
    <Modal />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import Documentation from "@/components/Documentation";
import Modal from "@/components/Modal";

export default {
  name: 'HomeComponent',
  components: {
    Carousel,
    Documentation,
    Modal,
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
	text-align: center;
	font-size: 1.125rem;
	line-height: 1.5;
  transition: all 725ms ease-in-out;
  margin: auto;
  background-color: #FFFEFD;
  font-family: 'roboto', 'sans-serif';
}
h1 {
	font-size: 64px;
  font-weight: normal;
  padding: 1rem 0rem;
  background-color: #c4ad99;
  color: #ecedf1;
}
</style>
