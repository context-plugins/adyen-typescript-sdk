import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { associationStatus1Schema, type AssociationStatus1 } from "./association-status1.js";
import { scaEntityType2Schema, type ScaEntityType2 } from "./sca-entity-type2.js";

export type ApproveAssociationRequest = {
  entityId: string;
  entityType: ScaEntityType2;
  scaDeviceIds: string[];
  status: AssociationStatus1;
};

export const approveAssociationRequestSchema: Schema<ApproveAssociationRequest> =
  s.object<ApproveAssociationRequest>({
    entityId: s.string(),
    entityType: scaEntityType2Schema,
    scaDeviceIds: s.array(s.string()),
    status: associationStatus1Schema,
  });
