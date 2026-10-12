import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataSwish = {
  /** A Swish shopper's telephone number. */
  swishPayerAlias?: string;
};

export const responseAdditionalDataSwishSchema: Schema<ResponseAdditionalDataSwish> =
  s.object<ResponseAdditionalDataSwish>({
    swishPayerAlias: s.optional(s.string()),
    _keysMap: {
      swishPayerAlias: "swish.payerAlias",
    },
  });
