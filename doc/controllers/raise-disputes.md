# Raise Disputes

```ts
const raiseDisputesApi = new RaiseDisputesApi(client);
```

## Class Name

`RaiseDisputesApi`

## Methods

* [Get-Disputes](../../doc/controllers/raise-disputes.md#get-disputes)
* [Post-Disputes](../../doc/controllers/raise-disputes.md#post-disputes)
* [Get-Disputes-Id](../../doc/controllers/raise-disputes.md#get-disputes-id)
* [Patch-Disputes-Id](../../doc/controllers/raise-disputes.md#patch-disputes-id)


# Get-Disputes

Returns a list of raised disputes that match the query parameters.

This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getDisputes(
  status?: string,
  paymentInstrument?: string,
  createdSince?: string,
  createdUntil?: string,
  offset?: string,
  limit?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DisputeResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string \| undefined` | Query, Optional | The current status of the dispute.<br><br>Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**. |
| `paymentInstrument` | `string \| undefined` | Query, Optional | The unique identifier of the payment instrument. |
| `createdSince` | `string \| undefined` | Query, Optional | Only include disputes that have been created on or after this point in time. The value must be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601\)  format. For example, 2021-05-30T15:07:40Z. |
| `createdUntil` | `string \| undefined` | Query, Optional | Only include disputes that have been created on or before this point in time. The value must be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601\) format. For example, **2021-05-30T15:07:40Z**. |
| `offset` | `string \| undefined` | Query, Optional | The number of items that you want to skip. |
| `limit` | `string \| undefined` | Query, Optional | The number of items returned per page, maximum of 500 items. By default, the response returns 100 items per page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DisputeResponse[]`](../../doc/models/dispute-response.md).

## Example Usage

```ts
try {
  const response = await raiseDisputesApi.getDisputes();

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
    if (error instanceof Disputes401Error) {
      console.log(error.result);
    } else if (error instanceof Disputes403Error) {
      console.log(error.result);
    } else if (error instanceof Disputes422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Authentication required. | [`Disputes401Error`](../../doc/models/disputes-401-error.md) |
| 403 | Insufficient permissions to process the request. | [`Disputes403Error`](../../doc/models/disputes-403-error.md) |
| 422 | A request validation error. | [`Disputes422Error`](../../doc/models/disputes-422-error.md) |


# Post-Disputes

Raise a dispute for an underlying transaction, providing a dispute type and the amount you want to dispute.

Raising a dispute returns a dispute ID, which you can use to update details about the dispute, provide supporting documentation, close the dispute, or submit the dispute for a chargeback. You can also use the dispute ID to view the status of the dispute.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postDisputes(
  body: DisputeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DisputeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DisputeRequest`](../../doc/models/dispute-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DisputeResponse`](../../doc/models/dispute-response.md).

## Example Usage

```ts
const body: DisputeRequest = {
  transactionId: 'transactionId6',
  type: 'type4',
};

try {
  const response = await raiseDisputesApi.postDisputes(body);

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
    if (error instanceof Disputes401Error) {
      console.log(error.result);
    } else if (error instanceof Disputes403Error) {
      console.log(error.result);
    } else if (error instanceof Disputes422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Authentication required. | [`Disputes401Error`](../../doc/models/disputes-401-error.md) |
| 403 | Insufficient permissions to process the request. | [`Disputes403Error`](../../doc/models/disputes-403-error.md) |
| 422 | A request validation error. | [`Disputes422Error`](../../doc/models/disputes-422-error.md) |


# Get-Disputes-Id

Get a raised dispute by ID.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getDisputesId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DisputeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the raised dispute. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DisputeResponse`](../../doc/models/dispute-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await raiseDisputesApi.getDisputesId(id);

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
    if (error instanceof Disputes401Error) {
      console.log(error.result);
    } else if (error instanceof Disputes403Error) {
      console.log(error.result);
    } else if (error instanceof Disputes422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Authentication required. | [`Disputes401Error`](../../doc/models/disputes-401-error.md) |
| 403 | Insufficient permissions to process the request. | [`Disputes403Error`](../../doc/models/disputes-403-error.md) |
| 422 | A request validation error. | [`Disputes422Error`](../../doc/models/disputes-422-error.md) |


# Patch-Disputes-Id

Update information related to a raised dispute, or change a dispute's status from **draft** to **submitted** or **closed**.

**Note:** Changing the status of a dispute to **submitted** or **closed** is a final action. You cannot make updates to a **submitted** or **closed** dispute. Make sure to upload all supporting attachments using the `POST /disputes/{id}/attachments` endpoint before you submit a dispute. When you update a dispute to **submitted**, Adyen sends the raised dispute to the card scheme for review and acquirer defense. When you update a raised dispute to **closed**, Adyen closes the dispute, and the dispute is no longer eligible for review by the card scheme.

:information_source: **Note** This endpoint does not require authentication.

```ts
async patchDisputesId(
  id: string,
  body?: PatchableDisputeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DisputeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the raised dispute. |
| `body` | [`PatchableDisputeRequest \| undefined`](../../doc/models/patchable-dispute-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DisputeResponse`](../../doc/models/dispute-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await raiseDisputesApi.patchDisputesId(id);

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
    if (error instanceof Disputes401Error) {
      console.log(error.result);
    } else if (error instanceof Disputes403Error) {
      console.log(error.result);
    } else if (error instanceof Disputes422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Authentication required. | [`Disputes401Error`](../../doc/models/disputes-401-error.md) |
| 403 | Insufficient permissions to process the request. | [`Disputes403Error`](../../doc/models/disputes-403-error.md) |
| 422 | A request validation error. | [`Disputes422Error`](../../doc/models/disputes-422-error.md) |

