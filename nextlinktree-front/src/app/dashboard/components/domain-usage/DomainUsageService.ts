import axios from "axios";

export type DomainUsages = { domain: string, quantity: number }[];

export async function getDomainUsage() {

    function getFiveMostUsedDomains(data: DomainUsages) {
        return data.sort((a, b) => b.quantity - a.quantity).slice(0, 5);
    }

    return axios.get<DomainUsages>("http://localhost:8080/dashboard/domain-usage").then(r => getFiveMostUsedDomains(r.data));
}