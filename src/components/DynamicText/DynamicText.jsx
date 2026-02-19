import { TypeAnimation } from "react-type-animation";
import { PROFILE } from "../../constants";
import "./DynamicText.scss";

const DynamicText = () => {
  const sequence = PROFILE.roles.flatMap((role) => [role, 1000]);

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      className="dynamicText"
      repeat={Infinity}
    />
  );
};

export default DynamicText;