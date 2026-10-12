import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The result of the payment. Possible values:
 *
 * * **Success** – The operation has been completed successfully.
 * * **Refused** – The operation was refused. The reason is given in the `refusalReason` field.
 * * **Error** – There was an error when the operation was processed. The reason is given in the
 *   `refusalReason` field.
 * * **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the
 *   request. Only applicable to balance checks.
 */
export const ResultCode3 = {
  Success: "Success",
  Refused: "Refused",
  Error: "Error",
  NotEnoughBalance: "NotEnoughBalance",
} as const;
export type ResultCode3 = (typeof ResultCode3)[keyof typeof ResultCode3] | (string & {});

export const resultCode3Schema: EnumSchema<ResultCode3> = s.enumOf<ResultCode3>(ResultCode3);
