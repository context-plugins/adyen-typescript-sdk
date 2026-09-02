import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { associationSchema, type Association } from "./association.js";

export type SubmitScaAssociationResponse = {
  scaAssociations: Association[];
};

export const submitScaAssociationResponseSchema: Schema<SubmitScaAssociationResponse> =
  s.object<SubmitScaAssociationResponse>({
    scaAssociations: s.array(s.lazy(() => associationSchema)),
  });
