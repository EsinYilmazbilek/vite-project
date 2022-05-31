<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup>
import './assets/css/tailwind.css'

import {useStore} from '@/store'
const store=useStore();
</script>