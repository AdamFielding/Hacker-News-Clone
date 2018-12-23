const baseApiUrl = "https://hacker-news.firebaseio.com/v0/";
export const baseHackerNewsUrl = "https://news.ycombinator.com/";

const getTopStoryIds = async (): Promise<string[]> => {
  const response = await fetch(`${baseApiUrl}topstories.json?print=pretty`);
  return response.json();
};

const getStory = async (id: string): Promise<IStory> => {
  const storyResponse = await fetch(`${baseApiUrl}item/${id}.json`);
  return storyResponse.json();
};

export const getStories = async (
  numberOfStories: number
): Promise<IStory[]> => {
  const allIds: string[] = await getTopStoryIds();
  const ids = allIds.slice(0, numberOfStories);
  const stories: IStory[] = await Promise.all(
    ids.map(async id => {
      const story = await getStory(id);
      return story;
    })
  );
  return stories;
};

export function getHackerNewsUrl(id: number): string {
  return `${baseHackerNewsUrl}item?id=${id}`;
}

export interface IStory {
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
