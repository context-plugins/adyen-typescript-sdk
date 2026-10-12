import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Length of time since the cardholder’s account information with the 3DS Requestor was last
 * changed, including Billing or Shipping address, new payment account, or new user(s) added.
 * Allowed values:
 * * **01** — Changed during this transaction
 * * **02** — Less than 30 days
 * * **03** — 30–60 days
 * * **04** — More than 60 days, Indicates when the shipping address used for this transaction was
 *   first used with the 3DS Requestor. Allowed values:
 * * **01** — This transaction
 * * **02** — Less than 30 days
 * * **03** — 30–60 days
 * * **04** — More than 60 days, Mechanism used by the Cardholder to previously authenticate to the
 *   3DS Requestor. Allowed values:
 * * **01** — Frictionless authentication occurred by ACS.
 * * **02** — Cardholder challenge occurred by ACS.
 * * **03** — AVS verified.
 * * **04** — Other issuer methods.
 */
export const ChAccChangeInd = {
  _01: "01",
  _02: "02",
  _03: "03",
  _04: "04",
} as const;
export type ChAccChangeInd = (typeof ChAccChangeInd)[keyof typeof ChAccChangeInd] | (string & {});

export const chAccChangeIndSchema: EnumSchema<ChAccChangeInd> = s.enumOf<ChAccChangeInd>(ChAccChangeInd);
