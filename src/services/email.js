import axios from "axios";
import { buildUrlEncoded } from "../utils/data";

export const sendEmail = async (formData, success) => {
  try {
    const body = buildUrlEncoded(formData)
    const res = await axios.put("https://api.gloouds.com/api/emailsystem", body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (res.status === 200 || res.status === 201) {
      console.log("success");
      return success
    }
  } catch (e) {
  }
};
