import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The service for which you are creating the business line.
 *
 *
 *
 * Possible values:
 * * **paymentProcessing**
 * * **issuing**
 * * **banking**
 */
export const Service = {
  PaymentProcessing: "paymentProcessing",
  Issuing: "issuing",
  Banking: "banking",
} as const;
export type Service = (typeof Service)[keyof typeof Service] | (string & {});

export const serviceSchema: EnumSchema<Service> = s.enumOf<Service>(Service);
