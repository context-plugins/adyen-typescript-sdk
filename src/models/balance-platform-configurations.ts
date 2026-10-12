import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  balancePlatformConfigurationSchema,
  type BalancePlatformConfiguration,
} from "./balance-platform-configuration.js";

export type BalancePlatformConfigurations = {
  /** Contains a list of the payout schedules configured in your balance platform. */
  balancePlatformPayoutSchedules: BalancePlatformConfiguration[];
};

export const balancePlatformConfigurationsSchema: Schema<BalancePlatformConfigurations> =
  s.object<BalancePlatformConfigurations>({
    balancePlatformPayoutSchedules: s.array(s.lazy(() => balancePlatformConfigurationSchema)),
  });
