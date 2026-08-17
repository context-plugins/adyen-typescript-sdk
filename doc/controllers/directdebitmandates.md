# Directdebitmandates

```ts
const directdebitmandatesApi = new DirectdebitmandatesApi(client);
```

## Class Name

`DirectdebitmandatesApi`

## Methods

* [Get-Mandates](../../doc/controllers/directdebitmandates.md#get-mandates)
* [Get-Mandates-Mandate Id](../../doc/controllers/directdebitmandates.md#get-mandates-mandate-id)
* [Patch-Mandates-Mandate Id](../../doc/controllers/directdebitmandates.md#patch-mandates-mandate-id)
* [Post-Mandates-Mandate Id-Cancel](../../doc/controllers/directdebitmandates.md#post-mandates-mandate-id-cancel)


# Get-Mandates

Returns a list of all [direct debit mandates](https://docs.adyen.com/business-accounts/accept-direct-debits-uk) created for a business account.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMandates(
  balanceAccountId?: string,
  paymentInstrumentId?: string,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListMandatesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Query, Optional | The unique identifier of the balance account linked to the payment instrument. |
| `paymentInstrumentId` | `string \| undefined` | Query, Optional | The unique identifier of the payment instrument linked to the mandate. |
| `cursor` | `string \| undefined` | Query, Optional | The pagination cursor returned in a previous GET `/mandates` request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListMandatesResponse`](../../doc/models/list-mandates-response.md).

## Example Usage

```ts
try {
  const response = await directDebitMandatesApi.getMandates();

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
    if (error instanceof DefaultErrorResponseEntityError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Get-Mandates-Mandate Id

Returns the details of the specified [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMandatesMandateId(
  mandateId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Mandate1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mandateId` | `string` | Template, Required | The unique identifier of the mandate. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Mandate1`](../../doc/models/mandate-1.md).

## Example Usage

```ts
const mandateId = 'mandateId8';

try {
  const response = await directDebitMandatesApi.getMandatesMandateId(mandateId);

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
    if (error instanceof DefaultErrorResponseEntityError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 404 | The mandate was not found. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Patch-Mandates-Mandate Id

Amend the specified [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).

:information_source: **Note** This endpoint does not require authentication.

```ts
async patchMandatesMandateId(
  mandateId: string,
  body: MandateUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mandateId` | `string` | Template, Required | The unique identifier of the mandate. |
| `body` | [`MandateUpdate`](../../doc/models/mandate-update.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**202**: Accepted - The request has been accepted

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const mandateId = 'mandateId8';

const body: MandateUpdate = {
};

try {
  const response = await directDebitMandatesApi.patchMandatesMandateId(
    mandateId,
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
    if (error instanceof DefaultErrorResponseEntityError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 404 | The mandate was not found | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Mandates-Mandate Id-Cancel

Cancel a specified [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).

:information_source: **Note** This endpoint does not require authentication.

```ts
async postMandatesMandateIdCancel(
  mandateId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mandateId` | `string` | Template, Required | The unique identifier of the mandate. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**202**: Accepted - The request has been accepted

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const mandateId = 'mandateId8';

try {
  const response = await directDebitMandatesApi.postMandatesMandateIdCancel(mandateId);

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
    if (error instanceof DefaultErrorResponseEntityError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 404 | The mandate was not found. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

