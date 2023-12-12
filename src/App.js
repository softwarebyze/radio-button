import {
  RadioButton,
  RadioGroup,
  RadioGroupContainer,
} from "./components/RadioButton";
import "./styles.css";

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
    radioButtonProps={{ style: { width: "260px" } }}
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
const BringNumberRadioGroup = () => (
  <RadioGroup
    options={[
      {
        id: "oldNumber",
        title: ["I Want to", "Bring My Old", "Number"], // "I Want to Bring My Old Number",
        img: {
          src: "https://resources-test.qlinkwireless.com/hello-mobile-temp/home/keep-your-number.webp",
        },
      },
      {
        id: "newNumber",
        title: ["Assign Me", "a New Number"], // "Assign Me a New Number",
        img: {
          src: "https://resources-test.qlinkwireless.com/hello-mobile-temp/icons/current-number.webp",
        },
      },
    ]}
    radioButtonProps={{
      style: { height: "185px", paddingBottom: 0 },
    }}
  />
);

const BringPhoneRadioGroup = () => (
  <RadioGroup
    options={[
      {
        id: "oldNumber",
        title: ["I Want to ", "Bring My Own ", "Phone"], // "I Want to Bring My Own Phone",
        img: {
          src: "https://resources-test.qlinkwireless.com/hello-mobile-temp/landing-pages-2023/Hello-Mobile_Phone-Savings_Icon-Affordable-Phone-Plans_299x327.webp",
        },
      },
      {
        id: "newNumber",
        title: "Shop Phones",
        img: {
          src: "https://resources-test.qlinkwireless.com/hello-mobile-temp/landing-pages-2023/Hello-Mobile_Phone-Savings_Icon-Upgrade-Phone_245x300.webp",
        },
      },
    ]}
    radioButtonProps={{
      style: { height: "185px" },
    }}
    radioButtonBodyProps={{
      style: { gap: "4px" },
    }}
  />
);

const ColorOption = ({ color }) => (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "4px",
      backgroundColor: color,
    }}
  />
);

const ColorRadioGroup = ({ options }) => (
  <RadioGroupContainer>
    {options.map((option) => (
      <RadioButton style={{ padding: "4px" }} key={option.id}>
        <RadioButton.Body>
          <ColorOption color={option.color} />
        </RadioButton.Body>
      </RadioButton>
    ))}
  </RadioGroupContainer>
);

export default function App() {
  return (
    <div className="App">
      <p>2 simple static radio buttons, one isSelected, one not:</p>
      <RadioButton isSelected>64GB</RadioButton>
      <RadioButton>128GB</RadioButton>
      <br />
      <p>RadioGroup:</p>
      <RadioGroup
        options={[
          { id: "noplan", title: ["No", "Plan"] },
          { id: "1gb", title: "1GB", subtitle: "$XX/Mo" },
        ]}
        radioButtonProps={{ style: { width: "102px", height: "96px" } }}
        radioButtonTitleProps={{ style: { fontSize: "24px" } }}
      />
      <p>ColorRadioGroup:</p>
      <ColorRadioGroup
        options={[
          { id: "red", color: "red" },
          { id: "black", color: "black" },
          { id: "white", color: "white" },
          { id: "silver", color: "silver" },
        ]}
      />
      <p>SimDeliveryRadioGroup:</p>
      <SimDeliveryRadioGroup />
      <p>SimCardRadioGroup:</p>
      <SimCardRadioGroup />
      <p>BringNumberRadioGroup:</p>
      <BringNumberRadioGroup />
      <p>BringPhoneRadioGroup:</p>
      <BringPhoneRadioGroup />
    </div>
  );
}
