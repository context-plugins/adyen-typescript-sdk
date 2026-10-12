import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataOpi = {
  /**
   * Optional boolean indicator. Set to **true** if you want an ecommerce transaction to return an
   * `opi.transToken` as additional data in the response.
   *
   * You can store this Oracle Payment Interface token in your Oracle Opera database. For more
   * information and required settings, see [Oracle
   * Opera](https://docs.adyen.com/plugins/oracle-opera#opi-token-ecommerce).
   */
  opiIncludeTransToken?: string;
};

export const additionalDataOpiSchema: Schema<AdditionalDataOpi> = s.object<AdditionalDataOpi>({
  opiIncludeTransToken: s.optional(s.string()),
  _keysMap: {
    opiIncludeTransToken: "opi.includeTransToken",
  },
});
