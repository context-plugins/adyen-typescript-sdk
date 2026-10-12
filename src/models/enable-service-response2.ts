import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";

/** Content of the Enable Service Response message. */
export type EnableServiceResponse2 = {
  /** Result of a message request processing. */
  response: Response11;
};

export const enableServiceResponse2Schema: Schema<EnableServiceResponse2> = s.object<EnableServiceResponse2>({
  response: response11Schema,
  _keysMap: {
    response: "Response",
  },
});
