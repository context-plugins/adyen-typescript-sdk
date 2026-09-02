import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { contractTypeSchema, type ContractType } from "./contract-type.js";
import { grantOfferFee1Schema, type GrantOfferFee1 } from "./grant-offer-fee1.js";
import { repayment11Schema, type Repayment11 } from "./repayment11.js";

export type GrantOffer1 = {
  accountHolderId: string;
  amount?: Amount17;
  contractType?: ContractType;
  expiresAt?: Date;
  fee?: GrantOfferFee1;
  id?: string;
  repayment?: Repayment11;
  startsAt?: Date;
};

export const grantOffer1Schema: Schema<GrantOffer1> = s.object<GrantOffer1>({
  accountHolderId: s.string(),
  amount: s.optional(s.lazy(() => amount17Schema)),
  contractType: s.optional(s.lazy(() => contractTypeSchema)),
  expiresAt: s.optional(s.dateTime()),
  fee: s.optional(s.lazy(() => grantOfferFee1Schema)),
  id: s.optional(s.string()),
  repayment: s.optional(s.lazy(() => repayment11Schema)),
  startsAt: s.optional(s.dateTime()),
});
