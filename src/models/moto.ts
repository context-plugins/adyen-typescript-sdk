import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Moto = {
  /** Enable MOTO transactions. */
  enableMoto?: boolean;
  /**
   * The maximum amount for MOTO transactions. You need to set the currency for this amount using
   * the
   * [`standalone.currencyCode`](https://docs.adyen.com/api-explorer/Management/1/patch/companies/(companyId)/terminalSettings#request-standalone-currencyCode)
   * parameter. Do not enable standalone, unless you are using a standalone solution.
   */
  maxAmount?: number;
};

export const motoSchema: Schema<Moto> = s.object<Moto>({
  enableMoto: s.optional(s.boolean()),
  maxAmount: s.optional(s.int()),
});
