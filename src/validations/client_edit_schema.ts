import * as yup from "yup";

export const client_edit_schema = yup.object({
  name: yup.string().required("Required!"),
  lastname: yup.string().required("Required!"),
  email: yup.string().required("Required!"),
  tel: yup.string().required("Required!"),
  addresses: yup.array(
    yup.object({
      address: yup.string().required("Required!"),
    })
  ),
});
