# Balancetransfers

```ts
const balancetransfersApi = new BalancetransfersApi(client);
```

## Class Name

`BalancetransfersApi`


# Post-Balance Transfers

Performs a balance transfer between merchant accounts. The following conditions must be met before you can successfully transfer balances:

* The source and destination merchant accounts must be under the same company account and legal entity.
* The source merchant account must have sufficient funds.
* The source and destination merchant accounts must have at least one common processing currency.\n\n
  When sending multiple API requests with the same source and destination merchant accounts, send the requests sequentially and *not* in parallel. Some requests may not be processed if the requests are sent in parallel.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postBalanceTransfers(
  body: BalanceTransferRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceTransferResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BalanceTransferRequest`](../../doc/models/balance-transfer-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceTransferResponse`](../../doc/models/balance-transfer-response.md).

## Example Usage

```ts
const body: BalanceTransferRequest = {
  amount: {
    currency: 'EUR',
    value: BigInt(3000),
  },
  fromMerchant: 'SOURCE_MERCHANT_ACCOUNT',
  toMerchant: 'DESTINATION_MERCHANT_ACCOUNT',
  type: BalanceTransferType2Enum.Adjustment,
  reference: 'Your reference for the balance transfer.',
};

try {
  const response = await balanceTransfersApi.postBalanceTransfers(body);

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

## Example Response *(as JSON)*

```json
{
  "createdAt": "2025-10-27T07:06:15+00:00",
  "pspReference": "993617895204576J"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

