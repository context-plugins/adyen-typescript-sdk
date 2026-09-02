import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { contractTypeSchema, type ContractType } from "./contract-type.js";
import { fee1Schema, type Fee1 } from "./fee1.js";
import { repayment2Schema, type Repayment2 } from "./repayment2.js";

export type GrantOffer = {
  accountHolderId: string;
  amount?: Amount17;
  contractType?: ContractType;
  expiresAt?: Date;
  fee?: Fee1;
  id?: string;
  repayment?: Repayment2;
  startsAt?: Date;
};

export const grantOfferSchema: Schema<GrantOffer> = s.object<GrantOffer>({
  accountHolderId: s.string(),
  amount: s.optional(s.lazy(() => amount17Schema)),
  contractType: s.optional(s.lazy(() => contractTypeSchema)),
  expiresAt: s.optional(s.dateTime()),
  fee: s.optional(s.lazy(() => fee1Schema)),
  id: s.optional(s.string()),
  repayment: s.optional(s.lazy(() => repayment2Schema)),
  startsAt: s.optional(s.dateTime()),
});
