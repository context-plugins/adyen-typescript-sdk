import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { result2Schema, type Result2 } from "./result2.js";

export type SubjectErasureResponse = {
  result?: Result2;
};

export const subjectErasureResponseSchema: Schema<SubjectErasureResponse> = s.object<SubjectErasureResponse>({
  result: s.optional(s.lazy(() => result2Schema)),
});
