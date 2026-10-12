import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Content of the Admin Request message. */
export type AdminRequest2 = {
  /** Identification of the administrative service to process. */
  serviceIdentification?: string;
};

export const adminRequest2Schema: Schema<AdminRequest2> = s.object<AdminRequest2>({
  serviceIdentification: s.optional(s.string()),
  _keysMap: {
    serviceIdentification: "ServiceIdentification",
  },
});
