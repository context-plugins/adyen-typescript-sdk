import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type233Schema, type Type233 } from "./type233.js";

export type DocumentPage = {
  pageName?: string;
  pageNumber?: number;
  type?: Type233;
};

export const documentPageSchema: Schema<DocumentPage> = s.object<DocumentPage>({
  pageName: s.optional(s.string()),
  pageNumber: s.optional(s.number()),
  type: s.optional(s.lazy(() => type233Schema)),
});
