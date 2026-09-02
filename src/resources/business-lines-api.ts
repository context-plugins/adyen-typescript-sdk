import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  businessLineInfoUpdateSchema,
  type BusinessLineInfoUpdate,
} from "../models/business-line-info-update.js";
import { businessLineInfoSchema, type BusinessLineInfo } from "../models/business-line-info.js";
import { businessLineSchema, type BusinessLine } from "../models/business-line.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import type { Servers } from "../servers.js";

export class BusinessLinesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteBusinessLinesId(
    request: BusinessLinesApi.DeleteBusinessLinesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BusinessLinesApi.DeleteBusinessLinesIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default18("/businessLines/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BusinessLinesApi.DeleteBusinessLinesIdError,
      },
      options,
    );
  }

  getBusinessLinesId(
    request: BusinessLinesApi.GetBusinessLinesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BusinessLine, BusinessLinesApi.GetBusinessLinesIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default18("/businessLines/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: businessLineSchema },
        errorFactory: BusinessLinesApi.GetBusinessLinesIdError,
      },
      options,
    );
  }

  patchBusinessLinesId(
    request: BusinessLinesApi.PatchBusinessLinesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BusinessLine, BusinessLinesApi.PatchBusinessLinesIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default18("/businessLines/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => businessLineInfoUpdateSchema)),
        },
      },
      {
        success: { kind: "json", schema: businessLineSchema },
        errorFactory: BusinessLinesApi.PatchBusinessLinesIdError,
      },
      options,
    );
  }

  postBusinessLines(
    request: BusinessLinesApi.PostBusinessLinesRequest,
    options?: RequestOptions,
  ): ApiPromise<BusinessLine, BusinessLinesApi.PostBusinessLinesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default18("/businessLines"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => businessLineInfoSchema)) },
      },
      {
        success: { kind: "json", schema: businessLineSchema },
        errorFactory: BusinessLinesApi.PostBusinessLinesError,
      },
      options,
    );
  }
}

export namespace BusinessLinesApi {
  export type DeleteBusinessLinesIdRequest = {
    id: string;
  };

  export class DeleteBusinessLinesIdError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<DeleteBusinessLinesIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetBusinessLinesIdRequest = {
    id: string;
  };

  export class GetBusinessLinesIdError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<GetBusinessLinesIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PatchBusinessLinesIdRequest = {
    id: string;
    body?: BusinessLineInfoUpdate;
  };

  export class PatchBusinessLinesIdError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PatchBusinessLinesIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostBusinessLinesRequest = {
    body?: BusinessLineInfo;
  };

  export class PostBusinessLinesError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostBusinessLinesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
