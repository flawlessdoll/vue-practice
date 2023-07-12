<template>
  <div class="v-button" @click="$emit('click')">{{ value }}</div>
</template>

<script>
export default {
  props: {
    value: String,
  },
};
</script>

<style lang="scss">
.v-button {
  padding: 8px 18px;
  width: max-content;
  border-radius: 16px;
  background: rgb(0, 0, 0);
  cursor: pointer;
  color: rgb(221, 221, 221);
  font-size: 12px;
  text-transform: uppercase;
}
</style>