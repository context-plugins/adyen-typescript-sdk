import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminRequest2 = {
  serviceIdentification?: string;
};

export const adminRequest2Schema: Schema<AdminRequest2> = s.object<AdminRequest2>({
  serviceIdentification: s.optional(s.string()),
  _keysMap: {
    serviceIdentification: "ServiceIdentification",
  },
});
