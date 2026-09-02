import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataNetworkTokens = {
  networkTokenAvailable?: string;
  networkTokenBin?: string;
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
