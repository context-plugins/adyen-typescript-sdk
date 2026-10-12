import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformPaymentConfiguration = {
  /**
   * Specifies at what time a sales day ends for this account.
   *
   * Possible values: Time in **"HH:MM"** format. **HH** ranges from **00** to **07**. **MM** must
   * be **00**.
   *
   * Default value: **"00:00"**.
   */
  salesDayClosingTime?: Date;
  /**
   * Specifies after how many business days the funds in a settlement batch are made available in
   * this balance account. Requires Custom Sales Day Payout to be enabled for your balance account.
   * Contact your account manager or implementation manager to enable this.
   *
   * Possible values: **1** to **20**, or **null**.
   *
   * Default value: **null**.
   */
  settlementDelayDays?: number;
};

export const platformPaymentConfigurationSchema: Schema<PlatformPaymentConfiguration> =
  s.object<PlatformPaymentConfiguration>({
    salesDayClosingTime: s.optional(s.dateTime()),
    settlementDelayDays: s.optional(s.int()),
  });
