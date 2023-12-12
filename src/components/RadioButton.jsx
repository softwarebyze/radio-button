import { useState } from "react";

const selectedBorderColor = "#5088f9";
const unselectedBorderColor = "#ccd0e2";
const selectedBackgroundColor = "#d2e0fe";
const unselectedBackgroundColor = "white";

export const RadioButton = ({
  isSelected,
  onClick,
  children,
  style,
  ...props
}) => (
  <div
    role="radio"
    aria-checked={isSelected}
    tabIndex={0}
    style={{
      backgroundColor: isSelected
        ? selectedBackgroundColor
        : unselectedBackgroundColor,
      border: `3px solid ${
        isSelected ? selectedBorderColor : unselectedBorderColor
      }`,
      borderRadius: "12px",
      paddingTop: "13px",
      paddingBottom: "9px",
      paddingInline: "37.5px",
      display: "inline-block",
      cursor: "pointer",
      ...style,
    }}
    onClick={onClick}
    onKeyDown={(e) => ["Enter", "Space"].includes(e.code) && onClick()}
    {...props}
  >
    {children}
  </div>
);

const RadioButtonTitle = ({ titleOrTitleArray, style, ...props }) => {
  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    margin: 0,
    padding: 0,
  };
  const styles = { ...titleStyle, ...style };
  return Array.isArray(titleOrTitleArray) ? (
    titleOrTitleArray.map((t, idx) => (
      <p style={styles} key={idx} {...props}>
        {t}
      </p>
    ))
  ) : (
    <p style={styles} {...props}>
      {titleOrTitleArray}
    </p>
  );
};

const RadioButtonSubtitle = ({ children, ...props }) => (
  <p
    style={{
      fontSize: "14px",
      textAlign: "center",
      margin: 0,
      padding: 0,
    }}
    {...props}
  >
    {children}
  </p>
);

const RadioButtonBody = ({ children, style, ...props }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      verticalAlign: "top",
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

const RadioButtonImage = ({ src, isSelected }) => (
  <img
    src={src}
    style={{
      filter: !isSelected ? "opacity(.5) grayscale(.9)" : null,
      objectFit: "contain",
    }}
    height="75px"
  />
);

RadioButton.Title = RadioButtonTitle;
RadioButton.Subtitle = RadioButtonSubtitle;
RadioButton.Body = RadioButtonBody;
RadioButton.Image = RadioButtonImage;

export const RadioGroupContainer = ({ children }) => (
  <div
    style={{
      display: "flex",
      gap: "8px",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

export const RadioGroup = ({
  options,
  defaultOptionId = options[0].id,
  radioButtonProps,
  radioButtonBodyProps,
  radioButtonTitleProps,
}) => {
  const [selectedId, setSelectedId] = useState(defaultOptionId);
  return (
    <RadioGroupContainer>
      {options.map((option) => (
        <RadioButton
          key={option.id}
          onClick={() => setSelectedId(option.id)}
          isSelected={option.id === selectedId}
          {...option}
          {...radioButtonProps}
        >
          <RadioButton.Body {...radioButtonBodyProps}>
            {option.img && (
              <RadioButton.Image
                isSelected={option.id === selectedId}
                {...option.img}
              />
            )}
            {option.title && (
              <RadioButton.Title
                titleOrTitleArray={option.title}
                {...radioButtonTitleProps}
              />
            )}

            {option.subtitle && (
              <RadioButton.Subtitle>{option.subtitle}</RadioButton.Subtitle>
            )}
          </RadioButton.Body>
        </RadioButton>
      ))}
    </RadioGroupContainer>
  );
};
