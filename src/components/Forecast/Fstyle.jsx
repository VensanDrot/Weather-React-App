import styled from "styled-components";
import { theme } from "../style";

// 

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const EachDay = styled.div`
  border-radius: ${theme.sizes.borderRadius};
  width: ${theme.sizes.containers.medium};
  text-align: center;
  transition: 0.3s;
  &:hover {
    background-color: ${theme.colors.hover};
  }
  @media (max-width: ${theme.sizes.resolutions.tablet}) {
    width: ${theme.sizes.containers.small};
  }
`;
export const Label = styled.p`
  padding: ${theme.sizes.space.none};
  font-size: ${theme.sizes.font.big};
  @media (max-width: ${theme.sizes.resolutions.tablet}) {
    font-size: ${theme.sizes.font.medium};
  }
  @media (max-width: ${theme.sizes.resolutions.mobile}) {
    font-size: ${theme.sizes.font.small};
  }
`;
export const Description = styled.p`
  padding: ${theme.sizes.space.none};
  margin-top: ${theme.sizes.space.none};
  font-size: ${theme.sizes.font.medium};
  @media (max-width: ${theme.sizes.resolutions.tablet}) {
    font-size: ${theme.sizes.font.small};
  }
`;
export const GraphSpace = styled.div`
  margin: ${theme.sizes.space.bigNoSides};
  height: ${theme.sizes.containers.extrasmall};
`;
export const Images = styled.img`
  margin: 0.5rem 0;
  width: 66px;
  @media (max-width: ${theme.sizes.resolutions.mobile}) {
    width: 40px;
  }
`;
export const WindImage = styled.img`
  filter:invert(0.6);
  margin: ${theme.sizes.space.none};
  width: ${theme.sizes.containers.textSize};
  `