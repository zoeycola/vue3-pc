<template>
  <el-popover
    popper-style="max-width: auto;padding:0;"
    trigger="click"
    width="250px"
    >
    <!-- v-model:visible="showSearchView" -->
    <template #reference>
      <ElInput
        v-model="searchKeyword"
        placeholder="搜索音乐、MV、歌单"
        :prefix-icon="Search"
        clearable
        @focus="showSearchView = true"
        @focusout="showSearchView = false"
        @input="searchInput"
      />
    </template>
    <div class="h-96">
      <el-scrollbar>
        <div>
          <div v-if="showHot">
            <div class="pt-2 pb-1.5 px-2.5">热门搜索</div>
            <div>
              <div
                v-for="(item, index) in searchHot"
                :key="item.searchWord"
                class="py-2.5 px-2.5 hover:text-emerald-400  cursor-pointer flex justify-between items-center text-xs"
                @click="hotClick(item.searchWord)"
              >
                <div>
                  <span class="mr-1">{{ index + 1 }}.</span>
                  <span>{{ item.searchWord }}</span>
                </div>
                <div class="text-red-300 text-xs">{{ item.score }}</div>
              </div>
            </div>
          </div>
          <div v-else>
            <div
              v-if="suggestData"
              v-for="(order, index) in suggestData.order"
              :key="'order' + index"
            >
              <h1 class="pt-2 pb-1.5 px-2.5">{{ getTitle(order) }}</h1>
              <div v-for="item in suggestData.songs" :key="item.id" v-if="order == 'songs'"
                class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
                @click="playButton(item.id)"
              >
                <span class="text-emerald-500 ml-2">{{ item.name }}</span>
                <span class="pl-1"> - {{ _.first(item.artists)?.name }}</span>
              </div>
              <div v-for="item in suggestData.artists" :key="'artists' + index" v-if="order == 'artists'" 
              class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
              >
                <el-avatar size="small" :src="item.img1v1Url" />
                <span class="text-emerald-500 ml-2"> -{{ item.name }}</span>
              </div>
              <div v-for="item in suggestData.albums" :key="'albums' + index" v-if="order == 'albums'" 
              class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
              >
                <span class="text-emerald-500 ml-2">{{ item.name }}</span>
                <span class="pl-1"> - {{ item.artist.name }} </span>
              </div>
              <div v-for="item in suggestData.playlists" :key="'playlists' + index" v-if="order == 'playlists'"
              class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
              >
                <el-avatar size="small" :src="item.coverImgUrl" />
                <span class="text-emerald-500 ml-2">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Search } from "@icon-park/vue-next";
import type { SearchHotDetail } from "@/models/search";
import { useSearchHotDetail } from "@/utils/api";
import { useSearchStore } from "@/stores/search";
import { usePlayerStore } from "@/stores/player";
//为了从 Store 中提取属性同时保持其响应式，您需要使用storeToRefs()
import { storeToRefs } from "pinia";
import _ from 'lodash';

const { suggest } = useSearchStore();
const { play } = usePlayerStore()
const { showSearchView, showHot, searchKeyword, suggestData } = storeToRefs(useSearchStore());

const hotClick = (text: string) => {
  searchKeyword.value = text;
  suggest();
  showSearchView.value = true;
};

const playButton = (id: number) => {
  play(id)
}


const getTitle = (name: string) => {
  switch (name) {
    case "songs":
      return "单曲";
    case "albums":
      return "专辑";
    case "artists":
      return "歌手";
    case "playlists":
      return "歌单";
    default:
      return name;
  }
};

const searchHot = ref<SearchHotDetail[]>([]);

const searchInput = _.debounce((value: string | number) => suggest(), 500, {'maxWait': 1000})

onMounted(async () => {
  searchHot.value = await useSearchHotDetail();
  console.log(searchHot.value, "searchHot.value");
});

</script>

<style lang="scss"></style>
