import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Delete attachment from a dispute
   *
   * @remarks
   * Removes the attachment from the raised dispute. Adyen may keep this file for compliance
   * purposes.
   *
   * @returns The attachment was successfully removed
   *
   * @throws {@link DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDisputesDisputeIdAttachmentsAttachmentId(
    request: DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default23("/disputes/{disputeId}/attachments/{attachmentId}"),
        auth: noneAuth,
        pathParams: [
          { name: "disputeId", value: request.disputeId, schema: s.string() },
          { name: "attachmentId", value: request.attachmentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdError,
      },
      options,
    );
  }

  /**
   * Get all attachments linked to a raised dispute
   *
   * @remarks
   * Get a list of attachments associated with a dispute ID.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link DisputeAttachments.GetDisputesDisputeIdAttachmentsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDisputesDisputeIdAttachments(
    request: DisputeAttachments.GetDisputesDisputeIdAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeAttachment[], DisputeAttachments.GetDisputesDisputeIdAttachmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default23("/disputes/{disputeId}/attachments"),
        auth: noneAuth,
        pathParams: [{ name: "disputeId", value: request.disputeId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => disputeAttachmentSchema)) },
        errorFactory: DisputeAttachments.GetDisputesDisputeIdAttachmentsError,
      },
      options,
    );
  }

  /**
   * Get an attachment
   *
   * @remarks
   * Search for a single attachment, providing the specific dispute ID and attachment ID.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDisputesDisputeIdAttachmentsAttachmentId(
    request: DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeAttachment, DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default23("/disputes/{disputeId}/attachments/{attachmentId}"),
        auth: noneAuth,
        pathParams: [
          { name: "disputeId", value: request.disputeId, schema: s.string() },
          { name: "attachmentId", value: request.attachmentId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disputeAttachmentSchema },
        errorFactory: DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdError,
      },
      options,
    );
  }

  /**
   * Add an attachment to a dispute
   *
   * @remarks
   * Add supporting information as an attachment for the raised dispute. Upload receipts,
   * communication, or any other documentation to support the dispute.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link DisputeAttachments.PostDisputesDisputeIdAttachmentsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDisputesDisputeIdAttachments(
    request: DisputeAttachments.PostDisputesDisputeIdAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachDocumentResponse, DisputeAttachments.PostDisputesDisputeIdAttachmentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default23("/disputes/{disputeId}/attachments"),
        auth: noneAuth,
        pathParams: [{ name: "disputeId", value: request.disputeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the raised dispute. */
    disputeId: string;
    /** The unique identifier of the attachment. */
    attachmentId: string;
  };

  export class DeleteDisputesDisputeIdAttachmentsAttachmentIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

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
    /** The unique identifier of the raised dispute. */
    disputeId: string;
  };

  export class GetDisputesDisputeIdAttachmentsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

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
    /** The unique identifier of the raised dispute. */
    disputeId: string;
    /** The unique identifier of the attachment. */
    attachmentId: string;
  };

  export class GetDisputesDisputeIdAttachmentsAttachmentIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

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
    /** The unique identifier of the raised dispute. */
    disputeId: string;
    body: DisputeAttachment;
  };

  export class PostDisputesDisputeIdAttachmentsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

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
