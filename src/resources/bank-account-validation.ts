import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bankAccountIdentificationValidationRequestSchema,
  type BankAccountIdentificationValidationRequest,
} from "../models/bank-account-identification-validation-request.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class BankAccountValidation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Validate a bank account
   *
   * @remarks
   * Validates bank account identification details. You can use this endpoint to validate bank
   * account details before you [make a
   * transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) or [create a
   * transfer
   * instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link BankAccountValidation.PostValidateBankAccountIdentificationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postValidateBankAccountIdentification(
    request: BankAccountValidation.PostValidateBankAccountIdentificationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BankAccountValidation.PostValidateBankAccountIdentificationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/validateBankAccountIdentification"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => bankAccountIdentificationValidationRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: BankAccountValidation.PostValidateBankAccountIdentificationError,
      },
      options,
    );
  }
}

export namespace BankAccountValidation {
  export type PostValidateBankAccountIdentificationRequest = {
    body?: BankAccountIdentificationValidationRequest;
  };

  export class PostValidateBankAccountIdentificationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostValidateBankAccountIdentificationError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
