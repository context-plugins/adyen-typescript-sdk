import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Dcc = {
  /**
   * Enable Dynamic Currency Conversion (DCC). When you enable DCC, you are responsible for
   * complying with [DCC receipt requirements and terms of
   * use](https://help.adyen.com/en_US/knowledge/in-person-payments/terminal-features/dynamic-currency-conversion-dcc-rules-regulations).
   */
  enableDcc?: boolean;
};

export const dccSchema: Schema<Dcc> = s.object<Dcc>({
  enableDcc: s.optional(s.boolean()),
});
