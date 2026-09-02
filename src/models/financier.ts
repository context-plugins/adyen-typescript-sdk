import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchableAmountDtoSchema, type PatchableAmountDto } from "./patchable-amount-dto.js";

export type Financier = {
  amount: PatchableAmountDto;
  firstName: string;
  lastName: string;
  location: string;
};

export const financierSchema: Schema<Financier> = s.object<Financier>({
  amount: patchableAmountDtoSchema,
  firstName: s.string(),
  lastName: s.string(),
  location: s.string(),
});
