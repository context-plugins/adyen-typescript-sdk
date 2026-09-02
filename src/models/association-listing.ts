import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { associationStatus1Schema, type AssociationStatus1 } from "./association-status1.js";
import { scaDeviceType3Schema, type ScaDeviceType3 } from "./sca-device-type3.js";
import { scaEntityType2Schema, type ScaEntityType2 } from "./sca-entity-type2.js";

export type AssociationListing = {
  createdAt: Date;
  entityId: string;
  entityType: ScaEntityType2;
  scaDeviceId: string;
  scaDeviceName?: string;
  scaDeviceType: ScaDeviceType3;
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
