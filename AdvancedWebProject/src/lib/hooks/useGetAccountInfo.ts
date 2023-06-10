import { useQuery } from "@tanstack/react-query";
import { getFollowerInfo, getFollowingInfo } from "lib/api";
import { FollowerFollowingType } from "Types/UserInfoTypes";

//팔로잉, 팔로워 정보 한 번에 리턴
export const useGetAccountInfo = (pat: string, username: string) => {
  const { data: followingInfo } = useQuery(
    ["followingInfo", pat, username],
    () => getFollowingInfo(pat, username),
    {
      retry: 3,
    }
  );

  const { data: followerInfo } = useQuery(
    ["followerInfo", pat, username],
    () => getFollowerInfo(pat, username),
    {
      retry: 3,
    }
  );

  const followerNameList =
    followerInfo &&
    followerInfo.map((follower: FollowerFollowingType) => {
      return follower.login;
    });

  const followingNameList =
    followingInfo &&
    followingInfo.map((following: FollowerFollowingType) => {
      return following.login;
    });

  const nonFollowingList =
    followerNameList &&
    followerNameList.filter((followerName: string) => {
      if (!followingNameList.includes(followerName)) return followerName;
    });
  console.log(nonFollowingList);

  return {
    FollowingList: followingInfo,
    FollowerList: followerInfo,
    NonFollowingList: nonFollowingList,
  };
};
