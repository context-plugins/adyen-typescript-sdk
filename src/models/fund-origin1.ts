import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address3Schema, type Address3 } from "./address3.js";
import { name1Schema, type Name1 } from "./name1.js";

export type FundOrigin1 = {
  billingAddress?: Address3;
  shopperEmail?: string;
  shopperName?: Name1;
  telephoneNumber?: string;
  walletIdentifier?: string;
};

export const fundOrigin1Schema: Schema<FundOrigin1> = s.object<FundOrigin1>({
  billingAddress: s.optional(s.lazy(() => address3Schema)),
  shopperEmail: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => name1Schema)),
  telephoneNumber: s.optional(s.string()),
  walletIdentifier: s.optional(s.string()),
});
