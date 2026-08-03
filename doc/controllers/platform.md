# Platform

```ts
const platformApi = new PlatformApi(client);
```

## Class Name

`PlatformApi`

## Methods

* [Get-Balance Platforms-Id](../../doc/controllers/platform.md#get-balance-platforms-id)
* [Get-Balance Platforms-Id-Account Holders](../../doc/controllers/platform.md#get-balance-platforms-id-account-holders)
* [Get-Balance Platforms-Id-Transaction Rules](../../doc/controllers/platform.md#get-balance-platforms-id-transaction-rules)


# Get-Balance Platforms-Id

Returns a balance platform.

```ts
async getBalancePlatformsId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalancePlatform>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance platform. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalancePlatform`](../../doc/models/balance-platform.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await platformApi.getBalancePlatformsId(id);

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

## Example Response *(as JSON)*

```json
{
  "id": "YOUR_BALANCE_PLATFORM",
  "status": "Active"
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


# Get-Balance Platforms-Id-Account Holders

Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters.

For example, to limit the page to 5 account holders and to skip the first 20, use `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.

```ts
async getBalancePlatformsIdAccountHolders(
  id: string,
  offset?: number,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaginatedAccountHoldersResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance platform. |
| `offset` | `number \| undefined` | Query, Optional | The number of items that you want to skip. |
| `limit` | `number \| undefined` | Query, Optional | The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaginatedAccountHoldersResponse`](../../doc/models/paginated-account-holders-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await platformApi.getBalancePlatformsIdAccountHolders(id);

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

## Example Response *(as JSON)*

```json
{
  "accountHolders": [
    {
      "description": "Test-305",
      "legalEntityId": "LE3227C223222D5D8S5S33M4M",
      "reference": "LegalEntity internal error test",
      "id": "AH32272223222B5GFSNSXFFL9",
      "status": "active"
    },
    {
      "description": "Test-751",
      "legalEntityId": "LE3227C223222D5D8S5TT3SRX",
      "reference": "LegalEntity internal error test",
      "id": "AH32272223222B5GFSNVGFFM7",
      "status": "active"
    },
    {
      "description": "Explorer Holder",
      "legalEntityId": "LE3227C223222D5D8S5TT3SRX",
      "reference": "Account from the Explorer Holder",
      "id": "AH32272223222B5GFWNRFFVR6",
      "status": "active"
    }
  ],
  "hasNext": true,
  "hasPrevious": true
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


# Get-Balance Platforms-Id-Transaction Rules

Returns a list of transaction rules associated with a balance platform.

```ts
async getBalancePlatformsIdTransactionRules(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionRulesResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance platform. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransactionRulesResponse`](../../doc/models/transaction-rules-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await platformApi.getBalancePlatformsIdTransactionRules(id);

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

