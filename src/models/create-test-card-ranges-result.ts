import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  testCardRangeCreationResultSchema,
  type TestCardRangeCreationResult,
} from "./test-card-range-creation-result.js";

export type CreateTestCardRangesResult = {
  /** The results of the test card creation. */
  rangeCreationResults: TestCardRangeCreationResult[];
};

export const createTestCardRangesResultSchema: Schema<CreateTestCardRangesResult> =
  s.object<CreateTestCardRangesResult>({
    rangeCreationResults: s.array(s.lazy(() => testCardRangeCreationResultSchema)),
  });
