import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import getUserCount from "./UserCountService";

export default async function UserCount() {

    const count = await getUserCount();

    function renderCount(count: number) {
        return (
            <div className="flex justify-center items-center">
                <h1 className="text-7xl">{count.toLocaleString()}</h1>
            </div>
        );
    }

    function renderSubtitle() {
        return (
            <div>
                <h1 className="text-1xl ">
                    <span>Active users <span className="text-primary font-extrabold">showing the world</span> all their personality.</span>
                </h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col space-y-5 p-4 w-full">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>And how much popular?</CardTitle>
                    <CardDescription>See how many users are using NextLinkTree right now.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col justify-center items-center space-y-3 overflow-y-auto">
                        {renderCount(count.quantity)}
                        {renderSubtitle()}
                    </div>
                </CardContent>
            </Card>
        </div >
    );
}