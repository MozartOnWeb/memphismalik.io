import styled from "styled-components";
import Link from "next/link";

export const GoToWebsiteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5em;
`;

export const GoToWebsiteLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;

  svg {
    path {
      fill: red;
    }
  }
`;
