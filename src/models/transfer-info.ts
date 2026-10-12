import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { category3Schema, type Category3 } from "./category3.js";
import { counterpartyInfoV31Schema, type CounterpartyInfoV31 } from "./counterparty-info-v31.js";
import { executionDate3Schema, type ExecutionDate3 } from "./execution-date3.js";
import { priority1Schema, type Priority1 } from "./priority1.js";
import { transferRequestReview2Schema, type TransferRequestReview2 } from "./transfer-request-review2.js";
import { type113Schema, type Type113 } from "./type113.js";
import {
  ultimatePartyIdentification1Schema,
  type UltimatePartyIdentification1,
} from "./ultimate-party-identification1.js";

export type TransferInfo = {
  /** The amount of the transfer. */
  amount: Amount17;
  /**
   * The unique identifier of the source [balance
   * account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).
   *
   * If you want to make a transfer using a **virtual** **bankAccount** assigned to the balance
   * account, you must specify the [payment instrument
   * ID](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id)
   * of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the
   * default **physical** **bankAccount** payment instrument assigned to the balance account.
   */
  balanceAccountId?: string;
  /**
   * The category of the transfer.
   *
   * Possible values:
   *
   *  - **bank**: A transfer involving a [transfer
   *    instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id)
   *    or a bank account.
   *
   * - **card**: A transfer involving a third-party card.
   *
   * - **internal**: A transfer between [balance
   *   accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id)
   *   within your platform.
   *
   * - **issuedCard**: A transfer initiated by an Adyen-issued card.
   *
   * - **platformPayment**: Funds movements related to payments that are acquired for your users.
   *
   * - **topUp**: An incoming transfer initiated by your user to top up their balance account.
   */
  category: Category3;
  /**
   * The other party involved in the funds transfer. A bank account, a balance account, a card, or a
   * transfer instrument is required.
   */
  counterparty: CounterpartyInfoV31;
  /**
   * Your description for the transfer. It is used by most banks as the transfer description. We
   * recommend sending a maximum of 140 characters, otherwise the description may be truncated.
   *
   * Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**
   *
   * Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z]
   * [0-9] & $ % # \@** **~ = + - _ ' " ! ?**
   */
  description?: string;
  /**
   * The date when the transfer will be processed. This date must be within 30 days of the current
   * date.
   *
   * Until the `executionDate`:
   * - The `status` of the transfer remains as **received**.
   * - The `reason` of the transfer remains as **pending**.
   */
  executionDate?: ExecutionDate3;
  /**
   * The unique identifier of the source [payment
   * instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id).
   *
   * If you want to make a transfer using a **virtual** **bankAccount**, you must specify the
   * payment instrument ID of the **virtual** **bankAccount**. If you only specify a balance account
   * ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the
   * balance account.
   */
  paymentInstrumentId?: string;
  /**
   * The list of priorities for the bank transfer. This sets the speed at which the transfer is sent
   * and the fees that you have to pay. You can provide multiple priorities. Adyen will try to pay
   * out using the priority you list first. If that's not possible, it moves on to the next option
   * in the order of your provided priorities.
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
   *
   * Required for transfers with `category` **bank**. For more details, see [fallback
   * priorities](https://docs.adyen.com/payouts/payout-service/payout-to-users/#fallback-priorities).
   */
  priorities?: Priority1[];
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
  /**
   * Your reference for the transfer, used internally within your platform. If you don't provide
   * this in the request, Adyen generates a unique reference.
   */
  reference?: string;
  /**
   * A reference that is sent to the recipient. This reference is also sent in all webhooks related
   * to the transfer, so you can use it to track statuses for both parties involved in the funds
   * movement.
   *
   * Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.
   *
   * - **internal**: 80 characters
   *
   * - **bank**: 35 characters when transferring to an IBAN, 15 characters for others.
   */
  referenceForBeneficiary?: string;
  /** Contains information required for triggering transfer reviews. */
  review?: TransferRequestReview2;
  /**
   * The type of transfer.
   *
   * Possible values:
   *
   *  - **bankTransfer**: for push transfers to a transfer instrument or a bank account. The
   *    `category` must be **bank**.
   * - **internalTransfer**: for push transfers between balance accounts. The `category` must be
   *   **internal**.
   * - **internalDirectDebit**: for pull transfers (direct debits) between balance accounts. The
   *   `category` must be **internal**.
   */
  type?: Type113;
  /** The ultimate sender of the funds of the transfer (ultimate debtor). */
  ultimateParty?: UltimatePartyIdentification1;
};

export const transferInfoSchema: Schema<TransferInfo> = s.object<TransferInfo>({
  amount: amount17Schema,
  balanceAccountId: s.optional(s.string()),
  category: category3Schema,
  counterparty: counterpartyInfoV31Schema,
  description: s.optional(s.string()),
  executionDate: s.optional(s.lazy(() => executionDate3Schema)),
  paymentInstrumentId: s.optional(s.string()),
  priorities: s.optional(s.array(s.lazy(() => priority1Schema))),
  priority: s.optional(s.lazy(() => priority1Schema)),
  reference: s.optional(s.string()),
  referenceForBeneficiary: s.optional(s.string()),
  review: s.optional(s.lazy(() => transferRequestReview2Schema)),
  type: s.optional(s.lazy(() => type113Schema)),
  ultimateParty: s.optional(s.lazy(() => ultimatePartyIdentification1Schema)),
});
