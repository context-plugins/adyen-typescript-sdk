import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Get an account holder
   *
   * @remarks
   * Returns an account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.GetAccountHoldersIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountHoldersId(
    request: AccountHolders.GetAccountHoldersIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountHolder, AccountHolders.GetAccountHoldersIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/accountHolders/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountHolderSchema },
        errorFactory: AccountHolders.GetAccountHoldersIdError,
      },
      options,
    );
  }

  /**
   * Get all balance accounts of an account holder
   *
   * @remarks
   * Returns a paginated list of the balance accounts associated with an account holder. To fetch
   * multiple pages, use the query parameters.
   *
   * For example, to limit the page to 5 balance accounts and skip the first 10, use
   * `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.GetAccountHoldersIdBalanceAccountsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountHoldersIdBalanceAccounts(
    request: AccountHolders.GetAccountHoldersIdBalanceAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedBalanceAccountsResponse, AccountHolders.GetAccountHoldersIdBalanceAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/accountHolders/{id}/balanceAccounts"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedBalanceAccountsResponseSchema },
        errorFactory: AccountHolders.GetAccountHoldersIdBalanceAccountsError,
      },
      options,
    );
  }

  /**
   * Get summary of tax forms for an account holder
   *
   * @remarks
   * Returns a summary of all tax forms for an account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountHoldersIdTaxFormSummary(
    request: AccountHolders.GetAccountHoldersIdTaxFormSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<TaxFormSummaryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/accountHolders/{id}/taxFormSummary"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "formType", value: request.formType, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taxFormSummaryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a tax form
   *
   * @remarks
   * Generates a tax form for account holders operating in the US. For more information, refer to US
   * tax forms for [marketplaces](https://docs.adyen.com/marketplaces/us-tax-forms/) or
   * [platforms](https://docs.adyen.com/platforms/us-tax-forms/) .
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.GetAccountHoldersIdTaxFormsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountHoldersIdTaxForms(
    request: AccountHolders.GetAccountHoldersIdTaxFormsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTaxFormResponse1, AccountHolders.GetAccountHoldersIdTaxFormsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/accountHolders/{id}/taxForms"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "formType", value: request.formType, schema: formTypeSchema },
          { name: "year", value: request.year, schema: s.int() },
          { name: "legalEntityId", value: request.legalEntityId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTaxFormResponse1Schema },
        errorFactory: AccountHolders.GetAccountHoldersIdTaxFormsError,
      },
      options,
    );
  }

  /**
   * Get all transaction rules for an account holder
   *
   * @remarks
   * Returns a list of transaction rules associated with an account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.GetAccountHoldersIdTransactionRulesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountHoldersIdTransactionRules(
    request: AccountHolders.GetAccountHoldersIdTransactionRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRulesResponse, AccountHolders.GetAccountHoldersIdTransactionRulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/accountHolders/{id}/transactionRules"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRulesResponseSchema },
        errorFactory: AccountHolders.GetAccountHoldersIdTransactionRulesError,
      },
      options,
    );
  }

  /**
   * Update an account holder
   *
   * @remarks
   * Updates an account holder. When updating an account holder resource, if a parameter is not
   * provided in the request, it is left unchanged.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.PatchAccountHoldersIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchAccountHoldersId(
    request: AccountHolders.PatchAccountHoldersIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountHolder, AccountHolders.PatchAccountHoldersIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default13("/accountHolders/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Create an account holder
   *
   * @remarks
   * Creates an account holder linked to a [legal
   * entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.PostAccountHoldersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAccountHolders(
    request: AccountHolders.PostAccountHoldersRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountHolder, AccountHolders.PostAccountHoldersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/accountHolders"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Close an account holder
   *
   * @remarks
   * Changes the [status of an account
   * holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses)
   * to **Closed**. This state is final. If an account holder is closed, you can't process
   * transactions, pay out funds, or reopen it. If payments are made to an account of an account
   * holder with a **Closed**
   * [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status),
   * the payments are sent to your liable account.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.PostCloseAccountHolderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCloseAccountHolder(
    request: AccountHolders.PostCloseAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<CloseAccountHolderResponse, AccountHolders.PostCloseAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/closeAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Close stores
   *
   * @remarks
   * Closes stores associated with an account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.PostCloseStoresError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCloseStores(
    request: AccountHolders.PostCloseStoresRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, AccountHolders.PostCloseStoresError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/closeStores"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Create an account holder
   *
   * @remarks
   * Creates an account holder that [represents the sub-merchant's
   * entity](https://docs.adyen.com/classic-platforms/account-structure#your-platform) in your
   * platform. The details that you need to provide in the request depend on the sub-merchant's
   * legal entity type. For more information, refer to [Account holder and
   * accounts](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#legal-entity-types).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.PostCreateAccountHolderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCreateAccountHolder(
    request: AccountHolders.PostCreateAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateAccountHolderResponse, AccountHolders.PostCreateAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/createAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Get an account holder
   *
   * @remarks
   * Returns the details of an account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.PostGetAccountHolderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGetAccountHolder(
    request: AccountHolders.PostGetAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<GetAccountHolderResponse, AccountHolders.PostGetAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/getAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Get a tax form
   *
   * @remarks
   * Generates a tax form for account holders operating in the US. For more information, refer to
   * [Providing tax forms](https://docs.adyen.com/classic-platforms/tax-forms).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.PostGetTaxFormError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGetTaxForm(
    request: AccountHolders.PostGetTaxFormRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTaxFormResponse, AccountHolders.PostGetTaxFormError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/getTaxForm"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Suspend an account holder
   *
   * @remarks
   * Changes the [status of an account
   * holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses)
   * to **Suspended**.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.PostSuspendAccountHolderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postSuspendAccountHolder(
    request: AccountHolders.PostSuspendAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<SuspendAccountHolderResponse, AccountHolders.PostSuspendAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/suspendAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Unsuspend an account holder
   *
   * @remarks
   * Changes the [status of an account
   * holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses)
   * from **Suspended** to **Inactive**. Account holders can have a **Suspended**
   * [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status)
   * if you suspend them through the
   * [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder)
   * endpoint or if a verification deadline expires.
   *
   * You can only unsuspend account holders if they do not have verification checks with a
   * **FAILED**
   * [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.PostUnSuspendAccountHolderError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postUnSuspendAccountHolder(
    request: AccountHolders.PostUnSuspendAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<UnSuspendAccountHolderResponse, AccountHolders.PostUnSuspendAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/unSuspendAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Update an account holder
   *
   * @remarks
   * Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank
   * accounts and shareholders.
   *
   * When updating `accountHolderDetails`, parameters that are not included in the request are left
   * unchanged except for the following object:
   *
   * * `metadata`: Updating the metadata replaces the entire object. This means that to update an
   *   existing key-value pair, you must provide the changes, as well as other existing key-value
   *   pairs.
   *
   * When updating any field in the following objects, you must submit all the fields required for
   * validation:
   *
   *  * `address`
   *
   * * `fullPhoneNumber`
   *
   * * `bankAccountDetails.BankAccountDetail`
   *
   * * `businessDetails.shareholders.ShareholderContact`
   *
   * For example, to update the `address.postalCode`, you must also submit the `address.country`,
   * `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be
   * validated.
   *
   * To add a bank account or shareholder, provide the bank account or shareholder details without a
   * `bankAccountUUID` or a `shareholderCode`.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.PostUpdateAccountHolderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postUpdateAccountHolder(
    request: AccountHolders.PostUpdateAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateAccountHolderResponse, AccountHolders.PostUpdateAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/updateAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Update payout or processing state
   *
   * @remarks
   * Disables or enables the processing or payout state of an account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountHolders.PostUpdateAccountHolderStateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postUpdateAccountHolderState(
    request: AccountHolders.PostUpdateAccountHolderStateRequest,
    options?: RequestOptions,
  ): ApiPromise<GetAccountHolderStatusResponse, AccountHolders.PostUpdateAccountHolderStateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/updateAccountHolderState"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the account holder. */
    id: string;
  };

  export class GetAccountHoldersIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetAccountHoldersIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetAccountHoldersIdBalanceAccountsRequest = {
    /** The unique identifier of the account holder. */
    id: string;
    /** The number of items that you want to skip. */
    offset?: number;
    /**
     * The number of items returned per page, maximum 100 items. By default, the response returns 10
     * items per page.
     */
    limit?: number;
  };

  export class GetAccountHoldersIdBalanceAccountsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetAccountHoldersIdBalanceAccountsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetAccountHoldersIdTaxFormSummaryRequest = {
    /** The unique identifier of the account holder. */
    id: string;
    /**
     * The type of tax form you want a summary for. Accepted values are **US1099k** and
     * **US1099nec**.
     */
    formType: string;
  };

  export type GetAccountHoldersIdTaxFormsRequest = {
    /** The unique identifier of the account holder. */
    id: string;
    /**
     * The type of tax form you want to retrieve. Accepted values are **US1099k** and **US1099nec**.
     */
    formType: FormType;
    /** The tax year in **YYYY** format for the tax form you want to retrieve. */
    year: number;
    /** The legal entity reference whose tax form you want to retrieve. */
    legalEntityId?: string;
  };

  export class GetAccountHoldersIdTaxFormsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
      | Declared<"restServiceError6", RestServiceError>
    >;

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
    /** The unique identifier of the account holder. */
    id: string;
  };

  export class GetAccountHoldersIdTransactionRulesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetAccountHoldersIdTransactionRulesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchAccountHoldersIdRequest = {
    /** The unique identifier of the account holder. */
    id: string;
    body?: AccountHolderUpdateRequest;
  };

  export class PatchAccountHoldersIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

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

  export class PostAccountHoldersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

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

  export class PostCloseAccountHolderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

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

  export class PostCloseStoresError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

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

  export class PostCreateAccountHolderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

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

  export class PostGetAccountHolderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

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

  export class PostGetTaxFormError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

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

  export class PostSuspendAccountHolderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

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

  export class PostUnSuspendAccountHolderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

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

  export class PostUpdateAccountHolderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

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

  export class PostUpdateAccountHolderStateError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostUpdateAccountHolderStateError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
