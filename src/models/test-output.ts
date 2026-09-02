import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TestOutput = {
  merchantId?: string;
  output?: string;
  requestSent?: string;
  responseCode?: string;
  responseTime?: string;
  status: string;
};

export const testOutputSchema: Schema<TestOutput> = s.object<TestOutput>({
  merchantId: s.optional(s.string()),
  output: s.optional(s.string()),
  requestSent: s.optional(s.string()),
  responseCode: s.optional(s.string()),
  responseTime: s.optional(s.string()),
  status: s.string(),
});
