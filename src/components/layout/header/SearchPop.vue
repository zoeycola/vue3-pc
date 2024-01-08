<template>
  <el-popover popper-style="max-width: auto">
    <template #reference>
      <ElInput 
        v-model="searchKeyword"
        placeholder="搜索音乐、MV、歌单"
        :prefix-icon="Search"
        clearable
      />
    </template>
    <div class="h-96">
      <el-scrollbar>
        <div>
          <div v-if="showHot">
            <div class="pt-2 pb-1.5 px-2.5">热门搜索</div>
            <div>
              <div v-for="(item,index) in searchHot" :key="item.searchWord"
                   class="py-2.5 px-2.5 hover-text cursor-pointer flex justify-between items-center text-xs"
                   @click="hotClick(item.searchWord)">
                <div>
                  <span class="mr-1">{{ index + 1 }}.</span>
                  <span>{{ item.searchWord }}</span>
                </div>
                <div class="text-red-300 text-xs">{{ item.score.numberFormat() }}</div>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Search } from '@icon-park/vue-next'
import type { SearchHotDetail } from '@/models/search'
import { useSearchHotDetail } from "@/utils/api";

let showHot = ref(true)
let searchKeyword = ref('')

const hotClick= (text: string) => {

}

const searchHot = ref<SearchHotDetail[]>([])

onMounted(async ()=>{
  searchHot.value = await useSearchHotDetail()
})

</script>


<style lang="scss">

</style>@/models/search