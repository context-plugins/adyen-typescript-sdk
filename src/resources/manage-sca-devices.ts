import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  associationFinaliseRequestSchema,
  type AssociationFinaliseRequest,
} from "../models/association-finalise-request.js";
import {
  associationFinaliseResponseSchema,
  type AssociationFinaliseResponse,
} from "../models/association-finalise-response.js";
import {
  associationInitiateRequestSchema,
  type AssociationInitiateRequest,
} from "../models/association-initiate-request.js";
import {
  associationInitiateResponseSchema,
  type AssociationInitiateResponse,
} from "../models/association-initiate-response.js";
import {
  registerScaFinalResponseSchema,
  type RegisterScaFinalResponse,
} from "../models/register-sca-final-response.js";
import { registerScaRequestSchema, type RegisterScaRequest } from "../models/register-sca-request.js";
import { registerScaResponseSchema, type RegisterScaResponse } from "../models/register-sca-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  searchRegisteredDevicesResponseSchema,
  type SearchRegisteredDevicesResponse,
} from "../models/search-registered-devices-response.js";
import type { Servers } from "../servers.js";

export class ManageScaDevices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteRegisteredDevicesId(
    request: ManageScaDevices.DeleteRegisteredDevicesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ManageScaDevices.DeleteRegisteredDevicesIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default13("/registeredDevices/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ManageScaDevices.DeleteRegisteredDevicesIdError,
      },
      options,
    );
  }

  getRegisteredDevices(
    request: ManageScaDevices.GetRegisteredDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchRegisteredDevicesResponse, ManageScaDevices.GetRegisteredDevicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/registeredDevices"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        query: [
          { name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.string() },
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchRegisteredDevicesResponseSchema },
        errorFactory: ManageScaDevices.GetRegisteredDevicesError,
      },
      options,
    );
  }

  patchRegisteredDevicesDeviceIdAssociations(
    request: ManageScaDevices.PatchRegisteredDevicesDeviceIdAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AssociationFinaliseResponse,
    ManageScaDevices.PatchRegisteredDevicesDeviceIdAssociationsError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default13("/registeredDevices/{deviceId}/associations"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "deviceId", value: request.deviceId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => associationFinaliseRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: associationFinaliseResponseSchema },
        errorFactory: ManageScaDevices.PatchRegisteredDevicesDeviceIdAssociationsError,
      },
      options,
    );
  }

  patchRegisteredDevicesId(
    request: ManageScaDevices.PatchRegisteredDevicesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<RegisterScaFinalResponse, ManageScaDevices.PatchRegisteredDevicesIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default13("/registeredDevices/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => registerScaRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: registerScaFinalResponseSchema },
        errorFactory: ManageScaDevices.PatchRegisteredDevicesIdError,
      },
      options,
    );
  }

  postRegisteredDevices(
    request: ManageScaDevices.PostRegisteredDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<RegisterScaResponse, ManageScaDevices.PostRegisteredDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/registeredDevices"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => registerScaRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: registerScaResponseSchema },
        errorFactory: ManageScaDevices.PostRegisteredDevicesError,
      },
      options,
    );
  }

  postRegisteredDevicesDeviceIdAssociations(
    request: ManageScaDevices.PostRegisteredDevicesDeviceIdAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AssociationInitiateResponse,
    ManageScaDevices.PostRegisteredDevicesDeviceIdAssociationsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/registeredDevices/{deviceId}/associations"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "deviceId", value: request.deviceId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => associationInitiateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: associationInitiateResponseSchema },
        errorFactory: ManageScaDevices.PostRegisteredDevicesDeviceIdAssociationsError,
      },
      options,
    );
  }
}

export namespace ManageScaDevices {
  export type DeleteRegisteredDevicesIdRequest = {
    id: string;
    paymentInstrumentId: string;
  };

  export class DeleteRegisteredDevicesIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<DeleteRegisteredDevicesIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetRegisteredDevicesRequest = {
    paymentInstrumentId: string;
    pageNumber?: number;
    pageSize?: number;
  };

  export class GetRegisteredDevicesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetRegisteredDevicesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchRegisteredDevicesDeviceIdAssociationsRequest = {
    deviceId: string;
    body?: AssociationFinaliseRequest;
  };

  export class PatchRegisteredDevicesDeviceIdAssociationsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchRegisteredDevicesDeviceIdAssociationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchRegisteredDevicesIdRequest = {
    id: string;
    body?: RegisterScaRequest;
  };

  export class PatchRegisteredDevicesIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchRegisteredDevicesIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostRegisteredDevicesRequest = {
    body?: RegisterScaRequest;
  };

  export class PostRegisteredDevicesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostRegisteredDevicesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostRegisteredDevicesDeviceIdAssociationsRequest = {
    deviceId: string;
    body?: AssociationInitiateRequest;
  };

  export class PostRegisteredDevicesDeviceIdAssociationsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostRegisteredDevicesDeviceIdAssociationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
