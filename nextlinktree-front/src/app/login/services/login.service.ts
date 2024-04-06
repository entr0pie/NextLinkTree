import axios from "axios";

export default async function login(email: string, password: string) {
    return await axios.get("/api/login.json")
}