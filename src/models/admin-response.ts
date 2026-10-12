import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";

/** It conveys the result of the Custom Admin. Content of the Custom Admin Response message. */
export type AdminResponse = {
  /** Result of a message request processing. */
  response: Response11;
};

export const adminResponseSchema: Schema<AdminResponse> = s.object<AdminResponse>({
  response: response11Schema,
  _keysMap: {
    response: "Response",
  },
});
