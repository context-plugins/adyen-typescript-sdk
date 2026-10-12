import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capitalGrantSchema, type CapitalGrant } from "./capital-grant.js";

export type CapitalGrants = {
  /** The unique identifier of the grant. */
  grants: CapitalGrant[];
};

export const capitalGrantsSchema: Schema<CapitalGrants> = s.object<CapitalGrants>({
  grants: s.array(s.lazy(() => capitalGrantSchema)),
});
