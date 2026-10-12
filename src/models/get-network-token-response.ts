import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { networkToken2Schema, type NetworkToken2 } from "./network-token2.js";

export type GetNetworkTokenResponse = {
  /** The details of the network token. */
  token: NetworkToken2;
};

export const getNetworkTokenResponseSchema: Schema<GetNetworkTokenResponse> =
  s.object<GetNetworkTokenResponse>({
    token: networkToken2Schema,
  });
