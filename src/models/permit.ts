import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permitRestriction2Schema, type PermitRestriction2 } from "./permit-restriction2.js";

export type Permit = {
  /** Partner ID (when using the permit-per-partner token sharing model). */
  partnerId?: string;
  /** The profile to apply to this permit (when using the shared permits model). */
  profileReference?: string;
  /** Permit level restriction overrides. */
  restriction?: PermitRestriction2;
  /** The key to link permit requests to permit results. */
  resultKey?: string;
  /** The expiry date for this permit. */
  validTillDate?: Date;
};

export const permitSchema: Schema<Permit> = s.object<Permit>({
  partnerId: s.optional(s.string()),
  profileReference: s.optional(s.string()),
  restriction: s.optional(s.lazy(() => permitRestriction2Schema)),
  resultKey: s.optional(s.string()),
  validTillDate: s.optional(s.dateTime()),
});
