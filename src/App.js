import { useState } from "react";
import "./styles.css";

const selectedBorderColor = "#5088f9";
const unselectedBorderColor = "#ccd0e2";
const selectedBackgroundColor = "#d2e0fe";
const unselectedBackgroundColor = "white";

const RadioButton = ({ isSelected, onClick, children, ...props }) => (
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
      borderRadius: "10px",
      paddingTop: "13px",
      paddingBottom: "9px",
      paddingInline: "37.5px",
      display: "inline-block",
      cursor: "pointer",
      margin: "0.25rem",
    }}
    onClick={onClick}
    onKeyDown={(e) => ["Enter", "Space"].includes(e.code) && onClick()}
    {...props}
  >
    {children}
  </div>
);

const RadioButtonTitle = ({ children, ...props }) => (
  <p
    style={{
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center",
      margin: 0,
      padding: 0,
    }}
    {...props}
  >
    {children}
  </p>
);

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

const RadioButtonBody = ({ children, ...props }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "2px",
    }}
    {...props}
  >
    {children}
  </div>
);

const RadioButtonImage = ({ src, isSelected }) => (
  <img
    src={src}
    style={{ border: "2px solid red" }}
    // style={isSelected ? { filter: "opacity(.5) grayscale(.9)" } : null}
  />
);

RadioButton.Title = RadioButtonTitle;
RadioButton.Subtitle = RadioButtonSubtitle;
RadioButton.Body = RadioButtonBody;
RadioButton.Image = RadioButtonImage;

const RadioGroup = ({ options, defaultOptionId = options[0].id }) => {
  const [selectedId, setSelectedId] = useState(defaultOptionId);
  return options.map((option) => (
    <RadioButton
      key={option.id}
      onClick={() => setSelectedId(option.id)}
      isSelected={option.id === selectedId}
      {...option}
    >
      <RadioButton.Body>
        {option.image ? (
          <RadioButton.Image
            isSelected={option.id === selectedId}
            {...option.image}
          />
        ) : (
          <h1>NO IMAGE</h1>
        )}
        {option.title && <RadioButton.Title>{option.title}</RadioButton.Title>}
        {option.subtitle && (
          <RadioButton.Subtitle>{option.subtitle}</RadioButton.Subtitle>
        )}
      </RadioButton.Body>
    </RadioButton>
  ));
};

const SimDeliveryRadioGroup = () => (
  <RadioGroup
    options={[
      {
        id: "esim",
        title: "eSIM Digital Delivery",
        subtitle: "Eligible Devices (Immediate Activation)",
      },
      {
        id: "sim",
        title: "Physical SIM Card",
        subtitle: "Works on All Devices",
      },
    ]}
  />
);

const SimCardRadioGroup = () => (
  <RadioGroup
    options={[
      {
        id: "sim",
        title: "Physical SIM Card",
        subtitle: "Works on All Devices",
      },
      {
        id: "esim",
        title: "eSIM Card",
        subtitle: "Eligible Devices (Immediate Activation)",
      },
    ]}
  />
);

const BringPhoneRadioGroup = () => (
  <RadioGroup
    options={[
      {
        id: "oldNumber",
        img: {
          src: "https://resources-test.qlinkwireless.com/hello-mobile-temp/home/keep-your-number.webp",
        },
        title: "I Want to Bring My Old Number",
      },
      {
        id: "newNumber",
        img: {
          src: "https://resources-test.qlinkwireless.com/hello-mobile-temp/icons/current-number.webp",
        },
        title: "Assign Me a New Number",
      },
    ]}
  />
);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <RadioButton isSelected={false}>hi</RadioButton>
      <br />
      <RadioGroup
        options={[
          { id: "hi", title: "Hi" },
          { id: "bye", title: "Bye" },
        ]}
      />
      <br />
      <SimDeliveryRadioGroup />
      <br />
      <SimCardRadioGroup />
      <br />
      <BringPhoneRadioGroup />
      <br />
      <img src="https://resources-test.qlinkwireless.com/hello-mobile-temp/landing-pages-2023/Hello-Mobile_Phone-Savings_Icon-Affordable-Phone-Plans_299x327.webp" />
      <br />
      <img src="https://resources-test.qlinkwireless.com/hello-mobile-temp/landing-pages-2023/Hello-Mobile_Phone-Savings_Icon-Upgrade-Phone_245x300.webp" />
      <br />
      <img src="https://resources-test.qlinkwireless.com/hello-mobile-temp/home/keep-your-number.webp" />
      <br />
      <img src="https://resources-test.qlinkwireless.com/hello-mobile-temp/icons/current-number.webp" />
      <br />
      <RadioButton.Image
        src={
          "https://resources-test.qlinkwireless.com/hello-mobile-temp/home/keep-your-number.webp"
        }
      />
    </div>
  );
}
