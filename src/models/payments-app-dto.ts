import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentsAppDto = {
  installationId: string;
  merchantAccountCode: string;
  merchantStoreCode?: string;
  status: string;
};

export const paymentsAppDtoSchema: Schema<PaymentsAppDto> = s.object<PaymentsAppDto>({
  installationId: s.string(),
  merchantAccountCode: s.string(),
  merchantStoreCode: s.optional(s.string()),
  status: s.string(),
});
