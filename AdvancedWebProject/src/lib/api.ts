import { client } from "./axios";

const PER_PAGE = 100;

export const getFollowingInfo = async (pat: string) => {
  const { data } = await client.get(
    `/users/pinktopaz/following?per_page=${PER_PAGE}`,
    {
      headers: {
        Authorization: `token ${pat}`,
      },
    }
  );

  return data;
};

export const getFollowerInfo = async (pat: string) => {
  const { data } = await client.get(
    `/users/pinktopaz/followers?per_page=${PER_PAGE}`,
    {
      headers: {
        Authorization: `token ${pat}`,
      },
    }
  );

  return data;
};
