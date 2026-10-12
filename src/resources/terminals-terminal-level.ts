import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listTerminalsResponseSchema,
  type ListTerminalsResponse,
} from "../models/list-terminals-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  terminalReassignmentRequestSchema,
  type TerminalReassignmentRequest,
} from "../models/terminal-reassignment-request.js";
import type { Servers } from "../servers.js";

export class TerminalsTerminalLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a list of terminals
   *
   * @remarks
   * Returns the payment terminals that the API credential has access to and that match the query
   * parameters. To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API — Terminal actions read
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalsTerminalLevel.GetTerminalsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTerminals(
    request: TerminalsTerminalLevel.GetTerminalsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTerminalsResponse, TerminalsTerminalLevel.GetTerminalsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/terminals"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [
          { name: "searchQuery", value: request.searchQuery, schema: s.optional(s.string()) },
          { name: "otpQuery", value: request.otpQuery, schema: s.optional(s.string()) },
          { name: "countries", value: request.countries, schema: s.optional(s.string()) },
          { name: "merchantIds", value: request.merchantIds, schema: s.optional(s.string()) },
          { name: "storeIds", value: request.storeIds, schema: s.optional(s.string()) },
          { name: "brandModels", value: request.brandModels, schema: s.optional(s.string()) },
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTerminalsResponseSchema },
        errorFactory: TerminalsTerminalLevel.GetTerminalsError,
      },
      options,
    );
  }

  /**
   * Reassign a terminal
   *
   * @remarks
   * Reassigns a payment terminal to a company account, merchant account, merchant account
   * inventory, or a store.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Assign Terminal
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link TerminalsTerminalLevel.PostTerminalsTerminalIdReassignError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTerminalsTerminalIdReassign(
    request: TerminalsTerminalLevel.PostTerminalsTerminalIdReassignRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TerminalsTerminalLevel.PostTerminalsTerminalIdReassignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/terminals/{terminalId}/reassign"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "terminalId", value: request.terminalId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => terminalReassignmentRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: TerminalsTerminalLevel.PostTerminalsTerminalIdReassignError,
      },
      options,
    );
  }
}

export namespace TerminalsTerminalLevel {
  export type GetTerminalsRequest = {
    /**
     * Returns terminals with an ID that contains the specified string. If present, other query
     * parameters are ignored.
     */
    searchQuery?: string;
    /**
     * Returns one or more terminals associated with the one-time passwords specified in the
     * request. If this query parameter is used, other query parameters are ignored.
     */
    otpQuery?: string;
    /**
     * Returns terminals located in the countries specified by their [two-letter country
     * code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    countries?: string;
    /**
     * Returns terminals that belong to the merchant accounts specified by their unique merchant
     * account ID.
     */
    merchantIds?: string;
    /**
     * Returns terminals that are assigned to the
     * [stores](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores) specified
     * by their unique store ID.
     */
    storeIds?: string;
    /**
     * Returns terminals of the
     * [models](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/companies/{companyId}/terminalModels)
     * specified in the format *brand.model*.
     */
    brandModels?: string;
    /** The number of the page to fetch. */
    pageNumber?: number;
    /** The number of items to have on a page, maximum 100. The default is 20 items on a page. */
    pageSize?: number;
  };

  export class GetTerminalsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetTerminalsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostTerminalsTerminalIdReassignRequest = {
    /** The unique identifier of the payment terminal. */
    terminalId: string;
    body?: TerminalReassignmentRequest;
  };

  export class PostTerminalsTerminalIdReassignError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostTerminalsTerminalIdReassignError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
