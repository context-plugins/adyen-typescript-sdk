import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaEntityType3Schema, type ScaEntityType3 } from "./sca-entity-type3.js";

export type RemoveAssociationRequest = {
  entityId: string;
  entityType: ScaEntityType3;
  scaDeviceIds: string[];
};

export const removeAssociationRequestSchema: Schema<RemoveAssociationRequest> =
  s.object<RemoveAssociationRequest>({
    entityId: s.string(),
    entityType: scaEntityType3Schema,
    scaDeviceIds: s.array(s.string()),
  });
