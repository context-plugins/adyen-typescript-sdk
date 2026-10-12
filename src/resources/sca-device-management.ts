import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  beginScaDeviceRegistrationRequestSchema,
  type BeginScaDeviceRegistrationRequest,
} from "../models/begin-sca-device-registration-request.js";
import {
  beginScaDeviceRegistrationResponseSchema,
  type BeginScaDeviceRegistrationResponse,
} from "../models/begin-sca-device-registration-response.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import {
  finishScaDeviceRegistrationRequestSchema,
  type FinishScaDeviceRegistrationRequest,
} from "../models/finish-sca-device-registration-request.js";
import {
  finishScaDeviceRegistrationResponseSchema,
  type FinishScaDeviceRegistrationResponse,
} from "../models/finish-sca-device-registration-response.js";
import {
  submitScaAssociationRequestSchema,
  type SubmitScaAssociationRequest,
} from "../models/submit-sca-association-request.js";
import {
  submitScaAssociationResponseSchema,
  type SubmitScaAssociationResponse,
} from "../models/submit-sca-association-response.js";
import type { Servers } from "../servers.js";

export class ScaDeviceManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Delete an SCA device
   *
   * @remarks
   * Deletes a Strong Customer Authentication (SCA) device.
   *
   * @returns No Content - The device was deleted successfully.
   *
   * @throws {@link ScaDeviceManagement.DeleteScaDevicesDeviceIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteScaDevicesDeviceId(
    request: ScaDeviceManagement.DeleteScaDevicesDeviceIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ScaDeviceManagement.DeleteScaDevicesDeviceIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/scaDevices/{deviceId}"),
        auth: noneAuth,
        pathParams: [{ name: "deviceId", value: request.deviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ScaDeviceManagement.DeleteScaDevicesDeviceIdError,
      },
      options,
    );
  }

  /**
   * Finish registration process for a SCA device
   *
   * @remarks
   * Finishes the registration process for a new Strong Customer Authentication (SCA) device.
   *
   * @returns OK - Device registration was completed successfully.
   *
   * @throws {@link ScaDeviceManagement.PatchScaDevicesDeviceIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchScaDevicesDeviceId(
    request: ScaDeviceManagement.PatchScaDevicesDeviceIdRequest,
    options?: RequestOptions,
  ): ApiPromise<FinishScaDeviceRegistrationResponse, ScaDeviceManagement.PatchScaDevicesDeviceIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default13("/scaDevices/{deviceId}"),
        auth: noneAuth,
        pathParams: [{ name: "deviceId", value: request.deviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => finishScaDeviceRegistrationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: finishScaDeviceRegistrationResponseSchema },
        errorFactory: ScaDeviceManagement.PatchScaDevicesDeviceIdError,
      },
      options,
    );
  }

  /**
   * Begin SCA device registration
   *
   * @remarks
   * Begins the registration process for a new Strong Customer Authentication (SCA) device.
   *
   * @returns Created - A device resource is created. The initial step of registration is complete,
   * but the device isn't ready for use.
   *
   * @throws {@link ScaDeviceManagement.PostScaDevicesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postScaDevices(
    request: ScaDeviceManagement.PostScaDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<BeginScaDeviceRegistrationResponse, ScaDeviceManagement.PostScaDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/scaDevices"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => beginScaDeviceRegistrationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: beginScaDeviceRegistrationResponseSchema },
        errorFactory: ScaDeviceManagement.PostScaDevicesError,
      },
      options,
    );
  }

  /**
   * Create a new SCA association for a device
   *
   * @remarks
   * Creates an association between an SCA-enabled device and an entity, such as an account holder.
   * This action does not guarantee the association is immediately ready for use; its status may be
   * `pendingApproval` if the account holder has existing devices.
   *
   * @returns Created - Association created.
   *
   * @throws {@link ScaDeviceManagement.PostScaDevicesDeviceIdScaAssociationsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postScaDevicesDeviceIdScaAssociations(
    request: ScaDeviceManagement.PostScaDevicesDeviceIdScaAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SubmitScaAssociationResponse,
    ScaDeviceManagement.PostScaDevicesDeviceIdScaAssociationsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/scaDevices/{deviceId}/scaAssociations"),
        auth: noneAuth,
        pathParams: [{ name: "deviceId", value: request.deviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => submitScaAssociationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: submitScaAssociationResponseSchema },
        errorFactory: ScaDeviceManagement.PostScaDevicesDeviceIdScaAssociationsError,
      },
      options,
    );
  }
}

export namespace ScaDeviceManagement {
  export type DeleteScaDevicesDeviceIdRequest = {
    /** The unique identifier of the SCA device to delete. */
    deviceId: string;
  };

  export class DeleteScaDevicesDeviceIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<DeleteScaDevicesDeviceIdError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 401,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 404,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity6",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PatchScaDevicesDeviceIdRequest = {
    /** The unique identifier of the SCA device that you are associating with a resource. */
    deviceId: string;
    body?: FinishScaDeviceRegistrationRequest;
  };

  export class PatchScaDevicesDeviceIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PatchScaDevicesDeviceIdError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 401,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 404,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity6",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostScaDevicesRequest = {
    body?: BeginScaDeviceRegistrationRequest;
  };

  export class PostScaDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostScaDevicesError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 401,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostScaDevicesDeviceIdScaAssociationsRequest = {
    /** The unique identifier of the SCA device that you are associating with a resource. */
    deviceId: string;
    body?: SubmitScaAssociationRequest;
  };

  export class PostScaDevicesDeviceIdScaAssociationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostScaDevicesDeviceIdScaAssociationsError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 401,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 404,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity6",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
