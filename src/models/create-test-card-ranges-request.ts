import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { testCardRangeSchema, type TestCardRange } from "./test-card-range.js";

export type CreateTestCardRangesRequest = {
  accountCode: string;
  accountTypeCode: string;
  testCardRanges: TestCardRange[];
};

export const createTestCardRangesRequestSchema: Schema<CreateTestCardRangesRequest> =
  s.object<CreateTestCardRangesRequest>({
    accountCode: s.string(),
    accountTypeCode: s.string(),
    testCardRanges: s.array(s.lazy(() => testCardRangeSchema)),
  });
