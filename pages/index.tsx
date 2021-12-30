import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <Button variant="contained">Hello World</Button>
    </Wrapper>
  );
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default Home;
