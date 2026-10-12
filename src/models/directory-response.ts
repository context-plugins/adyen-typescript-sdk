import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** In 3D Secure 2, this is the `transStatus` from the `ARes`. */
export const DirectoryResponse = {
  A: "A",
  C: "C",
  D: "D",
  I: "I",
  N: "N",
  R: "R",
  U: "U",
  Y: "Y",
} as const;
export type DirectoryResponse = (typeof DirectoryResponse)[keyof typeof DirectoryResponse] | (string & {});

export const directoryResponseSchema: EnumSchema<DirectoryResponse> =
  s.enumOf<DirectoryResponse>(DirectoryResponse);
