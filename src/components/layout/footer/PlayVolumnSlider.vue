<template>
  <div class="slider-demo-block">
    <el-slider v-model="value" show-tooltip="false" vertical height="200px" :max="100" :min="0" size="small" :disabled="mute"/>
    <div class="text-sm mt-2">24</div>
    <IconPark :icon="mute?VolumeMute:VolumeSmall" :size="20" :stroke-width="3" class="icon-button" @click="toggleVolumn"/>
  </div>
</template>

<script lang="ts" setup>
import {VolumeMute, VolumeSmall} from "@icon-park/vue-next";
import { ref } from 'vue';
const value = ref(0)
const mute = ref(true)

const toggleVolumn = () => {
  mute.value = !mute.value
}

</script>

<style lang="scss">
.slider-demo-block{
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-slider{
    margin-top: 0;
    margin-left: 12px;
  }
}
</style>