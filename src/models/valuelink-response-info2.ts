import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinSupportSchema, type PinSupport } from "./pin-support.js";

/** **valuelink** details */
export type ValuelinkResponseInfo2 = {
  /** Authorisation Mid */
  authorisationMid?: string;
  /** PIN Support. For ecommerce, PIN is required. */
  pinSupport?: PinSupport;
  /** Submitter ID */
  submitterId?: string;
  /** Terminal ID */
  terminalId?: string;
};

export const valuelinkResponseInfo2Schema: Schema<ValuelinkResponseInfo2> = s.object<ValuelinkResponseInfo2>({
  authorisationMid: s.optional(s.string()),
  pinSupport: s.optional(s.lazy(() => pinSupportSchema)),
  submitterId: s.optional(s.string()),
  terminalId: s.optional(s.string()),
});
