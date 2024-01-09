export interface SearchHotDetail {
  searchWord: string;
	score: number;
	content: string;
	source: number;
	iconType: number;
	iconUrl?: string;
	url: string;
	alg: string
}

export interface SearchSuggest {
	albums: SearchSuggestAlbums[];
	artists: SearchSuggestArtists[];
	songs: SearchSuggestSongs[];
	playlists: SearchSuggestPlaylists[];
	order: string[];
}
