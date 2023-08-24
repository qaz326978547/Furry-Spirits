
<template>
  <div class="container ">
    <div class="row justify-content-center">
      <h1>{{ count }}</h1>
      <div>
        <button class="btn btn-primary" @click="increment">
          +
        </button>
        <button class="btn btn-danger" @click="decrement">
          -
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
import { useCount } from '../composables/useCount.js';
const { count, increment, decrement } = useCount();


</script>
