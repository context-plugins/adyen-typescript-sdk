import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type121Schema, type Type121 } from "./type121.js";

export type AssociationFinaliseResponse = {
  deviceId?: string;
  ids?: string[];
  type: Type121;
};

export const associationFinaliseResponseSchema: Schema<AssociationFinaliseResponse> =
  s.object<AssociationFinaliseResponse>({
    deviceId: s.optional(s.string()),
    ids: s.optional(s.array(s.string())),
    type: type121Schema,
  });
