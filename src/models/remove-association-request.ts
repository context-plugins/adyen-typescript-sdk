import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaEntityType3Schema, type ScaEntityType3 } from "./sca-entity-type3.js";

export type RemoveAssociationRequest = {
  /** The unique identifier of the entity. */
  entityId: string;
  /**
   * The type of the entity.
   *
   * Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.
   */
  entityType: ScaEntityType3;
  /** A list of device ids associated with the entity that should be removed. */
  scaDeviceIds: string[];
};

export const removeAssociationRequestSchema: Schema<RemoveAssociationRequest> =
  s.object<RemoveAssociationRequest>({
    entityId: s.string(),
    entityType: scaEntityType3Schema,
    scaDeviceIds: s.array(s.string()),
  });
