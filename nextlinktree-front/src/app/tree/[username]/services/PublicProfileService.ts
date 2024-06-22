import axios from "axios";

export interface PublicProfile {
  username: string;
  biography: string;
  links: PublicProfileLinks[];
}

export interface PublicProfileLinks {
  alias: string;
  link: string;
}

export function getPublicProfile(username: string): Promise<PublicProfile> {
  return axios.get<PublicProfile>(`http://localhost:8080/public-profile/${username}`).then((response) => response.data);
}
