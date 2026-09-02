import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";

export type LogoutResponse = {
  response: Response11;
};

export const logoutResponseSchema: Schema<LogoutResponse> = s.object<LogoutResponse>({
  response: response11Schema,
  _keysMap: {
    response: "Response",
  },
});
