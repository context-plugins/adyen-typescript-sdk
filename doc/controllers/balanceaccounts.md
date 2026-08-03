# Balanceaccounts

```ts
const balanceaccountsApi = new BalanceaccountsApi(client);
```

## Class Name

`BalanceaccountsApi`

## Methods

* [Post-Balance Accounts](../../doc/controllers/balanceaccounts.md#post-balance-accounts)
* [Get-Balance Accounts-Id](../../doc/controllers/balanceaccounts.md#get-balance-accounts-id)
* [Patch-Balance Accounts-Id](../../doc/controllers/balanceaccounts.md#patch-balance-accounts-id)
* [Get-Balance Accounts-Id-Payment Instruments](../../doc/controllers/balanceaccounts.md#get-balance-accounts-id-payment-instruments)
* [Get-Balance Accounts-Id-Transaction Rules](../../doc/controllers/balanceaccounts.md#get-balance-accounts-id-transaction-rules)


# Post-Balance Accounts

Creates a balance account that holds the funds of the associated account holder.

```ts
async postBalanceAccounts(
  body?: BalanceAccountInfo,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceAccount>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BalanceAccountInfo \| undefined`](../../doc/models/balance-account-info.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceAccount`](../../doc/models/balance-account.md).

## Example Usage

```ts
const body: BalanceAccountInfo = {
  accountHolderId: 'AH32272223222C5GXTD343TKP',
  description: 'S.Hopper - Main balance account',
};

try {
  const response = await balanceAccountsApi.postBalanceAccounts(body);

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
  "accountHolderId": "AH32272223222C5GXTD343TKP",
  "defaultCurrencyCode": "EUR",
  "description": "S.Hopper - Main balance account",
  "timeZone": "Europe/Amsterdam",
  "balances": [
    {
      "available": 0,
      "balance": 0,
      "currency": "EUR",
      "reserved": 0
    }
  ],
  "id": "BA3227C223222H5J4DCGQ9V9L",
  "status": "active"
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


# Get-Balance Accounts-Id

Returns a balance account and its balances for the default currency and other currencies with a non-zero balance.

```ts
async getBalanceAccountsId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceAccount>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceAccount`](../../doc/models/balance-account.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await balanceAccountsApi.getBalanceAccountsId(id);

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
  "accountHolderId": "AH32272223222B59K6RTQBFNZ",
  "defaultCurrencyCode": "EUR",
  "timeZone": "Europe/Amsterdam",
  "balances": [
    {
      "available": 0,
      "balance": 0,
      "currency": "EUR",
      "reserved": 0,
      "pending": 0,
      "pendingAvailable": 0
    }
  ],
  "id": "BA3227C223222B5BLP6JQC3FD",
  "status": "active"
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


# Patch-Balance Accounts-Id

Updates a balance account.

```ts
async patchBalanceAccountsId(
  id: string,
  body?: BalanceAccountUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceAccount>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance account. |
| `body` | [`BalanceAccountUpdateRequest \| undefined`](../../doc/models/balance-account-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceAccount`](../../doc/models/balance-account.md).

## Example Usage

```ts
const id = 'id0';

const body: BalanceAccountUpdateRequest = {
  timeZone: 'Europe/Amsterdam',
};

try {
  const response = await balanceAccountsApi.patchBalanceAccountsId(
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
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "accountHolderId": "AH32272223222B5GFSNVGFFM7",
  "defaultCurrencyCode": "EUR",
  "timeZone": "Europe/Amsterdam",
  "balances": [
    {
      "available": 0,
      "balance": 0,
      "currency": "EUR",
      "reserved": 0
    }
  ],
  "id": "BA32272223222B59K6ZXHBFN6",
  "status": "active"
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


# Get-Balance Accounts-Id-Payment Instruments

Returns a paginated list of the payment instruments associated with a balance account.

To fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment instruments which are in active status and to skip the first 6, use `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6&status=active`.

```ts
async getBalanceAccountsIdPaymentInstruments(
  id: string,
  offset?: number,
  limit?: number,
  status?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaginatedPaymentInstrumentsResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance account. |
| `offset` | `number \| undefined` | Query, Optional | The number of items that you want to skip. |
| `limit` | `number \| undefined` | Query, Optional | The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page. |
| `status` | `string \| undefined` | Query, Optional | The status of the payment instruments that you want to get. By default, the response includes payment instruments with any status. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaginatedPaymentInstrumentsResponse`](../../doc/models/paginated-payment-instruments-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await balanceAccountsApi.getBalanceAccountsIdPaymentInstruments(id);

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
  "hasNext": true,
  "hasPrevious": false,
  "paymentInstruments": [
    {
      "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
      "issuingCountryCode": "GB",
      "status": "active",
      "type": "card",
      "card": {
        "brand": "mc",
        "brandVariant": "mc",
        "cardholderName": "name",
        "formFactor": "virtual",
        "bin": "555544",
        "expiration": {
          "month": "12",
          "year": "2022"
        },
        "lastFour": "2357",
        "number": "************2357"
      },
      "id": "PI32272223222B59M5TM658DT"
    },
    {
      "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
      "issuingCountryCode": "GB",
      "status": "active",
      "type": "card",
      "card": {
        "brand": "mc",
        "brandVariant": "mc",
        "cardholderName": "name",
        "formFactor": "virtual",
        "bin": "555544",
        "expiration": {
          "month": "01",
          "year": "2023"
        },
        "lastFour": "8331",
        "number": "************8331"
      },
      "id": "PI32272223222B59PXDGQDLSF"
    }
  ]
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


# Get-Balance Accounts-Id-Transaction Rules

Returns a list of transaction rules associated with a balance account.

```ts
async getBalanceAccountsIdTransactionRules(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionRulesResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransactionRulesResponse`](../../doc/models/transaction-rules-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await balanceAccountsApi.getBalanceAccountsIdTransactionRules(id);

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

