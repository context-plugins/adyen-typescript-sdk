import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Delete a registration of an SCA device
   *
   * @remarks
   * Deletes an SCA device from the list of registered devices of a specific payment instrument.
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link ManageScaDevices.DeleteRegisteredDevicesIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRegisteredDevicesId(
    request: ManageScaDevices.DeleteRegisteredDevicesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ManageScaDevices.DeleteRegisteredDevicesIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/registeredDevices/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ManageScaDevices.DeleteRegisteredDevicesIdError,
      },
      options,
    );
  }

  /**
   * Get a list of registered SCA devices
   *
   * @remarks
   * Get a paginated list of the SCA devices you have currently registered for a specific payment
   * instrument.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ManageScaDevices.GetRegisteredDevicesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRegisteredDevices(
    request: ManageScaDevices.GetRegisteredDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchRegisteredDevicesResponse, ManageScaDevices.GetRegisteredDevicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/registeredDevices"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [
          { name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.string() },
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchRegisteredDevicesResponseSchema },
        errorFactory: ManageScaDevices.GetRegisteredDevicesError,
      },
      options,
    );
  }

  /**
   * Complete an association between an SCA device and a resource
   *
   * @remarks
   * Completes an association between a user's registered SCA device and an Adyen resource. For
   * example, you can associate an SCA device with additional [business
   * accounts](https://docs.adyen.com/platforms/business-accounts/sca/register-devices) or
   * [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/register-devices).
   *
   * To complete the association, this endpoint validates the authentication data of the registered
   * device.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ManageScaDevices.PatchRegisteredDevicesDeviceIdAssociationsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13("/registeredDevices/{deviceId}/associations"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "deviceId", value: request.deviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Complete the registration of an SCA device
   *
   * @remarks
   * Completes the registration of an SCA device by validating the authentication data of the
   * device. You can register SCA devices for [business
   * accounts](https://docs.adyen.com/platforms/business-accounts/sca) or [Adyen-issued
   * cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ManageScaDevices.PatchRegisteredDevicesIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchRegisteredDevicesId(
    request: ManageScaDevices.PatchRegisteredDevicesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<RegisterScaFinalResponse, ManageScaDevices.PatchRegisteredDevicesIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default13("/registeredDevices/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Initiate the registration of an SCA device
   *
   * @remarks
   * Initiates the registration of a user's device for Strong Customer Authentication (SCA). You can
   * register SCA devices for [business
   * accounts](https://docs.adyen.com/platforms/business-accounts/sca/register-devices) or
   * [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/register-devices).
   *
   * For a successful request, the device must be eligible for SCA.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ManageScaDevices.PostRegisteredDevicesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postRegisteredDevices(
    request: ManageScaDevices.PostRegisteredDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<RegisterScaResponse, ManageScaDevices.PostRegisteredDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/registeredDevices"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Initiate an association between an SCA device and a resource
   *
   * @remarks
   * Initiates an association between a user's registered SCA device and an Adyen resource. For
   * example, you can associate an SCA device with additional [business
   * accounts](https://docs.adyen.com/platforms/business-accounts/sca/register-devices) or
   * [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/register-devices).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ManageScaDevices.PostRegisteredDevicesDeviceIdAssociationsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13("/registeredDevices/{deviceId}/associations"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "deviceId", value: request.deviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the SCA device. */
    id: string;
    /** The unique identifier of the payment instrument linked to the SCA device. */
    paymentInstrumentId: string;
  };

  export class DeleteRegisteredDevicesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<DeleteRegisteredDevicesIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetRegisteredDevicesRequest = {
    /**
     * The unique identifier of a payment instrument. It limits the returned list to SCA devices
     * associated to this payment instrument.
     */
    paymentInstrumentId: string;
    /**
     * The index of the page to retrieve. The index of the first page is 0 (zero).
     *
     * Default: 0.
     */
    pageNumber?: number;
    /**
     * The number of items to have on a page.
     *
     * Default: 20. Maximum: 100.
     */
    pageSize?: number;
  };

  export class GetRegisteredDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetRegisteredDevicesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchRegisteredDevicesDeviceIdAssociationsRequest = {
    /** The unique identifier of the SCA device that you are associating with a resource. */
    deviceId: string;
    body?: AssociationFinaliseRequest;
  };

  export class PatchRegisteredDevicesDeviceIdAssociationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchRegisteredDevicesDeviceIdAssociationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchRegisteredDevicesIdRequest = {
    /**
     * The unique identifier of the SCA device. You obtain this `id` in the response of a
     * POST&nbsp;[/registeredDevices](https://docs.adyen.com/api-explorer/balanceplatform/2/post/registeredDevices#responses-200-id)
     * request.
     */
    id: string;
    body?: RegisterScaRequest;
  };

  export class PatchRegisteredDevicesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

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

  export class PostRegisteredDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostRegisteredDevicesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostRegisteredDevicesDeviceIdAssociationsRequest = {
    /** The unique identifier of the SCA device that you are associating with a resource. */
    deviceId: string;
    body?: AssociationInitiateRequest;
  };

  export class PostRegisteredDevicesDeviceIdAssociationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostRegisteredDevicesDeviceIdAssociationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
