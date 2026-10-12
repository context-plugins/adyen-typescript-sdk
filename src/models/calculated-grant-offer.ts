import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { contractTypeSchema, type ContractType } from "./contract-type.js";
import { grantOfferFee1Schema, type GrantOfferFee1 } from "./grant-offer-fee1.js";
import { repayment11Schema, type Repayment11 } from "./repayment11.js";

export type CalculatedGrantOffer = {
  /** The unique identifier of the account holder that the dynamic offer is for. */
  accountHolderId: string;
  /** The financing amount that would be paid out to your user. */
  amount: Amount17;
  /**
   * The contract type of the offer.
   *
   * Possible values:
   * * **loan**
   * * **cashAdvance**
   */
  contractType: ContractType;
  /** The expiration date and time of the offer validity period. */
  expiresAt: Date;
  /** Contains information about the fee that your user would pay for the grant. */
  fee: GrantOfferFee1;
  /** Contains information about the repayment configuration of the grant. */
  repayment: Repayment11;
  /** The starting date and time of the offer validity period. */
  startsAt: Date;
};

export const calculatedGrantOfferSchema: Schema<CalculatedGrantOffer> = s.object<CalculatedGrantOffer>({
  accountHolderId: s.string(),
  amount: amount17Schema,
  contractType: contractTypeSchema,
  expiresAt: s.dateTime(),
  fee: grantOfferFee1Schema,
  repayment: repayment11Schema,
  startsAt: s.dateTime(),
});
