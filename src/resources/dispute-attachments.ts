import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  attachDocumentResponseSchema,
  type AttachDocumentResponse,
} from "../models/attach-document-response.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import { disputeAttachmentSchema, type DisputeAttachment } from "../models/dispute-attachment.js";
import type { Servers } from "../servers.js";

export class DisputeAttachments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  deleteDisputesDisputeIdAttachmentsAttachmentId(
    request: DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default23("/disputes/{disputeId}/attachments/{attachmentId}"),
        auth: noneAuth,
        pathParams: [
          { name: "disputeId", value: request.disputeId, schema: s.string() },
          { name: "attachmentId", value: request.attachmentId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdError,
      },
      options,
    );
  }

  getDisputesDisputeIdAttachments(
    request: DisputeAttachments.GetDisputesDisputeIdAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeAttachment[], DisputeAttachments.GetDisputesDisputeIdAttachmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default23("/disputes/{disputeId}/attachments"),
        auth: noneAuth,
        pathParams: [{ name: "disputeId", value: request.disputeId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => disputeAttachmentSchema)) },
        errorFactory: DisputeAttachments.GetDisputesDisputeIdAttachmentsError,
      },
      options,
    );
  }

  getDisputesDisputeIdAttachmentsAttachmentId(
    request: DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeAttachment, DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default23("/disputes/{disputeId}/attachments/{attachmentId}"),
        auth: noneAuth,
        pathParams: [
          { name: "disputeId", value: request.disputeId, schema: s.string() },
          { name: "attachmentId", value: request.attachmentId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disputeAttachmentSchema },
        errorFactory: DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdError,
      },
      options,
    );
  }

  postDisputesDisputeIdAttachments(
    request: DisputeAttachments.PostDisputesDisputeIdAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachDocumentResponse, DisputeAttachments.PostDisputesDisputeIdAttachmentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default23("/disputes/{disputeId}/attachments"),
        auth: noneAuth,
        pathParams: [{ name: "disputeId", value: request.disputeId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: disputeAttachmentSchema },
      },
      {
        success: { kind: "json", schema: attachDocumentResponseSchema },
        errorFactory: DisputeAttachments.PostDisputesDisputeIdAttachmentsError,
      },
      options,
    );
  }
}

export namespace DisputeAttachments {
  export type DeleteDisputesDisputeIdAttachmentsAttachmentIdRequest = {
    disputeId: string;
    attachmentId: string;
  };

  export class DeleteDisputesDisputeIdAttachmentsAttachmentIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<DeleteDisputesDisputeIdAttachmentsAttachmentIdError> = [
      {
        on: 401,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetDisputesDisputeIdAttachmentsRequest = {
    disputeId: string;
  };

  export class GetDisputesDisputeIdAttachmentsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetDisputesDisputeIdAttachmentsError> = [
      {
        on: 401,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetDisputesDisputeIdAttachmentsAttachmentIdRequest = {
    disputeId: string;
    attachmentId: string;
  };

  export class GetDisputesDisputeIdAttachmentsAttachmentIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetDisputesDisputeIdAttachmentsAttachmentIdError> = [
      {
        on: 401,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostDisputesDisputeIdAttachmentsRequest = {
    disputeId: string;
    body: DisputeAttachment;
  };

  export class PostDisputesDisputeIdAttachmentsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PostDisputesDisputeIdAttachmentsError> = [
      {
        on: 401,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
