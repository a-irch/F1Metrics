import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Meeting } from "@/types/openf1";
import { Badge } from "../ui/badge";

export default function MeetingCard(meeting: Meeting) {
  const getEventFormatName = (format: string) => {
    switch (format) {
      case 'testing':
        return 'Testing';
      case 'sprint_qualifying':
        return 'Sprint Weekend';
      case 'conventional':
        return 'Race Weekend';
      default:
        return format;
    }
  };

  return (
    <Card className="w-full h-full cursor-pointer hover:bg-blue-100/10" onClick={() => window.location.href = `/meeting/${meeting.round}`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{meeting.event_name}</span>
                    <Image
            src={`/flags/${meeting.country.toLowerCase().replace(/ /g, "_")}.${"svg"}`}
            alt={meeting.country}
            width={48}
            height={32}
            className="overflow-hidden rounded-md"
          />
        </CardTitle>
        <CardDescription>Round {meeting.round} • {new Date(meeting.event_date).toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-medium">{meeting.official_name}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-gray-400">{meeting.location}, {meeting.country}</p>
        <Badge variant={meeting.event_format}>{getEventFormatName(meeting.event_format)}</Badge>
      </CardFooter>
    </Card>
  );
}