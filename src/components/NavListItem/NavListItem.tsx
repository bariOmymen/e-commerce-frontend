import { Link } from "react-router-dom";
import { StyledNavListItem } from "./styles";
import { NavListItemProps, NavListItemType } from "./types";

const NavListItem: React.FC<NavListItemProps> = ({
  notify = false,
  notificationNumber = 0,
  children,
  to = "/",
  isActive = false,
  onClick,
  type,
  ...props
}) => {
  return (
    <>
      {type === NavListItemType.BUTTON && (
        <StyledNavListItem
          $notify={notify}
          $notificationNumber={notificationNumber}
          type={"button"}
          isActive={isActive}
          onClick={onClick}
        >
          {children}
        </StyledNavListItem>
      )}
      {type === NavListItemType.LINK && (
        <StyledNavListItem
          $notify={notify}
          $notificationNumber={notificationNumber}
          as={Link}
          to={to}
          isActive={isActive}
          onClick={onClick}
        >
          {children}
        </StyledNavListItem>
      )}
    </>
  );
};

export default NavListItem;
