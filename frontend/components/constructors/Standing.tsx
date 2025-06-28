import { Constructor } from "@/types/openf1";
import StandingCard from "./StandingCard";
import StandingTable from "./StandingTable";

interface ConstructorStandingsProps {
  constructors: Constructor[];
}

export default function ConstructorStandings({ constructors }: ConstructorStandingsProps) {
  const topThree = constructors.slice(0, 3);
  const others = constructors.slice(3);

  return (
    <div className="w-full mx-auto p-6 space-y-8">
            {/* Top 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
                {topThree.map((constructor) => (
                  <StandingCard key={constructor.id} constructor={constructor} />
                ))}
            </div>

            {/* Rest of the standings */}
            <StandingTable others={others} />
    </div>
  );
}