import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Get all transfers
   *
   * @remarks
   * Returns all the transfers related to a balance account, account holder, or balance platform.
   *
   * When making this request, you must include at least one of the following:
   * - `balanceAccountId`
   * - `accountHolderId`
   * - `balancePlatform`.
   *
   * This endpoint supports cursor-based pagination. The response returns the first page of results,
   * and returns links to the next and previous pages when applicable. You can use the links to page
   * through the results.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Transfers.GetTransfersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransfers(
    request: Transfers.GetTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<FindTransfersResponse, Transfers.GetTransfersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/transfers"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
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
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: findTransfersResponseSchema },
        errorFactory: Transfers.GetTransfersError,
      },
      options,
    );
  }

  /**
   * Get a transfer
   *
   * @remarks
   * Returns the details of a specified transfer.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Transfers.GetTransfersIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransfersId(
    request: Transfers.GetTransfersIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferData, Transfers.GetTransfersIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/transfers/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transferDataSchema },
        errorFactory: Transfers.GetTransfersIdError,
      },
      options,
    );
  }

  /**
   * Transfer funds
   *
   * @remarks
   * >Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your
   * implementation, use the latest version.
   *
   * Starts a request to transfer funds to:
   * - [Balance
   *   accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts)
   * - [Transfer
   *   instruments](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments)
   * - [Third-party bank
   *   accounts](https://docs.adyen.com/payouts/payout-service/pay-out-to-bank-accounts)
   * - [Third-party cards](https://docs.adyen.com/payouts/payout-service/pay-out-to-cards)
   *
   * Adyen sends the outcome of the transfer request through webhooks.
   *
   * To use this endpoint:
   * - Your API credential must have the **TransferService Webservice Initiate**
   *   [role](https://docs.adyen.com/platforms/manage-access/webservice-roles/?tab=transfers_3).
   * - The account holder must have the required
   *   [capabilities](https://docs.adyen.com/platforms/verification-overview/capabilities).
   *
   * Reach out to your Adyen contact to set up these permissions.
   *
   * @returns OK - The request has been accepted for processing, but has not been completed.
   *
   * @throws {@link Transfers.PostTransfersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTransfers(
    request: Transfers.PostTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<Transfer, Transfers.PostTransfersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default14("/transfers"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
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

  /**
   * Approve initiated transfers
   *
   * @remarks
   * Initiates the approval of a list of transfers that triggered an additional
   * [review](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers#request-review).
   * Adyen sends the outcome of the approval request through webhooks.
   *
   * To use this endpoint:
   * - Your API credential must have the **TransferService Approve**
   *   [role](https://docs.adyen.com/platforms/manage-access/webservice-roles/?tab=transfers_3).
   * - The account holder must have the required
   *   [capabilities](https://docs.adyen.com/platforms/verification-overview/capabilities).
   *
   * Reach out to your Adyen contact to set up these permissions.
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link Transfers.PostTransfersApproveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTransfersApprove(
    request: Transfers.PostTransfersApproveRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, Transfers.PostTransfersApproveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default14("/transfers/approve"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
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

  /**
   * Cancel initiated transfers
   *
   * @remarks
   * Initiates the cancellation of a list of transfers that triggered an additional
   * [review](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers#request-review).
   * Adyen sends the outcome of the cancel request through webhooks.
   *
   * To use this endpoint:
   * - Your API credential must have the **TransferService Approve**
   *   [role](https://docs.adyen.com/platforms/manage-access/webservice-roles/?tab=transfers_3).
   * - The account holder must have the required
   *   [capabilities](https://docs.adyen.com/platforms/verification-overview/capabilities).
   *
   * Reach out to your Adyen contact to set up these permissions.
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link Transfers.PostTransfersCancelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTransfersCancel(
    request: Transfers.PostTransfersCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, Transfers.PostTransfersCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default14("/transfers/cancel"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
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

  /**
   * Return a transfer
   *
   * @remarks
   * Initiates the return of previously transferred funds without creating a new `transferId`.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Transfers.PostTransfersTransferIdReturnsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTransfersTransferIdReturns(
    request: Transfers.PostTransfersTransferIdReturnsRequest,
    options?: RequestOptions,
  ): ApiPromise<ReturnTransferResponse, Transfers.PostTransfersTransferIdReturnsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default14("/transfers/{transferId}/returns"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "transferId", value: request.transferId, schema: s.string() }],
        query: [],
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
    /**
     * Only include transfers that have been created on or after this point in time. The value must
     * be in ISO 8601 format and not earlier than 6 months before the `createdUntil` date. For
     * example, **2021-05-30T15:07:40Z**.
     */
    createdSince: Date;
    /**
     * Only include transfers that have been created on or before this point in time. The value must
     * be in ISO 8601 format and not later than 6 months after the `createdSince` date. For example,
     * **2021-05-30T15:07:40Z**.
     */
    createdUntil: Date;
    /**
     * The unique identifier of the [balance
     * platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).
     *
     * Required if you don't provide a `balanceAccountId` or `accountHolderId`.
     */
    balancePlatform?: string;
    /**
     * The unique identifier of the [account
     * holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).
     *
     * Required if you don't provide a `balanceAccountId` or `balancePlatform`.
     *
     * If you provide a `balanceAccountId`, the `accountHolderId` must be related to the
     * `balanceAccountId`.
     */
    accountHolderId?: string;
    /**
     * The unique identifier of the [balance
     * account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).
     *
     * Required if you don't provide an `accountHolderId` or `balancePlatform`.
     *
     * If you provide an `accountHolderId`, the `balanceAccountId` must be related to the
     * `accountHolderId`.
     */
    balanceAccountId?: string;
    /**
     * The unique identifier of the [payment
     * instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).
     *
     * To use this parameter, you must also provide a `balanceAccountId`, `accountHolderId`, or
     * `balancePlatform`.
     *
     * The `paymentInstrumentId` must be related to the `balanceAccountId` or `accountHolderId` that
     * you provide.
     */
    paymentInstrumentId?: string;
    /**
     * The reference you provided in the POST
     * [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) request
     */
    reference?: string;
    /**
     * The category of the transfer.
     *
     * Possible values:
     *
     *  - **bank**: A transfer involving a [transfer
     *    instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id)
     *    or a bank account.
     *
     * - **card**: A transfer involving a third-party card.
     *
     * - **internal**: A transfer between [balance
     *   accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id)
     *   within your platform.
     *
     * - **issuedCard**: A transfer initiated by an Adyen-issued card.
     *
     * - **platformPayment**: Funds movements related to payments that are acquired for your users.
     *
     * - **topUp**: An incoming transfer initiated by your user to top up their balance account.
     */
    category?: Category2;
    /**
     * Determines the sort order of the returned transfers. The sort order is based on the creation
     * date of the transfers.
     *
     * Possible values:
     *
     *  - **asc**: Ascending order, from oldest to most recent.
     *
     * - **desc**: Descending order, from most recent to oldest.
     *
     * Default value: **asc**.
     */
    sortOrder?: SortOrder;
    /** The `cursor` returned in the links of the previous response. */
    cursor?: string;
    /**
     * The number of items returned per page, maximum of 100 items. By default, the response returns
     * 10 items per page.
     */
    limit?: number;
  };

  export class GetTransfersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"transferServiceRestServiceError", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError2", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError3", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError4", TransferServiceRestServiceError>
    >;

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
    /** Unique identifier of the transfer. */
    id: string;
  };

  export class GetTransfersIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"transferServiceRestServiceError", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError2", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError3", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError4", TransferServiceRestServiceError>
    >;

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
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    /** Header for authenticating through SCA */
    wwwAuthenticate?: string;
    body?: TransferInfo;
  };

  export class PostTransfersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"transferServiceRestServiceError", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError2", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError3", TransferServiceRestServiceError>
    >;

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
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    /** Header for authenticating through SCA */
    wwwAuthenticate?: string;
    body?: ApproveTransfersRequest;
  };

  export class PostTransfersApproveError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"transferServiceRestServiceError", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError2", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError3", TransferServiceRestServiceError>
    >;

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
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: CancelTransfersRequest;
  };

  export class PostTransfersCancelError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"transferServiceRestServiceError", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError2", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError3", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError4", TransferServiceRestServiceError>
    >;

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
    /** The unique identifier of the transfer to be returned. */
    transferId: string;
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: ReturnTransferRequest;
  };

  export class PostTransfersTransferIdReturnsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"transferServiceRestServiceError", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError2", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError3", TransferServiceRestServiceError>
      | Declared<"transferServiceRestServiceError4", TransferServiceRestServiceError>
    >;

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
