import { Driver } from "@/types/openf1";
import StandingCard from "./StandingCard";
import StandingTable from "./StandingTable";

interface DriverStandingsProps {
  drivers: Driver[];
}

export default function DriverStandings({ drivers }: DriverStandingsProps) {
    const topThree = drivers.slice(0, 3);
    const others = drivers.slice(3);

    return (
        <div className="w-full mx-auto p-6 space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8  w-full">
                {topThree.map((driver) => (
                    <StandingCard key={driver.id} driver={driver} />    
                ))}
            </div>

            {/* Rest of the standings */}
            {others.length > 0 && (
                <StandingTable others={others} />
            )}
        </div>
    );
}