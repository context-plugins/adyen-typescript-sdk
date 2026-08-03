# Managedpayoutschedules

```ts
const managedpayoutschedulesApi = new ManagedpayoutschedulesApi(client);
```

## Class Name

`ManagedpayoutschedulesApi`

## Methods

* [Get-Balance Accounts-Balance Account Id-Payout Schedules](../../doc/controllers/managedpayoutschedules.md#get-balance-accounts-balance-account-id-payout-schedules)
* [Post-Balance Accounts-Balance Account Id-Payout Schedules](../../doc/controllers/managedpayoutschedules.md#post-balance-accounts-balance-account-id-payout-schedules)
* [Get-Balance Accounts-Balance Account Id-Payout Schedules-Id](../../doc/controllers/managedpayoutschedules.md#get-balance-accounts-balance-account-id-payout-schedules-id)
* [Delete-Balance Accounts-Balance Account Id-Payout Schedules-Id](../../doc/controllers/managedpayoutschedules.md#delete-balance-accounts-balance-account-id-payout-schedules-id)
* [Patch-Balance Accounts-Balance Account Id-Payout Schedules-Id](../../doc/controllers/managedpayoutschedules.md#patch-balance-accounts-balance-account-id-payout-schedules-id)
* [Get-Balance Accounts-Balance Account Id-Payout Schedules-Id-Executions](../../doc/controllers/managedpayoutschedules.md#get-balance-accounts-balance-account-id-payout-schedules-id-executions)
* [Get-Balance Platforms-Balance Platform Id-Payout Schedules](../../doc/controllers/managedpayoutschedules.md#get-balance-platforms-balance-platform-id-payout-schedules)
* [Get-Balance Platforms-Balance Platform Id-Payout Schedules-Id](../../doc/controllers/managedpayoutschedules.md#get-balance-platforms-balance-platform-id-payout-schedules-id)


# Get-Balance Accounts-Balance Account Id-Payout Schedules

Returns a list of all managed payout schedules that are configured on a balance account. You can use query parameters to filter the elements that are returned in the list.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalanceAccountsBalanceAccountIdPayoutSchedules(
  balanceAccountId: string,
  currency?: string,
  cursor?: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceAccountConfigurations>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `currency` | `string \| undefined` | Query, Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the currency used in the payout schedule. |
| `cursor` | `string \| undefined` | Query, Optional | The `cursor` returned in the links of the previous response. |
| `limit` | `number \| undefined` | Query, Optional | The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.<br><br>**Default**: `10`<br><br>**Constraints**: `>= 1`, `<= 100` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceAccountConfigurations`](../../doc/models/balance-account-configurations.md).

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const limit = 10;

try {
  const response = await managedPayoutSchedulesApi.getBalanceAccountsBalanceAccountIdPayoutSchedules(
    balanceAccountId,
    undefined,
    undefined,
    limit
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
    if (error instanceof BalanceAccountsPayoutSchedules401Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules403Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules404Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules422Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules500Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "balanceAccountPayoutSchedules": [
    {
      "id": "PSAC00000000000000000000000001",
      "balancePlatformPayoutScheduleId": "PSPC00000000000000000000000001",
      "balanceAccountId": "BA000000000000000000001",
      "transferInstrumentId": "SE00000000000000000000001",
      "currency": "EUR",
      "reference": "Monthly payout",
      "description": "Scheduled payout to merchant bank account",
      "referenceForBeneficiary": "PAYOUT-REF-001",
      "retainedAmount": 10000,
      "minPayoutAmount": 1000,
      "maxPayoutAmount": 100000000,
      "createdAt": "2024-01-15T10:30:00Z",
      "enabled": true,
      "frequency": "monthly",
      "frequencyValue": 1
    }
  ],
  "link": {
    "next": {
      "href": "/balanceAccounts/BA000000000000000000001/payoutSchedules?limit=10"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`BalanceAccountsPayoutSchedules401Error`](../../doc/models/balance-accounts-payout-schedules-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalanceAccountsPayoutSchedules403Error`](../../doc/models/balance-accounts-payout-schedules-403-error.md) |
| 404 | Not Found - the resource was not found | [`BalanceAccountsPayoutSchedules404Error`](../../doc/models/balance-accounts-payout-schedules-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalanceAccountsPayoutSchedules422Error`](../../doc/models/balance-accounts-payout-schedules-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalanceAccountsPayoutSchedules500Error`](../../doc/models/balance-accounts-payout-schedules-500-error.md) |


# Post-Balance Accounts-Balance Account Id-Payout Schedules

Apply a managed payout schedule to a balance account. This payout schedule is based on an existing payout schedule in your balance platform.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postBalanceAccountsBalanceAccountIdPayoutSchedules(
  balanceAccountId: string,
  body: BalanceAccountConfigurationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceAccountConfiguration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `body` | [`BalanceAccountConfigurationRequest`](../../doc/models/balance-account-configuration-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceAccountConfiguration`](../../doc/models/balance-account-configuration.md).

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const body: BalanceAccountConfigurationRequest = {
  balancePlatformPayoutScheduleId: 'PSPC00000000000000000000000001',
  frequency: Frequency.Monthly,
  transferInstrumentId: 'SE00000000000000000000001',
  currency: 'EUR',
  description: 'Scheduled payout to merchant bank account',
  enabled: true,
  frequencyValue: 1,
  maxPayoutAmount: BigInt(100000000),
  minPayoutAmount: BigInt(1000),
  reference: 'Monthly payout',
  referenceForBeneficiary: 'PAYOUT-REF-001',
  retainedAmount: BigInt(10000),
};

try {
  const response = await managedPayoutSchedulesApi.postBalanceAccountsBalanceAccountIdPayoutSchedules(
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
    if (error instanceof BalanceAccountsPayoutSchedules401Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules403Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules404Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules422Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules500Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "PSAC00000000000000000000000001",
  "balancePlatformPayoutScheduleId": "PSPC00000000000000000000000001",
  "balanceAccountId": "BA000000000000000000001",
  "transferInstrumentId": "SE00000000000000000000001",
  "currency": "EUR",
  "reference": "Monthly payout",
  "description": "Scheduled payout to merchant bank account",
  "referenceForBeneficiary": "PAYOUT-REF-001",
  "retainedAmount": 10000,
  "minPayoutAmount": 1000,
  "maxPayoutAmount": 100000000,
  "createdAt": "2024-01-15T10:30:00Z",
  "enabled": true,
  "frequency": "monthly",
  "frequencyValue": 1
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`BalanceAccountsPayoutSchedules401Error`](../../doc/models/balance-accounts-payout-schedules-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalanceAccountsPayoutSchedules403Error`](../../doc/models/balance-accounts-payout-schedules-403-error.md) |
| 404 | Not Found - the resource was not found | [`BalanceAccountsPayoutSchedules404Error`](../../doc/models/balance-accounts-payout-schedules-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalanceAccountsPayoutSchedules422Error`](../../doc/models/balance-accounts-payout-schedules-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalanceAccountsPayoutSchedules500Error`](../../doc/models/balance-accounts-payout-schedules-500-error.md) |


# Get-Balance Accounts-Balance Account Id-Payout Schedules-Id

Returns the specified payout schedule.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalanceAccountsBalanceAccountIdPayoutSchedulesId(
  balanceAccountId: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceAccountConfiguration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `id` | `string` | Template, Required | The unique identifier of the payout schedule for the balance account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceAccountConfiguration`](../../doc/models/balance-account-configuration.md).

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const id = 'id0';

try {
  const response = await managedPayoutSchedulesApi.getBalanceAccountsBalanceAccountIdPayoutSchedulesId(
    balanceAccountId,
    id
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
    if (error instanceof BalanceAccountsPayoutSchedules401Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules403Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules404Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules422Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules500Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "PSAC00000000000000000000000001",
  "balancePlatformPayoutScheduleId": "PSPC00000000000000000000000001",
  "balanceAccountId": "BA000000000000000000001",
  "transferInstrumentId": "SE00000000000000000000001",
  "currency": "EUR",
  "reference": "Monthly payout",
  "description": "Scheduled payout to merchant bank account",
  "referenceForBeneficiary": "PAYOUT-REF-001",
  "retainedAmount": 10000,
  "minPayoutAmount": 1000,
  "maxPayoutAmount": 100000000,
  "createdAt": "2024-01-15T10:30:00Z",
  "enabled": true,
  "frequency": "monthly",
  "frequencyValue": 1
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`BalanceAccountsPayoutSchedules401Error`](../../doc/models/balance-accounts-payout-schedules-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalanceAccountsPayoutSchedules403Error`](../../doc/models/balance-accounts-payout-schedules-403-error.md) |
| 404 | Not Found - the resource was not found | [`BalanceAccountsPayoutSchedules404Error`](../../doc/models/balance-accounts-payout-schedules-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalanceAccountsPayoutSchedules422Error`](../../doc/models/balance-accounts-payout-schedules-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalanceAccountsPayoutSchedules500Error`](../../doc/models/balance-accounts-payout-schedules-500-error.md) |


# Delete-Balance Accounts-Balance Account Id-Payout Schedules-Id

Delete a payout schedule applied to a balance account.

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteBalanceAccountsBalanceAccountIdPayoutSchedulesId(
  balanceAccountId: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `id` | `string` | Template, Required | The unique identifier of the payout schedule applied to the balance account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const id = 'id0';

try {
  const response = await managedPayoutSchedulesApi.deleteBalanceAccountsBalanceAccountIdPayoutSchedulesId(
    balanceAccountId,
    id
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
    if (error instanceof BalanceAccountsPayoutSchedules401Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules403Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules404Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules422Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`BalanceAccountsPayoutSchedules401Error`](../../doc/models/balance-accounts-payout-schedules-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalanceAccountsPayoutSchedules403Error`](../../doc/models/balance-accounts-payout-schedules-403-error.md) |
| 404 | Not Found - the resource was not found | [`BalanceAccountsPayoutSchedules404Error`](../../doc/models/balance-accounts-payout-schedules-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalanceAccountsPayoutSchedules422Error`](../../doc/models/balance-accounts-payout-schedules-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalanceAccountsPayoutSchedules500Error`](../../doc/models/balance-accounts-payout-schedules-500-error.md) |


# Patch-Balance Accounts-Balance Account Id-Payout Schedules-Id

Update a managed payout schedule applied to a balance account. If an optional parameter is not included in the request, it remains unchanged.

:information_source: **Note** This endpoint does not require authentication.

```ts
async patchBalanceAccountsBalanceAccountIdPayoutSchedulesId(
  balanceAccountId: string,
  id: string,
  body: BalanceAccountConfigurationUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceAccountConfiguration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `id` | `string` | Template, Required | The unique identifier of the payout schedule applied to the balance account. |
| `body` | [`BalanceAccountConfigurationUpdate`](../../doc/models/balance-account-configuration-update.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceAccountConfiguration`](../../doc/models/balance-account-configuration.md).

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const id = 'id0';

const body: BalanceAccountConfigurationUpdate = {
  description: 'Updated payout description',
  enabled: false,
  retainedAmount: BigInt(20000),
};

try {
  const response = await managedPayoutSchedulesApi.patchBalanceAccountsBalanceAccountIdPayoutSchedulesId(
    balanceAccountId,
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
    if (error instanceof BalanceAccountsPayoutSchedules401Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules403Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules404Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules422Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedules500Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "PSAC00000000000000000000000001",
  "balancePlatformPayoutScheduleId": "PSPC00000000000000000000000001",
  "balanceAccountId": "BA000000000000000000001",
  "transferInstrumentId": "SE00000000000000000000001",
  "currency": "EUR",
  "reference": "Monthly payout",
  "description": "Updated payout description",
  "referenceForBeneficiary": "PAYOUT-REF-001",
  "retainedAmount": 20000,
  "minPayoutAmount": 1000,
  "maxPayoutAmount": 100000000,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-16T14:00:00Z",
  "enabled": false,
  "frequency": "monthly",
  "frequencyValue": 1
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`BalanceAccountsPayoutSchedules401Error`](../../doc/models/balance-accounts-payout-schedules-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalanceAccountsPayoutSchedules403Error`](../../doc/models/balance-accounts-payout-schedules-403-error.md) |
| 404 | Not Found - the resource was not found | [`BalanceAccountsPayoutSchedules404Error`](../../doc/models/balance-accounts-payout-schedules-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalanceAccountsPayoutSchedules422Error`](../../doc/models/balance-accounts-payout-schedules-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalanceAccountsPayoutSchedules500Error`](../../doc/models/balance-accounts-payout-schedules-500-error.md) |


# Get-Balance Accounts-Balance Account Id-Payout Schedules-Id-Executions

View information about the executions of a managed payout schedule on the specified balance account. An execution is an attempt to make a payout according to the payout schedule.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions(
  balanceAccountId: string,
  id: string,
  offset: number,
  results?: ExecutionResult[],
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PayoutScheduleExecutions>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `id` | `string` | Template, Required | The unique identifier of the payout schedule on the balance account. |
| `offset` | `number` | Query, Required | The page number to be returned.<br><br>Default: **1**<br><br>**Constraints**: `>= 1`, `<= 100` |
| `results` | [`ExecutionResult[] \| undefined`](../../doc/models/execution-result.md) | Query, Optional | Contains a list of payout statuses. If included, the response returns only executed payouts that currently have one of the specified statuses.<br><br>Possible statuses:<br><br>- **succeeded**: The payout was sent successfully.<br>- **failed**: The payout was not sent due to an error.<br>- **skipped**: The payout was not triggered as expected. |
| `limit` | `number \| undefined` | Query, Optional | The number of items returned per page.<br><br>Default: **10**<br><br>**Constraints**: `>= 10` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PayoutScheduleExecutions`](../../doc/models/payout-schedule-executions.md).

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const id = 'id0';

const offset = 12;

try {
  const response = await managedPayoutSchedulesApi.getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions(
    balanceAccountId,
    id,
    offset
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
    if (error instanceof BalanceAccountsPayoutSchedulesExecutions401Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedulesExecutions403Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedulesExecutions404Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedulesExecutions422Error) {
      console.log(error.result);
    } else if (error instanceof BalanceAccountsPayoutSchedulesExecutions500Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "payoutScheduleExecutions": [
    {
      "id": "PS0000000000001",
      "result": "skipped",
      "triggeredAt": "2026-03-11T08:00:00Z",
      "resultDetails": {
        "reasonCode": "noBalanceToPayOut",
        "reason": "No balance to pay out"
      }
    },
    {
      "id": "PS0000000000002",
      "result": "succeeded",
      "triggeredAt": "2026-03-12T08:00:00Z",
      "resultDetails": {
        "transferId": "A0A0A0A0A0A0A0A0"
      }
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`BalanceAccountsPayoutSchedulesExecutions401Error`](../../doc/models/balance-accounts-payout-schedules-executions-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalanceAccountsPayoutSchedulesExecutions403Error`](../../doc/models/balance-accounts-payout-schedules-executions-403-error.md) |
| 404 | Not Found - the resource was not found | [`BalanceAccountsPayoutSchedulesExecutions404Error`](../../doc/models/balance-accounts-payout-schedules-executions-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalanceAccountsPayoutSchedulesExecutions422Error`](../../doc/models/balance-accounts-payout-schedules-executions-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalanceAccountsPayoutSchedulesExecutions500Error`](../../doc/models/balance-accounts-payout-schedules-executions-500-error.md) |


# Get-Balance Platforms-Balance Platform Id-Payout Schedules

Returns a list of all the payout schedules that are configured for your balance platform. You can use query parameters to filter the elements that are returned in the list.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalancePlatformsBalancePlatformIdPayoutSchedules(
  balancePlatformId: string,
  countryCode?: string,
  currency?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalancePlatformConfigurations>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatformId` | `string` | Template, Required | The unique identifier of the balance platform. |
| `countryCode` | `string \| undefined` | Query, Optional | The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country to which the payout configuration applies. |
| `currency` | `string \| undefined` | Query, Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the currency used in the payout configuration. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalancePlatformConfigurations`](../../doc/models/balance-platform-configurations.md).

## Example Usage

```ts
const balancePlatformId = 'balancePlatformId8';

try {
  const response = await managedPayoutSchedulesApi.getBalancePlatformsBalancePlatformIdPayoutSchedules(balancePlatformId);

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
    if (error instanceof BalancePlatformsPayoutSchedules401Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsPayoutSchedules403Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsPayoutSchedules404Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsPayoutSchedules422Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsPayoutSchedules500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`BalancePlatformsPayoutSchedules401Error`](../../doc/models/balance-platforms-payout-schedules-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalancePlatformsPayoutSchedules403Error`](../../doc/models/balance-platforms-payout-schedules-403-error.md) |
| 404 | Not Found - the resource was not found | [`BalancePlatformsPayoutSchedules404Error`](../../doc/models/balance-platforms-payout-schedules-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalancePlatformsPayoutSchedules422Error`](../../doc/models/balance-platforms-payout-schedules-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalancePlatformsPayoutSchedules500Error`](../../doc/models/balance-platforms-payout-schedules-500-error.md) |


# Get-Balance Platforms-Balance Platform Id-Payout Schedules-Id

Returns the specified managed payout schedule configured on your balance platform.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalancePlatformsBalancePlatformIdPayoutSchedulesId(
  balancePlatformId: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalancePlatformConfiguration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatformId` | `string` | Template, Required | The unique identifier of the balance platform. |
| `id` | `string` | Template, Required | The unique identifier of the payout configuration for your balance platform. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalancePlatformConfiguration`](../../doc/models/balance-platform-configuration.md).

## Example Usage

```ts
const balancePlatformId = 'balancePlatformId8';

const id = 'id0';

try {
  const response = await managedPayoutSchedulesApi.getBalancePlatformsBalancePlatformIdPayoutSchedulesId(
    balancePlatformId,
    id
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
    if (error instanceof BalancePlatformsPayoutSchedules401Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsPayoutSchedules403Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsPayoutSchedules404Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsPayoutSchedules422Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsPayoutSchedules500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`BalancePlatformsPayoutSchedules401Error`](../../doc/models/balance-platforms-payout-schedules-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalancePlatformsPayoutSchedules403Error`](../../doc/models/balance-platforms-payout-schedules-403-error.md) |
| 404 | Not Found - the resource was not found | [`BalancePlatformsPayoutSchedules404Error`](../../doc/models/balance-platforms-payout-schedules-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalancePlatformsPayoutSchedules422Error`](../../doc/models/balance-platforms-payout-schedules-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalancePlatformsPayoutSchedules500Error`](../../doc/models/balance-platforms-payout-schedules-500-error.md) |

