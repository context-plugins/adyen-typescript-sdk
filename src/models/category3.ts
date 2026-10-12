import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The category of the transfer.
 *
 * Possible values:
 *
 *  - **bank**: A transfer involving a [transfer
 *    instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id)
 *    or a bank account.
 *
 * - **card**: A transfer involving a third-party card.
 *
 * - **internal**: A transfer between [balance
 *   accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id)
 *   within your platform.
 *
 * - **issuedCard**: A transfer initiated by an Adyen-issued card.
 *
 * - **platformPayment**: Funds movements related to payments that are acquired for your users.
 *
 * - **topUp**: An incoming transfer initiated by your user to top up their balance account.
 */
export const Category3 = {
  Bank: "bank",
  Card: "card",
  Internal: "internal",
  IssuedCard: "issuedCard",
  PlatformPayment: "platformPayment",
  TopUp: "topUp",
} as const;
export type Category3 = (typeof Category3)[keyof typeof Category3] | (string & {});

export const category3Schema: EnumSchema<Category3> = s.enumOf<Category3>(Category3);
