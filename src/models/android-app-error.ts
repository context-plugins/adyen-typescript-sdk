import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AndroidAppError = {
  errorCode?: string;
  terminalModels?: string[];
};

export const androidAppErrorSchema: Schema<AndroidAppError> = s.object<AndroidAppError>({
  errorCode: s.optional(s.string()),
  terminalModels: s.optional(s.array(s.string())),
});
