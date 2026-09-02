import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type212Schema, type Type212 } from "./type212.js";

export type HuLocalAccountIdentification = {
  accountNumber: string;
  type: Type212;
};

export const huLocalAccountIdentificationSchema: Schema<HuLocalAccountIdentification> =
  s.object<HuLocalAccountIdentification>({
    accountNumber: s.string(),
    type: type212Schema,
  });
