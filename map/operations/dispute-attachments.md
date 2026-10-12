<!-- Generated file — do not edit; regenerated with the SDK. -->

# DisputeAttachments — operations

Accessor: `client.disputeAttachments` · Source: `src/resources/dispute-attachments.ts` · 4 operations · Request and error types: namespace `DisputeAttachments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteDisputesDisputeIdAttachmentsAttachmentId

- **Server**: `default23` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteDisputesDisputeIdAttachmentsAttachmentId(request: DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdRequest, options?: RequestOptions): ApiPromise<undefined, DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdError>`
- **Wire**: `DELETE /disputes/{disputeId}/attachments/{attachmentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `disputeId` | `path` | `string` | yes |
| `attachmentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getDisputesDisputeIdAttachments

- **Server**: `default23` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDisputesDisputeIdAttachments(request: DisputeAttachments.GetDisputesDisputeIdAttachmentsRequest, options?: RequestOptions): ApiPromise<DisputeAttachment[], DisputeAttachments.GetDisputesDisputeIdAttachmentsError>`
- **Wire**: `GET /disputes/{disputeId}/attachments`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisputeAttachment[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AdyenError` with `kind: "api"`, an instance of `DisputeAttachments.GetDisputesDisputeIdAttachmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputeAttachments.GetDisputesDisputeIdAttachmentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `disputeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputeAttachment` | `disputeAttachmentSchema` | `src/models/dispute-attachment.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getDisputesDisputeIdAttachmentsAttachmentId

- **Server**: `default23` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDisputesDisputeIdAttachmentsAttachmentId(request: DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdRequest, options?: RequestOptions): ApiPromise<DisputeAttachment, DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdError>`
- **Wire**: `GET /disputes/{disputeId}/attachments/{attachmentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisputeAttachment`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `disputeId` | `path` | `string` | yes |
| `attachmentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputeAttachment` | `disputeAttachmentSchema` | `src/models/dispute-attachment.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postDisputesDisputeIdAttachments

- **Server**: `default23` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDisputesDisputeIdAttachments(request: DisputeAttachments.PostDisputesDisputeIdAttachmentsRequest, options?: RequestOptions): ApiPromise<AttachDocumentResponse, DisputeAttachments.PostDisputesDisputeIdAttachmentsError>`
- **Wire**: `POST /disputes/{disputeId}/attachments`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AttachDocumentResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `DisputeAttachments.PostDisputesDisputeIdAttachmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputeAttachments.PostDisputesDisputeIdAttachmentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `disputeId` | `path` | `string` | yes |
| `body` | `body` | `DisputeAttachment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputeAttachment` | `disputeAttachmentSchema` | `src/models/dispute-attachment.ts` |
| `AttachDocumentResponse` | `attachDocumentResponseSchema` | `src/models/attach-document-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

