
import http from "@/utils/http";
import type { SearchHotDetail } from '@/models/search'

export async function useSearchHotDetail() {
  const {data} = await http.get<{ data: SearchHotDetail[] }>('search/hot/detail')
  return data
}


