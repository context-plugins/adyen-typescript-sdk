import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { contractTypeSchema, type ContractType } from "./contract-type.js";
import { dynamicOfferRepayment2Schema, type DynamicOfferRepayment2 } from "./dynamic-offer-repayment2.js";
import { financingType2Schema, type FinancingType2 } from "./financing-type2.js";

export type DynamicOffer = {
  accountHolderId: string;
  contractType: ContractType;
  expiresAt: Date;
  financingType: FinancingType2;
  id: string;
  maximumAmount: Amount17;
  minimumAmount: Amount17;
  repayment: DynamicOfferRepayment2;
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
