<script setup>
import sprite from "../assets/icons/sprite.svg";
// console.log(sprite);

defineProps({
  icon: String,
});
</script>

<template>
  <svg>
    <use :href="`${sprite}#icon-${icon}`"></use>
  </svg>
</template>
