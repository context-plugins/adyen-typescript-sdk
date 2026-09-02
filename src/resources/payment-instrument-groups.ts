import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  paymentInstrumentGroupInfoSchema,
  type PaymentInstrumentGroupInfo,
} from "../models/payment-instrument-group-info.js";
import {
  paymentInstrumentGroupSchema,
  type PaymentInstrumentGroup,
} from "../models/payment-instrument-group.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  transactionRulesResponseSchema,
  type TransactionRulesResponse,
} from "../models/transaction-rules-response.js";
import type { Servers } from "../servers.js";

export class PaymentInstrumentGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getPaymentInstrumentGroupsId(
    request: PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInstrumentGroup, PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/paymentInstrumentGroups/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentInstrumentGroupSchema },
        errorFactory: PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdError,
      },
      options,
    );
  }

  getPaymentInstrumentGroupsIdTransactionRules(
    request: PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TransactionRulesResponse,
    PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/paymentInstrumentGroups/{id}/transactionRules"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRulesResponseSchema },
        errorFactory: PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesError,
      },
      options,
    );
  }

  postPaymentInstrumentGroups(
    request: PaymentInstrumentGroups.PostPaymentInstrumentGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInstrumentGroup, PaymentInstrumentGroups.PostPaymentInstrumentGroupsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/paymentInstrumentGroups"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentInstrumentGroupInfoSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentInstrumentGroupSchema },
        errorFactory: PaymentInstrumentGroups.PostPaymentInstrumentGroupsError,
      },
      options,
    );
  }
}

export namespace PaymentInstrumentGroups {
  export type GetPaymentInstrumentGroupsIdRequest = {
    id: string;
  };

  export class GetPaymentInstrumentGroupsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetPaymentInstrumentGroupsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetPaymentInstrumentGroupsIdTransactionRulesRequest = {
    id: string;
  };

  export class GetPaymentInstrumentGroupsIdTransactionRulesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetPaymentInstrumentGroupsIdTransactionRulesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostPaymentInstrumentGroupsRequest = {
    body?: PaymentInstrumentGroupInfo;
  };

  export class PostPaymentInstrumentGroupsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostPaymentInstrumentGroupsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
