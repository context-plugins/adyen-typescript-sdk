import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyLinks2Schema, type CompanyLinks2 } from "./company-links2.js";
import { dataCenterSchema, type DataCenter } from "./data-center.js";

export type Company2 = {
  links?: CompanyLinks2;
  dataCenters?: DataCenter[];
  description?: string;
  id?: string;
  name?: string;
  reference?: string;
  status?: string;
};

export const company2Schema: Schema<Company2> = s.object<Company2>({
  links: s.optional(s.lazy(() => companyLinks2Schema)),
  dataCenters: s.optional(s.array(s.lazy(() => dataCenterSchema))),
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  reference: s.optional(s.string()),
  status: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
