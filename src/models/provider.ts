import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Provider = {
  logoUrl: string;
  name: string;
};

export const providerSchema: Schema<Provider> = s.object<Provider>({
  logoUrl: s.string(),
  name: s.string(),
  _keysMap: {
    logoUrl: "logoURL",
  },
});
