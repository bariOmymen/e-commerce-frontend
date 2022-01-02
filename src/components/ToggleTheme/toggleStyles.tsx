import styled from "styled-components";
import {
  HandleProps,
  InputProps,
  ScaleKeys,
  scales,
  StyledToggleProps,
  ToggleProps,
} from "./types";

const scaleKeyValues = {
  sm: {
    handleHeight: "16px",
    handleWidth: "16px",
    handleLeft: "2px",
    handleTop: "2px",
    checkedLeft: "calc(100% - 18px)",
    toggleHeight: "20px",
    toggleWidth: "36px",
  },
  md: {
    handleHeight: "26px",
    handleWidth: "26px",
    handleLeft: "3px",
    handleTop: "3px",
    checkedLeft: "calc(100% - 30px)",
    toggleHeight: "32px",
    toggleWidth: "56px",
  },
  lg: {
    handleHeight: "32px",
    handleWidth: "32px",
    handleLeft: "4px",
    handleTop: "4px",
    checkedLeft: "calc(100% - 36px)",
    toggleHeight: "40px",
    toggleWidth: "72px",
  },
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.LG }: ToggleProps) => {
    return scaleKeyValues[scale][property];
  };

export const StyledToggle = styled.div<StyledToggleProps>`
  position: relative;
  height: ${getScale("toggleHeight")};
  width: ${getScale("toggleWidth")};
  border-radius: 24px;
  background-color: ${({ theme, $checked, $checkedColor, $defaultColor }) =>
    theme.colors[$checked ? $checkedColor : $defaultColor]};
  dipslay: inline-flex;
`;
export const Handle = styled.span<HandleProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.toggle.handleBackground};
  border-radius: 50%;
  z-index: 1;
  height: ${getScale("handleHeight")};
  width: ${getScale("handleWidth")};
  left: ${getScale("handleLeft")};
  top: ${getScale("handleTop")};
`;

export const Input = styled.input<InputProps>`
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  position: absolute;
  z-index: 3;
  &:checked + ${Handle} {
    left: ${getScale("checkedLeft")};
  }
`;
