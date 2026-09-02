import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { behaviorSchema, type Behavior } from "./behavior.js";

export type PlatformChargebackLogic4 = {
  behavior?: Behavior;
  costAllocationAccount?: string;
  targetAccount?: string;
};

export const platformChargebackLogic4Schema: Schema<PlatformChargebackLogic4> =
  s.object<PlatformChargebackLogic4>({
    behavior: s.optional(s.lazy(() => behaviorSchema)),
    costAllocationAccount: s.optional(s.string()),
    targetAccount: s.optional(s.string()),
  });
