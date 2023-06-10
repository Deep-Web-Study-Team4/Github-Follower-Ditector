import FollowerList from "components/FollowerList";
import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { userInfoState } from "Recoil/atom";
import styled from "styled-components";

const Home = () => {
  const setUserInfo = useSetRecoilState(userInfoState);
  const patRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleSubmitToken = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUserInfo({
      pat: patRef.current!.value,
      username: usernameRef.current!.value,
    });
  };

  return (
    <>
      <StWrapper>
        <StPatForm onSubmit={(e) => handleSubmitToken(e)}>
          <h1>🍒 본인의 Github 토큰을 입력해주세요 🍒</h1>
          <input
            type="text"
            placeholder="Github 토큰(PAT)을 입력해주세요"
            ref={patRef}
          />
          <input
            type="text"
            placeholder="Github 유저이름을 입력해주세요"
            ref={usernameRef}
          />
          <button>Submit</button>
        </StPatForm>

        <FollowerList />
      </StWrapper>
    </>
  );
};

const StWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const StPatForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > input {
    padding-left: 1rem;

    width: 100%;
    height: 2rem;
  }
`;

export default Home;
