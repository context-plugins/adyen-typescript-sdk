import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { capitalBalanceSchema, type CapitalBalance } from "./capital-balance.js";
import { fee4Schema, type Fee4 } from "./fee4.js";
import { grantCounterparty2Schema, type GrantCounterparty2 } from "./grant-counterparty2.js";
import { repaymentSchema, type Repayment } from "./repayment.js";
import { status14Schema, type Status14 } from "./status14.js";

export type CapitalGrant = {
  /**
   * An object containing the amount of the grant, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  amount?: Amount17;
  /** An object containing the details of the existing grant. */
  balances: CapitalBalance;
  /** An object containing the details of the receiving party of the grant. */
  counterparty?: GrantCounterparty2;
  /**
   * An object containing the fee currency and value, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  fee?: Fee4;
  /** The identifier of the grant account used for the grant. */
  grantAccountId: string;
  /**
   * The identifier of the grant offer that has been selected and from which the grant details will
   * be used.
   */
  grantOfferId: string;
  /** The identifier of the grant reference. */
  id: string;
  /** An object containing the details of the 30-day repayment threshold. */
  repayment?: Repayment;
  /**
   * The current status of the grant. Possible values: **Pending**, **Active**, **Repaid**,
   * **WrittenOff**, **Failed**, **Revoked**.
   */
  status: Status14;
};

export const capitalGrantSchema: Schema<CapitalGrant> = s.object<CapitalGrant>({
  amount: s.optional(s.lazy(() => amount17Schema)),
  balances: capitalBalanceSchema,
  counterparty: s.optional(s.lazy(() => grantCounterparty2Schema)),
  fee: s.optional(s.lazy(() => fee4Schema)),
  grantAccountId: s.string(),
  grantOfferId: s.string(),
  id: s.string(),
  repayment: s.optional(s.lazy(() => repaymentSchema)),
  status: status14Schema,
});
