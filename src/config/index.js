import input from "./rules/input";
import inputNumber from "./rules/inputNumber";
import radio from "./rules/radio";
import checkbox from "./rules/checkbox";
import select from "./rules/select";

export default function createMenu() {
  return [
    {
      name: "main",
      title: "表单组件",
      list: [input, inputNumber, radio, checkbox, select],
    },
  ];
}
