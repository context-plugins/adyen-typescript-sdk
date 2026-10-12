import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type410Schema, type Type410 } from "./type410.js";

export type Phone4 = {
  /**
   * The full phone number provided as a single string. For example, **"0031 6 11 22 33 44"**,
   * **"+316/1122-3344"**,
   *
   * or **"(0031) 611223344"**.
   */
  number: string;
  /** Type of phone number. Possible values: **Landline**, **Mobile**. */
  type: Type410;
};

export const phone4Schema: Schema<Phone4> = s.object<Phone4>({
  number: s.string(),
  type: type410Schema,
});
