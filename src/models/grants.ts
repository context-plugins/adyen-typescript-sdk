import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantSchema, type Grant } from "./grant.js";

export type Grants = {
  grants: Grant[];
};

export const grantsSchema: Schema<Grants> = s.object<Grants>({
  grants: s.array(s.lazy(() => grantSchema)),
});
