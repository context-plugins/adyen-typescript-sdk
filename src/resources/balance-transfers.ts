import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Performs a balance transfer
   *
   * @remarks
   * Performs a balance transfer between merchant accounts. The following conditions must be met
   * before you can successfully transfer balances:
   * * The source and destination merchant accounts must be under the same company account and legal
   *   entity.
   * * The source merchant account must have sufficient funds.
   * * The source and destination merchant accounts must have at least one common processing
   *   currency.\n\n When sending multiple API requests with the same source and destination
   *   merchant accounts, send the requests sequentially and *not* in parallel. Some requests may
   *   not be processed if the requests are sent in parallel.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link BalanceTransfers.PostBalanceTransfersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBalanceTransfers(
    request: BalanceTransfers.PostBalanceTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceTransferResponse, BalanceTransfers.PostBalanceTransfersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default11("/balanceTransfers"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  export class PostBalanceTransfersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

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
