<script setup>
// TODO: TDD Exercise: complete the implementation of this component
// to pass all the tests defined in its companion .test.js file

import { ref, onMounted } from 'vue';
const response = ref({});

onMounted(async () => {
  try {
    response.value = await (await fetch('https://yesno.wtf/api')).json();
  } catch (e) {}
});

console.log(response.value);
</script>

<template>
  <img :src="response.image" />
  <div v-if="!response.image">loading</div>
  <div v-if="!response.ok">error</div>
</template>
