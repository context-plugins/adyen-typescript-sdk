# Businesslines

```ts
const businesslinesApi = new BusinesslinesApi(client);
```

## Class Name

`BusinesslinesApi`

## Methods

* [Post-Business Lines](../../doc/controllers/businesslines.md#post-business-lines)
* [Get-Business Lines-Id](../../doc/controllers/businesslines.md#get-business-lines-id)
* [Delete-Business Lines-Id](../../doc/controllers/businesslines.md#delete-business-lines-id)
* [Patch-Business Lines-Id](../../doc/controllers/businesslines.md#patch-business-lines-id)


# Post-Business Lines

Creates a business line.

This resource contains information about your user's line of business, including their industry and their source of funds. Adyen uses this information to verify your users as required by payment industry regulations.Adyen informs you of the verification results through webhooks or API responses.

You can create a maximum of 200 business lines per legal entity for payment processing.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async postBusinessLines(
  body?: BusinessLineInfo,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BusinessLine>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BusinessLineInfo \| undefined`](../../doc/models/business-line-info.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BusinessLine`](../../doc/models/business-line.md).

## Example Usage

```ts
const body: BusinessLineInfo = {
  industryCode: '4531',
  legalEntityId: 'LE00000000000000000000001',
  service: Service.Banking,
  sourceOfFunds: {
    adyenProcessedFunds: false,
    amount: {
      currency: 'EUR',
      value: BigInt(600000),
    },
    description: 'Funds from my flower shop business',
    type: Type72.Business,
  },
  webData: [
    {
      webAddress: 'https://www.adyen.com',
    }
  ],
};

try {
  const response = await businessLinesApi.postBusinessLines(body);

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "industryCode": "4531",
  "legalEntityId": "LE00000000000000000000001",
  "service": "banking",
  "sourceOfFunds": {
    "adyenProcessedFunds": false,
    "amount": {
      "currency": "EUR",
      "value": 600000
    },
    "description": "Funds from my flower shop business",
    "type": "business"
  },
  "webData": [
    {
      "webAddress": "https://www.adyen.com",
      "webAddressId": "SE322JV223222F5H4CQGS77V4"
    }
  ],
  "id": "SE322KT223222D5FJ7TJN2986"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Get-Business Lines-Id

Returns the detail of a business line.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async getBusinessLinesId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BusinessLine>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the business line. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BusinessLine`](../../doc/models/business-line.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await businessLinesApi.getBusinessLinesId(id);

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "service": "banking",
  "industryCode": "4531",
  "legalEntityId": "LE00000000000000000000001",
  "sourceOfFunds": {
    "adyenProcessedFunds": false,
    "description": "Funds from my flower shop business",
    "type": "business"
  },
  "webData": [
    {
      "webAddress": "https://www.adyen.com",
      "webAddressId": "SE322JV223222J5H8V87B3DHN"
    }
  ],
  "id": "SE322KH223222F5GV2SQ924F6"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Delete-Business Lines-Id

Deletes a business line.

> If you delete a business line linked to a [payment method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it can affect your merchant account's ability to use the [payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings). The business line is removed from all linked merchant accounts.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async deleteBusinessLinesId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the business line to be deleted. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - look at the actual response code for the status of the request.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const id = 'id0';

try {
  const response = await businessLinesApi.deleteBusinessLinesId(id);

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Patch-Business Lines-Id

Updates a business line.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async patchBusinessLinesId(
  id: string,
  body?: BusinessLineInfoUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BusinessLine>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the business line. |
| `body` | [`BusinessLineInfoUpdate \| undefined`](../../doc/models/business-line-info-update.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BusinessLine`](../../doc/models/business-line.md).

## Example Usage

```ts
const id = 'id0';

const body: BusinessLineInfoUpdate = {
  industryCode: '55',
  webData: [
    {
      webAddress: 'https://www.example.com',
    }
  ],
};

try {
  const response = await businessLinesApi.patchBusinessLinesId(
    id,
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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "service": "banking",
  "industryCode": "55",
  "legalEntityId": "LE00000000000000000000001",
  "sourceOfFunds": {
    "adyenProcessedFunds": false,
    "description": "Funds from my flower shop business",
    "type": "business"
  },
  "webData": [
    {
      "webAddress": "https://www.example.com",
      "webAddressId": "SE966LI345672J5H8V87B3FGH"
    }
  ],
  "id": "SE322JV223222F5GVGMLNB83F"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |

