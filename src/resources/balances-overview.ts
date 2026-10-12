import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { companyBalancesSchema, type CompanyBalances } from "../models/company-balances.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import { merchantBalanceSchema, type MerchantBalance } from "../models/merchant-balance.js";
import type { Servers } from "../servers.js";

export class BalancesOverview {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * View the available balances for all merchant accounts under your company.
   *
   * @remarks
   * Returns an array with details about the balances available for all merchant accounts under your
   * company account. For each merchant account, the response returns the following:
   *
   *
   * * **Available funds**: The funds in the merchant account that have been settled and are
   *   available for use.
   *
   *
   * * **Pending balance**: The funds in the merchant account that have not been settled yet.
   *
   *
   * * **Next payout amount**: The amount that will be settled to your bank account with the next
   *   payout.
   *
   *
   * * **Reserve**: The available amount to cover refunds, payouts, chargebacks, and other
   *   operational expenses that cannot be covered by your in-process funds.
   *
   *
   * * **Deposit**: The amount withheld by Adyen to cover potential losses and liabilities due to
   *   payment processing.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceOverviewCompaniesCompanyAccountCodeBalances(
    request: BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CompanyBalances,
    BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/balanceOverview/companies/{companyAccountCode}/balances"),
        auth: noneAuth,
        pathParams: [{ name: "companyAccountCode", value: request.companyAccountCode, schema: s.string() }],
        query: [{ name: "currency", value: request.currency, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyBalancesSchema },
        errorFactory: BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError,
      },
      options,
    );
  }

  /**
   * View all balances available for your merchant account.
   *
   * @remarks
   * Returns an overview of the different balances available for the merchant account. This includes
   * details about the following:
   *
   *
   * * **Available funds**: The funds in the merchant account that have been settled and are
   *   available for use.
   *
   *
   * * **Pending balance**: The funds in the merchant account that have not been settled yet.
   *
   *
   * * **Next payout amount**: The amount that will be settled to your bank account with the next
   *   payout.
   *
   *
   * * **Reserve**: The available amount to cover refunds, payouts, chargebacks, and other
   *   operational expenses that cannot be covered by your in-process funds.
   *
   *
   * * **Deposit**: The amount withheld by Adyen to cover potential losses and liabilities due to
   *   payment processing.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link BalancesOverview.GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceOverviewMerchantsMerchantAccountCodeBalances(
    request: BalancesOverview.GetBalanceOverviewMerchantsMerchantAccountCodeBalancesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    MerchantBalance,
    BalancesOverview.GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/balanceOverview/merchants/{merchantAccountCode}/balances"),
        auth: noneAuth,
        pathParams: [{ name: "merchantAccountCode", value: request.merchantAccountCode, schema: s.string() }],
        query: [{ name: "currency", value: request.currency, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: merchantBalanceSchema },
        errorFactory: BalancesOverview.GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError,
      },
      options,
    );
  }
}

export namespace BalancesOverview {
  export type GetBalanceOverviewCompaniesCompanyAccountCodeBalancesRequest = {
    /** The unique identifier of your company account. */
    companyAccountCode: string;
    /** The currency for which you want a balances overview. */
    currency: string;
  };

  export class GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError> = [
      {
        on: 401,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetBalanceOverviewMerchantsMerchantAccountCodeBalancesRequest = {
    /** The unique identifier of your merchant account. */
    merchantAccountCode: string;
    /** The currency for which you want a balances overview. */
    currency: string;
  };

  export class GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError> = [
      {
        on: 401,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
