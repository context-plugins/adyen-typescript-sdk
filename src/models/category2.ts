import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of transfer.
 *
 * Possible values:
 *
 *   - **bank**: Transfer to a [transfer
 *     instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id)
 *     or a bank account.
 */
export const Category2 = {
  Bank: "bank",
  Card: "card",
  Grants: "grants",
  Interest: "interest",
  Internal: "internal",
  IssuedCard: "issuedCard",
  Migration: "migration",
  PlatformPayment: "platformPayment",
  TopUp: "topUp",
  Upgrade: "upgrade",
} as const;
export type Category2 = (typeof Category2)[keyof typeof Category2] | (string & {});

export const category2Schema: EnumSchema<Category2> = s.enumOf<Category2>(Category2);
