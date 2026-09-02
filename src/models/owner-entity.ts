import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OwnerEntity = {
  id: string;
  type: string;
};

export const ownerEntitySchema: Schema<OwnerEntity> = s.object<OwnerEntity>({
  id: s.string(),
  type: s.string(),
});
