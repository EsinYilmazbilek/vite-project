<script>
export default {
  props: ['title'],
  emits: ['enlarge-text']
}
</script>

<template>
  <ul>
    <li @click.once="$emit('enlarge-text')">{{ title }}</li>
    </ul>
</template>