import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type231Schema, type Type231 } from "./type231.js";

export type NoLocalAccountIdentification = {
  accountNumber: string;
  type: Type231;
};

export const noLocalAccountIdentificationSchema: Schema<NoLocalAccountIdentification> =
  s.object<NoLocalAccountIdentification>({
    accountNumber: s.string(),
    type: type231Schema,
  });
