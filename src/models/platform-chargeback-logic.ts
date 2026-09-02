import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { behaviorSchema, type Behavior } from "./behavior.js";

export type PlatformChargebackLogic = {
  behavior?: Behavior;
  costAllocationAccount?: string;
  targetAccount?: string;
};

export const platformChargebackLogicSchema: Schema<PlatformChargebackLogic> =
  s.object<PlatformChargebackLogic>({
    behavior: s.optional(s.lazy(() => behaviorSchema)),
    costAllocationAccount: s.optional(s.string()),
    targetAccount: s.optional(s.string()),
  });
