import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import {
  balanceTransferRequestSchema,
  type BalanceTransferRequest,
} from "../models/balance-transfer-request.js";
import {
  balanceTransferResponseSchema,
  type BalanceTransferResponse,
} from "../models/balance-transfer-response.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import type { Servers } from "../servers.js";

export class BalanceTransfers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  postBalanceTransfers(
    request: BalanceTransfers.PostBalanceTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceTransferResponse, BalanceTransfers.PostBalanceTransfersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default11("/balanceTransfers"),
        auth: noneAuth,
        body: { kind: "json", value: request.body, schema: balanceTransferRequestSchema },
      },
      {
        success: { kind: "json", schema: balanceTransferResponseSchema },
        errorFactory: BalanceTransfers.PostBalanceTransfersError,
      },
      options,
    );
  }
}

export namespace BalanceTransfers {
  export type PostBalanceTransfersRequest = {
    body: BalanceTransferRequest;
  };

  export class PostBalanceTransfersError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PostBalanceTransfersError> = [
      {
        on: 401,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
