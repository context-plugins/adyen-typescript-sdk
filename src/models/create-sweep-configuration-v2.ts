import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { category1Schema, type Category1 } from "./category1.js";
import { priority1Schema, type Priority1 } from "./priority1.js";
import { reasonSchema, type Reason } from "./reason.js";
import { status6Schema, type Status6 } from "./status6.js";
import { sweepCounterparty1Schema, type SweepCounterparty1 } from "./sweep-counterparty1.js";
import { sweepSchedule1Schema, type SweepSchedule1 } from "./sweep-schedule1.js";
import { type72Schema, type Type72 } from "./type72.js";

export type CreateSweepConfigurationV2 = {
  category?: Category1;
  counterparty: SweepCounterparty1;
  currency: string;
  description?: string;
  priorities?: Priority1[];
  reason?: Reason;
  reasonDetail?: string;
  reference?: string;
  referenceForBeneficiary?: string;
  schedule: SweepSchedule1;
  status?: Status6;
  sweepAmount?: Amount17;
  targetAmount?: Amount17;
  triggerAmount?: Amount17;
  type?: Type72;
};

export const createSweepConfigurationV2Schema: Schema<CreateSweepConfigurationV2> =
  s.object<CreateSweepConfigurationV2>({
    category: s.optional(s.lazy(() => category1Schema)),
    counterparty: sweepCounterparty1Schema,
    currency: s.string(),
    description: s.optional(s.string()),
    priorities: s.optional(s.array(s.lazy(() => priority1Schema))),
    reason: s.optional(s.lazy(() => reasonSchema)),
    reasonDetail: s.optional(s.string()),
    reference: s.optional(s.string()),
    referenceForBeneficiary: s.optional(s.string()),
    schedule: sweepSchedule1Schema,
    status: s.optional(s.lazy(() => status6Schema)),
    sweepAmount: s.optional(s.lazy(() => amount17Schema)),
    targetAmount: s.optional(s.lazy(() => amount17Schema)),
    triggerAmount: s.optional(s.lazy(() => amount17Schema)),
    type: s.optional(s.lazy(() => type72Schema)),
  });
