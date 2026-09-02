import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinSupportSchema, type PinSupport } from "./pin-support.js";

export type ValuelinkResponseInfo = {
  authorisationMid?: string;
  pinSupport?: PinSupport;
  submitterId?: string;
  terminalId?: string;
};

export const valuelinkResponseInfoSchema: Schema<ValuelinkResponseInfo> = s.object<ValuelinkResponseInfo>({
  authorisationMid: s.optional(s.string()),
  pinSupport: s.optional(s.lazy(() => pinSupportSchema)),
  submitterId: s.optional(s.string()),
  terminalId: s.optional(s.string()),
});
