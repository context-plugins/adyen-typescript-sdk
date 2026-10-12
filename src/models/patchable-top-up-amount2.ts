import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchableAmountDtoSchema, type PatchableAmountDto } from "./patchable-amount-dto.js";

/**
 * The currency and value to be added to the balance account, specified in minor units. This can be
 * a fixed amount or a target amount.
 */
export type PatchableTopUpAmount2 = {
  /** The fixed amount with which you want to top up the balance account. */
  fixed?: PatchableAmountDto | null;
  /** The target balance for the balance account that the top-up must achieve. */
  target?: PatchableAmountDto | null;
};

export const patchableTopUpAmount2Schema: Schema<PatchableTopUpAmount2> = s.object<PatchableTopUpAmount2>({
  fixed: s.optionalNullable(s.lazy(() => patchableAmountDtoSchema)),
  target: s.optionalNullable(s.lazy(() => patchableAmountDtoSchema)),
});
