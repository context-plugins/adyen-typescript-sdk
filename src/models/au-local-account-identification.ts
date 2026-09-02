import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type44Schema, type Type44 } from "./type44.js";

export type AuLocalAccountIdentification = {
  accountNumber: string;
  bsbCode: string;
  type: Type44;
};

export const auLocalAccountIdentificationSchema: Schema<AuLocalAccountIdentification> =
  s.object<AuLocalAccountIdentification>({
    accountNumber: s.string(),
    bsbCode: s.string(),
    type: type44Schema,
  });
