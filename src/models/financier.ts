import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchableAmountDtoSchema, type PatchableAmountDto } from "./patchable-amount-dto.js";

export type Financier = {
  /** The amount of the funds the financier provided. */
  amount: PatchableAmountDto;
  /** The financier's first name. */
  firstName: string;
  /** The financier's last name. */
  lastName: string;
  /**
   * The city and country/region where the financier is currently located. For example: Chicago, USA
   */
  location: string;
};

export const financierSchema: Schema<Financier> = s.object<Financier>({
  amount: patchableAmountDtoSchema,
  firstName: s.string(),
  lastName: s.string(),
  location: s.string(),
});
