import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { networkTokenSchema, type NetworkToken } from "./network-token.js";

export type ListNetworkTokensResponse = {
  networkTokens?: NetworkToken[];
};

export const listNetworkTokensResponseSchema: Schema<ListNetworkTokensResponse> =
  s.object<ListNetworkTokensResponse>({
    networkTokens: s.optional(s.array(s.lazy(() => networkTokenSchema))),
  });
