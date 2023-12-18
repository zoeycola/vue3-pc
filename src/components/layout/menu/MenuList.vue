<template>
  <div class="mt-10 pl-6 pr-6" v-for="(menuItem,index) in menus" :key="index">
    <div class="menu-title text-sm pb-2 text-main">{{ menuItem.name }}</div>
    <div class="menu-item text-base hover-bg-main pl-6 pt-3 pr-6 pb-3" 
      v-for="(menu,index) in menuItem.menus" 
      :key="'menu'+index"
      :class="{'active': currentKey == menu.key }"
      @click="click(menu)"
    >
      <IconPark :icon="menu.icon" size="18" :theme="menu.theme"/>
      <span class="ml-1">{{ menu.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenu } from "@/components/layout/menu/useMenu.js";
import IconPark from "@/components/common/IconPark.vue";

const { menus, currentKey, click } = useMenu()
</script>

<style lang="scss">
.menu-item {
  @apply flex cursor-pointer items-center transition-colors;
}
.active{
  @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}
</style>