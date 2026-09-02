import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { contractTypeSchema, type ContractType } from "./contract-type.js";
import { grantOfferFee1Schema, type GrantOfferFee1 } from "./grant-offer-fee1.js";
import { repayment11Schema, type Repayment11 } from "./repayment11.js";

export type CalculatedGrantOffer = {
  accountHolderId: string;
  amount: Amount17;
  contractType: ContractType;
  expiresAt: Date;
  fee: GrantOfferFee1;
  repayment: Repayment11;
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
