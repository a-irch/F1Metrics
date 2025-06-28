import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Constructor } from "@/types/openf1";
import { Badge } from "@/components/ui/badge";
import getConstructorColor from "@/lib/colors";


export default function StandingTable({ others,}: { others: Constructor[];}) {
  return (
    <Card>
          <CardHeader>
            <CardTitle className="text-xl">Full Standings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 text-center">Position</TableHead>
                  <TableHead className="w-24"></TableHead>
                  <TableHead>Constructor</TableHead>
                  <TableHead className="text-center">Points</TableHead>
                  <TableHead className="text-center">Wins</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {others.map((constructor) => (
                  <TableRow key={constructor.id}>
                    <TableCell className="text-center font-medium">
                      {constructor.position}
                    </TableCell>
                    <TableCell>
                      <div className="relative w-20 h-5 rounded overflow-hidden bg-muted border-l-2" style={{ borderLeftColor: getConstructorColor(constructor.id) }}>
                        <Image
                          src={`/constructors/${constructor.id}.avif`}
                          alt={`${constructor.constructor} car`}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {constructor.constructor}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline">
                        {constructor.points}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      {constructor.wins}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
  )
}
