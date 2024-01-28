export interface ApiEventResponse {
  bizCode: number;
  message: string;
  data: TournamentData[];
}

export interface TournamentData {
  id: string;
  name: string;
  events: EventData[];
}

export interface EventData {
  eventId: string;
  gameId: string;
  productStatus: string;
  estimateStartTime: number;
  status: number;
  matchStatus: string;
  homeTeamName: string;
  awayTeamName: string;
  sport: {
    id: string;
    name: string;
    category: {
      id: string;
      name: string;
      tournament: {
        id: string;
        name: string;
      };
    };
  };
  totalMarketSize: number;
  markets: MarketData[];
  bookingStatus: string;
  topTeam: boolean;
  commentsNum: number;
  topicId: number;
  bgEvent: boolean;
  ai: boolean;
}

export interface MarketData {
  id: string;
  specifier?: string;
  product: number;
  desc: string;
  status: number;
  group: string;
  groupId: string;
  marketGuide: string;
  title: string;
  name: string;
  favourite: number;
  outcomes: OutcomeData[];
}

export interface OutcomeData {
  id: string;
  odds: string;
  probability: string;
  isActive: number;
  desc: string;
}
