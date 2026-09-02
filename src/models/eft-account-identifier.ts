import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EftAccountIdentifier = {
  accountNumber: string;
  branch: string;
  institution: string;
};

export const eftAccountIdentifierSchema: Schema<EftAccountIdentifier> = s.object<EftAccountIdentifier>({
  accountNumber: s.string(),
  branch: s.string(),
  institution: s.string(),
});
