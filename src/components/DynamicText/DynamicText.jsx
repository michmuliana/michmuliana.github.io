import { TypeAnimation } from "react-type-animation";
import "./DynamicText.scss";

const DynamicText = () => {
  return (
    <TypeAnimation
      sequence={[
        "Software Engineer",
        1000,
        "Digital Artist",
        1000,
        "Indoor Gardener",
        1000,
        "Tea Connoisseur",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="dynamicText"
      repeat={Infinity}
    />
  );
};

export default DynamicText;