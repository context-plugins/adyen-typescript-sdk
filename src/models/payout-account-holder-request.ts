import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { PayoutSpeed, payoutSpeedSchema } from "./payout-speed.js";

export type PayoutAccountHolderRequest = {
  /** The code of the account from which the payout is to be made. */
  accountCode: string;
  /**
   * The code of the Account Holder who owns the account from which the payout is to be made. The
   * Account Holder is the party to which the payout will be made.
   */
  accountHolderCode: string;
  /**
   * An object containing the currency and value of the payout. If the account has multiple
   * currencies, specify the currency to be used. If the `bankAccountUUID` is provided in the
   * request, the currency supported by the bank is used. If the `payoutMethodCode` is provided in
   * the request, the specified payout method is selected.
   */
  amount?: Amount;
  /**
   * The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.
   * If left blank, a bank account is automatically selected.
   */
  bankAccountUuid?: string;
  /**
   * A description of the payout. Maximum 200 characters. Allowed:
   * **abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?:().,'+ ";**
   */
  description?: string;
  /**
   * A value that can be supplied at the discretion of the executing user in order to link multiple
   * transactions to one another.
   */
  merchantReference?: string;
  /**
   * The unique ID of the payout method held by the Account Holder to which the payout is to be
   * made. If left blank, a payout instrument is automatically selected.
   */
  payoutMethodCode?: string;
  /**
   * Speed with which payouts for this account are processed. Permitted values: `STANDARD`,
   * `SAME_DAY`.
   *
   * @default PayoutSpeed.Standard
   */
  payoutSpeed?: PayoutSpeed;
};

export const payoutAccountHolderRequestSchema: Schema<PayoutAccountHolderRequest> =
  s.object<PayoutAccountHolderRequest>({
    accountCode: s.string(),
    accountHolderCode: s.string(),
    amount: s.optional(s.lazy(() => amountSchema)),
    bankAccountUuid: s.optional(s.string()),
    description: s.optional(s.string()),
    merchantReference: s.optional(s.string()),
    payoutMethodCode: s.optional(s.string()),
    payoutSpeed: s.defaulted(payoutSpeedSchema, PayoutSpeed.Standard),
    _keysMap: {
      bankAccountUuid: "bankAccountUUID",
    },
  });
