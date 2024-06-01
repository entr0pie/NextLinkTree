
import axios, { AxiosResponse, AxiosError } from 'axios';

export type PublicUserProfile = {
    username: string;
    fullName: string;
    biography: string;
    links: { alias: string, link: string }[];
}

export type SearchResult = PublicUserProfile[];

export default function search(keyword: string) {
    keyword = keyword.trim();
    return axios.get<SearchResult>(`http://localhost:8080/dashboard/search?keyword=${keyword}`).then((r) => r.data);
}