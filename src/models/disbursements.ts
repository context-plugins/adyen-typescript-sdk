import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disbursementSchema, type Disbursement } from "./disbursement.js";

export type Disbursements = {
  disbursements: Disbursement[];
};

export const disbursementsSchema: Schema<Disbursements> = s.object<Disbursements>({
  disbursements: s.array(s.lazy(() => disbursementSchema)),
});
