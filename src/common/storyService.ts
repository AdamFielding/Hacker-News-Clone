import {
  getDomainFromUrl,
  getStory,
  getTopStoryIds,
  StoryResponse
} from "./api";

export const getStories = async (numberOfStories: number): Promise<Story[]> => {
  try {
    const allIds: number[] = await getTopStoryIds();
    const ids = allIds.slice(0, numberOfStories);
    const stories: Story[] = await Promise.all(
      ids.map(async id => {
        const storyData: StoryResponse = await getStory(id);
        if (storyData.url) {
          return {
            ...storyData,
            domain: getDomainFromUrl(storyData.url)
          };
        } else {
          return storyData;
        }
      })
    );
    return stories;
  } catch (error) {
    return error;
  }
};

export interface Story extends StoryResponse {
  domain?: string;
}
