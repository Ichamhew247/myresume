import ReactCurvedText from "react-curved-text";

const MyLogo = () => {
  const textStyles = {
    fontSize: 24,
    fill: "#D0AAD1", // Set the fill color to red
  };

  return (
    <ReactCurvedText
      width={250}
      height={105}
      cx={250}
      cy={120}
      rx={250}
      ry={100}
      startOffset={50}
      reversed={true}
      text="@mine"
      textProps={{ style: textStyles }}
      textPathProps={null}
      tspanProps={null}
      ellipseProps={null}
      svgProps={null}
    />
  );
};

export default MyLogo;
