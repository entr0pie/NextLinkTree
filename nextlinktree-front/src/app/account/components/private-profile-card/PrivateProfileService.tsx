import axios from "axios";

export function updateLink(oldAlias: string, alias: string, link: string) {
    return axios.put("http://localhost:8080/private-profile/update-link", {
        oldAlias,
        alias,
        link
    }).then((r) => r.data);
}

export async function deleteLink(alias: string) {
    return axios.delete(`http://localhost:8080/private-profile/delete-link/${alias}`)
        .then((r) => r.data);
}