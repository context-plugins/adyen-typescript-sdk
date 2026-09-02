import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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
        url: this.#servers.default9("/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
        ],
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
        url: this.#servers.default9(
          "/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
          { name: "ruleId", value: request.ruleId, schema: s.string() },
        ],
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
        url: this.#servers.default9("/merchants/{merchantId}/splitConfigurations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: splitConfigurationListSchema },
        errorFactory: SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsError,
      },
      options,
    );
  }

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
        url: this.#servers.default9("/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
        ],
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
        url: this.#servers.default9("/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
        ],
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
        url: this.#servers.default9(
          "/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
          { name: "ruleId", value: request.ruleId, schema: s.string() },
        ],
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
        url: this.#servers.default9(
          "/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}/splitLogic/{splitLogicId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
          { name: "ruleId", value: request.ruleId, schema: s.string() },
          { name: "splitLogicId", value: request.splitLogicId, schema: s.string() },
        ],
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
        url: this.#servers.default9("/merchants/{merchantId}/splitConfigurations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
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
        url: this.#servers.default9("/merchants/{merchantId}/splitConfigurations/{splitConfigurationId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "splitConfigurationId", value: request.splitConfigurationId, schema: s.string() },
        ],
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
    merchantId: string;
    splitConfigurationId: string;
  };

  export class DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRequest = {
    merchantId: string;
    splitConfigurationId: string;
    ruleId: string;
  };

  export class DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdSplitConfigurationsRequest = {
    merchantId: string;
  };

  export class GetMerchantsMerchantIdSplitConfigurationsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdSplitConfigurationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest = {
    merchantId: string;
    splitConfigurationId: string;
  };

  export class GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest = {
    merchantId: string;
    splitConfigurationId: string;
    body?: UpdateSplitConfigurationRequest;
  };

  export class PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRequest = {
    merchantId: string;
    splitConfigurationId: string;
    ruleId: string;
    body?: UpdateSplitConfigurationRuleRequest;
  };

  export class PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsSplitConfigurationsRulesSplitLogicRequest = {
    merchantId: string;
    splitConfigurationId: string;
    ruleId: string;
    splitLogicId: string;
    body?: UpdateSplitConfigurationLogicRequest;
  };

  export class PatchMerchantsSplitConfigurationsRulesSplitLogicError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsSplitConfigurationsRulesSplitLogicError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdSplitConfigurationsRequest = {
    merchantId: string;
    body?: SplitConfiguration;
  };

  export class PostMerchantsMerchantIdSplitConfigurationsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdSplitConfigurationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest = {
    merchantId: string;
    splitConfigurationId: string;
    body?: SplitConfigurationRule;
  };

  export class PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
