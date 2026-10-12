import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The result of the cancellation request.
 *
 * Possible values:
 *
 * * **Success** – Indicates that the balance check was successful.
 * * **NotEnoughBalance** – Commonly indicates that the card did not have enough balance to pay the
 *   amount in the request, or that the currency of the balance on the card did not match the
 *   currency of the requested amount.
 * * **Failed** – Indicates that the balance check failed.
 */
export const ResultCode = {
  Success: "Success",
  NotEnoughBalance: "NotEnoughBalance",
  Failed: "Failed",
} as const;
export type ResultCode = (typeof ResultCode)[keyof typeof ResultCode] | (string & {});

export const resultCodeSchema: EnumSchema<ResultCode> = s.enumOf<ResultCode>(ResultCode);
