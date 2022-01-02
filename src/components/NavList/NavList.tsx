import styled from "styled-components";
import { FlexBox } from "../Box/Flex";
import NavListItem from "../NavListItem/NavListItem";
import { NavListProps } from "./types";

const StyledNavList = styled(FlexBox)`
  flex-direction: row;
  height: 100%;
  align-items: center;
  margin: auto 0px;
`;

const NavList: React.FC<NavListProps> = ({
  navItems,
  activeItem = "/",
  signOut,
  ...props
}) => {
  return (
    <StyledNavList {...props}>
      {navItems
        .filter(
          (item) =>
            (item.isLoggedIn && item.label !== "Authenticate") ||
            (!item.isLoggedIn && item.label !== "Sign Out")
        )
        .map(
          ({
            notify,
            notificationNumber,
            label,
            href = "/",
            isLoggedIn,
            type,
          }) => {
            const isActive = activeItem === href;
            const prop = {
              isActive,
              notify,
              notificationNumber,
              type,
              onClick: isLoggedIn && label === "Sign Out" ? signOut : () => {},
            };
            return (
              <NavListItem {...prop} to={href}>
                {label}
              </NavListItem>
            );
          }
        )}
    </StyledNavList>
  );
};

export default NavList;
