import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EftAccountIdentifier2 = {
  accountNumber: string;
  branch: string;
  institution: string;
};

export const eftAccountIdentifier2Schema: Schema<EftAccountIdentifier2> = s.object<EftAccountIdentifier2>({
  accountNumber: s.string(),
  branch: s.string(),
  institution: s.string(),
});
