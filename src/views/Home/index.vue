<script lang="jsx">
export default {
  name: 'home-view',
}
</script>

<script setup lang="jsx">
import { ref, toRefs, computed, watch, onMounted } from 'vue'

const props = defineProps([])
const emit = defineEmits([])

const {} = toRefs(props)

onMounted(async () => {})
</script>

<template>
  <div class="home-view wh-full f-c-c">
    <h1 class="">VUE3-JS</h1>
  </div>
</template>

<style scoped lang="less">
.home-view {
}
</style>
