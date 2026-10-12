import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  splitConfigurationListSchema,
  type SplitConfigurationList,
} from "../models/split-configuration-list.js";
import {
  splitConfigurationRuleSchema,
  type SplitConfigurationRule,
} from "../models/split-configuration-rule.js";
import { splitConfigurationSchema, type SplitConfiguration } from "../models/split-configuration.js";
import {
  updateSplitConfigurationLogicRequestSchema,
  type UpdateSplitConfigurationLogicRequest,
} from "../models/update-split-configuration-logic-request.js";
import {
  updateSplitConfigurationRequestSchema,
  type UpdateSplitConfigurationRequest,
} from "../models/update-split-configuration-request.js";
import {
  updateSplitConfigurationRuleRequestSchema,
  type UpdateSplitConfigurationRuleRequest,
} from "../models/update-split-configuration-rule-request.js";
import type { Servers } from "../servers.js";

export class SplitConfigurationMerchantLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a split configuration profile
   *
   * @remarks
   * Deletes the split configuration profile specified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API - SplitConfiguration read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
    request: SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SplitConfiguration,
    SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: splitConfigurationSchema },
        errorFactory:
          SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError,
      },
      options,
    );
  }

  /**
   * Delete a rule
   *
   * @remarks
   * Deletes the rule specified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API - SplitConfiguration read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(
    request: SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SplitConfiguration,
    SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
          { name: "ruleId", value: request.ruleId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: splitConfigurationSchema },
        errorFactory:
          SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError,
      },
      options,
    );
  }

  /**
   * Get a list of split configuration profiles
   *
   * @remarks
   * Returns the list of split configuration profiles for the merchant account.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API - SplitConfiguration read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdSplitConfigurations(
    request: SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SplitConfigurationList,
    SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/splitConfigurations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: splitConfigurationListSchema },
        errorFactory: SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsError,
      },
      options,
    );
  }

  /**
   * Get a split configuration profile
   *
   * @remarks
   * Returns the details of the split configuration profile specified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API - SplitConfiguration read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
    request: SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SplitConfiguration,
    SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: splitConfigurationSchema },
        errorFactory:
          SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError,
      },
      options,
    );
  }

  /**
   * Update the description of the split configuration profile
   *
   * @remarks
   * Changes the description of the split configuration profile specified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API - SplitConfiguration read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
    request: SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SplitConfiguration,
    SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateSplitConfigurationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: splitConfigurationSchema },
        errorFactory:
          SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError,
      },
      options,
    );
  }

  /**
   * Update the split conditions
   *
   * @remarks
   * Changes the [split conditions of the
   * rule](https://docs.adyen.com/platforms/automatic-split-configuration/manage-split-configurations/api/#update-condition)
   * specified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API - SplitConfiguration read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(
    request: SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SplitConfiguration,
    SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
          { name: "ruleId", value: request.ruleId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateSplitConfigurationRuleRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: splitConfigurationSchema },
        errorFactory:
          SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError,
      },
      options,
    );
  }

  /**
   * Update the split logic
   *
   * @remarks
   * Changes the [split
   * logic](https://docs.adyen.com/platforms/automatic-split-configuration/manage-split-configurations/api/#update-split-logic)
   * specified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API - SplitConfiguration read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * SplitConfigurationMerchantLevel.PatchMerchantsSplitConfigurationsRulesSplitLogicError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchMerchantsSplitConfigurationsRulesSplitLogic(
    request: SplitConfigurationMerchantLevel.PatchMerchantsSplitConfigurationsRulesSplitLogicRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SplitConfiguration,
    SplitConfigurationMerchantLevel.PatchMerchantsSplitConfigurationsRulesSplitLogicError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}/splitLogic/{splitLogicId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
          { name: "ruleId", value: request.ruleId, schema: s.string() },
          { name: "splitLogicId", value: request.splitLogicId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateSplitConfigurationLogicRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: splitConfigurationSchema },
        errorFactory: SplitConfigurationMerchantLevel.PatchMerchantsSplitConfigurationsRulesSplitLogicError,
      },
      options,
    );
  }

  /**
   * Create a split configuration profile
   *
   * @remarks
   * Creates a split configuration profile to [split payments
   * automatically](https://docs.adyen.com/platforms/automatic-split-configuration/). After you
   * [associate it with a
   * store](https://docs.adyen.com/api-explorer/Management/latest/patch/merchants/(merchantId)/stores/(storeId)#request-splitConfiguration)
   * in your merchant account, it splits the funds of all transactions processed through that store
   * between your liable balance account and [your user's balance
   * account](https://docs.adyen.com/api-explorer/Management/latest/patch/merchants/(merchantId)/stores/(storeId)#request-splitConfiguration-balanceAccountId).
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API - SplitConfiguration read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMerchantsMerchantIdSplitConfigurations(
    request: SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SplitConfiguration,
    SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/splitConfigurations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => splitConfigurationSchema)),
        },
      },
      {
        success: { kind: "json", schema: splitConfigurationSchema },
        errorFactory: SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsError,
      },
      options,
    );
  }

  /**
   * Create a rule
   *
   * @remarks
   * [Creates a
   * rule](https://docs.adyen.com/platforms/automatic-split-configuration/manage-split-configurations/api/#create-rule)
   * in the split configuration profile specified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API - SplitConfiguration read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
    request: SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SplitConfiguration,
    SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => splitConfigurationRuleSchema)),
        },
      },
      {
        success: { kind: "json", schema: splitConfigurationSchema },
        errorFactory:
          SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError,
      },
      options,
    );
  }
}

export namespace SplitConfigurationMerchantLevel {
  export type DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the split configuration. */
    splitConfigurationId: string;
  };

  export class DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the split configuration. */
    splitConfigurationId: string;
    ruleId: string;
  };

  export class DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type GetMerchantsMerchantIdSplitConfigurationsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
  };

  export class GetMerchantsMerchantIdSplitConfigurationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdSplitConfigurationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the split configuration. */
    splitConfigurationId: string;
  };

  export class GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the split configuration. */
    splitConfigurationId: string;
    body?: UpdateSplitConfigurationRequest;
  };

  export class PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The identifier of the split configuration. */
    splitConfigurationId: string;
    /** The unique identifier of the split configuration rule. */
    ruleId: string;
    body?: UpdateSplitConfigurationRuleRequest;
  };

  export class PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type PatchMerchantsSplitConfigurationsRulesSplitLogicRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the split configuration. */
    splitConfigurationId: string;
    /** The unique identifier of the split configuration rule. */
    ruleId: string;
    /** The unique identifier of the split configuration split. */
    splitLogicId: string;
    body?: UpdateSplitConfigurationLogicRequest;
  };

  export class PatchMerchantsSplitConfigurationsRulesSplitLogicError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsSplitConfigurationsRulesSplitLogicError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdSplitConfigurationsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    body?: SplitConfiguration;
  };

  export class PostMerchantsMerchantIdSplitConfigurationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdSplitConfigurationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the split configuration. */
    splitConfigurationId: string;
    body?: SplitConfigurationRule;
  };

  export class PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }
}
