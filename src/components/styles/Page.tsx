import styled from "styled-components";
import { Box } from "../Box/Box";

export const Page = styled(Box)`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
`;
export default Page;
