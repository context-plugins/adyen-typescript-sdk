import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinSupportSchema, type PinSupport } from "./pin-support.js";

export type ValuelinkResponseInfo = {
  /** Authorisation Mid */
  authorisationMid?: string;
  /** PIN Support. For ecommerce, PIN is required. */
  pinSupport?: PinSupport;
  /** Submitter ID */
  submitterId?: string;
  /** Terminal ID */
  terminalId?: string;
};

export const valuelinkResponseInfoSchema: Schema<ValuelinkResponseInfo> = s.object<ValuelinkResponseInfo>({
  authorisationMid: s.optional(s.string()),
  pinSupport: s.optional(s.lazy(() => pinSupportSchema)),
  submitterId: s.optional(s.string()),
  terminalId: s.optional(s.string()),
});
