import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getConstructorColor from "@/lib/colors";
import { Constructor } from "@/types/openf1";
import Image from "next/image";

export default function StandingCard({ constructor,}: { constructor: Constructor;}) {
  return (
    <Card
      key={constructor.id}
      className="overflow-hidden w-full"
      style={{
        borderLeftColor: getConstructorColor(constructor.id),
        borderLeftWidth: "4px",
        borderLeftStyle: "solid",
      }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">#{constructor.position}</CardTitle>
            <CardDescription className="text-sm">
              {constructor.constructor}
            </CardDescription>
          </div>
          <Badge variant="secondary">{constructor.points} pts</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="aspect-[3392/775] relative rounded-md overflow-hidden bg-muted w-full">
          <Image
            src={`/constructors/${constructor.id}.avif`}
            alt={`${constructor.constructor} car`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {constructor.wins} {constructor.wins === 1 ? "win" : "wins"}
          </span>
          <span className="font-semibold">{constructor.points} points</span>
        </div>
      </CardContent>
    </Card>
  );
}
