import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  donationCampaignsRequestSchema,
  type DonationCampaignsRequest,
} from "../models/donation-campaigns-request.js";
import {
  donationCampaignsResponseSchema,
  type DonationCampaignsResponse,
} from "../models/donation-campaigns-response.js";
import {
  donationPaymentRequestSchema,
  type DonationPaymentRequest,
} from "../models/donation-payment-request.js";
import {
  donationPaymentResponseSchema,
  type DonationPaymentResponse,
} from "../models/donation-payment-response.js";
import { serviceErrorSchema, type ServiceError } from "../models/service-error.js";
import type { Servers } from "../servers.js";

export class Donations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  postDonationCampaigns(
    request: Donations.PostDonationCampaignsRequest,
    options?: RequestOptions,
  ): ApiPromise<DonationCampaignsResponse, Donations.PostDonationCampaignsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/donationCampaigns"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => donationCampaignsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: donationCampaignsResponseSchema },
        errorFactory: Donations.PostDonationCampaignsError,
      },
      options,
    );
  }

  postDonations(
    request: Donations.PostDonationsRequest,
    options?: RequestOptions,
  ): ApiPromise<DonationPaymentResponse, Donations.PostDonationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/donations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => donationPaymentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: donationPaymentResponseSchema },
        errorFactory: Donations.PostDonationsError,
      },
      options,
    );
  }
}

export namespace Donations {
  export type PostDonationCampaignsRequest = {
    idempotencyKey?: string;
    body?: DonationCampaignsRequest;
  };

  export class PostDonationCampaignsError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostDonationCampaignsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostDonationsRequest = {
    idempotencyKey?: string;
    body?: DonationPaymentRequest;
  };

  export class PostDonationsError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostDonationsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
