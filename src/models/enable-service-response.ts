import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";

/**
 * It conveys the result of the Enable Service processing. Content of the Enable Service Response
 * message.
 */
export type EnableServiceResponse = {
  /** Result of a message request processing. */
  response: Response11;
};

export const enableServiceResponseSchema: Schema<EnableServiceResponse> = s.object<EnableServiceResponse>({
  response: response11Schema,
  _keysMap: {
    response: "Response",
  },
});
