import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { associationSchema, type Association } from "./association.js";

export type ApproveAssociationResponse = {
  scaAssociations: Association[];
};

export const approveAssociationResponseSchema: Schema<ApproveAssociationResponse> =
  s.object<ApproveAssociationResponse>({
    scaAssociations: s.array(s.lazy(() => associationSchema)),
  });
