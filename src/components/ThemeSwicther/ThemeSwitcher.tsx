import IconComponent from "../SVG/IconComponent";
import Toggle from "../ToggleTheme/Toggle";

interface Props {
  isDark: boolean;
  switchTheme: (isDark: boolean) => void;
}

const ThemeSwicther: React.FC<Props> = ({ isDark, switchTheme }) => {
  return (
    <Toggle
      checked={isDark}
      scale="md"
      startIcon={(isActive = false) => (
        <IconComponent
          iconName="Sun"
          color={isActive ? "warning" : "backgroundAlt"}
        />
      )}
      endIcon={(isActive = false) => (
        <IconComponent
          iconName="Moon"
          color={isActive ? "warning" : "backgroundAlt"}
        />
      )}
      defaultColor="textDisabled"
      checkedColor="textDisabled"
      onChange={() => switchTheme(!isDark)}
    />
  );
};

export default ThemeSwicther;
