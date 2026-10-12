import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { counterparty1Schema, type Counterparty1 } from "./counterparty1.js";
import { priority1Schema, type Priority1 } from "./priority1.js";

export type TransferRouteRequest = {
  /**
   * The unique identifier of the source [balance
   * account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
   * Required if `counterparty` is **transferInstrumentId**.
   */
  balanceAccountId?: string;
  /** The unique identifier assigned to the balance platform associated with the account holder. */
  balancePlatform: string;
  /**
   * The type of transfer. Possible values:
   *
   *   - **bank**: Transfer to a [transfer
   *     instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id)
   *     or a bank account.
   *
   * @default "bank"
   */
  category?: "bank";
  /** The recipient of the funds transfer. A bank account or a transfer instrument. */
  counterparty?: Counterparty1;
  /**
   * The two-character ISO-3166-1 alpha-2 country code of the counterparty. For example, **US** or
   * **NL**. > Either `counterparty` or `country` field must be provided in a transfer route
   * request.
   */
  country?: string;
  /** The three-character ISO currency code of transfer. For example, **USD** or **EUR**. */
  currency: string;
  /**
   * The list of priorities for the bank transfer. Priorities set the speed at which the transfer is
   * sent and the fees that you have to pay. Multiple values can be provided. Possible values:
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
  priorities?: Priority1[];
};

export const transferRouteRequestSchema: Schema<TransferRouteRequest> = s.object<TransferRouteRequest>({
  balanceAccountId: s.optional(s.string()),
  balancePlatform: s.string(),
  category: s.defaulted(s.literal("bank"), "bank"),
  counterparty: s.optional(s.lazy(() => counterparty1Schema)),
  country: s.optional(s.string()),
  currency: s.string(),
  priorities: s.optional(s.array(s.lazy(() => priority1Schema))),
});
