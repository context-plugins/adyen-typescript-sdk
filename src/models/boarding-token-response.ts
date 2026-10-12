import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BoardingTokenResponse = {
  /** The boarding token that allows the Payments App to board. */
  boardingToken: string;
  /** The unique identifier of the Payments App instance. */
  installationId: string;
};

export const boardingTokenResponseSchema: Schema<BoardingTokenResponse> = s.object<BoardingTokenResponse>({
  boardingToken: s.string(),
  installationId: s.string(),
});
