import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BoardingTokenRequest = {
  boardingRequestToken: string;
};

export const boardingTokenRequestSchema: Schema<BoardingTokenRequest> = s.object<BoardingTokenRequest>({
  boardingRequestToken: s.string(),
});
