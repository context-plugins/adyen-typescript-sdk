import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchableAmountDtoSchema, type PatchableAmountDto } from "./patchable-amount-dto.js";

export type PatchableTopUpAmount2 = {
  fixed?: PatchableAmountDto | null;
  target?: PatchableAmountDto | null;
};

export const patchableTopUpAmount2Schema: Schema<PatchableTopUpAmount2> = s.object<PatchableTopUpAmount2>({
  fixed: s.optionalNullable(s.lazy(() => patchableAmountDtoSchema)),
  target: s.optionalNullable(s.lazy(() => patchableAmountDtoSchema)),
});
