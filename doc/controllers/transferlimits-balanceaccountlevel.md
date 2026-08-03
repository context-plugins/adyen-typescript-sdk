# Transferlimits-Balanceaccountlevel

```ts
const transferlimitsBalanceaccountlevelApi = new TransferlimitsBalanceaccountlevelApi(client);
```

## Class Name

`TransferlimitsBalanceaccountlevelApi`

## Methods

* [Get-Balance Accounts-Id-Transfer Limits](../../doc/controllers/transferlimits-balanceaccountlevel.md#get-balance-accounts-id-transfer-limits)
* [Post-Balance Accounts-Id-Transfer Limits](../../doc/controllers/transferlimits-balanceaccountlevel.md#post-balance-accounts-id-transfer-limits)
* [Post-Balance Accounts-Id-Transfer Limits-Approve](../../doc/controllers/transferlimits-balanceaccountlevel.md#post-balance-accounts-id-transfer-limits-approve)
* [Get-Balance Accounts-Id-Transfer Limits-Current](../../doc/controllers/transferlimits-balanceaccountlevel.md#get-balance-accounts-id-transfer-limits-current)
* [Get-Balance Accounts-Id-Transfer Limits-Transfer Limit Id](../../doc/controllers/transferlimits-balanceaccountlevel.md#get-balance-accounts-id-transfer-limits-transfer-limit-id)
* [Delete-Balance Accounts-Id-Transfer Limits-Transfer Limit Id](../../doc/controllers/transferlimits-balanceaccountlevel.md#delete-balance-accounts-id-transfer-limits-transfer-limit-id)


# Get-Balance Accounts-Id-Transfer Limits

Filter and view the transfer limits configured for a balance account using the balance account's unique `id` and the available query parameters.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalanceAccountsIdTransferLimits(
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
| `id` | `string` | Template, Required | The unique identifier of the balance account. |
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
  const response = await transferLimitsBalanceAccountLevelApi.getBalanceAccountsIdTransferLimits(id);

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
    if (error instanceof BalanceAccountsTransferLimits404Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsTransferLimits422Error) {
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
| 404 | Not found - One of the transfer limits could not be found. | [`BalanceAccountsTransferLimits404Error`](../../doc/models/balance-accounts-transfer-limits-404-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`BalanceAccountsTransferLimits422Error`](../../doc/models/balance-accounts-transfer-limits-422-error.md) |


# Post-Balance Accounts-Id-Transfer Limits

Create a transfer limit for your balance account using the unique `id` of your balance account.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postBalanceAccountsIdTransferLimits(
  id: string,
  body: CreateTransferLimitRequest,
  wwwAuthenticate?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceAccountsTransferLimitsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance account. |
| `body` | [`CreateTransferLimitRequest`](../../doc/models/create-transfer-limit-request.md) | Body, Required | - |
| `wwwAuthenticate` | `string \| undefined` | Header, Optional | Header for authenticating through SCA |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceAccountsTransferLimitsResponse1`](../../doc/models/balance-accounts-transfer-limits-response-1.md).

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
  const response = await transferLimitsBalanceAccountLevelApi.postBalanceAccountsIdTransferLimits(
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
    if (error instanceof BalanceAccountsTransferLimits400Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsTransferLimits401Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsTransferLimits422Error) {
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
| 400 | Bad Request - The input is invalid, or no registered device for SCA was found. | [`BalanceAccountsTransferLimits400Error`](../../doc/models/balance-accounts-transfer-limits-400-error.md) |
| 401 | Unauthorized - Authentication required via Strong Customer Authentication (SCA). The client must resolve the provided challenge. | [`BalanceAccountsTransferLimits401Error`](../../doc/models/balance-accounts-transfer-limits-401-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`BalanceAccountsTransferLimits422Error`](../../doc/models/balance-accounts-transfer-limits-422-error.md) |


# Post-Balance Accounts-Id-Transfer Limits-Approve

Approve transfer limits that are pending SCA authentication.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postBalanceAccountsIdTransferLimitsApprove(
  id: string,
  body: ApproveTransferLimitRequest,
  wwwAuthenticate?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance account. |
| `body` | [`ApproveTransferLimitRequest`](../../doc/models/approve-transfer-limit-request.md) | Body, Required | - |
| `wwwAuthenticate` | `string \| undefined` | Header, Optional | Header for authenticating using SCA. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const id = 'id0';

const body: ApproveTransferLimitRequest = {
  transferLimitIds: [
    'TRLI00000000000000000000000001',
    'TRLI00000000000000000000000002'
  ],
};

try {
  const response = await transferLimitsBalanceAccountLevelApi.postBalanceAccountsIdTransferLimitsApprove(
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
    if (error instanceof BalanceAccountsTransferLimitsApprove401Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsTransferLimitsApprove404Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsTransferLimitsApprove422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - Authentication required via Strong Customer Authentication (SCA). The client must resolve the provided challenge. | [`BalanceAccountsTransferLimitsApprove401Error`](../../doc/models/balance-accounts-transfer-limits-approve-401-error.md) |
| 404 | Not found - One of the transfer limits could not be found. | [`BalanceAccountsTransferLimitsApprove404Error`](../../doc/models/balance-accounts-transfer-limits-approve-404-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`BalanceAccountsTransferLimitsApprove422Error`](../../doc/models/balance-accounts-transfer-limits-approve-422-error.md) |


# Get-Balance Accounts-Id-Transfer Limits-Current

Get all transfer limits that currently apply to a balance account using the unique `id` of the balance account.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalanceAccountsIdTransferLimitsCurrent(
  id: string,
  scope?: Scope,
  transferType?: TransferType,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransferLimitListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance account. |
| `scope` | [`Scope \| undefined`](../../doc/models/scope.md) | Query, Optional | The scope to which the transfer limit applies. Possible values:<br><br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day. |
| `transferType` | [`TransferType \| undefined`](../../doc/models/transfer-type.md) | Query, Optional | The type of transfer to which the limit applies. Possible values:<br><br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransferLimitListResponse`](../../doc/models/transfer-limit-list-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await transferLimitsBalanceAccountLevelApi.getBalanceAccountsIdTransferLimitsCurrent(id);

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
    if (error instanceof BalanceAccountsTransferLimitsCurrent404Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsTransferLimitsCurrent422Error) {
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
      "scope": "perDay",
      "startsAt": "2025-08-13T23:00:00+01:00",
      "transferType": "instant"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not found - One of the transfer limits could not be found. | [`BalanceAccountsTransferLimitsCurrent404Error`](../../doc/models/balance-accounts-transfer-limits-current-404-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`BalanceAccountsTransferLimitsCurrent422Error`](../../doc/models/balance-accounts-transfer-limits-current-422-error.md) |


# Get-Balance Accounts-Id-Transfer Limits-Transfer Limit Id

Get the details of a transfer limit using its unique `transferLimitId`.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalanceAccountsIdTransferLimitsTransferLimitId(
  id: string,
  transferLimitId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceAccountsTransferLimitsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance account. |
| `transferLimitId` | `string` | Template, Required | The unique identifier of the transfer limit. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceAccountsTransferLimitsResponse1`](../../doc/models/balance-accounts-transfer-limits-response-1.md).

## Example Usage

```ts
const id = 'id0';

const transferLimitId = 'transferLimitId6';

try {
  const response = await transferLimitsBalanceAccountLevelApi.getBalanceAccountsIdTransferLimitsTransferLimitId(
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
    if (error instanceof BalanceAccountsTransferLimits404Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsTransferLimits422Error) {
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
| 404 | Not found - One of the transfer limits could not be found. | [`BalanceAccountsTransferLimits404Error`](../../doc/models/balance-accounts-transfer-limits-404-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`BalanceAccountsTransferLimits422Error`](../../doc/models/balance-accounts-transfer-limits-422-error.md) |


# Delete-Balance Accounts-Id-Transfer Limits-Transfer Limit Id

Delete a scheduled or pending transfer limit using its unique `transferLimitId`. You cannot delete an active limit.

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteBalanceAccountsIdTransferLimitsTransferLimitId(
  id: string,
  transferLimitId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the balance account. |
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
  const response = await transferLimitsBalanceAccountLevelApi.deleteBalanceAccountsIdTransferLimitsTransferLimitId(
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
    if (error instanceof BalanceAccountsTransferLimits404Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsTransferLimits422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not found - One of the transfer limits could not be found. | [`BalanceAccountsTransferLimits404Error`](../../doc/models/balance-accounts-transfer-limits-404-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`BalanceAccountsTransferLimits422Error`](../../doc/models/balance-accounts-transfer-limits-422-error.md) |

