import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { testOutputSchema, type TestOutput } from "./test-output.js";

export type TestWebhookResponse = {
  data?: TestOutput[];
};

export const testWebhookResponseSchema: Schema<TestWebhookResponse> = s.object<TestWebhookResponse>({
  data: s.optional(s.array(s.lazy(() => testOutputSchema))),
});
