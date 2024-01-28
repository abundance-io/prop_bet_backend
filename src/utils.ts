import axios from "axios";
import { AxiosResponse } from "axios";
import { ApiEventResponse } from "./types";

export const sportsMap = {
  football: "sr:sport:1",
  basketball: "sr:sport:2",
};

export type sportsKey = keyof typeof sportsMap;

export async function getSportEvents(sportName: sportsKey) {
  const sportId = sportsMap[sportName];
  console.log(
    `https://www.sportybet.com/api/ng/factsCenter/importantEvents?sportId=${encodeURIComponent(sportId)}`,
  );
  const tournamentData = await axios
    .get<
      any,
      AxiosResponse<ApiEventResponse>
    >(`https://www.sportybet.com/api/ng/factsCenter/importantEvents?sportId=${encodeURIComponent(sportId)}`)
    .then((eventResponse) => {
      const events = eventResponse.data;
      return events.data;
    });

  return tournamentData;
}
