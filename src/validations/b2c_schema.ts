import * as yup from "yup";

export const b2c_schema = yup.object({
  name: yup.string().required("Required!"),
  lastname: yup.string().required("Required!"),
  email: yup.string().required("Required!"),
  tel: yup.string().required("Required!"),
  addresses: yup.array(
    yup.object({
      address: yup.string().required("Required!"),
    })
  ),
  category: yup.string().required("Required!"),
  weight: yup.string().required("Required!"),
  vol: yup.string().required("Required!"),
  deliverDate: yup.date().required("Required!"),
  deliverTime: yup.string().required("Required!"),
  isItemBreakable: yup.bool().default(false),
  warningAccepted: yup.string().oneOf(["yes", "no"]).default("no"),
  deliveryMethod: yup.string().required("Required!"),

  range: yup.number().required("Required!"),

  message: yup.string(),
});
