# Dynamicoffers

```ts
const dynamicoffersApi = new DynamicoffersApi(client);
```

## Class Name

`DynamicoffersApi`

## Methods

* [Get-Dynamic Offers](../../doc/controllers/dynamicoffers.md#get-dynamic-offers)
* [Post-Dynamic Offers-Id-Calculate](../../doc/controllers/dynamicoffers.md#post-dynamic-offers-id-calculate)
* [Post-Dynamic Offers-Id-Grant Offer](../../doc/controllers/dynamicoffers.md#post-dynamic-offers-id-grant-offer)


# Get-Dynamic Offers

Returns a list of all [dynamic offers](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/) available for `accountHolderId` specified as a query parameter.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getDynamicOffers(
  accountHolderId: string,
  financingType?: FinancingTypeEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetDynamicOffersResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Query, Required | The unique identifier of the account holder that the dynamic offer is for.<br><br>**Constraints**: *Minimum Length*: `1` |
| `financingType` | [`FinancingTypeEnum \| undefined`](../../doc/models/financing-type-enum.md) | Query, Optional | The type of financing that the offer is for. If the value is not specified, returns all available types.<br><br>Possible values: **businessFinancing** |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetDynamicOffersResponse`](../../doc/models/get-dynamic-offers-response.md).

## Example Usage

```ts
const accountHolderId = 'accountHolderId8';

try {
  const response = await dynamicOffersApi.getDynamicOffers(accountHolderId);

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
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Dynamic Offers-Id-Calculate

Calculates a preliminary offer for the financing amount that the user selected from a [dynamic offer](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/). The preliminary offer is for informational purposes only and cannot be used to initiate a grant.

Requests to this endpoint are subject to rate limits:

- Live environments: 120 requests per minute.

- Test environments: 120 requests per minute.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postDynamicOffersIdCalculate(
  id: string,
  body?: CalculateGrantOfferRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CalculatedGrantOffer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the dynamic offer from which the user selected the financing amount.<br><br>**Constraints**: *Minimum Length*: `1` |
| `body` | [`CalculateGrantOfferRequest \| undefined`](../../doc/models/calculate-grant-offer-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CalculatedGrantOffer`](../../doc/models/calculated-grant-offer.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await dynamicOffersApi.postDynamicOffersIdCalculate(id);

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
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Dynamic Offers-Id-Grant Offer

Creates a static offer for the financing amount that the user selected from the [dynamic offer](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/).

Requests to this endpoint are subject to rate limits:

- Live environments: 30 requests per minute.

- Test environments: 30 requests per minute.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postDynamicOffersIdGrantOffer(
  id: string,
  body?: CreateGrantOfferRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GrantOffer1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the dynamic offer from which the user selected the financing amount.<br><br>**Constraints**: *Minimum Length*: `1` |
| `body` | [`CreateGrantOfferRequest \| undefined`](../../doc/models/create-grant-offer-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GrantOffer1`](../../doc/models/grant-offer-1.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await dynamicOffersApi.postDynamicOffersIdGrantOffer(id);

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
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

