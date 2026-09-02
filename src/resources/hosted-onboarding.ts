import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { onboardingLinkInfoSchema, type OnboardingLinkInfo } from "../models/onboarding-link-info.js";
import { onboardingLinkSchema, type OnboardingLink } from "../models/onboarding-link.js";
import { onboardingThemeSchema, type OnboardingTheme } from "../models/onboarding-theme.js";
import { onboardingThemesSchema, type OnboardingThemes } from "../models/onboarding-themes.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import type { Servers } from "../servers.js";

export class HostedOnboarding {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getThemes(options?: RequestOptions): ApiPromise<OnboardingThemes, HostedOnboarding.GetThemesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default18("/themes"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onboardingThemesSchema },
        errorFactory: HostedOnboarding.GetThemesError,
      },
      options,
    );
  }

  getThemesId(
    request: HostedOnboarding.GetThemesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<OnboardingTheme, HostedOnboarding.GetThemesIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default18("/themes/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onboardingThemeSchema },
        errorFactory: HostedOnboarding.GetThemesIdError,
      },
      options,
    );
  }

  postLegalEntitiesIdOnboardingLinks(
    request: HostedOnboarding.PostLegalEntitiesIdOnboardingLinksRequest,
    options?: RequestOptions,
  ): ApiPromise<OnboardingLink, HostedOnboarding.PostLegalEntitiesIdOnboardingLinksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default18("/legalEntities/{id}/onboardingLinks"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => onboardingLinkInfoSchema)),
        },
      },
      {
        success: { kind: "json", schema: onboardingLinkSchema },
        errorFactory: HostedOnboarding.PostLegalEntitiesIdOnboardingLinksError,
      },
      options,
    );
  }
}

export namespace HostedOnboarding {
  export class GetThemesError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<GetThemesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetThemesIdRequest = {
    id: string;
  };

  export class GetThemesIdError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<GetThemesIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdOnboardingLinksRequest = {
    id: string;
    body?: OnboardingLinkInfo;
  };

  export class PostLegalEntitiesIdOnboardingLinksError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostLegalEntitiesIdOnboardingLinksError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
