import uniqueId from "@/utils/unique";
// import { makeRequiredRule } from "@/utils/requiredRule";

const label = "下拉框";
const name = "select";

export default {
  icon: "icon-select",
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
