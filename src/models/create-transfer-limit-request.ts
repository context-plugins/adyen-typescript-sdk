import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { createScaInformation1Schema, type CreateScaInformation1 } from "./create-sca-information1.js";
import { scopeSchema, type Scope } from "./scope.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";

export type CreateTransferLimitRequest = {
  amount: Amount17;
  endsAt?: Date;
  reference?: string;
  scaInformation?: CreateScaInformation1;
  scope: Scope;
  startsAt?: Date;
  transferType: TransferType;
};

export const createTransferLimitRequestSchema: Schema<CreateTransferLimitRequest> =
  s.object<CreateTransferLimitRequest>({
    amount: amount17Schema,
    endsAt: s.optional(s.dateTime()),
    reference: s.optional(s.string()),
    scaInformation: s.optional(s.lazy(() => createScaInformation1Schema)),
    scope: scopeSchema,
    startsAt: s.optional(s.dateTime()),
    transferType: transferTypeSchema,
  });
