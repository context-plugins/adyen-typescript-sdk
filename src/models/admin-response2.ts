import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";

/** Content of the Admin Response message. */
export type AdminResponse2 = {
  /** Result of a message request processing. */
  response: Response11;
};

export const adminResponse2Schema: Schema<AdminResponse2> = s.object<AdminResponse2>({
  response: response11Schema,
  _keysMap: {
    response: "Response",
  },
});
