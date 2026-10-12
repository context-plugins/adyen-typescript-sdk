import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import {
  cashOutInfoCounterparty1Schema,
  type CashOutInfoCounterparty1,
} from "./cash-out-info-counterparty1.js";
import { fee21Schema, type Fee21 } from "./fee21.js";

export type CashOutInfo = {
  /**
   * Contains the amount of the cashout, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  amount: Amount17;
  /** Contains information about the counterparty of the cashout transfer. */
  counterparty?: CashOutInfoCounterparty1;
  /**
   * Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.
   *
   * Your description of the cashout transfer. This description is used by most banks as the
   * transfer description. We recommend sending a maximum of 140 characters, otherwise the
   * description may be truncated.
   *
   * If you do not provide a description, Adyen generates a description automatically. This
   * generated description is not returned in the response.
   *
   * Supported characters: **[a-z] [A-Z] [0-9] / - ? : ( ) . , ' + Space**.
   */
  description?: string;
  /**
   * Contains the currency and value of the cashout fee, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  fee?: Fee21;
  /** The ID of the resource. */
  id?: string;
  /** The unique identifier of the balance account that initiates the cashout request. */
  instructingBalanceAccountId: string;
  /**
   * Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.
   *
   * The reference that is sent to the recipient of a cashout transfer. This reference is also sent
   * in all webhooks related to the cashout transfer, so you can use it to track the status of the
   * transfer.
   *
   * If you do not provide a reference for the beneficiary, Adyen generates one automatically. This
   * generated reference for the beneficiary is not returned in the response.
   *
   * Supported characters: **a-z**, **A-Z**, **0-9**.
   */
  referenceForBeneficiary?: string;
  /**
   * **Use `counterparty.transferInstrumentId` instead.**
   *
   * The unique identifier of the counterparty transfer instrument.
   *
   * @deprecated
   */
  transferInstrumentId?: string;
};

export const cashOutInfoSchema: Schema<CashOutInfo> = s.object<CashOutInfo>({
  amount: amount17Schema,
  counterparty: s.optional(s.lazy(() => cashOutInfoCounterparty1Schema)),
  description: s.optional(s.string()),
  fee: s.optional(s.lazy(() => fee21Schema)),
  id: s.optional(s.string()),
  instructingBalanceAccountId: s.string(),
  referenceForBeneficiary: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
});
