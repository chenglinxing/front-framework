import uniqueId from "@/utils/unique";
// import { makeRequiredRule } from "@/utils/requiredRule";

const label = "输入框";
const name = "input";

export default {
  icon: "icon-input",
  label,
  name,
  rule() {
    return {
      type: name,
      field: uniqueId(),
      title: label,
      info: "",
      $required: false,
      props: {},
    };
  },
};
