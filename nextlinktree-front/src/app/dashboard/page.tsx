import DomainUsage from "./components/domain-usage/DomainUsage";
import SearchBox from "./components/search/SearchBox";

export default function Dashboard() {
    return (
        <div>
            <div className="w-full h-1/2 justify-center items-center">
                <SearchBox />
            </div>

            <div className="flex flex-wrap h-1/2">
                <div className="w-full md:w-1/2 justify-center items-center">
                    <DomainUsage />
                </div>
                <div className="w-full md:w-1/2 justify-center items-center">
                    <SearchBox />
                </div>
            </div>
        </div>

    );
}