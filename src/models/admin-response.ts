import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";

export type AdminResponse = {
  response: Response11;
};

export const adminResponseSchema: Schema<AdminResponse> = s.object<AdminResponse>({
  response: response11Schema,
  _keysMap: {
    response: "Response",
  },
});
