import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { associationStatus1Schema, type AssociationStatus1 } from "./association-status1.js";
import { scaEntityType1Schema, type ScaEntityType1 } from "./sca-entity-type1.js";

export type Association = {
  /** The unique identifier of the entity. */
  entityId: string;
  /**
   * The type of entity you are associating the device with.
   *
   * Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.
   */
  entityType: ScaEntityType1;
  /** The unique identifier for the SCA device. */
  scaDeviceId: string;
  /**
   * The status of the association.
   *
   * Possible values: **active** or **pendingApproval**.
   */
  status: AssociationStatus1;
};

export const associationSchema: Schema<Association> = s.object<Association>({
  entityId: s.string(),
  entityType: scaEntityType1Schema,
  scaDeviceId: s.string(),
  status: associationStatus1Schema,
});
