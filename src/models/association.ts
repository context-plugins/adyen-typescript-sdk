import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { associationStatus1Schema, type AssociationStatus1 } from "./association-status1.js";
import { scaEntityType1Schema, type ScaEntityType1 } from "./sca-entity-type1.js";

export type Association = {
  entityId: string;
  entityType: ScaEntityType1;
  scaDeviceId: string;
  status: AssociationStatus1;
};

export const associationSchema: Schema<Association> = s.object<Association>({
  entityId: s.string(),
  entityType: scaEntityType1Schema,
  scaDeviceId: s.string(),
  status: associationStatus1Schema,
});
