import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permitSchema, type Permit } from "./permit.js";

export type CreatePermitRequest = {
  /** The merchant account identifier, with which you want to process the transaction. */
  merchantAccount: string;
  /** The permits to create for this recurring contract. */
  permits: Permit[];
  /** The recurring contract the new permits will use. */
  recurringDetailReference: string;
  /** The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID). */
  shopperReference: string;
};

export const createPermitRequestSchema: Schema<CreatePermitRequest> = s.object<CreatePermitRequest>({
  merchantAccount: s.string(),
  permits: s.array(s.lazy(() => permitSchema)),
  recurringDetailReference: s.string(),
  shopperReference: s.string(),
});
