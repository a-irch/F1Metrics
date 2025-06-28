"use client";
import React, { useState, useEffect } from "react";

import MeetingCard from "@/components/meetings/MeetingCard";
import { Session, Meeting, Constructor, Driver } from "@/types/openf1";
import ConstructorStandings from "@/components/constructors/Standing";
import DriverStandings from "@/components/drivers/Standing";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Spinner } from "@/components/ui/spinner";

export default function MeetingPage() {
  const [meetings, setMeetings] = useState<Meeting[] | null>(null);
  const [nextMeeting, setNextMeeting] = useState<Meeting | null>(null);
  const [nextSessions, setNextSessions] = useState<Session[] | null>(null);
  const [constructors, setConstructors] = useState<Constructor[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/meeting`
        );
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        setMeetings(data);
      } catch (error) {
        console.error("Failed to fetch meeting data:", error);
        setMeetings([]);
      }
    };
    const fetchStandings = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/standing`
        );
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        setConstructors(data.constructors);
        setDrivers(data.drivers);
      } catch (error) {
        console.error("Failed to fetch constructor data:", error);
      }
    };
    const fetchNextMeeting = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/meeting/next`
        );
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        setNextMeeting(data.meeting);
        setNextSessions(data.sessions);
      } catch (error) {
        console.error("Failed to fetch next meeting data:", error);
        setNextMeeting(null);
      }
    };

    fetchMeetings();
    fetchStandings();
    fetchNextMeeting();
  }, []);

  return meetings === null || constructors == null || drivers == null ? (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Spinner size="large" />
    </main>
  ) : (
    <main className="flex min-h-screen flex-col items-stretch justify-center w-full hide-overflow p-28 select-none">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Formula 1 - Season 2025</h1>
        <p className="text-muted-foreground">Season overview</p>
      </div>

      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4 p-6">Meetings</h2>
        <div className="w-full">
          <Carousel
            orientation="horizontal"
            opts={{
              startIndex: nextMeeting
                ? nextMeeting.round - 1
                : meetings.length - 1,
            }}
          >
            <CarouselContent className="-ml-4">
              {meetings.map((meeting) => (
                <CarouselItem className="basis-1/4" key={meeting.event_name}>
                  <MeetingCard {...meeting} />
                </CarouselItem>
              ))}
            </CarouselContent>
			
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4 mt-8 p-6">
          Constructor Standings
        </h2>
        <ConstructorStandings constructors={constructors} />
      </div>

      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4 mt-8 p-6">Driver Standings</h2>
        <DriverStandings drivers={drivers} />
      </div>
    </main>
  );
}
