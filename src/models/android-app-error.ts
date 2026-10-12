import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AndroidAppError = {
  /** The error code of the Android app with the `status` of either **error** or **invalid**. */
  errorCode?: string;
  /** The list of payment terminal models to which the returned `errorCode` applies. */
  terminalModels?: string[];
};

export const androidAppErrorSchema: Schema<AndroidAppError> = s.object<AndroidAppError>({
  errorCode: s.optional(s.string()),
  terminalModels: s.optional(s.array(s.string())),
});
