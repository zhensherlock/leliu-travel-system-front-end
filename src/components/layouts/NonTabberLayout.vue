<template>
  <div class="no-tabber-layout">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'NonTabberLayout',
    data() {
      return {
        active: 0
      };
    },
    methods: {
    },
    components: {
    }
  };
</script>

<style>
</style>
