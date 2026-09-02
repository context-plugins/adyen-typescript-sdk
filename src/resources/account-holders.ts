import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { accountHolderInfoSchema, type AccountHolderInfo } from "../models/account-holder-info.js";
import {
  accountHolderUpdateRequestSchema,
  type AccountHolderUpdateRequest,
} from "../models/account-holder-update-request.js";
import { accountHolderSchema, type AccountHolder } from "../models/account-holder.js";
import {
  closeAccountHolderRequestSchema,
  type CloseAccountHolderRequest,
} from "../models/close-account-holder-request.js";
import {
  closeAccountHolderResponseSchema,
  type CloseAccountHolderResponse,
} from "../models/close-account-holder-response.js";
import { closeStoresRequestSchema, type CloseStoresRequest } from "../models/close-stores-request.js";
import {
  createAccountHolderRequestSchema,
  type CreateAccountHolderRequest,
} from "../models/create-account-holder-request.js";
import {
  createAccountHolderResponseSchema,
  type CreateAccountHolderResponse,
} from "../models/create-account-holder-response.js";
import { formTypeSchema, type FormType } from "../models/form-type.js";
import { genericResponseSchema, type GenericResponse } from "../models/generic-response.js";
import {
  getAccountHolderRequestSchema,
  type GetAccountHolderRequest,
} from "../models/get-account-holder-request.js";
import {
  getAccountHolderResponseSchema,
  type GetAccountHolderResponse,
} from "../models/get-account-holder-response.js";
import {
  getAccountHolderStatusResponseSchema,
  type GetAccountHolderStatusResponse,
} from "../models/get-account-holder-status-response.js";
import { getTaxFormRequestSchema, type GetTaxFormRequest } from "../models/get-tax-form-request.js";
import { getTaxFormResponseSchema, type GetTaxFormResponse } from "../models/get-tax-form-response.js";
import { getTaxFormResponse1Schema, type GetTaxFormResponse1 } from "../models/get-tax-form-response1.js";
import {
  paginatedBalanceAccountsResponseSchema,
  type PaginatedBalanceAccountsResponse,
} from "../models/paginated-balance-accounts-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import {
  suspendAccountHolderRequestSchema,
  type SuspendAccountHolderRequest,
} from "../models/suspend-account-holder-request.js";
import {
  suspendAccountHolderResponseSchema,
  type SuspendAccountHolderResponse,
} from "../models/suspend-account-holder-response.js";
import {
  taxFormSummaryResponseSchema,
  type TaxFormSummaryResponse,
} from "../models/tax-form-summary-response.js";
import {
  transactionRulesResponseSchema,
  type TransactionRulesResponse,
} from "../models/transaction-rules-response.js";
import {
  unSuspendAccountHolderRequestSchema,
  type UnSuspendAccountHolderRequest,
} from "../models/un-suspend-account-holder-request.js";
import {
  unSuspendAccountHolderResponseSchema,
  type UnSuspendAccountHolderResponse,
} from "../models/un-suspend-account-holder-response.js";
import {
  updateAccountHolderRequestSchema,
  type UpdateAccountHolderRequest,
} from "../models/update-account-holder-request.js";
import {
  updateAccountHolderResponseSchema,
  type UpdateAccountHolderResponse,
} from "../models/update-account-holder-response.js";
import {
  updateAccountHolderStateRequestSchema,
  type UpdateAccountHolderStateRequest,
} from "../models/update-account-holder-state-request.js";
import type { Servers } from "../servers.js";

export class AccountHolders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getAccountHoldersId(
    request: AccountHolders.GetAccountHoldersIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountHolder, AccountHolders.GetAccountHoldersIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/accountHolders/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountHolderSchema },
        errorFactory: AccountHolders.GetAccountHoldersIdError,
      },
      options,
    );
  }

  getAccountHoldersIdBalanceAccounts(
    request: AccountHolders.GetAccountHoldersIdBalanceAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedBalanceAccountsResponse, AccountHolders.GetAccountHoldersIdBalanceAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/accountHolders/{id}/balanceAccounts"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedBalanceAccountsResponseSchema },
        errorFactory: AccountHolders.GetAccountHoldersIdBalanceAccountsError,
      },
      options,
    );
  }

  getAccountHoldersIdTaxFormSummary(
    request: AccountHolders.GetAccountHoldersIdTaxFormSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<TaxFormSummaryResponse, ResponseError> {
    return this.#rawClient.execute<TaxFormSummaryResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/accountHolders/{id}/taxFormSummary"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "formType", value: request.formType, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taxFormSummaryResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getAccountHoldersIdTaxForms(
    request: AccountHolders.GetAccountHoldersIdTaxFormsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTaxFormResponse1, AccountHolders.GetAccountHoldersIdTaxFormsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/accountHolders/{id}/taxForms"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "formType", value: request.formType, schema: formTypeSchema },
          { name: "year", value: request.year, schema: s.number() },
          { name: "legalEntityId", value: request.legalEntityId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTaxFormResponse1Schema },
        errorFactory: AccountHolders.GetAccountHoldersIdTaxFormsError,
      },
      options,
    );
  }

  getAccountHoldersIdTransactionRules(
    request: AccountHolders.GetAccountHoldersIdTransactionRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRulesResponse, AccountHolders.GetAccountHoldersIdTransactionRulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/accountHolders/{id}/transactionRules"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRulesResponseSchema },
        errorFactory: AccountHolders.GetAccountHoldersIdTransactionRulesError,
      },
      options,
    );
  }

  patchAccountHoldersId(
    request: AccountHolders.PatchAccountHoldersIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountHolder, AccountHolders.PatchAccountHoldersIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default13("/accountHolders/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => accountHolderUpdateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: accountHolderSchema },
        errorFactory: AccountHolders.PatchAccountHoldersIdError,
      },
      options,
    );
  }

  postAccountHolders(
    request: AccountHolders.PostAccountHoldersRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountHolder, AccountHolders.PostAccountHoldersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/accountHolders"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => accountHolderInfoSchema)),
        },
      },
      {
        success: { kind: "json", schema: accountHolderSchema },
        errorFactory: AccountHolders.PostAccountHoldersError,
      },
      options,
    );
  }

  postCloseAccountHolder(
    request: AccountHolders.PostCloseAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<CloseAccountHolderResponse, AccountHolders.PostCloseAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default10("/closeAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => closeAccountHolderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: closeAccountHolderResponseSchema },
        errorFactory: AccountHolders.PostCloseAccountHolderError,
      },
      options,
    );
  }

  postCloseStores(
    request: AccountHolders.PostCloseStoresRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, AccountHolders.PostCloseStoresError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default10("/closeStores"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => closeStoresRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: genericResponseSchema },
        errorFactory: AccountHolders.PostCloseStoresError,
      },
      options,
    );
  }

  postCreateAccountHolder(
    request: AccountHolders.PostCreateAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateAccountHolderResponse, AccountHolders.PostCreateAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default10("/createAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createAccountHolderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createAccountHolderResponseSchema },
        errorFactory: AccountHolders.PostCreateAccountHolderError,
      },
      options,
    );
  }

  postGetAccountHolder(
    request: AccountHolders.PostGetAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<GetAccountHolderResponse, AccountHolders.PostGetAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default10("/getAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getAccountHolderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getAccountHolderResponseSchema },
        errorFactory: AccountHolders.PostGetAccountHolderError,
      },
      options,
    );
  }

  postGetTaxForm(
    request: AccountHolders.PostGetTaxFormRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTaxFormResponse, AccountHolders.PostGetTaxFormError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default10("/getTaxForm"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getTaxFormRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getTaxFormResponseSchema },
        errorFactory: AccountHolders.PostGetTaxFormError,
      },
      options,
    );
  }

  postSuspendAccountHolder(
    request: AccountHolders.PostSuspendAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<SuspendAccountHolderResponse, AccountHolders.PostSuspendAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default10("/suspendAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => suspendAccountHolderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: suspendAccountHolderResponseSchema },
        errorFactory: AccountHolders.PostSuspendAccountHolderError,
      },
      options,
    );
  }

  postUnSuspendAccountHolder(
    request: AccountHolders.PostUnSuspendAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<UnSuspendAccountHolderResponse, AccountHolders.PostUnSuspendAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default10("/unSuspendAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => unSuspendAccountHolderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: unSuspendAccountHolderResponseSchema },
        errorFactory: AccountHolders.PostUnSuspendAccountHolderError,
      },
      options,
    );
  }

  postUpdateAccountHolder(
    request: AccountHolders.PostUpdateAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateAccountHolderResponse, AccountHolders.PostUpdateAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default10("/updateAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateAccountHolderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateAccountHolderResponseSchema },
        errorFactory: AccountHolders.PostUpdateAccountHolderError,
      },
      options,
    );
  }

  postUpdateAccountHolderState(
    request: AccountHolders.PostUpdateAccountHolderStateRequest,
    options?: RequestOptions,
  ): ApiPromise<GetAccountHolderStatusResponse, AccountHolders.PostUpdateAccountHolderStateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default10("/updateAccountHolderState"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateAccountHolderStateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getAccountHolderStatusResponseSchema },
        errorFactory: AccountHolders.PostUpdateAccountHolderStateError,
      },
      options,
    );
  }
}

export namespace AccountHolders {
  export type GetAccountHoldersIdRequest = {
    id: string;
  };

  export class GetAccountHoldersIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetAccountHoldersIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetAccountHoldersIdBalanceAccountsRequest = {
    id: string;
    offset?: number;
    limit?: number;
  };

  export class GetAccountHoldersIdBalanceAccountsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetAccountHoldersIdBalanceAccountsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetAccountHoldersIdTaxFormSummaryRequest = {
    id: string;
    formType: string;
  };

  export type GetAccountHoldersIdTaxFormsRequest = {
    id: string;
    formType: FormType;
    year: number;
    legalEntityId?: string;
  };

  export class GetAccountHoldersIdTaxFormsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
    | Declared<"restServiceError6", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetAccountHoldersIdTaxFormsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 404, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError6", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetAccountHoldersIdTransactionRulesRequest = {
    id: string;
  };

  export class GetAccountHoldersIdTransactionRulesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetAccountHoldersIdTransactionRulesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchAccountHoldersIdRequest = {
    id: string;
    body?: AccountHolderUpdateRequest;
  };

  export class PatchAccountHoldersIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchAccountHoldersIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostAccountHoldersRequest = {
    body?: AccountHolderInfo;
  };

  export class PostAccountHoldersError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostAccountHoldersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCloseAccountHolderRequest = {
    body?: CloseAccountHolderRequest;
  };

  export class PostCloseAccountHolderError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostCloseAccountHolderError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostCloseStoresRequest = {
    body?: CloseStoresRequest;
  };

  export class PostCloseStoresError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostCloseStoresError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostCreateAccountHolderRequest = {
    body?: CreateAccountHolderRequest;
  };

  export class PostCreateAccountHolderError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostCreateAccountHolderError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostGetAccountHolderRequest = {
    body?: GetAccountHolderRequest;
  };

  export class PostGetAccountHolderError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostGetAccountHolderError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostGetTaxFormRequest = {
    body?: GetTaxFormRequest;
  };

  export class PostGetTaxFormError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostGetTaxFormError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostSuspendAccountHolderRequest = {
    body?: SuspendAccountHolderRequest;
  };

  export class PostSuspendAccountHolderError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostSuspendAccountHolderError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostUnSuspendAccountHolderRequest = {
    body?: UnSuspendAccountHolderRequest;
  };

  export class PostUnSuspendAccountHolderError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostUnSuspendAccountHolderError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostUpdateAccountHolderRequest = {
    body?: UpdateAccountHolderRequest;
  };

  export class PostUpdateAccountHolderError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostUpdateAccountHolderError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostUpdateAccountHolderStateRequest = {
    body?: UpdateAccountHolderStateRequest;
  };

  export class PostUpdateAccountHolderStateError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostUpdateAccountHolderStateError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
