import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  background: #fff;
  padding: 20px;
  display: grid;
  max-width: 375px;
  text-align: center;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 100%;
`;

export const TextWrapper = styled.div`
  padding: 10px;
`;

export const BoldText = styled.h1`
  font-size: 25px;
  color: hsl(218, 44%, 22%);
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 18px;
  color: hsl(220, 15%, 55%);
`;
