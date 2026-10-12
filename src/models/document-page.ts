import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type91Schema, type Type91 } from "./type91.js";

export type DocumentPage = {
  pageName?: string;
  pageNumber?: number;
  type?: Type91;
};

export const documentPageSchema: Schema<DocumentPage> = s.object<DocumentPage>({
  pageName: s.optional(s.string()),
  pageNumber: s.optional(s.int()),
  type: s.optional(s.lazy(() => type91Schema)),
});
