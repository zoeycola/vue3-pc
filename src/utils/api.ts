
import http from "@/utils/http";
import type { SearchHotDetail, SearchSuggest } from '@/models/search'

export async function useSearchHotDetail() {
  const {data} = await http.get<{ data: SearchHotDetail[] }>('search/hot/detail')
  return data
}

export async function useSearchSuggest(keywords: string) {
  const { result } = await http.get<{ result: SearchSuggest[] }>('search/suggest', {keywords: keywords})
  return result
}

export async function useSongUrl(id:number) {
  const { data } = await http.get<{ data: any }>('/song/url', {id: id})
  return data
}

export async function useDetail(id:number) {
  const {songs} = await http.get<{ songs: any }>('/song/detail', {ids: id})
  return songs
}


