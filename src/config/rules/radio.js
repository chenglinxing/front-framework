import uniqueId from "@/utils/unique";
// import { makeRequiredRule } from "@/utils/requiredRule";

const label = "单选框";
const name = "radio";

export default {
  icon: "icon-radio",
  label,
  name,
  prop: uniqueId(name),
  rule() {
    return {
      type: name,
      field: uniqueId(name),
      title: label,
      info: "",
      $required: false,
      props: {},
    };
  },
};
