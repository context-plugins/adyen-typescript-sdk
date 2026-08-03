# Transactions

```ts
const transactionsApi = new TransactionsApi(client);
```

## Class Name

`TransactionsApi`

## Methods

* [Get-Transactions](../../doc/controllers/transactions.md#get-transactions)
* [Get-Transactions-Id](../../doc/controllers/transactions.md#get-transactions-id)


# Get-Transactions

> Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version.

Returns all the transactions related to a balance account, account holder, or balance platform.

When making this request, you must include at least one of the following:

- `balanceAccountId`
- `accountHolderId`
- `balancePlatform`.

This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next and previous pages when applicable. You can use the links to page through the results.

```ts
async getTransactions(
  createdSince: string,
  createdUntil: string,
  balancePlatform?: string,
  paymentInstrumentId?: string,
  accountHolderId?: string,
  balanceAccountId?: string,
  cursor?: string,
  sortOrder?: SortOrder2,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionSearchResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdSince` | `string` | Query, Required | Only include transactions that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**. |
| `createdUntil` | `string` | Query, Required | Only include transactions that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**. |
| `balancePlatform` | `string \| undefined` | Query, Optional | The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).<br><br>Required if you don't provide a `balanceAccountId` or `accountHolderId`. |
| `paymentInstrumentId` | `string \| undefined` | Query, Optional | The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).<br><br>To use this parameter, you must also provide a `balanceAccountId`, `accountHolderId`, or `balancePlatform`.<br><br>The `paymentInstrumentId` must be related to the `balanceAccountId` or `accountHolderId` that you provide. |
| `accountHolderId` | `string \| undefined` | Query, Optional | The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).<br><br>Required if you don't provide a `balanceAccountId` or `balancePlatform`.<br><br>If you provide a `balanceAccountId`, the `accountHolderId` must be related to the `balanceAccountId`. |
| `balanceAccountId` | `string \| undefined` | Query, Optional | The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).<br><br>Required if you don't provide an `accountHolderId` or `balancePlatform`.<br><br>If you provide an `accountHolderId`, the `balanceAccountId` must be related to the `accountHolderId`. |
| `cursor` | `string \| undefined` | Query, Optional | The `cursor` returned in the links of the previous response. |
| `sortOrder` | [`SortOrder2 \| undefined`](../../doc/models/sort-order-2.md) | Query, Optional | Determines the sort order of the returned transactions. The sort order is based on the creation date of the transaction.<br><br>Possible values:<br><br>- **asc**: Ascending order, from oldest to most recent.<br><br>- **desc**: Descending order, from most recent to oldest.<br><br>Default value: **asc**. |
| `limit` | `number \| undefined` | Query, Optional | The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransactionSearchResponse`](../../doc/models/transaction-search-response.md).

## Example Usage

```ts
const createdSince = '2016-03-13T12:52:32.123Z';

const createdUntil = '2016-03-13T12:52:32.123Z';

try {
  const response = await transactionsApi.getTransactions(
    createdSince,
    createdUntil
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
  "data": [
    {
      "balancePlatform": "YOUR_BALANCE_PLATFORM",
      "creationDate": "2023-08-10T14:51:20+02:00",
      "id": "EVJN42272224222B5JB8BRC84N686ZEUR",
      "accountHolder": {
        "description": "Your description for the account holder",
        "id": "AH00000000000000000000001"
      },
      "amount": {
        "currency": "USD",
        "value": -1000
      },
      "balanceAccount": {
        "description": "Your description for the account holder",
        "id": "BA00000000000000000000001"
      },
      "bookingDate": "2023-08-10T14:51:33+02:00",
      "status": "booked",
      "transfer": {
        "id": "3JNC3O5ZVFLLGV4B",
        "reference": "Your internal reference for the transfer"
      },
      "valueDate": "2023-08-10T14:51:20+02:00"
    },
    {
      "balancePlatform": "YOUR_BALANCE_PLATFORM",
      "creationDate": "2023-08-10T15:34:31+02:00",
      "id": "EVJN4227C224222B5JB8G3Q89N2NB6EUR",
      "accountHolder": {
        "description": "Your description for the account holder",
        "id": "AH00000000000000000000001"
      },
      "amount": {
        "currency": "USD",
        "value": 123
      },
      "balanceAccount": {
        "description": "Your description for the account holder",
        "id": "BA00000000000000000000001"
      },
      "bookingDate": "2023-08-10T15:34:40+02:00",
      "status": "booked",
      "transfer": {
        "id": "48POO45ZVG11166J",
        "reference": "Your internal reference for the transfer"
      },
      "valueDate": "2023-08-10T15:34:31+02:00"
    },
    {
      "balancePlatform": "YOUR_BALANCE_PLATFORM",
      "creationDate": "2023-08-11T13:45:46+02:00",
      "id": "EVJN4227C224222B5JBD3XHF8P3L8GUSD",
      "accountHolder": {
        "description": "Your description for the account holder",
        "id": "AH00000000000000000000001"
      },
      "amount": {
        "currency": "USD",
        "value": -10000
      },
      "balanceAccount": {
        "description": "Your description for the account holder",
        "id": "BA00000000000000000000001"
      },
      "bookingDate": "2023-08-11T13:45:57+02:00",
      "status": "booked",
      "transfer": {
        "id": "48RTTW5ZVT8KU9DV",
        "reference": "my-reference"
      },
      "valueDate": "2023-08-11T13:45:46+02:00"
    },
    {
      "balancePlatform": "YOUR_BALANCE_PLATFORM",
      "creationDate": "2023-08-11T13:45:51+02:00",
      "id": "EVJN42272224222B5JBD3XJGHF4J26USD",
      "accountHolder": {
        "description": "Your description for the account holder",
        "id": "AH00000000000000000000001"
      },
      "amount": {
        "currency": "USD",
        "value": 1000
      },
      "balanceAccount": {
        "description": "Your description for the account holder",
        "id": "BA00000000000000000000001"
      },
      "bookingDate": "2023-08-11T13:45:58+02:00",
      "status": "booked",
      "transfer": {
        "id": "48TYZO5ZVT8M1K47",
        "reference": "my-reference"
      },
      "valueDate": "2023-08-11T13:45:51+02:00"
    }
  ],
  "_links": {
    "next": {
      "href": "https://balanceplatform-api-test.adyen.com/btl/v4/transactions?balancePlatform=TestBalancePlatform&createdUntil=2023-08-20T13%3A07%3A40Z&createdSince=2023-08-10T10%3A50%3A40Z&cursor=S2B-c0p1N0tdN0l6RGhYK1YpM0lgOTUyMDlLXElyKE9LMCtyaFEuMj1NMHgidCsrJi1ZNnhqXCtqVi5JPGpRK1F2fCFqWzU33JTojSVNJc1J1VXhncS10QDd6JX9FQFl5Zn0uNyUvSXJNQTo"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Get-Transactions-Id

> Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version.

Returns a transaction.

```ts
async getTransactionsId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Transaction1>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the transaction. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Transaction1`](../../doc/models/transaction-1.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await transactionsApi.getTransactionsId(id);

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
  "id": "EVJN4227C224222B5JBDHPTD672M52EUR",
  "amount": {
    "value": -10000,
    "currency": "EUR"
  },
  "status": "booked",
  "transfer": {
    "id": "48TYZO5ZVURJ2FCW",
    "reference": "Your internal reference for the transfer"
  },
  "valueDate": "2023-08-11T16:19:35+02:00",
  "bookingDate": "2023-08-11T16:19:39+02:00",
  "creationDate": "2023-08-11T16:19:35+02:00",
  "accountHolder": {
    "id": "AH00000000000000000000001",
    "description": "Your description of the account holder"
  },
  "balanceAccount": {
    "id": "BA00000000000000000000001",
    "description": "Your description of the balance account"
  },
  "balancePlatform": "YOUR_BALANCE_PLATFORM"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |

