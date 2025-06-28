import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Driver } from "@/types/openf1";
import getConstructorColor from "@/lib/colors";


export default function StandingTable({ others }: { others: Driver[] }) {
  return (
    <div>
      <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Full Standings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-20 text-center text-base">Position</TableHead>
                                    <TableHead className="w-20"></TableHead>
                                    <TableHead className="text-base">Driver</TableHead>
                                    <TableHead className="text-base">Team</TableHead>
                                    <TableHead className="text-center text-base">Points</TableHead>
                                    <TableHead className="text-center text-base">Wins</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {others.map((driver) => (
                                    <TableRow key={driver.id}>
                                        <TableCell className="text-center font-medium text-base">
                                            {driver.position}
                                        </TableCell>
                                        <TableCell>
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted border-2 flex items-start" style={{ borderColor: getConstructorColor(driver.team) }}>
                                                <Image
                                                    src={`/drivers/${driver.id}.avif`}
                                                    alt={`${driver.name} portrait`}
                                                    fill
                                                    className="object-cover object-top"
                                                    sizes="48px"
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-medium text-base">
                                            {driver.name}
                                        </TableCell>
                                        <TableCell className="capitalize text-muted-foreground text-base">
                                            {driver.team.replace('_', ' ')}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Badge variant="outline" className="text-base px-2 py-1">
                                                {driver.points}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-center text-base">
                                            {driver.wins}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
    </div>
  )
}
