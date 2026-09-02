import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OwnerEntity2 = {
  id: string;
  type: string;
};

export const ownerEntity2Schema: Schema<OwnerEntity2> = s.object<OwnerEntity2>({
  id: s.string(),
  type: s.string(),
});
