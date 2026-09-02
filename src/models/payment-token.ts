import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokenRequestedType1Schema, type TokenRequestedType1 } from "./token-requested-type1.js";

export type PaymentToken = {
  tokenRequestedType: TokenRequestedType1;
  tokenValue: string;
  expiryDateTime?: Date;
};

export const paymentTokenSchema: Schema<PaymentToken> = s.object<PaymentToken>({
  tokenRequestedType: tokenRequestedType1Schema,
  tokenValue: s.string(),
  expiryDateTime: s.optional(s.dateTime()),
  _keysMap: {
    tokenRequestedType: "TokenRequestedType",
    tokenValue: "TokenValue",
    expiryDateTime: "ExpiryDateTime",
  },
});
