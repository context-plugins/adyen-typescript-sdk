import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permitRestriction2Schema, type PermitRestriction2 } from "./permit-restriction2.js";

export type Permit = {
  partnerId?: string;
  profileReference?: string;
  restriction?: PermitRestriction2;
  resultKey?: string;
  validTillDate?: Date;
};

export const permitSchema: Schema<Permit> = s.object<Permit>({
  partnerId: s.optional(s.string()),
  profileReference: s.optional(s.string()),
  restriction: s.optional(s.lazy(() => permitRestriction2Schema)),
  resultKey: s.optional(s.string()),
  validTillDate: s.optional(s.dateTime()),
});
