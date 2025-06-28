import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Driver } from "@/types/openf1";
import constructorColors from "@/lib/colors";

export default function StandingCard({ driver }: { driver: Driver }) {

  return (
    <Card key={driver.id} className="overflow-hidden w-full" 
                        style={{ borderLeftColor: constructorColors(driver.team), borderLeftWidth: '6px', borderLeftStyle: 'solid' }}>
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-xl">#{driver.position}</CardTitle>
                                    <CardDescription className="text-base">
                                        {driver.name}
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary" className="text-base px-3 py-1">
                                    {driver.points} pts
                                </Badge>
                            </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                            <div className="relative rounded-md overflow-hidden bg-muted w-48 h-48 mx-auto" style={{ alignSelf: "flex-start" }}>
                                <Image
                                    src={`/drivers/${driver.id}.avif`}
                                    alt={`${driver.name} portrait`}
                                    fill
                                    className="object-cover object-top"
                                    sizes="192px"
                                />
                            </div>
                            
                            <div className="flex items-center justify-between text-base">
                                <span className="text-muted-foreground">
                                    {driver.wins} {driver.wins === 1 ? 'win' : 'wins'}
                                </span>
                                <span className="font-semibold">
                                    {driver.points} points
                                </span>
                            </div>
                            
                            <div className="text-sm text-muted-foreground capitalize">
                                {driver.team.replace('_', ' ')}
                            </div>
                        </CardContent>
                    </Card>
  )
}
