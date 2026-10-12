import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataNetworkTokens = {
  /** Indicates whether a network token is available for the specified card. */
  networkTokenAvailable?: string;
  /**
   * The Bank Identification Number of a tokenized card, which is the first six digits of a card
   * number.
   */
  networkTokenBin?: string;
  /** The last four digits of a network token. */
  networkTokenTokenSummary?: string;
};

export const responseAdditionalDataNetworkTokensSchema: Schema<ResponseAdditionalDataNetworkTokens> =
  s.object<ResponseAdditionalDataNetworkTokens>({
    networkTokenAvailable: s.optional(s.string()),
    networkTokenBin: s.optional(s.string()),
    networkTokenTokenSummary: s.optional(s.string()),
    _keysMap: {
      networkTokenAvailable: "networkToken.available",
      networkTokenBin: "networkToken.bin",
      networkTokenTokenSummary: "networkToken.tokenSummary",
    },
  });
