import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataOpi = {
  /**
   * Returned in the response if you included `opi.includeTransToken: true` in an ecommerce payment
   * request. This contains an Oracle Payment Interface token that you can store in your Oracle
   * Opera database to identify tokenized ecommerce transactions. For more information and required
   * settings, see [Oracle Opera](https://docs.adyen.com/plugins/oracle-opera#opi-token-ecommerce).
   */
  opiTransToken?: string;
};

export const responseAdditionalDataOpiSchema: Schema<ResponseAdditionalDataOpi> =
  s.object<ResponseAdditionalDataOpi>({
    opiTransToken: s.optional(s.string()),
    _keysMap: {
      opiTransToken: "opi.transToken",
    },
  });
