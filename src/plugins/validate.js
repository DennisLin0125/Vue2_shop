// * vee validate 表單驗證區
import Vue from "vue";
import VeeValidate from "vee-validate";
// 中文提示訊息
import zh_TW from "vee-validate/dist/locale/zh_TW";
Vue.use(VeeValidate);

// 表單驗證
VeeValidate.Validator.localize("zh_TW", {
  messages: {
    ...zh_TW.messages,
    is: (field) => `${field}必須密碼相同`,
  },
  attributes: {
    phone: "手機號",
    code: "驗證碼",
    password: "密碼",
    checkpassword: "確認密碼",
    ischeck: "協議",
  },
});

// 自定義較驗規則
VeeValidate.Validator.extend("checked", {
  validate: (value) => {
    return value;
  },
  getMessage: (field) => field + "必須同意",
});
