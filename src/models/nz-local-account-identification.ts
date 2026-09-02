import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type241Schema, type Type241 } from "./type241.js";

export type NzLocalAccountIdentification = {
  accountNumber: string;
  type: Type241;
};

export const nzLocalAccountIdentificationSchema: Schema<NzLocalAccountIdentification> =
  s.object<NzLocalAccountIdentification>({
    accountNumber: s.string(),
    type: type241Schema,
  });
