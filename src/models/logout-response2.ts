import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";

export type LogoutResponse2 = {
  response: Response11;
};

export const logoutResponse2Schema: Schema<LogoutResponse2> = s.object<LogoutResponse2>({
  response: response11Schema,
  _keysMap: {
    response: "Response",
  },
});
