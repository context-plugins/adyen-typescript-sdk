import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinSupportSchema, type PinSupport } from "./pin-support.js";

export type ValuelinkInfo2 = {
  authorisationMid: string;
  pinSupport: PinSupport;
  submitterId?: string;
  terminalId?: string;
};

export const valuelinkInfo2Schema: Schema<ValuelinkInfo2> = s.object<ValuelinkInfo2>({
  authorisationMid: s.string(),
  pinSupport: pinSupportSchema,
  submitterId: s.optional(s.string()),
  terminalId: s.optional(s.string()),
});
