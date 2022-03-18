import * as React from "react";
import styled from "styled-components";

const Home = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
`;

const Text = styled.div`
  font-size: 1rem;
  color: #2a2a2a;
`;

const Link = styled.a`
  font-weight: 600;
  color: #2a2a2a;
`;

export default function App() {
  return (
    <Home>
      <Title>Hi there! :)</Title>
      <Text>
        Use the mock of data (you can find it in ./mocks/home.json) from{" "}
        <Link href="https://api-us.exoticca.com/api/home" target="_blank">
          https://api-us.exoticca.com/api/home
        </Link>{" "}
        and show the cards as we do it in{" "}
        <Link href="https://www.exoticca.com/us" target="_blank">
          https://www.exoticca.com/us
        </Link>
      </Text>
    </Home>
  );
}
