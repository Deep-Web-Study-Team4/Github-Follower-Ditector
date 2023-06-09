import { useQuery } from "@tanstack/react-query";
import { getFollowerInfo, getFollowingInfo } from "lib/api";
import { FollowerFollowingType } from "Types/UserInfoTypes";

//팔로잉, 팔로워 정보 한 번에 리턴
export const useGetAccountInfo = (pat: string) => {
  // const  =

  // useEffect(() => {
  // }, [pat])

  const { data: followingInfo } = useQuery(
    ["followingInfo"],
    () => getFollowingInfo(pat),
    {
      retry: 3,
    }
  );

  const { data: followerInfo } = useQuery(
    ["followerInfo"],
    () => getFollowerInfo(pat),
    {
      retry: 3,
    }
  );

  //내가 쓰레기

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

  return {
    FollowingList: followingInfo,
    FollowerList: followerInfo,
    NonFollowingList: nonFollowingList,
  };
};
