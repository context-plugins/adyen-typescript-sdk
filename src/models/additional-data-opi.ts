import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataOpi = {
  opiIncludeTransToken?: string;
};

export const additionalDataOpiSchema: Schema<AdditionalDataOpi> = s.object<AdditionalDataOpi>({
  opiIncludeTransToken: s.optional(s.string()),
  _keysMap: {
    opiIncludeTransToken: "opi.includeTransToken",
  },
});
