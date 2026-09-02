import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phone11Schema, type Phone11 } from "./phone11.js";

export type Authentication = {
  email?: string;
  password?: string;
  phone?: Phone11;
};

export const authenticationSchema: Schema<Authentication> = s.object<Authentication>({
  email: s.optional(s.string()),
  password: s.optional(s.string()),
  phone: s.optional(s.lazy(() => phone11Schema)),
});
