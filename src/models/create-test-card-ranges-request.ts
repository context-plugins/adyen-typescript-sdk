import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { testCardRangeSchema, type TestCardRange } from "./test-card-range.js";

export type CreateTestCardRangesRequest = {
  /** The code of the account, for which the test card ranges should be created. */
  accountCode: string;
  /**
   * The type of the account, for which the test card ranges should be created.
   *
   * Permitted values:
   * * Company
   * * MerchantAccount > These values are case-sensitive.
   */
  accountTypeCode: string;
  /** A list of test card ranges to create. */
  testCardRanges: TestCardRange[];
};

export const createTestCardRangesRequestSchema: Schema<CreateTestCardRangesRequest> =
  s.object<CreateTestCardRangesRequest>({
    accountCode: s.string(),
    accountTypeCode: s.string(),
    testCardRanges: s.array(s.lazy(() => testCardRangeSchema)),
  });
