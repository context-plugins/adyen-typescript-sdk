import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address3Schema, type Address3 } from "./address3.js";
import { name1Schema, type Name1 } from "./name1.js";

export type FundOrigin = {
  /** The address where to send the invoice. */
  billingAddress?: Address3;
  /** The email address of the person funding the money. */
  shopperEmail?: string;
  /** The name of the person funding the money. */
  shopperName?: Name1;
  /** The phone number of the person funding the money. */
  telephoneNumber?: string;
  /** The unique identifier of the wallet where the funds are coming from. */
  walletIdentifier?: string;
};

export const fundOriginSchema: Schema<FundOrigin> = s.object<FundOrigin>({
  billingAddress: s.optional(s.lazy(() => address3Schema)),
  shopperEmail: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => name1Schema)),
  telephoneNumber: s.optional(s.string()),
  walletIdentifier: s.optional(s.string()),
});
