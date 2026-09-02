import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permitResultSchema, type PermitResult } from "./permit-result.js";

export type CreatePermitResult = {
  permitResultList?: PermitResult[];
  pspReference?: string;
};

export const createPermitResultSchema: Schema<CreatePermitResult> = s.object<CreatePermitResult>({
  permitResultList: s.optional(s.array(s.lazy(() => permitResultSchema))),
  pspReference: s.optional(s.string()),
});
