import { useGetAccountInfo } from "lib/hooks/useGetAccountInfo";
import { useRecoilValue } from "recoil";
import { userInfoState } from "Recoil/atom";
import styled from "styled-components";

//상대가 팔로우 했는데 내가 안한 리스트

const FollowerList = () => {
  const userInfo = useRecoilValue(userInfoState);
  console.log(userInfo);
  const { NonFollowingList } = useGetAccountInfo(
    userInfo.pat,
    userInfo.username
  );

  return (
    <>
      <StFollowingCardWrapper>
        {NonFollowingList &&
          NonFollowingList.map((nonFollowingPerson: string, idx: number) => {
            return (
              <StFollowingCard key={idx}>
                <p>{nonFollowingPerson}</p>
                <button>맞팔로우하기</button>
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
