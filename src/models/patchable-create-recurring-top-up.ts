import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchableTopUpAmount2Schema, type PatchableTopUpAmount2 } from "./patchable-top-up-amount2.js";
import { patchableTrigger2Schema, type PatchableTrigger2 } from "./patchable-trigger2.js";
import { status6Schema, type Status6 } from "./status6.js";

export type PatchableCreateRecurringTopUp = {
  description?: string;
  referenceForBeneficiary?: string | null;
  status?: Status6 | null;
  topUpAmount?: PatchableTopUpAmount2;
  trigger?: PatchableTrigger2;
};

export const patchableCreateRecurringTopUpSchema: Schema<PatchableCreateRecurringTopUp> =
  s.object<PatchableCreateRecurringTopUp>({
    description: s.optional(s.string()),
    referenceForBeneficiary: s.optionalNullable(s.string()),
    status: s.optionalNullable(s.lazy(() => status6Schema)),
    topUpAmount: s.optional(s.lazy(() => patchableTopUpAmount2Schema)),
    trigger: s.optional(s.lazy(() => patchableTrigger2Schema)),
  });
