"use client";

import styled from "styled-components";

export const CustomH1 = styled.h1`
  color: var(--sui-colors-violet);
  font-family: var(--neueMechanica);

  @media (max-width: var(--sui-breakpoints-tablet)) {
    color: var(--sui-colors-red);
  }
`;
