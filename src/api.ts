const baseApiUrl = "https://hacker-news.firebaseio.com/v0/";
export const baseHackerNewsUrl = "https://news.ycombinator.com/";

export function getHackerNewsUrl(id: number): string {
  return `${baseHackerNewsUrl}item?id=${id}`;
}

export const getDomainFromUrl = (urlString: string): string =>
  new URL(urlString).hostname || "";

export const getTopStoryIds = async (): Promise<number[]> => {
  const response = await fetch(`${baseApiUrl}topstories.json`);
  const json = await response.json();
  return json;
};

export const getStory = async (id: number): Promise<IStoryResponse> => {
  return getCachedStory(id) || fetchStory(id);
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

const cachedStories: IStoryResponse[] = [];

const getCachedStory = (id: number): IStoryResponse | undefined =>
  cachedStories.find(story => story.id === id);

const fetchStory = async (id: number): Promise<IStoryResponse> => {
  try {
    const storyResponse = await fetch(`${baseApiUrl}item/${id}.json`);
    const story: IStoryResponse = await storyResponse.json();
    cachedStories.push(story);
    return story;
  } catch (error) {
    return error;
  }
};
