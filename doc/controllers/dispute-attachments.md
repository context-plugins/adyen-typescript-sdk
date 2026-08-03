# Dispute Attachments

```ts
const disputeAttachmentsApi = new DisputeAttachmentsApi(client);
```

## Class Name

`DisputeAttachmentsApi`

## Methods

* [Get-Disputes-Dispute Id-Attachments](../../doc/controllers/dispute-attachments.md#get-disputes-dispute-id-attachments)
* [Post-Disputes-Dispute Id-Attachments](../../doc/controllers/dispute-attachments.md#post-disputes-dispute-id-attachments)
* [Delete-Disputes-Dispute Id-Attachments-Attachment Id](../../doc/controllers/dispute-attachments.md#delete-disputes-dispute-id-attachments-attachment-id)
* [Get-Disputes-Dispute Id-Attachments-Attachment Id](../../doc/controllers/dispute-attachments.md#get-disputes-dispute-id-attachments-attachment-id)


# Get-Disputes-Dispute Id-Attachments

Get a list of attachments associated with a dispute ID.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getDisputesDisputeIdAttachments(
  disputeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DisputeAttachment[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The unique identifier of the raised dispute. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DisputeAttachment[]`](../../doc/models/dispute-attachment.md).

## Example Usage

```ts
const disputeId = 'disputeId4';

try {
  const response = await disputeAttachmentsApi.getDisputesDisputeIdAttachments(disputeId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof DisputesAttachments401Error) {
      console.log(error.result);
    } else if (error instanceof DisputesAttachments403Error) {
      console.log(error.result);
    } else if (error instanceof DisputesAttachments422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Authentication required. | [`DisputesAttachments401Error`](../../doc/models/disputes-attachments-401-error.md) |
| 403 | Insufficient permissions to process the request. | [`DisputesAttachments403Error`](../../doc/models/disputes-attachments-403-error.md) |
| 422 | A request validation error. | [`DisputesAttachments422Error`](../../doc/models/disputes-attachments-422-error.md) |


# Post-Disputes-Dispute Id-Attachments

Add supporting information as an attachment for the raised dispute. Upload receipts, communication, or any other documentation to support the dispute.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postDisputesDisputeIdAttachments(
  disputeId: string,
  body: DisputeAttachment,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AttachDocumentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The unique identifier of the raised dispute. |
| `body` | [`DisputeAttachment`](../../doc/models/dispute-attachment.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AttachDocumentResponse`](../../doc/models/attach-document-response.md).

## Example Usage

```ts
const disputeId = 'disputeId4';

const body: DisputeAttachment = {
  attachmentType: AttachmentType1.Correspondence,
  content: 'content0',
  fileName: 'fileName0',
};

try {
  const response = await disputeAttachmentsApi.postDisputesDisputeIdAttachments(
    disputeId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof DisputesAttachments401Error) {
      console.log(error.result);
    } else if (error instanceof DisputesAttachments403Error) {
      console.log(error.result);
    } else if (error instanceof DisputesAttachments422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Authentication required. | [`DisputesAttachments401Error`](../../doc/models/disputes-attachments-401-error.md) |
| 403 | Insufficient permissions to process the request. | [`DisputesAttachments403Error`](../../doc/models/disputes-attachments-403-error.md) |
| 422 | A request validation error. | [`DisputesAttachments422Error`](../../doc/models/disputes-attachments-422-error.md) |


# Delete-Disputes-Dispute Id-Attachments-Attachment Id

Removes the attachment from the raised dispute. Adyen may keep this file for compliance purposes.

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteDisputesDisputeIdAttachmentsAttachmentId(
  disputeId: string,
  attachmentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The unique identifier of the raised dispute. |
| `attachmentId` | `string` | Template, Required | The unique identifier of the attachment. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: The attachment was successfully removed

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const disputeId = 'disputeId4';

const attachmentId = 'attachmentId8';

try {
  const response = await disputeAttachmentsApi.deleteDisputesDisputeIdAttachmentsAttachmentId(
    disputeId,
    attachmentId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof DisputesAttachments401Error) {
      console.log(error.result);
    } else if (error instanceof DisputesAttachments403Error) {
      console.log(error.result);
    } else if (error instanceof DisputesAttachments422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Authentication required. | [`DisputesAttachments401Error`](../../doc/models/disputes-attachments-401-error.md) |
| 403 | Insufficient permissions to process the request. | [`DisputesAttachments403Error`](../../doc/models/disputes-attachments-403-error.md) |
| 422 | A request validation error. | [`DisputesAttachments422Error`](../../doc/models/disputes-attachments-422-error.md) |


# Get-Disputes-Dispute Id-Attachments-Attachment Id

Search for a single attachment, providing the specific dispute ID and attachment ID.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getDisputesDisputeIdAttachmentsAttachmentId(
  disputeId: string,
  attachmentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DisputeAttachment>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeId` | `string` | Template, Required | The unique identifier of the raised dispute. |
| `attachmentId` | `string` | Template, Required | The unique identifier of the attachment. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DisputeAttachment`](../../doc/models/dispute-attachment.md).

## Example Usage

```ts
const disputeId = 'disputeId4';

const attachmentId = 'attachmentId8';

try {
  const response = await disputeAttachmentsApi.getDisputesDisputeIdAttachmentsAttachmentId(
    disputeId,
    attachmentId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof DisputesAttachments401Error) {
      console.log(error.result);
    } else if (error instanceof DisputesAttachments403Error) {
      console.log(error.result);
    } else if (error instanceof DisputesAttachments422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Authentication required. | [`DisputesAttachments401Error`](../../doc/models/disputes-attachments-401-error.md) |
| 403 | Insufficient permissions to process the request. | [`DisputesAttachments403Error`](../../doc/models/disputes-attachments-403-error.md) |
| 422 | A request validation error. | [`DisputesAttachments422Error`](../../doc/models/disputes-attachments-422-error.md) |

