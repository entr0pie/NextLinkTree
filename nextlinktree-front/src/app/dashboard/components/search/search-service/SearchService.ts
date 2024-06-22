
import axios, { AxiosResponse, AxiosError } from 'axios';

export type PublicUserProfile = {
    username: string;
    fullName: string;
    biography: string;
    links: { alias: string, link: string }[];
}

export type SearchResult = PublicUserProfile[];

export function search(keyword: string) {
    keyword = keyword.trim();
    return axios.get<SearchResult>(`http://localhost:8080/dashboard/search?keyword=${keyword}`).then((r) => r.data);
}

export function searchWithDates(keyword: string, start: Date, end: Date) {
    keyword = keyword.trim();
    const startDate = start.toISOString().split('T')[0];
    const endDate = end.toISOString().split('T')[0];
    return axios.get<SearchResult>(`http://localhost:8080/dashboard/search/dates?keyword=${keyword}&start=${startDate}&end=${endDate}`).then((r) => r.data);
}
