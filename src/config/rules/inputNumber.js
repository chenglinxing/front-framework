import uniqueId from "@/utils/unique";
// import { makeRequiredRule } from "@/utils/requiredRule";

const label = "计数器";
const name = "inputNumber";

export default {
  icon: "icon-number",
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
