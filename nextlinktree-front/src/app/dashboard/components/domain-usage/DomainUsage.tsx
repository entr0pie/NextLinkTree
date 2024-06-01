import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DomainUsageGraph from "./DomainUsageGraph";
import { getDomainUsage } from "./DomainUsageService";

export default async function DomainUsage() {

    const data = await getDomainUsage();

    return (
        <div className="flex flex-col space-y-5 p-4 w-full">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Most used domains.</CardTitle>
                    <CardDescription>The most viral websites in NextLinkTree.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center items-center">
                        <DomainUsageGraph data={data} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
