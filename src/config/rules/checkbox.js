import uniqueId from "@/utils/unique";
// import { makeRequiredRule } from "@/utils/requiredRule";

const label = "多选框";
const name = "checkbox";

export default {
  icon: "icon-checkbox",
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
