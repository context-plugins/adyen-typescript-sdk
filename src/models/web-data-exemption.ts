import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason3Schema, type Reason3 } from "./reason3.js";

export type WebDataExemption = {
  /** The reason why the web data was not provided. Possible value: **noOnlinePresence**. */
  reason?: Reason3;
};

export const webDataExemptionSchema: Schema<WebDataExemption> = s.object<WebDataExemption>({
  reason: s.optional(s.lazy(() => reason3Schema)),
});
