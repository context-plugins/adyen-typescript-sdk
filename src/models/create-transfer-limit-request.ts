import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { createScaInformation1Schema, type CreateScaInformation1 } from "./create-sca-information1.js";
import { scopeSchema, type Scope } from "./scope.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";

export type CreateTransferLimitRequest = {
  /**
   * The amount for the transfer limit. This is the maximum amount allowed per transfer or per day
   * based on the `scope` of the limit.
   */
  amount: Amount17;
  /**
   * The date and time when the transfer limit becomes inactive. If you do not specify an end date,
   * the limit stays active until you override it with a new limit.
   *
   * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**
   */
  endsAt?: Date;
  /** Your reference for the transfer limit. */
  reference?: string;
  /** Information for the Strong Customer Authentication (SCA) */
  scaInformation?: CreateScaInformation1;
  /**
   * The scope to which the transfer limit applies. Possible values:
   * * **perTransaction**: you set a maximum amount for each transfer made from the balance account
   *   or balance platform.
   * * **perDay**: you set a maximum total amount for all transfers made from the balance account or
   *   balance platform in a day.
   */
  scope: Scope;
  /**
   * The date and time when the transfer limit becomes active. If you specify a date in the future,
   * we will schedule a transfer limit.
   *
   * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**
   */
  startsAt?: Date;
  /**
   * The type of transfer to which the limit applies. Possible values:
   * * **instant**: the limit applies to transfers with an **instant** priority.
   * * **all**: the limit applies to all transfers, regardless of priority.
   */
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
