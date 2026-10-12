import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sweepConfigurationV2Schema, type SweepConfigurationV2 } from "./sweep-configuration-v2.js";

export type BalanceSweepConfigurationsResponse = {
  /** Indicates whether there are more items on the next page. */
  hasNext: boolean;
  /** Indicates whether there are more items on the previous page. */
  hasPrevious: boolean;
  /** List of sweeps associated with the balance account. */
  sweeps: SweepConfigurationV2[];
};

export const balanceSweepConfigurationsResponseSchema: Schema<BalanceSweepConfigurationsResponse> =
  s.object<BalanceSweepConfigurationsResponse>({
    hasNext: s.boolean(),
    hasPrevious: s.boolean(),
    sweeps: s.array(s.lazy(() => sweepConfigurationV2Schema)),
  });
