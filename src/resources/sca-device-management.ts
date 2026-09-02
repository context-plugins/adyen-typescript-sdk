import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  deleteScaDevicesDeviceId(
    request: ScaDeviceManagement.DeleteScaDevicesDeviceIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ScaDeviceManagement.DeleteScaDevicesDeviceIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default13("/scaDevices/{deviceId}"),
        auth: noneAuth,
        pathParams: [{ name: "deviceId", value: request.deviceId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ScaDeviceManagement.DeleteScaDevicesDeviceIdError,
      },
      options,
    );
  }

  patchScaDevicesDeviceId(
    request: ScaDeviceManagement.PatchScaDevicesDeviceIdRequest,
    options?: RequestOptions,
  ): ApiPromise<FinishScaDeviceRegistrationResponse, ScaDeviceManagement.PatchScaDevicesDeviceIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default13("/scaDevices/{deviceId}"),
        auth: noneAuth,
        pathParams: [{ name: "deviceId", value: request.deviceId, schema: s.string() }],
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

  postScaDevices(
    request: ScaDeviceManagement.PostScaDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<BeginScaDeviceRegistrationResponse, ScaDeviceManagement.PostScaDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/scaDevices"),
        auth: noneAuth,
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
        url: this.#servers.default13("/scaDevices/{deviceId}/scaAssociations"),
        auth: noneAuth,
        pathParams: [{ name: "deviceId", value: request.deviceId, schema: s.string() }],
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
    deviceId: string;
  };

  export class DeleteScaDevicesDeviceIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
  > {
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
    deviceId: string;
    body?: FinishScaDeviceRegistrationRequest;
  };

  export class PatchScaDevicesDeviceIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
  > {
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

  export class PostScaDevicesError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
    deviceId: string;
    body?: SubmitScaAssociationRequest;
  };

  export class PostScaDevicesDeviceIdScaAssociationsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
  > {
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
