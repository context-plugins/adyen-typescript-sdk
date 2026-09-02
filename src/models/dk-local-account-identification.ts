import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type191Schema, type Type191 } from "./type191.js";

export type DkLocalAccountIdentification = {
  accountNumber: string;
  bankCode: string;
  type: Type191;
};

export const dkLocalAccountIdentificationSchema: Schema<DkLocalAccountIdentification> =
  s.object<DkLocalAccountIdentification>({
    accountNumber: s.string(),
    bankCode: s.string(),
    type: type191Schema,
  });
