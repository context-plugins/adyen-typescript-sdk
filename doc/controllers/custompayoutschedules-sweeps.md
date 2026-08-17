# Custompayoutschedules Sweeps

```ts
const custompayoutschedulesSweepsApi = new CustompayoutschedulesSweepsApi(client);
```

## Class Name

`CustompayoutschedulesSweepsApi`

## Methods

* [Get-Balance Accounts-Balance Account Id-Sweeps](../../doc/controllers/custompayoutschedules-sweeps.md#get-balance-accounts-balance-account-id-sweeps)
* [Post-Balance Accounts-Balance Account Id-Sweeps](../../doc/controllers/custompayoutschedules-sweeps.md#post-balance-accounts-balance-account-id-sweeps)
* [Get-Balance Accounts-Balance Account Id-Sweeps-Sweep Id](../../doc/controllers/custompayoutschedules-sweeps.md#get-balance-accounts-balance-account-id-sweeps-sweep-id)
* [Delete-Balance Accounts-Balance Account Id-Sweeps-Sweep Id](../../doc/controllers/custompayoutschedules-sweeps.md#delete-balance-accounts-balance-account-id-sweeps-sweep-id)
* [Patch-Balance Accounts-Balance Account Id-Sweeps-Sweep Id](../../doc/controllers/custompayoutschedules-sweeps.md#patch-balance-accounts-balance-account-id-sweeps-sweep-id)


# Get-Balance Accounts-Balance Account Id-Sweeps

Returns a list of the sweeps configured for a balance account.

To fetch multiple pages, use the query parameters. For example, to limit the page to 5 sweeps and to skip the first 10, use `/balanceAccounts/{balanceAccountId}/sweeps?limit=5&offset=10`.

```ts
async getBalanceAccountsBalanceAccountIdSweeps(
  balanceAccountId: string,
  offset?: number,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceSweepConfigurationsResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `offset` | `number \| undefined` | Query, Optional | The number of items that you want to skip. |
| `limit` | `number \| undefined` | Query, Optional | The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceSweepConfigurationsResponse`](../../doc/models/balance-sweep-configurations-response.md).

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

try {
  const response = await customPayoutSchedulesSweepsApi.getBalanceAccountsBalanceAccountIdSweeps(balanceAccountId);

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
  "hasNext": false,
  "hasPrevious": false,
  "sweeps": [
    {
      "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
      "schedule": {
        "type": "daily"
      },
      "status": "active",
      "targetAmount": {
        "currency": "EUR",
        "value": 0
      },
      "triggerAmount": {
        "currency": "EUR",
        "value": 0
      },
      "type": "push",
      "counterparty": {
        "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
      },
      "currency": "EUR"
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


# Post-Balance Accounts-Balance Account Id-Sweeps

Creates a sweep that results in moving funds from or to a balance account.

A sweep pulls in or pushes out funds based on a defined schedule, amount, currency, and a source or a destination.

```ts
async postBalanceAccountsBalanceAccountIdSweeps(
  balanceAccountId: string,
  body?: CreateSweepConfigurationV2,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SweepConfigurationV2>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `body` | [`CreateSweepConfigurationV2 \| undefined`](../../doc/models/create-sweep-configuration-v2.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SweepConfigurationV2`](../../doc/models/sweep-configuration-v2.md).

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const body: CreateSweepConfigurationV2 = {
  counterparty: {
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  },
  currency: 'EUR',
  schedule: {
    type: Type62Enum.Balance,
  },
  status: Status6Enum.Active,
  triggerAmount: {
    currency: 'EUR',
    value: BigInt(50000),
  },
  type: Type72Enum.Pull,
};

try {
  const response = await customPayoutSchedulesSweepsApi.postBalanceAccountsBalanceAccountIdSweeps(
    balanceAccountId,
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
  "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
  "counterparty": {
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  },
  "triggerAmount": {
    "currency": "EUR",
    "value": 50000
  },
  "currency": "EUR",
  "schedule": {
    "type": "balance"
  },
  "type": "pull",
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


# Get-Balance Accounts-Balance Account Id-Sweeps-Sweep Id

Returns a sweep.

```ts
async getBalanceAccountsBalanceAccountIdSweepsSweepId(
  balanceAccountId: string,
  sweepId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SweepConfigurationV2>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `sweepId` | `string` | Template, Required | The unique identifier of the sweep. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SweepConfigurationV2`](../../doc/models/sweep-configuration-v2.md).

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const sweepId = 'sweepId4';

try {
  const response = await customPayoutSchedulesSweepsApi.getBalanceAccountsBalanceAccountIdSweepsSweepId(
    balanceAccountId,
    sweepId
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
  "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
  "schedule": {
    "type": "daily"
  },
  "status": "active",
  "targetAmount": {
    "currency": "EUR",
    "value": 0
  },
  "triggerAmount": {
    "currency": "EUR",
    "value": 0
  },
  "type": "push",
  "counterparty": {
    "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
  },
  "currency": "EUR"
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


# Delete-Balance Accounts-Balance Account Id-Sweeps-Sweep Id

Deletes a sweep for a balance account.

```ts
async deleteBalanceAccountsBalanceAccountIdSweepsSweepId(
  balanceAccountId: string,
  sweepId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `sweepId` | `string` | Template, Required | The unique identifier of the sweep. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - look at the actual response code for the status of the request.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const sweepId = 'sweepId4';

try {
  const response = await customPayoutSchedulesSweepsApi.deleteBalanceAccountsBalanceAccountIdSweepsSweepId(
    balanceAccountId,
    sweepId
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Patch-Balance Accounts-Balance Account Id-Sweeps-Sweep Id

Updates a sweep. When updating a sweep resource, note that if a request parameter is not provided, the parameter is left unchanged.

```ts
async patchBalanceAccountsBalanceAccountIdSweepsSweepId(
  balanceAccountId: string,
  sweepId: string,
  body?: UpdateSweepConfigurationV2,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SweepConfigurationV2>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `sweepId` | `string` | Template, Required | The unique identifier of the sweep. |
| `body` | [`UpdateSweepConfigurationV2 \| undefined`](../../doc/models/update-sweep-configuration-v2.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SweepConfigurationV2`](../../doc/models/sweep-configuration-v2.md).

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const sweepId = 'sweepId4';

const body: UpdateSweepConfigurationV2 = {
  status: Status6Enum.Inactive,
};

try {
  const response = await customPayoutSchedulesSweepsApi.patchBalanceAccountsBalanceAccountIdSweepsSweepId(
    balanceAccountId,
    sweepId,
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
  "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
  "counterparty": {
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  },
  "triggerAmount": {
    "currency": "EUR",
    "value": 50000
  },
  "currency": "EUR",
  "schedule": {
    "type": "balance"
  },
  "type": "pull",
  "status": "inactive"
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

