const baseUrl = "https://hacker-news.firebaseio.com/v0/";

export const getTopStory = async (): Promise<IStory> => {
  const ids: string[] = await getTopStoryIds();
  const story = await getStory(ids[0]);
  return story;
};

const getTopStoryIds = async (): Promise<string[]> => {
  const response = await fetch(`${baseUrl}topstories.json?print=pretty`);
  return response.json();
};

const getStory = async (id: string): Promise<IStory> => {
  const storyResponse = await fetch(`${baseUrl}item/${id}.json`);
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
  console.log(stories);
  return stories;
  // await getStory;
};

export interface IStory {
  by: "string";
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}
