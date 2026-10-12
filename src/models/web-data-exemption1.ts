import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason3Schema, type Reason3 } from "./reason3.js";

/** The reason why the web data is not provided. */
export type WebDataExemption1 = {
  /** The reason why the web data was not provided. Possible value: **noOnlinePresence**. */
  reason?: Reason3;
};

export const webDataExemption1Schema: Schema<WebDataExemption1> = s.object<WebDataExemption1>({
  reason: s.optional(s.lazy(() => reason3Schema)),
});
