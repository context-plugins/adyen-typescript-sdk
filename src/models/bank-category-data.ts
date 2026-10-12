import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priority1Schema, type Priority1 } from "./priority1.js";
import { Type310, type310Schema } from "./type310.js";

export type BankCategoryData = {
  /**
   * The priority for the bank transfer. This sets the speed at which the transfer is sent and the
   * fees that you have to pay. Required for transfers with `category` **bank**.
   *
   * Possible values:
   *
   * * **regular**: For normal, low-value transactions.
   *
   * * **fast**: A faster way to transfer funds, but the fees are higher. Recommended for
   *   high-priority, low-value transactions.
   *
   * * **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for
   *   high-priority, high-value transactions.
   *
   * * **instant**: For instant funds transfers within the United States and in [SEPA
   *   locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).
   *
   * * **crossBorder**: For high-value transfers to a recipient in a different country.
   *
   * * **internal**: For transfers to an Adyen-issued business bank account (by bank account
   *   number/IBAN).
   */
  priority?: Priority1;
  /** **bank** @default Type310.Bank */
  type?: Type310;
};

export const bankCategoryDataSchema: Schema<BankCategoryData> = s.object<BankCategoryData>({
  priority: s.optional(s.lazy(() => priority1Schema)),
  type: s.defaulted(type310Schema, Type310.Bank),
});
