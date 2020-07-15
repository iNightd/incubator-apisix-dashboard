import {request as UmiRequest} from "umi";
import {getSetting} from "@/pages/Setting";

export const request = (uri: string, options: any) => {
  if (!options.headers) {
    options.headers = {};
  }
  options.headers["X-API-KEY"] = getSetting().token;
  return UmiRequest(uri, options)
}
