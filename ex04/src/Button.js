function Button({ text, width, height, textColor, backgroundColor, font, fontSize, border, borderRadius }) { 
  const style = {
    minWidth: width,
    minHeight: height,
    color: textColor,
    backgroundColor: backgroundColor,
    fontFamily: font,
    fontSize: fontSize,
    border: border,
    borderRadius: borderRadius
  };

  return (
    <button style={ style } type="button">{ text }</button>
  );
}

export default Button;