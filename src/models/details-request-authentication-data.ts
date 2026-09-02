import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DetailsRequestAuthenticationData = {
  authenticationOnly?: boolean;
};

export const detailsRequestAuthenticationDataSchema: Schema<DetailsRequestAuthenticationData> =
  s.object<DetailsRequestAuthenticationData>({
    authenticationOnly: s.optional(s.boolean()),
  });
