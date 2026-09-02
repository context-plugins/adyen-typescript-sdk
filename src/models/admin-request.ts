import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminRequest = {
  serviceIdentification?: string;
};

export const adminRequestSchema: Schema<AdminRequest> = s.object<AdminRequest>({
  serviceIdentification: s.optional(s.string()),
  _keysMap: {
    serviceIdentification: "ServiceIdentification",
  },
});
