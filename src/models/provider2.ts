import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Provider2 = {
  logoUrl: string;
  name: string;
};

export const provider2Schema: Schema<Provider2> = s.object<Provider2>({
  logoUrl: s.string(),
  name: s.string(),
  _keysMap: {
    logoUrl: "logoURL",
  },
});
