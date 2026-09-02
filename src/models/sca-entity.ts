import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaEntityType4Schema, type ScaEntityType4 } from "./sca-entity-type4.js";

export type ScaEntity = {
  id: string;
  type: ScaEntityType4;
};

export const scaEntitySchema: Schema<ScaEntity> = s.object<ScaEntity>({
  id: s.string(),
  type: scaEntityType4Schema,
});
