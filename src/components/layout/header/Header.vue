<template>
  <div class="flex items-center justify-between h-14">
    <div class="flex items-center justify-between pl-5">
      <IconPark :icon="Left" :size="iconSize" :stroke-width="2" class="icon-button"></IconPark>
      <IconPark :icon="Right" :size="iconSize" :stroke-width="2" class="icon-button"></IconPark>
      <div class="ml-10">
        <SearchPopVue/>
      </div>
    </div>
    <div>right</div>
  </div>
</template>

<script setup lang="ts">
import IconPark from "@/components/common/IconPark.vue";
import { Left, Right } from "@icon-park/vue-next";
import SearchPopVue from "./SearchPop.vue";

const iconSize = 22;


</script>

<style lang="scss">
.icon-button{
  @apply p-2 cursor-pointer;
  @apply hover:text-emerald-400
}
</style>
