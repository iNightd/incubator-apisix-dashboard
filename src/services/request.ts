import {extend} from "umi-request";
import {getSetting} from "@/pages/Setting";

export const request = extend({
  headers: {
    "X-API-KEY": getSetting().token
  }
})
