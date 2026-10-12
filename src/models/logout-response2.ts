import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";

/** Content of the Logout Response message. */
export type LogoutResponse2 = {
  /** Result of a message request processing. */
  response: Response11;
};

export const logoutResponse2Schema: Schema<LogoutResponse2> = s.object<LogoutResponse2>({
  response: response11Schema,
  _keysMap: {
    response: "Response",
  },
});
