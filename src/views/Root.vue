<template>
  <div class="w-screen h-screen flex items-stretch">
    <div class="w-56 h-screen ">
      <Menu/>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="h-14 bg-yellow-50">
        <Header/>
      </div>
      <div class="flex-1">内容</div>
      <div class="h-20 bg-amber-700">底部</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from '@/components/layout/menu/Menu.vue'
import Header from '@/components/layout/header/Header.vue'
</script>

<style lang="scss">

</style>