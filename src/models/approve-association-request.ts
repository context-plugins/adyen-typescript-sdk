import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { associationStatus1Schema, type AssociationStatus1 } from "./association-status1.js";
import { scaEntityType2Schema, type ScaEntityType2 } from "./sca-entity-type2.js";

export type ApproveAssociationRequest = {
  /** The unique identifier of the entity. */
  entityId: string;
  /**
   * The type of the entity.
   *
   * Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.
   */
  entityType: ScaEntityType2;
  /** List of device ids associated to the entity that will be approved. */
  scaDeviceIds: string[];
  /**
   * The status of the association.
   *
   * Possible values: **active** or **pendingApproval**.
   */
  status: AssociationStatus1;
};

export const approveAssociationRequestSchema: Schema<ApproveAssociationRequest> =
  s.object<ApproveAssociationRequest>({
    entityId: s.string(),
    entityType: scaEntityType2Schema,
    scaDeviceIds: s.array(s.string()),
    status: associationStatus1Schema,
  });
