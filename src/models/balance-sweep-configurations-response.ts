import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sweepConfigurationV2Schema, type SweepConfigurationV2 } from "./sweep-configuration-v2.js";

export type BalanceSweepConfigurationsResponse = {
  hasNext: boolean;
  hasPrevious: boolean;
  sweeps: SweepConfigurationV2[];
};

export const balanceSweepConfigurationsResponseSchema: Schema<BalanceSweepConfigurationsResponse> =
  s.object<BalanceSweepConfigurationsResponse>({
    hasNext: s.boolean(),
    hasPrevious: s.boolean(),
    sweeps: s.array(s.lazy(() => sweepConfigurationV2Schema)),
  });
