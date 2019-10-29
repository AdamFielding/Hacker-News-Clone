import {
  getDomainFromUrl,
  getStory,
  getTopStoryIds,
  StoryRaw,
  Response,
  wasAllSuccess
} from "./api";

export const getStories = async (
  numberOfStories: number
): BundledStoriesResponse => {
  //todo: refactor id fetching to use response type
  const allIds: number[] = await getTopStoryIds();
  const ids = allIds.slice(0, numberOfStories);
  const stories = await Promise.all(ids.map(async id => await getStory(id)));

  if (!wasAllSuccess(stories)) {
    return { success: false, error: new Error("failed getting a story") };
  } else {
    return {
      success: true,
      data: stories.map(story =>
        story.data.url
          ? { ...story.data, domain: getDomainFromUrl(story.data.url) }
          : story.data
      )
    };
  }
};

export interface Story extends StoryRaw {
  domain?: string;
}

type BundledStoriesResponse = Promise<Response<Story[]>>;
