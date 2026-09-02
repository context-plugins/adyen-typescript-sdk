import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type112Schema, type Type112 } from "./type112.js";

export type AssociationInitiateRequest = {
  ids: string[];
  type: Type112;
};

export const associationInitiateRequestSchema: Schema<AssociationInitiateRequest> =
  s.object<AssociationInitiateRequest>({
    ids: s.array(s.string()),
    type: type112Schema,
  });
