import "./App.css";
import Button from "./Components/Button/Button";
import CheckBoxComponent from "./Components/Checkbox/CheckBox";
import { ConfigProvider, Divider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            controlInteractiveSize: 23,
          },
        },
      }}
    >
      <div className="wrapper">
        <div className="box">
          <CheckBoxComponent />
          <Divider />
          <Button />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
