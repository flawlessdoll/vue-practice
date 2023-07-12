<template>
  <div class="hello-component"></div>
</template>

<script>
export default {
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeDestroy() {
    console.log("before destroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>