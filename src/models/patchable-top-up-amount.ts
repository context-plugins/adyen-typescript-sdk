import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchableAmountDtoSchema, type PatchableAmountDto } from "./patchable-amount-dto.js";

export type PatchableTopUpAmount = {
  /** The fixed amount with which you want to top up the balance account. */
  fixed?: PatchableAmountDto | null;
  /** The target balance for the balance account that the top-up must achieve. */
  target?: PatchableAmountDto | null;
};

export const patchableTopUpAmountSchema: Schema<PatchableTopUpAmount> = s.object<PatchableTopUpAmount>({
  fixed: s.optionalNullable(s.lazy(() => patchableAmountDtoSchema)),
  target: s.optionalNullable(s.lazy(() => patchableAmountDtoSchema)),
});
