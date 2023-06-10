import { client } from "./axios";
import { UserInfo } from "Types/UserInfoTypes";
const PER_PAGE = 100;

export const getFollowingInfo = async (pat: string, username: string) => {
  const { data } = await client.get(
    `/users/${username}/following?per_page=${PER_PAGE}`,
    {
      headers: {
        Authorization: `token ${pat}`,
      },
    }
  );

  return data;
};

export const getFollowerInfo = async (pat: string, username: string) => {
  const { data } = await client.get(
    `/users/${username}/followers?per_page=${PER_PAGE}`,
    {
      headers: {
        Authorization: `token ${pat}`,
      },
    }
  );

  return data;
};

export const followUser = async (userInfo: UserInfo) => {
  const { data } = await client.put(
    `/user/following/seojisoosoo`,
    {},
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `token ${userInfo.pat}`,
      },
    }
  );
  return data;
};
