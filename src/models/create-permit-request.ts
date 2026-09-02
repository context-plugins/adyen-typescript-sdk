import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permitSchema, type Permit } from "./permit.js";

export type CreatePermitRequest = {
  merchantAccount: string;
  permits: Permit[];
  recurringDetailReference: string;
  shopperReference: string;
};

export const createPermitRequestSchema: Schema<CreatePermitRequest> = s.object<CreatePermitRequest>({
  merchantAccount: s.string(),
  permits: s.array(s.lazy(() => permitSchema)),
  recurringDetailReference: s.string(),
  shopperReference: s.string(),
});
