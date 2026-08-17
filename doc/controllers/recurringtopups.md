# Recurringtopups

```ts
const recurringtopupsApi = new RecurringtopupsApi(client);
```

## Class Name

`RecurringtopupsApi`

## Methods

* [Get-Balance Accounts-Balance Account Id-Recurring Top Ups](../../doc/controllers/recurringtopups.md#get-balance-accounts-balance-account-id-recurring-top-ups)
* [Post-Balance Accounts-Balance Account Id-Recurring Top Ups](../../doc/controllers/recurringtopups.md#post-balance-accounts-balance-account-id-recurring-top-ups)
* [Delete-Balance Accounts-Balance Account Id-Recurring Top Ups-Top Up Id](../../doc/controllers/recurringtopups.md#delete-balance-accounts-balance-account-id-recurring-top-ups-top-up-id)
* [Patch-Balance Accounts-Balance Account Id-Recurring Top Ups-Top Up Id](../../doc/controllers/recurringtopups.md#patch-balance-accounts-balance-account-id-recurring-top-ups-top-up-id)


# Get-Balance Accounts-Balance Account Id-Recurring Top Ups

View all recurring top ups configured for a specific `balanceAccountId`.

For more information, refer to [Manage recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalanceAccountsBalanceAccountIdRecurringTopUps(
  balanceAccountId: string,
  limit?: number,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RecurringTopUpsResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `limit` | `number \| undefined` | Query, Optional | The number of items to return per page. Value must be between 1 and 100.<br><br>**Default**: `10`<br><br>**Constraints**: `>= 1`, `<= 100` |
| `cursor` | `string \| undefined` | Query, Optional | The cursor used for pagination. Required if you want to see the next or previous page of results. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RecurringTopUpsResult`](../../doc/models/recurring-top-ups-result.md).

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const limit = 10;

try {
  const response = await recurringTopUpsApi.getBalanceAccountsBalanceAccountIdRecurringTopUps(
    balanceAccountId,
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
    if (error instanceof DefaultErrorResponseEntityError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "recurringTopUps": [
    {
      "id": "TUPC0000000000000000000001",
      "counterparty": {
        "transferInstrumentId": "SE000000000000000000000001"
      },
      "description": "My description",
      "topUpAmount": {
        "fixed": {
          "value": 1000,
          "currency": "EUR"
        }
      },
      "trigger": {
        "schedule": {
          "type": "weekdays"
        },
        "threshold": {
          "value": 100,
          "currency": "EUR"
        }
      },
      "status": "active"
    }
  ],
  "link": {
    "next": {
      "href": "/balanceAccounts/balanceAccount1/recurringTopUps?limit=10&cursor=nextCursorToken"
    },
    "previous": {
      "href": "/balanceAccounts/balanceAccount1/recurringTopUps?limit=10&cursor=previousCursorToken"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 404 | Not Found - the recurring top up was not found | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Balance Accounts-Balance Account Id-Recurring Top Ups

Create a recurring top up configuration.

For more information, refer to [Create recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/create-recurring-top-ups).

:information_source: **Note** This endpoint does not require authentication.

```ts
async postBalanceAccountsBalanceAccountIdRecurringTopUps(
  balanceAccountId: string,
  body: CreateRecurringTopUp,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RecurringTopUp>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `body` | [`CreateRecurringTopUp`](../../doc/models/create-recurring-top-up.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RecurringTopUp`](../../doc/models/recurring-top-up.md).

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const body: CreateRecurringTopUp = {
  counterparty: {
    transferInstrumentId: 'SE000000000000000000000001',
  },
  description: 'My description',
  topUpAmount: {
    fixed: {
      currency: 'EUR',
      value: BigInt(1000),
    },
  },
  trigger: {
    threshold: {
      currency: 'EUR',
      value: BigInt(100),
    },
    schedule: {
      type: ScheduleType1Enum.Weekdays,
    },
  },
};

try {
  const response = await recurringTopUpsApi.postBalanceAccountsBalanceAccountIdRecurringTopUps(
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
    if (error instanceof DefaultErrorResponseEntityError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "TUPC0000000000000000000001",
  "counterparty": {
    "transferInstrumentId": "SE000000000000000000000001"
  },
  "description": "My description",
  "topUpAmount": {
    "fixed": {
      "value": 1000,
      "currency": "EUR"
    }
  },
  "trigger": {
    "schedule": {
      "type": "weekdays"
    },
    "threshold": {
      "value": 100,
      "currency": "EUR"
    }
  },
  "status": "active"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Delete-Balance Accounts-Balance Account Id-Recurring Top Ups-Top Up Id

Delete a recurring top up configuration by `topUpId`.

For more information, refer to [Manage recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(
  balanceAccountId: string,
  topUpId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `topUpId` | `string` | Template, Required | The unique identifier of the recurring top-up you want to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - the request has been successfully processed, but there is no additional content.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `unknown`.

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const topUpId = 'topUpId8';

try {
  const response = await recurringTopUpsApi.deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(
    balanceAccountId,
    topUpId
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
    if (error instanceof DefaultErrorResponseEntityError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 404 | Not Found - the recurring top up was not found | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Patch-Balance Accounts-Balance Account Id-Recurring Top Ups-Top Up Id

Update the configuration of an existing recurring top up.

For more information, refer to [Manage recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).

:information_source: **Note** This endpoint does not require authentication.

```ts
async patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(
  balanceAccountId: string,
  topUpId: string,
  body: PatchableCreateRecurringTopUp,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RecurringTopUp>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Template, Required | The unique identifier of the balance account. |
| `topUpId` | `string` | Template, Required | The unique identifier of the recurring top-up you want to update. |
| `body` | [`PatchableCreateRecurringTopUp`](../../doc/models/patchable-create-recurring-top-up.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RecurringTopUp`](../../doc/models/recurring-top-up.md).

## Example Usage

```ts
const balanceAccountId = 'balanceAccountId8';

const topUpId = 'topUpId8';

const body: PatchableCreateRecurringTopUp = {
  description: 'new description',
};

try {
  const response = await recurringTopUpsApi.patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(
    balanceAccountId,
    topUpId,
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
    if (error instanceof DefaultErrorResponseEntityError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "TUPC0000000000000000000001",
  "counterparty": {
    "transferInstrumentId": "SE000000000000000000000001"
  },
  "description": "new description",
  "topUpAmount": {
    "fixed": {
      "value": 1000,
      "currency": "EUR"
    }
  },
  "trigger": {
    "schedule": {
      "type": "weekdays"
    },
    "threshold": {
      "value": 100,
      "currency": "EUR"
    }
  },
  "status": "inactive"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

