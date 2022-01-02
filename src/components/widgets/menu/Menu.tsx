import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "../../Box/Box";
import { FlexBox } from "../../Box/Flex";
import NavListItem from "../../NavListItem/NavListItem";
import { Text } from "../../Text";
import ThemeSwicther from "../../ThemeSwicther/ThemeSwitcher";
import useMediaBreakpoints from "../../../hooks/useMediaBreakpoints";
import { MENU_HEIGHT } from "./config";
import { MenuProps } from "./types";
import { darkColors } from "../../../theme/colors";
import NavList from "../../NavList/NavList";
import User from "../../user";
import ConnectButton from "../../connectButton";
const Wrapper = styled.div``;
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: ${({ theme }) => theme.colors.cardBorder};
  width: 100%;
  height: ${MENU_HEIGHT}px;
`;
const FixedContainer = styled.div``;

const Footer = styled.footer`
  background-color: ${darkColors.backgroundAlt};
  height: 20vh;
`;

const BodyWrapper = styled(Box)`
  position: relative;
  display: flex;
`;
const Inner = styled.div`
  flex-grow: 1;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Menu: React.FC<MenuProps> = ({
  isDark = false,
  children,
  activeItem = "/",
  navItems = [],
  isLoggedIn = false,
  isWalletActive = false,
  switchTheme,
  signOut,
  ...props
}) => {
  const { isMobile } = useMediaBreakpoints();
  return (
    <Wrapper>
      <StyledMenu>
        <FlexBox ml={"16px"}>
          <FlexBox
            marginRight={"8px"}
            height={`${MENU_HEIGHT}px`}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Link to="/">
              <Text>AMAZONIA</Text>
            </Link>
          </FlexBox>

          <NavList
            navItems={navItems}
            activeItem={activeItem}
            signOut={signOut}
          />
        </FlexBox>
        <FlexBox
          mr={"16px"}
          alignItems={"center"}
          height={"100%"}
          width={"180px"}
          justifyContent={"space-between"}
        >
          <ThemeSwicther isDark={isDark} switchTheme={switchTheme} />
          {isWalletActive && <User />}
          {!isWalletActive && <ConnectButton />}
        </FlexBox>
      </StyledMenu>
      <BodyWrapper>
        <Inner>
          {children}
          <Footer>
            <FlexBox
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
            >
              ALL RIGHTS RESERVED
            </FlexBox>
          </Footer>
        </Inner>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
