import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokenRequestedType1Schema, type TokenRequestedType1 } from "./token-requested-type1.js";

export type PaymentToken1 = {
  tokenRequestedType: TokenRequestedType1;
  tokenValue: string;
  expiryDateTime?: Date;
};

export const paymentToken1Schema: Schema<PaymentToken1> = s.object<PaymentToken1>({
  tokenRequestedType: tokenRequestedType1Schema,
  tokenValue: s.string(),
  expiryDateTime: s.optional(s.dateTime()),
  _keysMap: {
    tokenRequestedType: "TokenRequestedType",
    tokenValue: "TokenValue",
    expiryDateTime: "ExpiryDateTime",
  },
});
