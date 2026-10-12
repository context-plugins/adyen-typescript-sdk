import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentsAppDto = {
  /** The unique identifier of the Payments App instance. */
  installationId: string;
  /** The account code associated with the Payments App instance. */
  merchantAccountCode: string;
  /** The store code associated with the Payments App instance. */
  merchantStoreCode?: string;
  /** The status of the Payments App instance. */
  status: string;
};

export const paymentsAppDtoSchema: Schema<PaymentsAppDto> = s.object<PaymentsAppDto>({
  installationId: s.string(),
  merchantAccountCode: s.string(),
  merchantStoreCode: s.optional(s.string()),
  status: s.string(),
});
