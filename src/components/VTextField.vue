<template>
  <div class="v-text-field" :class="{ empty: !value }">
    <div class="v-text-field__label">{{ label }}</div>
    <input
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: [Number, String],
    label: String,
  },
};
</script>

<style lang="scss" scoped>
.v-text-field {
  width: 180px;
  height: 32px;
  border: 1px black solid;
  border-radius: 12px;
  position: relative;

  &__label {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: black;
    z-index: 1;
    font-size: 12px;
    transition: all 150ms ease;
    pointer-events: none;
    opacity: 0.5;
  }

  &:not(.empty) &__label {
    top: 0;
    font-size: 10px;
    background: white;
    opacity: 1;
  }

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    text-indent: 12px;
    font-size: 12px;
    background: none;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>