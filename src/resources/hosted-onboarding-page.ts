import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  getOnboardingUrlRequestSchema,
  type GetOnboardingUrlRequest,
} from "../models/get-onboarding-url-request.js";
import {
  getOnboardingUrlResponseSchema,
  type GetOnboardingUrlResponse,
} from "../models/get-onboarding-url-response.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import type { Servers } from "../servers.js";

export class HostedOnboardingPage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a link to a Adyen-hosted onboarding page
   *
   * @remarks
   * Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account
   * holder. For more information on how to use HOP, refer to [Hosted
   * onboarding](https://docs.adyen.com/classic-platforms/onboard-users/hosted-onboarding-page).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link HostedOnboardingPage.PostGetOnboardingUrlError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGetOnboardingUrl(
    request: HostedOnboardingPage.PostGetOnboardingUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<GetOnboardingUrlResponse, HostedOnboardingPage.PostGetOnboardingUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default19("/getOnboardingUrl"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getOnboardingUrlRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getOnboardingUrlResponseSchema },
        errorFactory: HostedOnboardingPage.PostGetOnboardingUrlError,
      },
      options,
    );
  }
}

export namespace HostedOnboardingPage {
  export type PostGetOnboardingUrlRequest = {
    body?: GetOnboardingUrlRequest;
  };

  export class PostGetOnboardingUrlError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostGetOnboardingUrlError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
