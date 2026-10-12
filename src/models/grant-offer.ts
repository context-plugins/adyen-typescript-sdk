import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { contractTypeSchema, type ContractType } from "./contract-type.js";
import { fee1Schema, type Fee1 } from "./fee1.js";
import { repayment2Schema, type Repayment2 } from "./repayment2.js";

export type GrantOffer = {
  /** The identifier of the account holder to which the grant is offered. */
  accountHolderId: string;
  /** The principal amount of the grant. */
  amount?: Amount17;
  /** The contract type of the grant offer. Possible value: **cashAdvance**, **loan**. */
  contractType?: ContractType;
  /** The end date of the grant offer validity period. */
  expiresAt?: Date;
  /** Details of the fee configuration. */
  fee?: Fee1;
  /** The unique identifier of the grant offer. */
  id?: string;
  /** Details of the repayment configuration. */
  repayment?: Repayment2;
  /** The starting date of the grant offer validity period. */
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
