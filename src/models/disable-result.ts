import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisableResult = {
  response?: string;
};

export const disableResultSchema: Schema<DisableResult> = s.object<DisableResult>({
  response: s.optional(s.string()),
});
