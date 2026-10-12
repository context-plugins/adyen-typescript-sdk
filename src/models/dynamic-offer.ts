import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { contractTypeSchema, type ContractType } from "./contract-type.js";
import { dynamicOfferRepayment2Schema, type DynamicOfferRepayment2 } from "./dynamic-offer-repayment2.js";
import { financingType2Schema, type FinancingType2 } from "./financing-type2.js";

export type DynamicOffer = {
  /** The unique identifier of the account holder that the dynamic offer is for. */
  accountHolderId: string;
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
  /**
   * The type of financing that the offer is for.
   *
   * Possible values: **businessFinancing**.
   */
  financingType: FinancingType2;
  /** The unique identifier of the dynamic offer. */
  id: string;
  /** The maximum financing amount available to the account holder under this offer. */
  maximumAmount: Amount17;
  /** The minimum financing amount available to the account holder under this offer. */
  minimumAmount: Amount17;
  /** Contains information about the repayment configuration of the grant. */
  repayment: DynamicOfferRepayment2;
  /** The starting date and time of the offer validity period. */
  startsAt: Date;
};

export const dynamicOfferSchema: Schema<DynamicOffer> = s.object<DynamicOffer>({
  accountHolderId: s.string(),
  contractType: contractTypeSchema,
  expiresAt: s.dateTime(),
  financingType: financingType2Schema,
  id: s.string(),
  maximumAmount: amount17Schema,
  minimumAmount: amount17Schema,
  repayment: dynamicOfferRepayment2Schema,
  startsAt: s.dateTime(),
});
