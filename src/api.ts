const baseApiUrl = "https://hacker-news.firebaseio.com/v0/";
export const baseHackerNewsUrl = "https://news.ycombinator.com/";

export function getHackerNewsUrl(id: number): string {
  return `${baseHackerNewsUrl}item?id=${id}`;
}

export const getDomainFromUrl = (urlString: string): string =>
  new URL(urlString).hostname || "";

export const getTopStoryIds = async (): Promise<string[]> => {
  const response = await fetch(`${baseApiUrl}topstories.json`);
  return response.json();
};

export const getStory = async (id: string): Promise<IStoryResponse> => {
  const storyResponse = await fetch(`${baseApiUrl}item/${id}.json`);
  return storyResponse.json();
};

export interface IStoryResponse {
  by: "string";
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url?: string;
  text?: string;
}
