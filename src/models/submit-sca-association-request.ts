import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaEntitySchema, type ScaEntity } from "./sca-entity.js";

export type SubmitScaAssociationRequest = {
  /** The list of entities to be associated. */
  entities: ScaEntity[];
};

export const submitScaAssociationRequestSchema: Schema<SubmitScaAssociationRequest> =
  s.object<SubmitScaAssociationRequest>({
    entities: s.array(s.lazy(() => scaEntitySchema)),
  });
