import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DetailsRequestAuthenticationData1 = {
  authenticationOnly?: boolean;
};

export const detailsRequestAuthenticationData1Schema: Schema<DetailsRequestAuthenticationData1> =
  s.object<DetailsRequestAuthenticationData1>({
    authenticationOnly: s.optional(s.boolean()),
  });
