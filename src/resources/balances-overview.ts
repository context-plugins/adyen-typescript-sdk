import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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
        url: this.#servers.default11("/balanceOverview/companies/{companyAccountCode}/balances"),
        auth: noneAuth,
        pathParams: [{ name: "companyAccountCode", value: request.companyAccountCode, schema: s.string() }],
        query: [{ name: "currency", value: request.currency, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyBalancesSchema },
        errorFactory: BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError,
      },
      options,
    );
  }

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
        url: this.#servers.default11("/balanceOverview/merchants/{merchantAccountCode}/balances"),
        auth: noneAuth,
        pathParams: [{ name: "merchantAccountCode", value: request.merchantAccountCode, schema: s.string() }],
        query: [{ name: "currency", value: request.currency, schema: s.string() }],
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
    companyAccountCode: string;
    currency: string;
  };

  export class GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
    merchantAccountCode: string;
    currency: string;
  };

  export class GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
