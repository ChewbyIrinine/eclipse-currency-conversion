<template>
  <span :style="{ color: getTextColor }">{{ value.toFixed(4) }} ({{ getDifference }})</span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    default: 0,
    required: true,
  },
  previous: {
    type: Number,
    default: 0,
    required: true,
  },
});

const getTextColor = computed(() => (props.value >= props.previous ? 'green' : 'red'));

const getDifference = computed(() => (props.value - props.previous).toFixed(1));
</script>
