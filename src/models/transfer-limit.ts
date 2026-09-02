import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { limitStatusSchema, type LimitStatus } from "./limit-status.js";
import { scaInformation1Schema, type ScaInformation1 } from "./sca-information1.js";
import { scopeSchema, type Scope } from "./scope.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";

export type TransferLimit = {
  amount: Amount17;
  endsAt?: Date;
  id: string;
  limitStatus: LimitStatus;
  reference?: string;
  scaInformation?: ScaInformation1;
  scope: Scope;
  startsAt: Date;
  transferType: TransferType;
};

export const transferLimitSchema: Schema<TransferLimit> = s.object<TransferLimit>({
  amount: amount17Schema,
  endsAt: s.optional(s.dateTime()),
  id: s.string(),
  limitStatus: limitStatusSchema,
  reference: s.optional(s.string()),
  scaInformation: s.optional(s.lazy(() => scaInformation1Schema)),
  scope: scopeSchema,
  startsAt: s.dateTime(),
  transferType: transferTypeSchema,
});
