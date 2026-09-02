import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  approveTransfersRequestSchema,
  type ApproveTransfersRequest,
} from "../models/approve-transfers-request.js";
import {
  cancelTransfersRequestSchema,
  type CancelTransfersRequest,
} from "../models/cancel-transfers-request.js";
import { category2Schema, type Category2 } from "../models/category2.js";
import {
  findTransfersResponseSchema,
  type FindTransfersResponse,
} from "../models/find-transfers-response.js";
import {
  returnTransferRequestSchema,
  type ReturnTransferRequest,
} from "../models/return-transfer-request.js";
import {
  returnTransferResponseSchema,
  type ReturnTransferResponse,
} from "../models/return-transfer-response.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import { transferDataSchema, type TransferData } from "../models/transfer-data.js";
import { transferInfoSchema, type TransferInfo } from "../models/transfer-info.js";
import {
  transferServiceRestServiceErrorSchema,
  type TransferServiceRestServiceError,
} from "../models/transfer-service-rest-service-error.js";
import { transferSchema, type Transfer } from "../models/transfer.js";
import type { Servers } from "../servers.js";

export class Transfers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getTransfers(
    request: Transfers.GetTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<FindTransfersResponse, Transfers.GetTransfersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default14("/transfers"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        query: [
          { name: "createdSince", value: request.createdSince, schema: s.dateTime() },
          { name: "createdUntil", value: request.createdUntil, schema: s.dateTime() },
          { name: "balancePlatform", value: request.balancePlatform, schema: s.optional(s.string()) },
          { name: "accountHolderId", value: request.accountHolderId, schema: s.optional(s.string()) },
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.optional(s.string()) },
          { name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.optional(s.string()) },
          { name: "reference", value: request.reference, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.lazy(() => category2Schema)) },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: findTransfersResponseSchema },
        errorFactory: Transfers.GetTransfersError,
      },
      options,
    );
  }

  getTransfersId(
    request: Transfers.GetTransfersIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferData, Transfers.GetTransfersIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default14("/transfers/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transferDataSchema },
        errorFactory: Transfers.GetTransfersIdError,
      },
      options,
    );
  }

  postTransfers(
    request: Transfers.PostTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<Transfer, Transfers.PostTransfersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default14("/transfers"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [
          { name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) },
          { name: "WWW-Authenticate", value: request.wwwAuthenticate, schema: s.optional(s.string()) },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => transferInfoSchema)) },
      },
      {
        success: { kind: "json", schema: transferSchema },
        errorFactory: Transfers.PostTransfersError,
      },
      options,
    );
  }

  postTransfersApprove(
    request: Transfers.PostTransfersApproveRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, Transfers.PostTransfersApproveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default14("/transfers/approve"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [
          { name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) },
          { name: "WWW-Authenticate", value: request.wwwAuthenticate, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => approveTransfersRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: Transfers.PostTransfersApproveError,
      },
      options,
    );
  }

  postTransfersCancel(
    request: Transfers.PostTransfersCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, Transfers.PostTransfersCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default14("/transfers/cancel"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cancelTransfersRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: Transfers.PostTransfersCancelError,
      },
      options,
    );
  }

  postTransfersTransferIdReturns(
    request: Transfers.PostTransfersTransferIdReturnsRequest,
    options?: RequestOptions,
  ): ApiPromise<ReturnTransferResponse, Transfers.PostTransfersTransferIdReturnsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default14("/transfers/{transferId}/returns"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "transferId", value: request.transferId, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => returnTransferRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: returnTransferResponseSchema },
        errorFactory: Transfers.PostTransfersTransferIdReturnsError,
      },
      options,
    );
  }
}

export namespace Transfers {
  export type GetTransfersRequest = {
    createdSince: Date;
    createdUntil: Date;
    balancePlatform?: string;
    accountHolderId?: string;
    balanceAccountId?: string;
    paymentInstrumentId?: string;
    reference?: string;
    category?: Category2;
    sortOrder?: SortOrder;
    cursor?: string;
    limit?: number;
  };

  export class GetTransfersError extends ResponseError<
    | Declared<"transferServiceRestServiceError", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError2", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError3", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError4", TransferServiceRestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetTransfersError> = [
      {
        on: 401,
        kind: "transferServiceRestServiceError",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 403,
        kind: "transferServiceRestServiceError2",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 422,
        kind: "transferServiceRestServiceError3",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 500,
        kind: "transferServiceRestServiceError4",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
    ];
  }

  export type GetTransfersIdRequest = {
    id: string;
  };

  export class GetTransfersIdError extends ResponseError<
    | Declared<"transferServiceRestServiceError", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError2", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError3", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError4", TransferServiceRestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetTransfersIdError> = [
      {
        on: 401,
        kind: "transferServiceRestServiceError",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 403,
        kind: "transferServiceRestServiceError2",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 422,
        kind: "transferServiceRestServiceError3",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 500,
        kind: "transferServiceRestServiceError4",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
    ];
  }

  export type PostTransfersRequest = {
    idempotencyKey?: string;
    wwwAuthenticate?: string;
    body?: TransferInfo;
  };

  export class PostTransfersError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"transferServiceRestServiceError", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError2", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError3", TransferServiceRestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostTransfersError> = [
      { on: 401, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      {
        on: 403,
        kind: "transferServiceRestServiceError",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 422,
        kind: "transferServiceRestServiceError2",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 500,
        kind: "transferServiceRestServiceError3",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
    ];
  }

  export type PostTransfersApproveRequest = {
    idempotencyKey?: string;
    wwwAuthenticate?: string;
    body?: ApproveTransfersRequest;
  };

  export class PostTransfersApproveError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"transferServiceRestServiceError", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError2", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError3", TransferServiceRestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostTransfersApproveError> = [
      { on: 401, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      {
        on: 403,
        kind: "transferServiceRestServiceError",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 422,
        kind: "transferServiceRestServiceError2",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 500,
        kind: "transferServiceRestServiceError3",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
    ];
  }

  export type PostTransfersCancelRequest = {
    idempotencyKey?: string;
    body?: CancelTransfersRequest;
  };

  export class PostTransfersCancelError extends ResponseError<
    | Declared<"transferServiceRestServiceError", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError2", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError3", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError4", TransferServiceRestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostTransfersCancelError> = [
      {
        on: 401,
        kind: "transferServiceRestServiceError",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 403,
        kind: "transferServiceRestServiceError2",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 422,
        kind: "transferServiceRestServiceError3",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 500,
        kind: "transferServiceRestServiceError4",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
    ];
  }

  export type PostTransfersTransferIdReturnsRequest = {
    transferId: string;
    idempotencyKey?: string;
    body?: ReturnTransferRequest;
  };

  export class PostTransfersTransferIdReturnsError extends ResponseError<
    | Declared<"transferServiceRestServiceError", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError2", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError3", TransferServiceRestServiceError>
    | Declared<"transferServiceRestServiceError4", TransferServiceRestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostTransfersTransferIdReturnsError> = [
      {
        on: 401,
        kind: "transferServiceRestServiceError",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 403,
        kind: "transferServiceRestServiceError2",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 422,
        kind: "transferServiceRestServiceError3",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
      {
        on: 500,
        kind: "transferServiceRestServiceError4",
        decode: { kind: "json", schema: transferServiceRestServiceErrorSchema },
      },
    ];
  }
}
