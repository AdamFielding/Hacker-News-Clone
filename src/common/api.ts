const baseApiUrl = "https://hacker-news.firebaseio.com/v0/";
export const baseHackerNewsUrl = "https://news.ycombinator.com/";

const cachedStories: StoryRaw[] = [];

const getCachedStory = (id: number): StoryResponse => {
  const story = cachedStories.find(story => story.id === id);
  return story
    ? { success: true, data: story }
    : { success: false, error: "story not found in cache" };
};

const fetchStory = async (id: number): Promise<StoryResponse> => {
  // todo, move away from try catch, maybe find another library to replace fetch
  // todo add timeouts
  // todo add retries
  try {
    const storyResponse = await fetch(`${baseApiUrl}item/${id}.json`);
    const story: StoryRaw = await storyResponse.json();
    cachedStories.push(story);
    return { success: true, data: story };
  } catch (error) {
    return { success: false, error };
  }
};

export const getHackerNewsUrl = (id: number): string =>
  `${baseHackerNewsUrl}item?id=${id}`;

export const getTopStoryIds = async (): Promise<number[]> =>
  (await fetch(`${baseApiUrl}topstories.json`)).json();

export const getStory = async (id: number): Promise<StoryResponse> => {
  const cachedStory = getCachedStory(id);
  return cachedStory.success ? cachedStory : fetchStory(id);
};

export const getDomainFromUrl = (urlString: unknown): string => {
  try {
    return typeof urlString === "string" ? new URL(urlString).hostname : "";
  } catch (e) {
    return "";
  }
};

export const wasAllSuccess = <T>(
  responses: Response<T>[]
): responses is SuccessfulResponse<T>[] => responses.every(res => res.success);

export interface StoryRaw {
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

type StoryResponse = Response<StoryRaw>;

interface SuccessfulResponse<T> {
  success: true;
  data: T;
}
interface UnsuccessfulResponse<t> {
  success: false;
  error: string;
}

export type Response<T> = SuccessfulResponse<T> | UnsuccessfulResponse<T>;
