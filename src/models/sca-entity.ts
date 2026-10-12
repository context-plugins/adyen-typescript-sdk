import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaEntityType4Schema, type ScaEntityType4 } from "./sca-entity-type4.js";

export type ScaEntity = {
  /** The unique identifier of the entity. */
  id: string;
  /**
   * The type of the entity that you are associating with the SCA device.
   *
   * Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.
   */
  type: ScaEntityType4;
};

export const scaEntitySchema: Schema<ScaEntity> = s.object<ScaEntity>({
  id: s.string(),
  type: scaEntityType4Schema,
});
