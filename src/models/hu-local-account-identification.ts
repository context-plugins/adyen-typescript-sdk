import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HuLocalAccountIdentification = {
  accountNumber: string;
  type: "huLocal";
};

export const huLocalAccountIdentificationSchema: Schema<HuLocalAccountIdentification> =
  s.object<HuLocalAccountIdentification>({
    accountNumber: s.string(),
    type: s.literal("huLocal"),
  });
