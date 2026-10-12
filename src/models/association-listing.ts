import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { associationStatus1Schema, type AssociationStatus1 } from "./association-status1.js";
import { scaDeviceType3Schema, type ScaDeviceType3 } from "./sca-device-type3.js";
import { scaEntityType2Schema, type ScaEntityType2 } from "./sca-entity-type2.js";

export type AssociationListing = {
  /** The date and time when the association was created. */
  createdAt: Date;
  /** The unique identifier of the entity. */
  entityId: string;
  /**
   * The type of the entity.
   *
   * Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.
   */
  entityType: ScaEntityType2;
  /** The unique identifier of the SCA device. */
  scaDeviceId: string;
  /** The human-readable name for the SCA device that was registered. */
  scaDeviceName?: string;
  /** The type of the device. */
  scaDeviceType: ScaDeviceType3;
  /**
   * The status of the association.
   *
   * Possible values: **active** or **pendingApproval**.
   */
  status: AssociationStatus1;
};

export const associationListingSchema: Schema<AssociationListing> = s.object<AssociationListing>({
  createdAt: s.dateTime(),
  entityId: s.string(),
  entityType: scaEntityType2Schema,
  scaDeviceId: s.string(),
  scaDeviceName: s.optional(s.string()),
  scaDeviceType: scaDeviceType3Schema,
  status: associationStatus1Schema,
});
