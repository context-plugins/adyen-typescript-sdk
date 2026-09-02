import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  postAcceptDispute(
    request: General.PostAcceptDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<AcceptDisputeResponse, General.PostAcceptDisputeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default22("/acceptDispute"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postAccountHolderBalance(
    request: General.PostAccountHolderBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountHolderBalanceResponse, General.PostAccountHolderBalanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default16("/accountHolderBalance"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postAccountHolderTransactionList(
    request: General.PostAccountHolderTransactionListRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountHolderTransactionListResponse, General.PostAccountHolderTransactionListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default16("/accountHolderTransactionList"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postAssignTerminals(
    request: General.PostAssignTerminalsRequest,
    options?: RequestOptions,
  ): ApiPromise<AssignTerminalsResponse, General.PostAssignTerminalsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default28("/assignTerminals"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postChangeStatus(
    request: General.PostChangeStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueStatusChangeResponse, General.PostChangeStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default5("/changeStatus"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postCheckBalance(
    request: General.PostCheckBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueBalanceCheckResponse, General.PostCheckBalanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default5("/checkBalance"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postCreateNotificationConfiguration(
    request: General.PostCreateNotificationConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<GetNotificationConfigurationResponse, General.PostCreateNotificationConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default12("/createNotificationConfiguration"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postCreatePermit(
    request: General.PostCreatePermitRequest,
    options?: RequestOptions,
  ): ApiPromise<CreatePermitResult, General.PostCreatePermitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default2("/createPermit"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postCreateTestCardRanges(
    request: General.PostCreateTestCardRangesRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateTestCardRangesResult, General.PostCreateTestCardRangesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default8("/createTestCardRanges"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postDebitAccountHolder(
    request: General.PostDebitAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<DebitAccountHolderResponse, General.PostDebitAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default16("/debitAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postDefendDispute(
    request: General.PostDefendDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<DefendDisputeResponse, General.PostDefendDisputeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default22("/defendDispute"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postDeleteDisputeDefenseDocument(
    request: General.PostDeleteDisputeDefenseDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteDefenseDocumentResponse, General.PostDeleteDisputeDefenseDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default22("/deleteDisputeDefenseDocument"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postDeleteNotificationConfigurations(
    request: General.PostDeleteNotificationConfigurationsRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, General.PostDeleteNotificationConfigurationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default12("/deleteNotificationConfigurations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postDisable(
    request: General.PostDisableRequest,
    options?: RequestOptions,
  ): ApiPromise<DisableResult, General.PostDisableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default2("/disable"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => disableRequestSchema)) },
      },
      {
        success: { kind: "json", schema: disableResultSchema },
        errorFactory: General.PostDisableError,
      },
      options,
    );
  }

  postDisablePermit(
    request: General.PostDisablePermitRequest,
    options?: RequestOptions,
  ): ApiPromise<DisablePermitResult, General.PostDisablePermitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default2("/disablePermit"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postFindTerminal(
    request: General.PostFindTerminalRequest,
    options?: RequestOptions,
  ): ApiPromise<FindTerminalResponse, General.PostFindTerminalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default28("/findTerminal"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postGet3DsAvailability(
    request: General.PostGet3DsAvailabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreeDsAvailabilityResponse, General.PostGet3DsAvailabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default4("/get3dsAvailability"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postGetCostEstimate(
    request: General.PostGetCostEstimateRequest,
    options?: RequestOptions,
  ): ApiPromise<CostEstimateResponse, General.PostGetCostEstimateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default4("/getCostEstimate"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postGetNotificationConfiguration(
    request: General.PostGetNotificationConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<GetNotificationConfigurationResponse, General.PostGetNotificationConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default12("/getNotificationConfiguration"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postGetNotificationConfigurationList(
    request: General.PostGetNotificationConfigurationListRequest,
    options?: RequestOptions,
  ): ApiPromise<GetNotificationConfigurationListResponse, General.PostGetNotificationConfigurationListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default12("/getNotificationConfigurationList"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: getNotificationConfigurationListResponseSchema },
        errorFactory: General.PostGetNotificationConfigurationListError,
      },
      options,
    );
  }

  postGetStoresUnderAccount(
    request: General.PostGetStoresUnderAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<GetStoresUnderAccountResponse, General.PostGetStoresUnderAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default28("/getStoresUnderAccount"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postGetTerminalDetails(
    request: General.PostGetTerminalDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTerminalDetailsResponse, General.PostGetTerminalDetailsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default28("/getTerminalDetails"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postGetTerminalsUnderAccount(
    request: General.PostGetTerminalsUnderAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTerminalsUnderAccountResponse, General.PostGetTerminalsUnderAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default28("/getTerminalsUnderAccount"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postIssue(
    request: General.PostIssueRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueIssueResponse, General.PostIssueError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default5("/issue"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postListRecurringDetails(
    request: General.PostListRecurringDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringDetailsResult, General.PostListRecurringDetailsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default2("/listRecurringDetails"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postLoad(
    request: General.PostLoadRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueLoadResponse, General.PostLoadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default5("/load"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postMergeBalance(
    request: General.PostMergeBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueBalanceMergeResponse, General.PostMergeBalanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default5("/mergeBalance"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postNotifyShopper(
    request: General.PostNotifyShopperRequest,
    options?: RequestOptions,
  ): ApiPromise<NotifyShopperResult, General.PostNotifyShopperError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default2("/notifyShopper"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postPayoutAccountHolder(
    request: General.PostPayoutAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutAccountHolderResponse, General.PostPayoutAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default16("/payoutAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postRefundFundsTransfer(
    request: General.PostRefundFundsTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<RefundFundsTransferResponse, General.PostRefundFundsTransferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default16("/refundFundsTransfer"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postRefundNotPaidOutTransfers(
    request: General.PostRefundNotPaidOutTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, General.PostRefundNotPaidOutTransfersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default16("/refundNotPaidOutTransfers"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postRequestSubjectErasure(
    request: General.PostRequestSubjectErasureRequest,
    options?: RequestOptions,
  ): ApiPromise<SubjectErasureResponse, General.PostRequestSubjectErasureError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default6("/requestSubjectErasure"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postRetrieveApplicableDefenseReasons(
    request: General.PostRetrieveApplicableDefenseReasonsRequest,
    options?: RequestOptions,
  ): ApiPromise<DefenseReasonsResponse, General.PostRetrieveApplicableDefenseReasonsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default22("/retrieveApplicableDefenseReasons"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postScheduleAccountUpdater(
    request: General.PostScheduleAccountUpdaterRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleAccountUpdaterResult, General.PostScheduleAccountUpdaterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default2("/scheduleAccountUpdater"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postSessions3(
    request: General.PostSessions3Request,
    options?: RequestOptions,
  ): ApiPromise<CertificateLoadingResponse, ResponseError> {
    return this.#rawClient.execute<CertificateLoadingResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default27("/sessions"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSessionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: certificateLoadingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  postSetupBeneficiary(
    request: General.PostSetupBeneficiaryRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, General.PostSetupBeneficiaryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default16("/setupBeneficiary"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postSupplyDefenseDocument(
    request: General.PostSupplyDefenseDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<SupplyDefenseDocumentResponse, General.PostSupplyDefenseDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default22("/supplyDefenseDocument"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postTestNotificationConfiguration(
    request: General.PostTestNotificationConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<TestNotificationConfigurationResponse, General.PostTestNotificationConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default12("/testNotificationConfiguration"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postTransferFunds(
    request: General.PostTransferFundsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferFundsResponse, General.PostTransferFundsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default16("/transferFunds"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postUpdateNotificationConfiguration(
    request: General.PostUpdateNotificationConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<GetNotificationConfigurationResponse, General.PostUpdateNotificationConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default12("/updateNotificationConfiguration"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postVoidTransaction(
    request: General.PostVoidTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueVoidResponse, General.PostVoidTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default5("/voidTransaction"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  export class PostAcceptDisputeError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostAccountHolderBalanceError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostAccountHolderTransactionListError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostAssignTerminalsError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostChangeStatusError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
  > {
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

  export class PostCheckBalanceError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
  > {
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

  export class PostCreateNotificationConfigurationError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostCreatePermitError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostCreateTestCardRangesError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostDebitAccountHolderError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostDefendDisputeError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostDeleteDisputeDefenseDocumentError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostDeleteNotificationConfigurationsError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostDisableError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostDisablePermitError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostFindTerminalError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostGet3DsAvailabilityError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostGetCostEstimateError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostGetNotificationConfigurationError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostGetNotificationConfigurationListError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostGetStoresUnderAccountError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostGetTerminalDetailsError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostGetTerminalsUnderAccountError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostIssueError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
  > {
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

  export class PostListRecurringDetailsError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostLoadError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
  > {
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

  export class PostMergeBalanceError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
  > {
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

  export class PostNotifyShopperError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostPayoutAccountHolderError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostRefundFundsTransferError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostRefundNotPaidOutTransfersError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostRequestSubjectErasureError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostRetrieveApplicableDefenseReasonsError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostScheduleAccountUpdaterError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostSetupBeneficiaryError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostSupplyDefenseDocumentError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostTestNotificationConfigurationError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostTransferFundsError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostUpdateNotificationConfigurationError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
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

  export class PostVoidTransactionError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostVoidTransactionError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
