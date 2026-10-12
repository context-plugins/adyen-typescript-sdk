import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentsAppDtoSchema, type PaymentsAppDto } from "./payments-app-dto.js";

export type PaymentsAppResponse = {
  /** List of Payments Apps. */
  paymentsApps: PaymentsAppDto[];
};

export const paymentsAppResponseSchema: Schema<PaymentsAppResponse> = s.object<PaymentsAppResponse>({
  paymentsApps: s.array(s.lazy(() => paymentsAppDtoSchema)),
});
