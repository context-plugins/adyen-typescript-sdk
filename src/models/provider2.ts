import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Metadata about the selected provider, including the name and company logo. You can use this
 * information to inform the user about the provider they will be redirected to when they select the
 * link.
 */
export type Provider2 = {
  /**
   * The URL of the organization's or brand's logo. This URL typically points to an image file
   * (e.g., .png, .jpg, .svg) that can be displayed to visually represent the entity.
   */
  logoUrl: string;
  /** The official or commonly used name of the organization, brand, or entity. */
  name: string;
};

export const provider2Schema: Schema<Provider2> = s.object<Provider2>({
  logoUrl: s.string(),
  name: s.string(),
  _keysMap: {
    logoUrl: "logoURL",
  },
});
