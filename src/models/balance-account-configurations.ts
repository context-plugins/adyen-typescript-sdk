import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  balanceAccountConfigurationSchema,
  type BalanceAccountConfiguration,
} from "./balance-account-configuration.js";
import { link2Schema, type Link2 } from "./link2.js";

export type BalanceAccountConfigurations = {
  balanceAccountPayoutSchedules: BalanceAccountConfiguration[];
  link: Link2;
};

export const balanceAccountConfigurationsSchema: Schema<BalanceAccountConfigurations> =
  s.object<BalanceAccountConfigurations>({
    balanceAccountPayoutSchedules: s.array(s.lazy(() => balanceAccountConfigurationSchema)),
    link: link2Schema,
  });
