# Transferlimits-Balanceplatformlevel

```ts
const transferlimitsBalanceplatformlevelApi = new TransferlimitsBalanceplatformlevelApi(client);
```

## Class Name

`TransferlimitsBalanceplatformlevelApi`

## Methods

* [Get-Balance Platforms-Id-Transfer Limits](../../doc/controllers/transferlimits-balanceplatformlevel.md#get-balance-platforms-id-transfer-limits)
* [Post-Balance Platforms-Id-Transfer Limits](../../doc/controllers/transferlimits-balanceplatformlevel.md#post-balance-platforms-id-transfer-limits)
* [Get-Balance Platforms-Id-Transfer Limits-Transfer Limit Id](../../doc/controllers/transferlimits-balanceplatformlevel.md#get-balance-platforms-id-transfer-limits-transfer-limit-id)
* [Delete-Balance Platforms-Id-Transfer Limits-Transfer Limit Id](../../doc/controllers/transferlimits-balanceplatformlevel.md#delete-balance-platforms-id-transfer-limits-transfer-limit-id)


# Get-Balance Platforms-Id-Transfer Limits

Filter and view the transfer limits configured for your balance platform using the balance platform's unique `id` and the available query parameters.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalancePlatformsIdTransferLimits(
  id: string,
  scope?: Scope,
  transferType?: TransferType,
  status?: LimitStatus,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransferLimitListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance platform. |
| `scope` | [`Scope \| undefined`](../../doc/models/scope.md) | Query, Optional | The scope to which the transfer limit applies. Possible values:<br><br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day. |
| `transferType` | [`TransferType \| undefined`](../../doc/models/transfer-type.md) | Query, Optional | The type of transfer to which the limit applies. Possible values:<br><br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority. |
| `status` | [`LimitStatus \| undefined`](../../doc/models/limit-status.md) | Query, Optional | The status of the transfer limit. Possible values:<br><br>* **active**: the limit is currently active.<br>* **inactive**: the limit is currently inactive.<br>* **pendingSCA**: the limit is pending until your user performs SCA.<br>* **scheduled**: the limit is scheduled to become active at a future date. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransferLimitListResponse`](../../doc/models/transfer-limit-list-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await transferLimitsBalancePlatformLevelApi.getBalancePlatformsIdTransferLimits(id);

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
    if (error instanceof BalancePlatformsTransferLimits404Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsTransferLimits422Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "transferLimits": [
    {
      "amount": {
        "currency": "EUR",
        "value": 10000
      },
      "endsAt": "2026-08-13T23:00:00+01:00",
      "id": "TRLI00000000000000000000000001",
      "limitStatus": "active",
      "reference": "Your reference for the transfer limit",
      "scaInformation": {
        "exemption": "initialLimit",
        "status": "notPerformed"
      },
      "scope": "perTransaction",
      "startsAt": "2025-08-13T23:00:00+01:00",
      "transferType": "instant"
    },
    {
      "amount": {
        "currency": "EUR",
        "value": 20000
      },
      "endsAt": "2026-08-13T23:00:00+01:00",
      "id": "TRLI00000000000000000000000002",
      "limitStatus": "active",
      "reference": "Your reference for the transfer limit",
      "scaInformation": {
        "exemption": "initialLimit",
        "status": "notPerformed"
      },
      "scope": "perTransaction",
      "startsAt": "2025-08-13T23:00:00+01:00",
      "transferType": "all"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not found - One of the transfer limits could not be found. | [`BalancePlatformsTransferLimits404Error`](../../doc/models/balance-platforms-transfer-limits-404-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`BalancePlatformsTransferLimits422Error`](../../doc/models/balance-platforms-transfer-limits-422-error.md) |


# Post-Balance Platforms-Id-Transfer Limits

Create a transfer limit for your balance platform using the unique `id` of your balance platform.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postBalancePlatformsIdTransferLimits(
  id: string,
  body: CreateTransferLimitRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalancePlatformsTransferLimitsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance platform. |
| `body` | [`CreateTransferLimitRequest`](../../doc/models/create-transfer-limit-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalancePlatformsTransferLimitsResponse1`](../../doc/models/balance-platforms-transfer-limits-response-1.md).

## Example Usage

```ts
const id = 'id0';

const body: CreateTransferLimitRequest = {
  amount: {
    currency: 'EUR',
    value: BigInt(10000),
  },
  scope: Scope.PerTransaction,
  transferType: TransferType.All,
  endsAt: '2026-08-14T00:00:00+01:00',
  reference: 'Your reference for the transfer limit',
  scaInformation: {
    scaOnApproval: true,
  },
  startsAt: '2025-08-15T06:36:20+01:00',
};

try {
  const response = await transferLimitsBalancePlatformLevelApi.postBalancePlatformsIdTransferLimits(
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
    if (error instanceof BalancePlatformsTransferLimits404Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsTransferLimits422Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "amount": {
    "currency": "EUR",
    "value": 10000
  },
  "endsAt": "2026-08-13T23:00:00+01:00",
  "id": "TRLI00000000000000000000000001",
  "limitStatus": "pendingSCA",
  "reference": "Your reference for the transfer limit",
  "scaInformation": {
    "status": "pending"
  },
  "scope": "perTransaction",
  "startsAt": "2025-08-15T06:36:20+01:00",
  "transferType": "all"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not found - One of the transfer limits could not be found. | [`BalancePlatformsTransferLimits404Error`](../../doc/models/balance-platforms-transfer-limits-404-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`BalancePlatformsTransferLimits422Error`](../../doc/models/balance-platforms-transfer-limits-422-error.md) |


# Get-Balance Platforms-Id-Transfer Limits-Transfer Limit Id

Get the details of a transfer limit using its unique `transferLimitId`.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalancePlatformsIdTransferLimitsTransferLimitId(
  id: string,
  transferLimitId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalancePlatformsTransferLimitsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance platform. |
| `transferLimitId` | `string` | Template, Required | The unique identifier of the transfer limit. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalancePlatformsTransferLimitsResponse1`](../../doc/models/balance-platforms-transfer-limits-response-1.md).

## Example Usage

```ts
const id = 'id0';

const transferLimitId = 'transferLimitId6';

try {
  const response = await transferLimitsBalancePlatformLevelApi.getBalancePlatformsIdTransferLimitsTransferLimitId(
    id,
    transferLimitId
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
    if (error instanceof BalancePlatformsTransferLimits404Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsTransferLimits422Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "amount": {
    "currency": "EUR",
    "value": 10000
  },
  "endsAt": "2026-08-13T23:00:00+01:00",
  "id": "TRLI00000000000000000000000001",
  "limitStatus": "active",
  "reference": "Your reference for the transfer limit",
  "scaInformation": {
    "exemption": "initialLimit",
    "status": "notPerformed"
  },
  "scope": "perTransaction",
  "startsAt": "2025-08-13T23:00:00+01:00",
  "transferType": "all"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not found - One of the transfer limits could not be found. | [`BalancePlatformsTransferLimits404Error`](../../doc/models/balance-platforms-transfer-limits-404-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`BalancePlatformsTransferLimits422Error`](../../doc/models/balance-platforms-transfer-limits-422-error.md) |


# Delete-Balance Platforms-Id-Transfer Limits-Transfer Limit Id

Delete a scheduled or pending transfer limit using its unique `transferLimitId`. You cannot delete an active limit.

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteBalancePlatformsIdTransferLimitsTransferLimitId(
  id: string,
  transferLimitId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance platform. |
| `transferLimitId` | `string` | Template, Required | The unique identifier of the transfer limit. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const id = 'id0';

const transferLimitId = 'transferLimitId6';

try {
  const response = await transferLimitsBalancePlatformLevelApi.deleteBalancePlatformsIdTransferLimitsTransferLimitId(
    id,
    transferLimitId
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
    if (error instanceof BalancePlatformsTransferLimits404Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsTransferLimits422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not found - One of the transfer limits could not be found. | [`BalancePlatformsTransferLimits404Error`](../../doc/models/balance-platforms-transfer-limits-404-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`BalancePlatformsTransferLimits422Error`](../../doc/models/balance-platforms-transfer-limits-422-error.md) |

