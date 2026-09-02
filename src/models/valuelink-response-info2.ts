import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinSupportSchema, type PinSupport } from "./pin-support.js";

export type ValuelinkResponseInfo2 = {
  authorisationMid?: string;
  pinSupport?: PinSupport;
  submitterId?: string;
  terminalId?: string;
};

export const valuelinkResponseInfo2Schema: Schema<ValuelinkResponseInfo2> = s.object<ValuelinkResponseInfo2>({
  authorisationMid: s.optional(s.string()),
  pinSupport: s.optional(s.lazy(() => pinSupportSchema)),
  submitterId: s.optional(s.string()),
  terminalId: s.optional(s.string()),
});
