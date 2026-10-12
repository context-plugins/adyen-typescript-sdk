import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Empty. Content of the Custom Admin Request message. */
export type AdminRequest = {
  /** Identification of the administrative service to process. */
  serviceIdentification?: string;
};

export const adminRequestSchema: Schema<AdminRequest> = s.object<AdminRequest>({
  serviceIdentification: s.optional(s.string()),
  _keysMap: {
    serviceIdentification: "ServiceIdentification",
  },
});
