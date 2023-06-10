import FollowerList from "components/FollowerList";
import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { userPatState } from "Recoil/atom";
import styled from "styled-components";

const Home = () => {
  const setUserPat = useSetRecoilState(userPatState);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitToken = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserPat(inputRef.current!.value);
  };

  return (
    <>
      <StWrapper>
        <StPatForm onSubmit={(e) => handleSubmitToken(e)}>
          <h1>🍒 본인의 Github 토큰을 입력해주세요 🍒</h1>
          <input
            type="text"
            placeholder="Github 토큰(PAT)을 입력해주세요"
            ref={inputRef}
          />
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
