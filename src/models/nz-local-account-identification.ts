import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NzLocalAccountIdentification = {
  accountNumber: string;
  type: "nzLocal";
};

export const nzLocalAccountIdentificationSchema: Schema<NzLocalAccountIdentification> =
  s.object<NzLocalAccountIdentification>({
    accountNumber: s.string(),
    type: s.literal("nzLocal"),
  });
