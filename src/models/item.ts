import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The token requestor is an entity who requested tokenization of the card for secure payments. */
export type Item = {
  /** The value to provide in the result. */
  id?: string;
  /** The display name. */
  name?: string;
};

export const itemSchema: Schema<Item> = s.object<Item>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
});
