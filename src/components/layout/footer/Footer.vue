<template>
  <div class="flex flex-col items-stretch h-20">
    <div class="flex items-center grow px-5">
      <div class="flex-1">
        <div class="flex">
          <img src="http://127.0.0.1:3002/src/assets/img/OpticalDisk.png" alt="" class="w-11 h-11 rounded">
          <div class="ml-2 text-xs flex flex-col justify-between">
            <div class="cursor-pointer flex w-52 truncate">
              <div class="flex">
                <span>开源音乐</span>
                <span class="ml-2 text-dc">-SmallRuralDog</span>
              </div>
            </div>
            <div class="flex gap-x-3 text-main">
              <IconPark :icon="Like" :size="iconSize" :stroke-width="3" class="icon-button"></IconPark>
              <IconPark :icon="DownTwo" :size="iconSize" :stroke-width="3" class="icon-button"></IconPark>
              <IconPark :icon="MoreTwo" :size="iconSize" :stroke-width="3" class="icon-button"></IconPark>
              <el-badge :value="1000" :max="999" class="badge">
                <IconPark :icon="Comment" :size="iconSize" :stroke-width="3" class="text-slate-400 hover-text icon-button"/>
              </el-badge>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div class="flex items-center gap-x-3 justify-center">
          <IconPark :icon="LoopOnce" :size="20" :stroke-width="3" class="icon-button"></IconPark>
          <IconPark :icon="GoStart" :size="20" :stroke-width="3" class="icon-button"></IconPark>
          <IconPark :icon="Play" :size="45" :stroke-width="3"  theme="filled" class="cursor-pointer text-emerald-400"></IconPark>
          <IconPark :icon="GoEnd" :size="20" :stroke-width="3" class="icon-button"></IconPark>
          <el-popover placement="top" width="20px">
              <template #reference>
                <IconPark :icon="VolumeSmall" :size="20" :stroke-width="3" class="icon-button"></IconPark>
              </template>
              <PlayVolumnSlider/>
          </el-popover>
        </div>
      </div>
      <div class="flex-1">
        <div class="flex items-center gap-x-3 justify-center">
          <span>00:00/00:00</span>
          <IconPark :icon="MusicList" :size="20" :stroke-width="3" class="icon-button"></IconPark>
          <IconPark :icon="TextMessage" :size="20" :stroke-width="3" class="icon-button"></IconPark>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayVolumnSlider from "@/components/layout/footer/PlayVolumnSlider.vue";
import IconPark from "@/components/common/IconPark.vue";
import { Like, DownTwo, MoreTwo, Comment, LoopOnce,Play, PauseOne,GoStart, GoEnd, VolumeSmall, MusicList, TextMessage } from '@icon-park/vue-next';
const iconSize = 18;

</script>

<style lang="scss">
.icon-button {
  @apply cursor-pointer;
  @apply hover:text-emerald-400 text-slate-400

}

// .badge{
//   .el-badge__content {
//       @apply scale-75 left-1 bg-stone-100 text-slate-500 bg-opacity-80 right-auto;
//       @apply dark:bg-stone-900;
//     }
// }
</style>