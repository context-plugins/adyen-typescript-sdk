# Grantoffers

```ts
const grantoffersApi = new GrantoffersApi(client);
```

## Class Name

`GrantoffersApi`

## Methods

* [Get-Grant Offers](../../doc/controllers/grantoffers.md#get-grant-offers)
* [Get-Grant Offers-Grant Offer Id](../../doc/controllers/grantoffers.md#get-grant-offers-grant-offer-id)
* [Get-Grant Offers 1](../../doc/controllers/grantoffers.md#get-grant-offers-1)
* [Get-Grant Offers-Id](../../doc/controllers/grantoffers.md#get-grant-offers-id)


# Get-Grant Offers

**This endpoint is deprecated.**

Returns a list of all [grant offers](https://docs.adyen.com/platforms/capital#grant-offers) available for `accountHolderId` specified as a query parameter.

```ts
async getGrantOffers(
  accountHolderId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GrantOffers>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Query, Required | The unique identifier of the grant account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GrantOffers`](../../doc/models/grant-offers.md).

## Example Usage

```ts
const accountHolderId = 'accountHolderId8';

try {
  const response = await grantOffersApi.getGrantOffers(accountHolderId);

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
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Get-Grant Offers-Grant Offer Id

**This endpoint is deprecated.**

Returns the details of a single grant offer.

```ts
async getGrantOffersGrantOfferId(
  grantOfferId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GrantOffer>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantOfferId` | `string` | Template, Required | The unique identifier of the grant offer. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GrantOffer`](../../doc/models/grant-offer.md).

## Example Usage

```ts
const grantOfferId = 'grantOfferId6';

try {
  const response = await grantOffersApi.getGrantOffersGrantOfferId(grantOfferId);

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
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Get-Grant Offers 1

Returns a list of all [static offers](https://docs.adyen.com/capital/get-grant-offers/static-offers) available for `accountHolderId` specified as a query parameter. This also includes static offers created for financing amounts that the user selected from [dynamic offers](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/).

:information_source: **Note** This endpoint does not require authentication.

```ts
async getGrantOffers1(
  accountHolderId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GrantOffers>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Query, Required | The unique identifier of the account holder for which you want to get the available static offers.<br><br>**Constraints**: *Minimum Length*: `1` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GrantOffers`](../../doc/models/grant-offers.md).

## Example Usage

```ts
const accountHolderId = 'accountHolderId8';

try {
  const response = await grantOffersApi.getGrantOffers1(accountHolderId);

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
| 404 | Not Found - The entity was not found. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Get-Grant Offers-Id

Returns the details of the specified static offer.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getGrantOffersId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GrantOffer1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the static offer. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GrantOffer1`](../../doc/models/grant-offer-1.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await grantOffersApi.getGrantOffersId(id);

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
| 404 | Not Found - The entity was not found. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

