import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Identity = {
  fullLegalName: string;
  name: string;
};

export const identitySchema: Schema<Identity> = s.object<Identity>({
  fullLegalName: s.string(),
  name: s.string(),
});
