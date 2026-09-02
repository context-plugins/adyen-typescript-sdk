import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BoardingTokenResponse = {
  boardingToken: string;
  installationId: string;
};

export const boardingTokenResponseSchema: Schema<BoardingTokenResponse> = s.object<BoardingTokenResponse>({
  boardingToken: s.string(),
  installationId: s.string(),
});
