import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { category2Schema, type Category2 } from "./category2.js";
import { priority2Schema, type Priority2 } from "./priority2.js";
import { requirementSchema, type Requirement } from "./unions/requirement.js";

export type TransferRoute = {
  /**
   * The type of transfer.
   *
   * Possible values:
   *
   *   - **bank**: Transfer to a [transfer
   *     instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id)
   *     or a bank account.
   */
  category?: Category2;
  /**
   * The two-character ISO-3166-1 alpha-2 country code of the counterparty. For example, **US** or
   * **NL**.
   */
  country?: string;
  /** The three-character ISO currency code of transfer. For example, **USD** or **EUR**. */
  currency?: string;
  /**
   * The priority for the bank transfer. This sets the speed at which the transfer is sent and the
   * fees that you have to pay. Possible values:
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
  priority?: Priority2;
  /**
   * A set of rules defined by clearing houses and banking partners. Your transfer request must
   * adhere to these rules to ensure successful initiation of transfer. Based on the priority, one
   * or more requirements may be returned. Each requirement is defined with a `type` and
   * `description`.
   */
  requirements?: Requirement[];
};

export const transferRouteSchema: Schema<TransferRoute> = s.object<TransferRoute>({
  category: s.optional(s.lazy(() => category2Schema)),
  country: s.optional(s.string()),
  currency: s.optional(s.string()),
  priority: s.optional(s.lazy(() => priority2Schema)),
  requirements: s.optional(s.array(s.lazy(() => requirementSchema))),
});
