type EventFormat = 'testing' | 'sprint_qualifying' | 'conventional';

export interface Meeting {
  round: number;
  country: string;
  location: string;
  official_name: string;
  event_date: string;
  event_name: string;
  event_format: EventFormat;
}

export interface Session {
  round: number;
  name: string;
  date: string;
}

export interface Driver {
  id: string;
  number: number;
  position: number;
  name: string;
  nationality: string;
  points: number;
  wins: number;
  team: string;
}

export interface Constructor {
  id: string;
  position: number;
  constructor: string;
  points: number;
  wins: number;
}
