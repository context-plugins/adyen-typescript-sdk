import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Provider = {
  /**
   * The URL of the organization's or brand's logo. This URL typically points to an image file
   * (e.g., .png, .jpg, .svg) that can be displayed to visually represent the entity.
   */
  logoUrl: string;
  /** The official or commonly used name of the organization, brand, or entity. */
  name: string;
};

export const providerSchema: Schema<Provider> = s.object<Provider>({
  logoUrl: s.string(),
  name: s.string(),
  _keysMap: {
    logoUrl: "logoURL",
  },
});
