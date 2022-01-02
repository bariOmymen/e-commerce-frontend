import React from "react";
import { Button } from "../form";

export interface StyledNavListItemProps
  extends React.ComponentPropsWithoutRef<"button"> {
  $notify?: boolean;
  $notificationNumber?: number;
  isActive?: boolean;
}

export interface NavListItemProps {
  notify?: boolean;
  notificationNumber?: number;
  to?: string;
  isActive?: boolean;
  onClick?: () => void;
  type?: NavListItemType;
}

export enum NavListItemType {
  BUTTON,
  LINK,
}
