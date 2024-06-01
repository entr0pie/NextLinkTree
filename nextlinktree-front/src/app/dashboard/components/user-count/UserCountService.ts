import axios from "axios";

export type UserCount = { quantity: number };

export default function getUserCount() {
    return axios.get<UserCount>("http://localhost:8080/dashboard/active-users").then(r => r.data);
}