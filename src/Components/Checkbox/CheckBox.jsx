import React, { useState } from "react";
import { Checkbox, Divider } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./CheckBox.css";

const list = [
  { label: "Page 1", isHover: false, checked: false },
  { label: "Page 2", isHover: false, checked: false },
  { label: "Page 3", isHover: false, checked: false },
  { label: "Page 4", isHover: false, checked: false },
];

const CheckBoxComponent = () => {
  const [checkedList, setCheckedList] = useState(list);
  const [checkedAll, setCheckedAll] = useState(false);
  const [hoverValue, setHoverValue] = useState(false);

  const handleMouseEnter = (label) => {
    setHoverValue(!checkedAll && label === "All");
    const array = [...checkedList];

    const result = array.map((e) => {
      return e.checked
        ? { ...e }
        : {
            ...e,
            isHover: label === "All" ? false : e.label === label,
          };
    });

    setCheckedList(result);
  };
  const handleMouseLeave = (label) => {
    setHoverValue(false);
    const array = [...checkedList];

    const result = array.map((e) => {
      return e.checked
        ? { ...e }
        : {
            ...e,
            isHover: false,
          };
    });

    setCheckedList(result);
  };
  const handleClick = (label) => {
    setHoverValue(false);
    setCheckedAll(label === "All" && !checkedAll);

    const array = [...checkedList];

    const result = array.map((e) => {
      return {
        ...e,
        isHover: false,
        checked:
          label === "All"
            ? !checkedAll
            : e.label === label
            ? !e.checked
            : e.checked,
      };
    });

    setCheckedList(result);
  };

  return (
    <>
      <div
        onMouseEnter={() => handleMouseEnter("All")}
        onMouseLeave={() => handleMouseLeave("All")}
        className="mainDiv"
      >
        <span className="text">All Pages</span>
        {!hoverValue && (
          <div>
            {" "}
            <Checkbox
              value={"All"}
              className="checkbox"
              checked={checkedAll}
              onClick={() => handleClick("All")}
            ></Checkbox>
          </div>
        )}
        {hoverValue && (
          <div className="check-icon">
            <CheckOutlined
              style={{ color: "#BDBDBD", fontSize: "16px" }}
              onClick={() => handleClick("All")}
            />
          </div>
        )}
      </div>
      <Divider />
      {checkedList?.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={() => handleMouseLeave(item.label)}
          className="mainDiv1"
        >
          {item.label}
          {!item.isHover && (
            <div>
              {" "}
              <Checkbox
                value={item}
                className="checkbox"
                checked={item.checked}
                onClick={() => handleClick(item.label)}
              ></Checkbox>
            </div>
          )}
          {item.isHover && (
            <div className="check-icon">
              <CheckOutlined
                style={{ color: "#BDBDBD", fontSize: "14px" }}
                onClick={() => handleClick(item.label)}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CheckBoxComponent;
