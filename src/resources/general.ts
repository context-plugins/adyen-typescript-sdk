import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { acceptDisputeRequestSchema, type AcceptDisputeRequest } from "../models/accept-dispute-request.js";
import {
  acceptDisputeResponseSchema,
  type AcceptDisputeResponse,
} from "../models/accept-dispute-response.js";
import {
  accountHolderBalanceResponseSchema,
  type AccountHolderBalanceResponse,
} from "../models/account-holder-balance-response.js";
import {
  accountHolderTransactionListRequestSchema,
  type AccountHolderTransactionListRequest,
} from "../models/account-holder-transaction-list-request.js";
import {
  accountHolderTransactionListResponseSchema,
  type AccountHolderTransactionListResponse,
} from "../models/account-holder-transaction-list-response.js";
import {
  assignTerminalsRequestSchema,
  type AssignTerminalsRequest,
} from "../models/assign-terminals-request.js";
import {
  assignTerminalsResponseSchema,
  type AssignTerminalsResponse,
} from "../models/assign-terminals-response.js";
import {
  certificateLoadingResponseSchema,
  type CertificateLoadingResponse,
} from "../models/certificate-loading-response.js";
import {
  closeAccountHolderRequestSchema,
  type CloseAccountHolderRequest,
} from "../models/close-account-holder-request.js";
import { costEstimateRequestSchema, type CostEstimateRequest } from "../models/cost-estimate-request.js";
import { costEstimateResponseSchema, type CostEstimateResponse } from "../models/cost-estimate-response.js";
import {
  createNotificationConfigurationRequestSchema,
  type CreateNotificationConfigurationRequest,
} from "../models/create-notification-configuration-request.js";
import { createPermitRequestSchema, type CreatePermitRequest } from "../models/create-permit-request.js";
import { createPermitResultSchema, type CreatePermitResult } from "../models/create-permit-result.js";
import { createSessionRequestSchema, type CreateSessionRequest } from "../models/create-session-request.js";
import {
  createTestCardRangesRequestSchema,
  type CreateTestCardRangesRequest,
} from "../models/create-test-card-ranges-request.js";
import {
  createTestCardRangesResultSchema,
  type CreateTestCardRangesResult,
} from "../models/create-test-card-ranges-result.js";
import {
  debitAccountHolderRequestSchema,
  type DebitAccountHolderRequest,
} from "../models/debit-account-holder-request.js";
import {
  debitAccountHolderResponseSchema,
  type DebitAccountHolderResponse,
} from "../models/debit-account-holder-response.js";
import { defendDisputeRequestSchema, type DefendDisputeRequest } from "../models/defend-dispute-request.js";
import {
  defendDisputeResponseSchema,
  type DefendDisputeResponse,
} from "../models/defend-dispute-response.js";
import {
  defenseReasonsRequestSchema,
  type DefenseReasonsRequest,
} from "../models/defense-reasons-request.js";
import {
  defenseReasonsResponseSchema,
  type DefenseReasonsResponse,
} from "../models/defense-reasons-response.js";
import {
  deleteDefenseDocumentRequestSchema,
  type DeleteDefenseDocumentRequest,
} from "../models/delete-defense-document-request.js";
import {
  deleteDefenseDocumentResponseSchema,
  type DeleteDefenseDocumentResponse,
} from "../models/delete-defense-document-response.js";
import {
  deleteNotificationConfigurationRequestSchema,
  type DeleteNotificationConfigurationRequest,
} from "../models/delete-notification-configuration-request.js";
import { disablePermitRequestSchema, type DisablePermitRequest } from "../models/disable-permit-request.js";
import { disablePermitResultSchema, type DisablePermitResult } from "../models/disable-permit-result.js";
import { disableRequestSchema, type DisableRequest } from "../models/disable-request.js";
import { disableResultSchema, type DisableResult } from "../models/disable-result.js";
import { findTerminalRequestSchema, type FindTerminalRequest } from "../models/find-terminal-request.js";
import { findTerminalResponseSchema, type FindTerminalResponse } from "../models/find-terminal-response.js";
import { genericResponseSchema, type GenericResponse } from "../models/generic-response.js";
import {
  getNotificationConfigurationListResponseSchema,
  type GetNotificationConfigurationListResponse,
} from "../models/get-notification-configuration-list-response.js";
import {
  getNotificationConfigurationRequestSchema,
  type GetNotificationConfigurationRequest,
} from "../models/get-notification-configuration-request.js";
import {
  getNotificationConfigurationResponseSchema,
  type GetNotificationConfigurationResponse,
} from "../models/get-notification-configuration-response.js";
import {
  getStoresUnderAccountRequestSchema,
  type GetStoresUnderAccountRequest,
} from "../models/get-stores-under-account-request.js";
import {
  getStoresUnderAccountResponseSchema,
  type GetStoresUnderAccountResponse,
} from "../models/get-stores-under-account-response.js";
import {
  getTerminalDetailsRequestSchema,
  type GetTerminalDetailsRequest,
} from "../models/get-terminal-details-request.js";
import {
  getTerminalDetailsResponseSchema,
  type GetTerminalDetailsResponse,
} from "../models/get-terminal-details-response.js";
import {
  getTerminalsUnderAccountRequestSchema,
  type GetTerminalsUnderAccountRequest,
} from "../models/get-terminals-under-account-request.js";
import {
  getTerminalsUnderAccountResponseSchema,
  type GetTerminalsUnderAccountResponse,
} from "../models/get-terminals-under-account-response.js";
import { notifyShopperRequestSchema, type NotifyShopperRequest } from "../models/notify-shopper-request.js";
import { notifyShopperResultSchema, type NotifyShopperResult } from "../models/notify-shopper-result.js";
import {
  payoutAccountHolderRequestSchema,
  type PayoutAccountHolderRequest,
} from "../models/payout-account-holder-request.js";
import {
  payoutAccountHolderResponseSchema,
  type PayoutAccountHolderResponse,
} from "../models/payout-account-holder-response.js";
import {
  recurringDetailsRequestSchema,
  type RecurringDetailsRequest,
} from "../models/recurring-details-request.js";
import {
  recurringDetailsResultSchema,
  type RecurringDetailsResult,
} from "../models/recurring-details-result.js";
import {
  refundFundsTransferRequestSchema,
  type RefundFundsTransferRequest,
} from "../models/refund-funds-transfer-request.js";
import {
  refundFundsTransferResponseSchema,
  type RefundFundsTransferResponse,
} from "../models/refund-funds-transfer-response.js";
import {
  refundNotPaidOutTransfersRequestSchema,
  type RefundNotPaidOutTransfersRequest,
} from "../models/refund-not-paid-out-transfers-request.js";
import {
  scheduleAccountUpdaterRequestSchema,
  type ScheduleAccountUpdaterRequest,
} from "../models/schedule-account-updater-request.js";
import {
  scheduleAccountUpdaterResultSchema,
  type ScheduleAccountUpdaterResult,
} from "../models/schedule-account-updater-result.js";
import { serviceErrorSchema, type ServiceError } from "../models/service-error.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import {
  setupBeneficiaryRequestSchema,
  type SetupBeneficiaryRequest,
} from "../models/setup-beneficiary-request.js";
import {
  storedValueBalanceCheckRequestSchema,
  type StoredValueBalanceCheckRequest,
} from "../models/stored-value-balance-check-request.js";
import {
  storedValueBalanceCheckResponseSchema,
  type StoredValueBalanceCheckResponse,
} from "../models/stored-value-balance-check-response.js";
import {
  storedValueBalanceMergeRequestSchema,
  type StoredValueBalanceMergeRequest,
} from "../models/stored-value-balance-merge-request.js";
import {
  storedValueBalanceMergeResponseSchema,
  type StoredValueBalanceMergeResponse,
} from "../models/stored-value-balance-merge-response.js";
import {
  storedValueIssueRequestSchema,
  type StoredValueIssueRequest,
} from "../models/stored-value-issue-request.js";
import {
  storedValueIssueResponseSchema,
  type StoredValueIssueResponse,
} from "../models/stored-value-issue-response.js";
import {
  storedValueLoadRequestSchema,
  type StoredValueLoadRequest,
} from "../models/stored-value-load-request.js";
import {
  storedValueLoadResponseSchema,
  type StoredValueLoadResponse,
} from "../models/stored-value-load-response.js";
import {
  storedValueStatusChangeRequestSchema,
  type StoredValueStatusChangeRequest,
} from "../models/stored-value-status-change-request.js";
import {
  storedValueStatusChangeResponseSchema,
  type StoredValueStatusChangeResponse,
} from "../models/stored-value-status-change-response.js";
import {
  storedValueVoidRequestSchema,
  type StoredValueVoidRequest,
} from "../models/stored-value-void-request.js";
import {
  storedValueVoidResponseSchema,
  type StoredValueVoidResponse,
} from "../models/stored-value-void-response.js";
import {
  subjectErasureByPspReferenceRequestSchema,
  type SubjectErasureByPspReferenceRequest,
} from "../models/subject-erasure-by-psp-reference-request.js";
import {
  subjectErasureResponseSchema,
  type SubjectErasureResponse,
} from "../models/subject-erasure-response.js";
import {
  supplyDefenseDocumentRequestSchema,
  type SupplyDefenseDocumentRequest,
} from "../models/supply-defense-document-request.js";
import {
  supplyDefenseDocumentResponseSchema,
  type SupplyDefenseDocumentResponse,
} from "../models/supply-defense-document-response.js";
import {
  testNotificationConfigurationRequestSchema,
  type TestNotificationConfigurationRequest,
} from "../models/test-notification-configuration-request.js";
import {
  testNotificationConfigurationResponseSchema,
  type TestNotificationConfigurationResponse,
} from "../models/test-notification-configuration-response.js";
import {
  threeDsAvailabilityRequestSchema,
  type ThreeDsAvailabilityRequest,
} from "../models/three-ds-availability-request.js";
import {
  threeDsAvailabilityResponseSchema,
  type ThreeDsAvailabilityResponse,
} from "../models/three-ds-availability-response.js";
import { transferFundsRequestSchema, type TransferFundsRequest } from "../models/transfer-funds-request.js";
import {
  transferFundsResponseSchema,
  type TransferFundsResponse,
} from "../models/transfer-funds-response.js";
import {
  updateNotificationConfigurationRequestSchema,
  type UpdateNotificationConfigurationRequest,
} from "../models/update-notification-configuration-request.js";
import type { Servers } from "../servers.js";

export class General {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Accept a dispute
   *
   * @remarks
   * Accepts a specific dispute.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostAcceptDisputeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAcceptDispute(
    request: General.PostAcceptDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<AcceptDisputeResponse, General.PostAcceptDisputeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default22("/acceptDispute"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => acceptDisputeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: acceptDisputeResponseSchema },
        errorFactory: General.PostAcceptDisputeError,
      },
      options,
    );
  }

  /**
   * Get the balances of an account holder
   *
   * @remarks
   * Returns the account balances of an account holder. An account's balances are organized
   * according by currencies. This mean that an account may have multiple balances: one for each
   * currency.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostAccountHolderBalanceError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAccountHolderBalance(
    request: General.PostAccountHolderBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountHolderBalanceResponse, General.PostAccountHolderBalanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default16("/accountHolderBalance"),
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
        success: { kind: "json", schema: accountHolderBalanceResponseSchema },
        errorFactory: General.PostAccountHolderBalanceError,
      },
      options,
    );
  }

  /**
   * Get a list of transactions
   *
   * @remarks
   * Returns a list of transactions for an account holder's accounts. You can specify the accounts
   * and transaction statuses to be included on the list. The call returns a maximum of 50
   * transactions for each account. To retrieve all transactions, you must make another call with
   * the 'page' value incremented. Transactions are listed in chronological order, with the most
   * recent transaction first.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostAccountHolderTransactionListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAccountHolderTransactionList(
    request: General.PostAccountHolderTransactionListRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountHolderTransactionListResponse, General.PostAccountHolderTransactionListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default16("/accountHolderTransactionList"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => accountHolderTransactionListRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: accountHolderTransactionListResponseSchema },
        errorFactory: General.PostAccountHolderTransactionListError,
      },
      options,
    );
  }

  /**
   * Assign terminals
   *
   * @remarks
   * Assigns one or more payment terminals to a merchant account or a store. You can also use this
   * endpoint to reassign terminals between merchant accounts or stores, and to unassign a terminal
   * and return it to company inventory.
   *
   * >From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1,
   * 2025. To automate the management of your terminal fleet, use our [Management
   * API](https://docs.adyen.com/api-explorer/Management/latest/overview).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostAssignTerminalsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postAssignTerminals(
    request: General.PostAssignTerminalsRequest,
    options?: RequestOptions,
  ): ApiPromise<AssignTerminalsResponse, General.PostAssignTerminalsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default28("/assignTerminals"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => assignTerminalsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: assignTerminalsResponseSchema },
        errorFactory: General.PostAssignTerminalsError,
      },
      options,
    );
  }

  /**
   * Changes the status of the payment method.
   *
   * @remarks
   * Changes the status of the provided payment method to the specified status.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostChangeStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postChangeStatus(
    request: General.PostChangeStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueStatusChangeResponse, General.PostChangeStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/changeStatus"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storedValueStatusChangeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storedValueStatusChangeResponseSchema },
        errorFactory: General.PostChangeStatusError,
      },
      options,
    );
  }

  /**
   * Checks the balance.
   *
   * @remarks
   * Checks the balance of the provided payment method.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostCheckBalanceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCheckBalance(
    request: General.PostCheckBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueBalanceCheckResponse, General.PostCheckBalanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/checkBalance"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storedValueBalanceCheckRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storedValueBalanceCheckResponseSchema },
        errorFactory: General.PostCheckBalanceError,
      },
      options,
    );
  }

  /**
   * Subscribe to notifications
   *
   * @remarks
   * Creates a subscription to notifications informing you of events on your platform. After the
   * subscription is created, the events specified in the configuration will be sent to the URL
   * specified in the configuration. Subscriptions must be configured on a per-event basis (as
   * opposed to, for example, a per-account holder basis), so all event notifications of a
   * marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have
   * multiple endpoints if desired; an event notification may be sent to as many or as few different
   * endpoints as configured.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostCreateNotificationConfigurationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCreateNotificationConfiguration(
    request: General.PostCreateNotificationConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<GetNotificationConfigurationResponse, General.PostCreateNotificationConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/createNotificationConfiguration"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createNotificationConfigurationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getNotificationConfigurationResponseSchema },
        errorFactory: General.PostCreateNotificationConfigurationError,
      },
      options,
    );
  }

  /**
   * Create new permits linked to a recurring contract.
   *
   * @remarks
   * Create permits for a recurring contract, including support for defining restrictions.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostCreatePermitError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postCreatePermit(
    request: General.PostCreatePermitRequest,
    options?: RequestOptions,
  ): ApiPromise<CreatePermitResult, General.PostCreatePermitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default2("/createPermit"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createPermitRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createPermitResultSchema },
        errorFactory: General.PostCreatePermitError,
      },
      options,
    );
  }

  /**
   * Creates one or more test card ranges.
   *
   * @remarks
   * Creates one or more test card ranges.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostCreateTestCardRangesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCreateTestCardRanges(
    request: General.PostCreateTestCardRangesRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateTestCardRangesResult, General.PostCreateTestCardRangesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default8("/createTestCardRanges"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createTestCardRangesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createTestCardRangesResultSchema },
        errorFactory: General.PostCreateTestCardRangesError,
      },
      options,
    );
  }

  /**
   * Send a direct debit request
   *
   * @remarks
   * Sends a direct debit request to an account holder's bank account. If the direct debit is
   * successful, the funds are settled in the accounts specified in the split instructions. Adyen
   * sends the result of the direct debit in a
   * [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED)
   * notification webhook.
   *
   * To learn more about direct debits, see [Top up
   * accounts](https://docs.adyen.com/classic-platforms/top-up-accounts).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostDebitAccountHolderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDebitAccountHolder(
    request: General.PostDebitAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<DebitAccountHolderResponse, General.PostDebitAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default16("/debitAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => debitAccountHolderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: debitAccountHolderResponseSchema },
        errorFactory: General.PostDebitAccountHolderError,
      },
      options,
    );
  }

  /**
   * Defend a dispute
   *
   * @remarks
   * Defends a specific dispute.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostDefendDisputeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDefendDispute(
    request: General.PostDefendDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<DefendDisputeResponse, General.PostDefendDisputeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default22("/defendDispute"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => defendDisputeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: defendDisputeResponseSchema },
        errorFactory: General.PostDefendDisputeError,
      },
      options,
    );
  }

  /**
   * Delete a defense document
   *
   * @remarks
   * Deletes a specific dispute defense document that was supplied earlier.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostDeleteDisputeDefenseDocumentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDeleteDisputeDefenseDocument(
    request: General.PostDeleteDisputeDefenseDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteDefenseDocumentResponse, General.PostDeleteDisputeDefenseDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default22("/deleteDisputeDefenseDocument"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteDefenseDocumentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: deleteDefenseDocumentResponseSchema },
        errorFactory: General.PostDeleteDisputeDefenseDocumentError,
      },
      options,
    );
  }

  /**
   * Delete a notification subscription configuration
   *
   * @remarks
   * Deletes an existing notification subscription configuration. After the subscription is deleted,
   * no further event notifications will be sent to the URL defined in the subscription.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostDeleteNotificationConfigurationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDeleteNotificationConfigurations(
    request: General.PostDeleteNotificationConfigurationsRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, General.PostDeleteNotificationConfigurationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/deleteNotificationConfigurations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteNotificationConfigurationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: genericResponseSchema },
        errorFactory: General.PostDeleteNotificationConfigurationsError,
      },
      options,
    );
  }

  /**
   * Disable stored payment details
   *
   * @remarks
   * Disables stored payment details to stop charging a shopper with this particular recurring
   * detail ID.
   *
   * For more information, refer to [Disable stored
   * details](https://docs.adyen.com/online-payments/classic-integrations/classic-api-integration/tokenization/disable-stored-details).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostDisableError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDisable(
    request: General.PostDisableRequest,
    options?: RequestOptions,
  ): ApiPromise<DisableResult, General.PostDisableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default2("/disable"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => disableRequestSchema)) },
      },
      {
        success: { kind: "json", schema: disableResultSchema },
        errorFactory: General.PostDisableError,
      },
      options,
    );
  }

  /**
   * Disable an existing permit.
   *
   * @remarks
   * Disable a permit that was previously linked to a recurringDetailReference.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostDisablePermitError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postDisablePermit(
    request: General.PostDisablePermitRequest,
    options?: RequestOptions,
  ): ApiPromise<DisablePermitResult, General.PostDisablePermitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default2("/disablePermit"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => disablePermitRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: disablePermitResultSchema },
        errorFactory: General.PostDisablePermitError,
      },
      options,
    );
  }

  /**
   * Get the account or store of a terminal
   *
   * @remarks
   * Returns the company account, merchant account, or store that a payment terminal is assigned to.
   *
   * >From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1,
   * 2025. To automate the management of your terminal fleet, use our [Management
   * API](https://docs.adyen.com/api-explorer/Management/latest/overview).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostFindTerminalError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postFindTerminal(
    request: General.PostFindTerminalRequest,
    options?: RequestOptions,
  ): ApiPromise<FindTerminalResponse, General.PostFindTerminalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default28("/findTerminal"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => findTerminalRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: findTerminalResponseSchema },
        errorFactory: General.PostFindTerminalError,
      },
      options,
    );
  }

  /**
   * Check if 3D Secure is available
   *
   * @remarks
   * Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2,
   * this endpoint also returns device fingerprinting keys.
   *
   * For more information, refer to [3D Secure
   * 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostGet3DsAvailabilityError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGet3DsAvailability(
    request: General.PostGet3DsAvailabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreeDsAvailabilityResponse, General.PostGet3DsAvailabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default4("/get3dsAvailability"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => threeDsAvailabilityRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: threeDsAvailabilityResponseSchema },
        errorFactory: General.PostGet3DsAvailabilityError,
      },
      options,
    );
  }

  /**
   * Get a fees cost estimate
   *
   * @remarks
   * >This API is available only for merchants operating in Australia, the EU, and the UK.
   *
   * Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing
   * these costs prior actual payment authorisation gives you an opportunity to charge those costs
   * to the cardholder, if necessary.
   *
   * To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to
   * this call contains the amount of the interchange and scheme fees charged by the network for
   * this transaction, and also which surcharging policy is possible (based on current regulations).
   *
   * > Since not all information is known in advance (for example, if the cardholder will
   * successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3
   * data), the returned amounts are based on a set of assumption criteria you define in the
   * `assumptions` parameter.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostGetCostEstimateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGetCostEstimate(
    request: General.PostGetCostEstimateRequest,
    options?: RequestOptions,
  ): ApiPromise<CostEstimateResponse, General.PostGetCostEstimateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default4("/getCostEstimate"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => costEstimateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: costEstimateResponseSchema },
        errorFactory: General.PostGetCostEstimateError,
      },
      options,
    );
  }

  /**
   * Get a notification subscription configuration
   *
   * @remarks
   * Returns the details of the configuration of a notification subscription.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostGetNotificationConfigurationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGetNotificationConfiguration(
    request: General.PostGetNotificationConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<GetNotificationConfigurationResponse, General.PostGetNotificationConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/getNotificationConfiguration"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getNotificationConfigurationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getNotificationConfigurationResponseSchema },
        errorFactory: General.PostGetNotificationConfigurationError,
      },
      options,
    );
  }

  /**
   * Get a list of notification subscription configurations
   *
   * @remarks
   * Returns the details of the configurations of all of the notification subscriptions in the
   * platform of the executing user.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostGetNotificationConfigurationListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGetNotificationConfigurationList(
    request: General.PostGetNotificationConfigurationListRequest,
    options?: RequestOptions,
  ): ApiPromise<GetNotificationConfigurationListResponse, General.PostGetNotificationConfigurationListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/getNotificationConfigurationList"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: getNotificationConfigurationListResponseSchema },
        errorFactory: General.PostGetNotificationConfigurationListError,
      },
      options,
    );
  }

  /**
   * Get the stores of an account
   *
   * @remarks
   * Returns a list of stores associated with a company account or a merchant account, including the
   * status of each store.
   *
   * >From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1,
   * 2025. To automate the management of your terminal fleet, use our [Management
   * API](https://docs.adyen.com/api-explorer/Management/latest/overview).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostGetStoresUnderAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postGetStoresUnderAccount(
    request: General.PostGetStoresUnderAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<GetStoresUnderAccountResponse, General.PostGetStoresUnderAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default28("/getStoresUnderAccount"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getStoresUnderAccountRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getStoresUnderAccountResponseSchema },
        errorFactory: General.PostGetStoresUnderAccountError,
      },
      options,
    );
  }

  /**
   * Get the details of a terminal
   *
   * @remarks
   * Returns the details of a payment terminal, including where the terminal is assigned to. The
   * response returns the same details that are provided in the terminal list in your Customer Area
   * and in the Terminal Fleet report.
   *
   * >From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1,
   * 2025. To automate the management of your terminal fleet, use our [Management
   * API](https://docs.adyen.com/api-explorer/Management/latest/overview).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostGetTerminalDetailsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postGetTerminalDetails(
    request: General.PostGetTerminalDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTerminalDetailsResponse, General.PostGetTerminalDetailsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default28("/getTerminalDetails"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getTerminalDetailsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getTerminalDetailsResponseSchema },
        errorFactory: General.PostGetTerminalDetailsError,
      },
      options,
    );
  }

  /**
   * Get the list of terminals
   *
   * @remarks
   * Returns a list of payment terminals associated with a company account, merchant account, or
   * store. The response shows whether the terminals are in the inventory, or in-store (ready for
   * boarding or already boarded).
   *
   * >From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1,
   * 2025. To automate the management of your terminal fleet, use our [Management
   * API](https://docs.adyen.com/api-explorer/Management/latest/overview).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostGetTerminalsUnderAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postGetTerminalsUnderAccount(
    request: General.PostGetTerminalsUnderAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTerminalsUnderAccountResponse, General.PostGetTerminalsUnderAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default28("/getTerminalsUnderAccount"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getTerminalsUnderAccountRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getTerminalsUnderAccountResponseSchema },
        errorFactory: General.PostGetTerminalsUnderAccountError,
      },
      options,
    );
  }

  /**
   * Issues a new card.
   *
   * @remarks
   * Issues a new card of the given payment method.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostIssueError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postIssue(
    request: General.PostIssueRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueIssueResponse, General.PostIssueError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/issue"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storedValueIssueRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storedValueIssueResponseSchema },
        errorFactory: General.PostIssueError,
      },
      options,
    );
  }

  /**
   * Get stored payment details
   *
   * @remarks
   * Lists the stored payment details for a shopper, if there are any available. The recurring
   * detail ID can be used with a regular authorisation request to charge the shopper. A summary of
   * the payment detail is returned for presentation to the shopper.
   *
   * For more information, refer to [Retrieve stored
   * details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostListRecurringDetailsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postListRecurringDetails(
    request: General.PostListRecurringDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringDetailsResult, General.PostListRecurringDetailsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default2("/listRecurringDetails"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => recurringDetailsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: recurringDetailsResultSchema },
        errorFactory: General.PostListRecurringDetailsError,
      },
      options,
    );
  }

  /**
   * Loads the payment method.
   *
   * @remarks
   * Loads the payment method with the specified funds.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostLoadError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLoad(
    request: General.PostLoadRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueLoadResponse, General.PostLoadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/load"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storedValueLoadRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storedValueLoadResponseSchema },
        errorFactory: General.PostLoadError,
      },
      options,
    );
  }

  /**
   * Merge the balance of two cards.
   *
   * @remarks
   * Increases the balance of the paymentmethod by the full amount left on the source paymentmethod
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostMergeBalanceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMergeBalance(
    request: General.PostMergeBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueBalanceMergeResponse, General.PostMergeBalanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/mergeBalance"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storedValueBalanceMergeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storedValueBalanceMergeResponseSchema },
        errorFactory: General.PostMergeBalanceError,
      },
      options,
    );
  }

  /**
   * Ask issuer to notify the shopper
   *
   * @remarks
   * Sends a request to the issuer so they can inform the shopper about the upcoming recurring
   * payment. This endpoint is used only for local acquiring in India. For more information, refer
   * to [Recurring card payments in
   * India](https://docs.adyen.com/payment-methods/cards/cards-recurring-india).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostNotifyShopperError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postNotifyShopper(
    request: General.PostNotifyShopperRequest,
    options?: RequestOptions,
  ): ApiPromise<NotifyShopperResult, General.PostNotifyShopperError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default2("/notifyShopper"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => notifyShopperRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: notifyShopperResultSchema },
        errorFactory: General.PostNotifyShopperError,
      },
      options,
    );
  }

  /**
   * Pay out from an account to the account holder
   *
   * @remarks
   * Pays out a specified amount from an account to the bank account of account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostPayoutAccountHolderError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPayoutAccountHolder(
    request: General.PostPayoutAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutAccountHolderResponse, General.PostPayoutAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default16("/payoutAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => payoutAccountHolderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: payoutAccountHolderResponseSchema },
        errorFactory: General.PostPayoutAccountHolderError,
      },
      options,
    );
  }

  /**
   * Refund a funds transfer
   *
   * @remarks
   * Refunds funds transferred from one account to another. Both accounts must be in the same
   * platform, but can have different account holders.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostRefundFundsTransferError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postRefundFundsTransfer(
    request: General.PostRefundFundsTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<RefundFundsTransferResponse, General.PostRefundFundsTransferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default16("/refundFundsTransfer"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => refundFundsTransferRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: refundFundsTransferResponseSchema },
        errorFactory: General.PostRefundFundsTransferError,
      },
      options,
    );
  }

  /**
   * Refund all transactions of an account since the most recent payout
   *
   * @remarks
   * Refunds all the transactions of an account that have taken place since the most recent payout.
   * This request is on a account basis (as opposed to a payment basis), so only the portion of the
   * payment that was made to the specified account is refunded. The commissions, fees, and payments
   * to other accounts remain in the accounts to which they were sent as designated by the original
   * payment's split details.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostRefundNotPaidOutTransfersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postRefundNotPaidOutTransfers(
    request: General.PostRefundNotPaidOutTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, General.PostRefundNotPaidOutTransfersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default16("/refundNotPaidOutTransfers"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => refundNotPaidOutTransfersRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: genericResponseSchema },
        errorFactory: General.PostRefundNotPaidOutTransfersError,
      },
      options,
    );
  }

  /**
   * Submit a Subject Erasure Request.
   *
   * @remarks
   * Sends the PSP reference containing the shopper data that should be deleted.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostRequestSubjectErasureError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postRequestSubjectErasure(
    request: General.PostRequestSubjectErasureRequest,
    options?: RequestOptions,
  ): ApiPromise<SubjectErasureResponse, General.PostRequestSubjectErasureError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6("/requestSubjectErasure"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => subjectErasureByPspReferenceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subjectErasureResponseSchema },
        errorFactory: General.PostRequestSubjectErasureError,
      },
      options,
    );
  }

  /**
   * Get applicable defense reasons
   *
   * @remarks
   * Returns a list of all applicable defense reasons to defend a specific dispute.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostRetrieveApplicableDefenseReasonsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postRetrieveApplicableDefenseReasons(
    request: General.PostRetrieveApplicableDefenseReasonsRequest,
    options?: RequestOptions,
  ): ApiPromise<DefenseReasonsResponse, General.PostRetrieveApplicableDefenseReasonsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default22("/retrieveApplicableDefenseReasons"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => defenseReasonsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: defenseReasonsResponseSchema },
        errorFactory: General.PostRetrieveApplicableDefenseReasonsError,
      },
      options,
    );
  }

  /**
   * Schedule running the Account Updater
   *
   * @remarks
   * When making the API call, you can submit either the credit card information, or the recurring
   * detail reference and the shopper reference:
   * * If the card information is provided, all the sub-fields for `card` are mandatory.
   * * If the recurring detail reference is provided, the fields for `shopperReference` and
   *   `selectedRecurringDetailReference` are mandatory.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostScheduleAccountUpdaterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postScheduleAccountUpdater(
    request: General.PostScheduleAccountUpdaterRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleAccountUpdaterResult, General.PostScheduleAccountUpdaterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default2("/scheduleAccountUpdater"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => scheduleAccountUpdaterRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: scheduleAccountUpdaterResultSchema },
        errorFactory: General.PostScheduleAccountUpdaterError,
      },
      options,
    );
  }

  /**
   * Create a communication session
   *
   * @remarks
   * Establishes a secure communications session between the POS Mobile SDK and the Adyen payments
   * platform, through mutual authentication. The request sends a setup token that identifies the
   * SDK and the device. The response returns a session token that the SDK can use to authenticate
   * responses received from the Adyen payments platform. >This request applies to **mobile
   * in-person** transactions. You cannot use this request to create online payments sessions.
   *
   * @returns Created - the request has been fulfilled and has resulted in one or more new resources
   * being created.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postSessions3(
    request: General.PostSessions3Request,
    options?: RequestOptions,
  ): ApiPromise<CertificateLoadingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default27("/sessions"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSessionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: certificateLoadingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Designate a beneficiary account and transfer the benefactor's current balance
   *
   * @remarks
   * Defines a benefactor and a beneficiary relationship between two accounts. At the time of
   * benefactor/beneficiary setup, the funds in the benefactor account are transferred to the
   * beneficiary account, and any further payments to the benefactor account are automatically sent
   * to the beneficiary account. A series of benefactor/beneficiaries may not exceed four
   * beneficiaries and may not have a cycle in it.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostSetupBeneficiaryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postSetupBeneficiary(
    request: General.PostSetupBeneficiaryRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, General.PostSetupBeneficiaryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default16("/setupBeneficiary"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => setupBeneficiaryRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: genericResponseSchema },
        errorFactory: General.PostSetupBeneficiaryError,
      },
      options,
    );
  }

  /**
   * Supply a defense document
   *
   * @remarks
   * Supplies a specific dispute defense document.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostSupplyDefenseDocumentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postSupplyDefenseDocument(
    request: General.PostSupplyDefenseDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<SupplyDefenseDocumentResponse, General.PostSupplyDefenseDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default22("/supplyDefenseDocument"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => supplyDefenseDocumentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: supplyDefenseDocumentResponseSchema },
        errorFactory: General.PostSupplyDefenseDocumentError,
      },
      options,
    );
  }

  /**
   * Test a notification configuration
   *
   * @remarks
   * Tests an existing notification subscription configuration. For each event type specified, a
   * test notification will be generated and sent to the URL configured in the subscription
   * specified.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostTestNotificationConfigurationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTestNotificationConfiguration(
    request: General.PostTestNotificationConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<TestNotificationConfigurationResponse, General.PostTestNotificationConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/testNotificationConfiguration"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => testNotificationConfigurationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: testNotificationConfigurationResponseSchema },
        errorFactory: General.PostTestNotificationConfigurationError,
      },
      options,
    );
  }

  /**
   * Transfer funds between platform accounts
   *
   * @remarks
   * Transfers funds from one account to another account. Both accounts must be in the same
   * platform, but can have different account holders. The transfer must include a transfer code,
   * which should be determined by the platform, in compliance with local regulations.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostTransferFundsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTransferFunds(
    request: General.PostTransferFundsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferFundsResponse, General.PostTransferFundsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default16("/transferFunds"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => transferFundsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: transferFundsResponseSchema },
        errorFactory: General.PostTransferFundsError,
      },
      options,
    );
  }

  /**
   * Update a notification subscription configuration
   *
   * @remarks
   * Updates an existing notification subscription configuration. If you are updating the event
   * types, you must provide all event types, otherwise the previous event type configuration will
   * be overwritten.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostUpdateNotificationConfigurationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postUpdateNotificationConfiguration(
    request: General.PostUpdateNotificationConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<GetNotificationConfigurationResponse, General.PostUpdateNotificationConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/updateNotificationConfiguration"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateNotificationConfigurationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getNotificationConfigurationResponseSchema },
        errorFactory: General.PostUpdateNotificationConfigurationError,
      },
      options,
    );
  }

  /**
   * Voids a transaction.
   *
   * @remarks
   * Voids the referenced stored value transaction.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link General.PostVoidTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postVoidTransaction(
    request: General.PostVoidTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueVoidResponse, General.PostVoidTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/voidTransaction"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storedValueVoidRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storedValueVoidResponseSchema },
        errorFactory: General.PostVoidTransactionError,
      },
      options,
    );
  }
}

export namespace General {
  export type PostAcceptDisputeRequest = {
    body?: AcceptDisputeRequest;
  };

  export class PostAcceptDisputeError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostAcceptDisputeError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostAccountHolderBalanceRequest = {
    body?: CloseAccountHolderRequest;
  };

  export class PostAccountHolderBalanceError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostAccountHolderBalanceError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostAccountHolderTransactionListRequest = {
    body?: AccountHolderTransactionListRequest;
  };

  export class PostAccountHolderTransactionListError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostAccountHolderTransactionListError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostAssignTerminalsRequest = {
    body?: AssignTerminalsRequest;
  };

  export class PostAssignTerminalsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostAssignTerminalsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostChangeStatusRequest = {
    body?: StoredValueStatusChangeRequest;
  };

  export class PostChangeStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostChangeStatusError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostCheckBalanceRequest = {
    body?: StoredValueBalanceCheckRequest;
  };

  export class PostCheckBalanceError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCheckBalanceError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostCreateNotificationConfigurationRequest = {
    body?: CreateNotificationConfigurationRequest;
  };

  export class PostCreateNotificationConfigurationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostCreateNotificationConfigurationError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostCreatePermitRequest = {
    body?: CreatePermitRequest;
  };

  export class PostCreatePermitError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCreatePermitError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostCreateTestCardRangesRequest = {
    body?: CreateTestCardRangesRequest;
  };

  export class PostCreateTestCardRangesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostCreateTestCardRangesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostDebitAccountHolderRequest = {
    body?: DebitAccountHolderRequest;
  };

  export class PostDebitAccountHolderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostDebitAccountHolderError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostDefendDisputeRequest = {
    body?: DefendDisputeRequest;
  };

  export class PostDefendDisputeError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostDefendDisputeError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostDeleteDisputeDefenseDocumentRequest = {
    body?: DeleteDefenseDocumentRequest;
  };

  export class PostDeleteDisputeDefenseDocumentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostDeleteDisputeDefenseDocumentError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostDeleteNotificationConfigurationsRequest = {
    body?: DeleteNotificationConfigurationRequest;
  };

  export class PostDeleteNotificationConfigurationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostDeleteNotificationConfigurationsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostDisableRequest = {
    body?: DisableRequest;
  };

  export class PostDisableError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostDisableError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostDisablePermitRequest = {
    body?: DisablePermitRequest;
  };

  export class PostDisablePermitError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostDisablePermitError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostFindTerminalRequest = {
    body?: FindTerminalRequest;
  };

  export class PostFindTerminalError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostFindTerminalError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostGet3DsAvailabilityRequest = {
    body?: ThreeDsAvailabilityRequest;
  };

  export class PostGet3DsAvailabilityError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostGet3DsAvailabilityError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostGetCostEstimateRequest = {
    body?: CostEstimateRequest;
  };

  export class PostGetCostEstimateError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostGetCostEstimateError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostGetNotificationConfigurationRequest = {
    body?: GetNotificationConfigurationRequest;
  };

  export class PostGetNotificationConfigurationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostGetNotificationConfigurationError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostGetNotificationConfigurationListRequest = {
    body?: Record<string, unknown>;
  };

  export class PostGetNotificationConfigurationListError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostGetNotificationConfigurationListError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostGetStoresUnderAccountRequest = {
    body?: GetStoresUnderAccountRequest;
  };

  export class PostGetStoresUnderAccountError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostGetStoresUnderAccountError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostGetTerminalDetailsRequest = {
    body?: GetTerminalDetailsRequest;
  };

  export class PostGetTerminalDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostGetTerminalDetailsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostGetTerminalsUnderAccountRequest = {
    body?: GetTerminalsUnderAccountRequest;
  };

  export class PostGetTerminalsUnderAccountError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostGetTerminalsUnderAccountError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostIssueRequest = {
    body?: StoredValueIssueRequest;
  };

  export class PostIssueError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostIssueError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostListRecurringDetailsRequest = {
    body?: RecurringDetailsRequest;
  };

  export class PostListRecurringDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostListRecurringDetailsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostLoadRequest = {
    body?: StoredValueLoadRequest;
  };

  export class PostLoadError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostLoadError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostMergeBalanceRequest = {
    body?: StoredValueBalanceMergeRequest;
  };

  export class PostMergeBalanceError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMergeBalanceError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostNotifyShopperRequest = {
    body?: NotifyShopperRequest;
  };

  export class PostNotifyShopperError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostNotifyShopperError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPayoutAccountHolderRequest = {
    body?: PayoutAccountHolderRequest;
  };

  export class PostPayoutAccountHolderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostPayoutAccountHolderError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostRefundFundsTransferRequest = {
    body?: RefundFundsTransferRequest;
  };

  export class PostRefundFundsTransferError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostRefundFundsTransferError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostRefundNotPaidOutTransfersRequest = {
    body?: RefundNotPaidOutTransfersRequest;
  };

  export class PostRefundNotPaidOutTransfersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostRefundNotPaidOutTransfersError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostRequestSubjectErasureRequest = {
    body?: SubjectErasureByPspReferenceRequest;
  };

  export class PostRequestSubjectErasureError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostRequestSubjectErasureError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostRetrieveApplicableDefenseReasonsRequest = {
    body?: DefenseReasonsRequest;
  };

  export class PostRetrieveApplicableDefenseReasonsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostRetrieveApplicableDefenseReasonsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostScheduleAccountUpdaterRequest = {
    body?: ScheduleAccountUpdaterRequest;
  };

  export class PostScheduleAccountUpdaterError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostScheduleAccountUpdaterError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostSessions3Request = {
    body?: CreateSessionRequest;
  };

  export type PostSetupBeneficiaryRequest = {
    body?: SetupBeneficiaryRequest;
  };

  export class PostSetupBeneficiaryError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostSetupBeneficiaryError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostSupplyDefenseDocumentRequest = {
    body?: SupplyDefenseDocumentRequest;
  };

  export class PostSupplyDefenseDocumentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostSupplyDefenseDocumentError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostTestNotificationConfigurationRequest = {
    body?: TestNotificationConfigurationRequest;
  };

  export class PostTestNotificationConfigurationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostTestNotificationConfigurationError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostTransferFundsRequest = {
    body?: TransferFundsRequest;
  };

  export class PostTransferFundsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostTransferFundsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostUpdateNotificationConfigurationRequest = {
    body?: UpdateNotificationConfigurationRequest;
  };

  export class PostUpdateNotificationConfigurationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostUpdateNotificationConfigurationError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostVoidTransactionRequest = {
    body?: StoredValueVoidRequest;
  };

  export class PostVoidTransactionError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostVoidTransactionError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
