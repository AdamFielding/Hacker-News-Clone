const baseApiUrl = "https://hacker-news.firebaseio.com/v0/";
export const baseHackerNewsUrl = "https://news.ycombinator.com/";

const cachedStories: StoryResponse[] = [];

const getCachedStory = (id: number): StoryResponse | undefined =>
  cachedStories.find(story => story.id === id);

const fetchStory = async (id: number): Promise<StoryResponse> => {
  try {
    const storyResponse = await fetch(`${baseApiUrl}item/${id}.json`);
    const story: StoryResponse = await storyResponse.json();
    cachedStories.push(story);
    return story;
  } catch (error) {
    return error;
  }
};

export function getHackerNewsUrl(id: number): string {
  return `${baseHackerNewsUrl}item?id=${id}`;
}

export const getTopStoryIds = async (): Promise<number[]> => {
  const response = await fetch(`${baseApiUrl}topstories.json`);
  const json = await response.json();
  return json;
};

export const getStory = async (id: number): Promise<StoryResponse> => {
  return getCachedStory(id) || fetchStory(id);
};

export const getDomainFromUrl = (urlString: unknown): string => {
  try {
    return typeof urlString === "string" ? new URL(urlString).hostname : "";
  } catch (e) {
    return "";
  }
};

export interface StoryResponse {
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
