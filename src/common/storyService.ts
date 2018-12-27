import {
  getDomainFromUrl,
  getStory,
  getTopStoryIds,
  IStoryResponse
} from "./api";

export const getStories = async (
  numberOfStories: number
): Promise<IStory[]> => {
  try {
    const allIds: number[] = await getTopStoryIds();
    const ids = allIds.slice(0, numberOfStories);
    const stories: IStory[] = await Promise.all(
      ids.map(async id => {
        const storyData: IStoryResponse = await getStory(id);
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

export interface IStory extends IStoryResponse {
  domain?: string;
}
