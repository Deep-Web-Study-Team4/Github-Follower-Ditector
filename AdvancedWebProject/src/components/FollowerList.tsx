import { useGetAccountInfo } from "lib/hooks/useGetAccountInfo";
import { useRecoilValue } from "recoil";
import { userInfoState } from "Recoil/atom";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserInfo } from "Types/UserInfoTypes";
import { followUser } from "lib/api";
import { useEffect } from "react";

const FollowerList = () => {
  const userInfo = useRecoilValue(userInfoState);
  const queryClient = useQueryClient();
  const { NonFollowingList } = useGetAccountInfo(
    userInfo.pat,
    userInfo.username
  );

  const useReqFollowing = useMutation<any, unknown, UserInfo>(followUser);

  const { mutate, isLoading, isError, error, isSuccess } = useReqFollowing;

  const onClickBtn = async (nonFollowUserName: string) => {
    await mutate({ username: nonFollowUserName, pat: userInfo.pat });
    queryClient.invalidateQueries(["followerInfo"]);
  };
  return (
    <>
      <StFollowingCardWrapper>
        {NonFollowingList &&
          NonFollowingList.map((nonFollowingPerson: string, idx: number) => {
            return (
              <StFollowingCard key={idx}>
                <p>{nonFollowingPerson}</p>
                <button onClick={() => onClickBtn(nonFollowingPerson)}>
                  맞팔로우하기
                </button>
              </StFollowingCard>
            );
          })}
      </StFollowingCardWrapper>
    </>
  );
};

const StFollowingCardWrapper = styled.article`
  margin-top: 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 0.5rem;
`;

const StFollowingCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 5rem;

  border-radius: 1rem;

  background-color: skyblue;
`;

export default FollowerList;
