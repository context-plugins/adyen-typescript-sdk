import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssignTerminalsResponse = {
  results: Record<string, string>;
};

export const assignTerminalsResponseSchema: Schema<AssignTerminalsResponse> =
  s.object<AssignTerminalsResponse>({
    results: s.record(s.string(), s.string()),
  });
