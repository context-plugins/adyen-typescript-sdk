import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { avsAddress1Schema, type AvsAddress1 } from "./avs-address1.js";
import { expiryMonthSchema, type ExpiryMonth } from "./expiry-month.js";
import {
  threeDDirectoryServerResponseSchema,
  type ThreeDDirectoryServerResponse,
} from "./three-ddirectory-server-response.js";

export type TestCardRange = {
  address?: AvsAddress1;
  cardHolderName: string;
  cvc?: string;
  expiryMonth: ExpiryMonth;
  expiryYear: number;
  rangeEnd: string;
  rangeStart: string;
  threeDDirectoryServerResponse?: ThreeDDirectoryServerResponse;
  threeDPassword?: string;
  threeDUsername?: string;
};

export const testCardRangeSchema: Schema<TestCardRange> = s.object<TestCardRange>({
  address: s.optional(s.lazy(() => avsAddress1Schema)),
  cardHolderName: s.string(),
  cvc: s.optional(s.string()),
  expiryMonth: expiryMonthSchema,
  expiryYear: s.number(),
  rangeEnd: s.string(),
  rangeStart: s.string(),
  threeDDirectoryServerResponse: s.optional(s.lazy(() => threeDDirectoryServerResponseSchema)),
  threeDPassword: s.optional(s.string()),
  threeDUsername: s.optional(s.string()),
});
