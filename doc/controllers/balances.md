# Balances

```ts
const balancesApi = new BalancesApi(client);
```

## Class Name

`BalancesApi`

## Methods

* [Get-Balance Platforms-Balance Platform Id-Webhooks-Webhook Id-Settings](../../doc/controllers/balances.md#get-balance-platforms-balance-platform-id-webhooks-webhook-id-settings)
* [Post-Balance Platforms-Balance Platform Id-Webhooks-Webhook Id-Settings](../../doc/controllers/balances.md#post-balance-platforms-balance-platform-id-webhooks-webhook-id-settings)
* [Get-Balance Platforms-Balance Platform Id-Webhooks-Webhook Id-Settings-Setting Id](../../doc/controllers/balances.md#get-balance-platforms-balance-platform-id-webhooks-webhook-id-settings-setting-id)
* [Delete-Balance Platforms-Balance Platform Id-Webhooks-Webhook Id-Settings-Setting Id](../../doc/controllers/balances.md#delete-balance-platforms-balance-platform-id-webhooks-webhook-id-settings-setting-id)
* [Patch-Balance Platforms-Balance Platform Id-Webhooks-Webhook Id-Settings-Setting Id](../../doc/controllers/balances.md#patch-balance-platforms-balance-platform-id-webhooks-webhook-id-settings-setting-id)


# Get-Balance Platforms-Balance Platform Id-Webhooks-Webhook Id-Settings

Returns all balance webhook settings configured for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(
  balancePlatformId: string,
  webhookId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookSettings>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatformId` | `string` | Template, Required | The unique identifier of the balance platform. |
| `webhookId` | `string` | Template, Required | The unique identifier of the balance webhook. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`WebhookSettings`](../../doc/models/webhook-settings.md).

## Example Usage

```ts
const balancePlatformId = 'balancePlatformId8';

const webhookId = 'webhookId6';

try {
  const response = await balancesApi.getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(
    balancePlatformId,
    webhookId
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
    if (error instanceof BalancePlatformsWebhooksSettings400Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettings401Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettings403Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettings404Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettings422Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettings500Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "webhookSettings": [
    {
      "id": "BWHS00000000000000000000000001",
      "type": "balance",
      "target": {
        "type": "balancePlatform",
        "id": "YOUR_BALANCE_PLATFORM"
      },
      "currency": "USD",
      "status": "active",
      "conditions": [
        {
          "balanceType": "available",
          "conditionType": "lessThan",
          "value": 500000
        }
      ]
    },
    {
      "id": "BWHS00000000000000000000000002",
      "type": "balance",
      "target": {
        "type": "balanceAccount",
        "id": "BA00000000000000000LIABLE"
      },
      "currency": "USD",
      "status": "active",
      "conditions": [
        {
          "balanceType": "available",
          "conditionType": "greaterThan",
          "value": 1000000
        }
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`BalancePlatformsWebhooksSettings400Error`](../../doc/models/balance-platforms-webhooks-settings-400-error.md) |
| 401 | Unauthorized - authentication required. | [`BalancePlatformsWebhooksSettings401Error`](../../doc/models/balance-platforms-webhooks-settings-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalancePlatformsWebhooksSettings403Error`](../../doc/models/balance-platforms-webhooks-settings-403-error.md) |
| 404 | Not Found - the payment was not found | [`BalancePlatformsWebhooksSettings404Error`](../../doc/models/balance-platforms-webhooks-settings-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalancePlatformsWebhooksSettings422Error`](../../doc/models/balance-platforms-webhooks-settings-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalancePlatformsWebhooksSettings500Error`](../../doc/models/balance-platforms-webhooks-settings-500-error.md) |


# Post-Balance Platforms-Balance Platform Id-Webhooks-Webhook Id-Settings

Configures the criteria for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/1/post/balancePlatform.balanceAccount.balance.updated).

Adyen sends balance webhooks to notify you of balance changes in your balance platform. They can be triggered when the balance reaches, exceeds, or drops below a specific value in a specific currency.

You can get notified about balance changes in your entire balance platform, in the balance accounts of a specific user, or a specific balance account. The hierarchy between the webhook settings are based on the following business logic:

* Settings on a higher level apply to all lower level resources (balance platform > account holder > balance acocunt).

* The most granular setting overrides higher level settings (balance account > account holder > balance platform).

:information_source: **Note** This endpoint does not require authentication.

```ts
async postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(
  balancePlatformId: string,
  webhookId: string,
  body: BalanceWebhookSettingInfo,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookSetting>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatformId` | `string` | Template, Required | The unique identifier of the balance platform. |
| `webhookId` | `string` | Template, Required | The unique identifier of the balance webhook. |
| `body` | [`BalanceWebhookSettingInfo`](../../doc/models/balance-webhook-setting-info.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`WebhookSetting`](../../doc/models/webhook-setting.md).

## Example Usage

```ts
const balancePlatformId = 'balancePlatformId8';

const webhookId = 'webhookId6';

const body: BalanceWebhookSettingInfo = {
  currency: 'USD',
  status: Status19.Active,
  target: {
    id: 'BA00000000000000000LIABLE',
    type: Type18.BalanceAccount,
  },
  type: Type20.Balance,
  conditions: [
    {
      balanceType: BalanceType.Available,
      conditionType: ConditionType.LessThan,
      value: BigInt(500000),
    }
  ],
};

try {
  const response = await balancesApi.postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(
    balancePlatformId,
    webhookId,
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
    if (error instanceof BalancePlatformsWebhooksSettings400Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettings401Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettings403Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettings404Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettings422Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettings500Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "BWHS00000000000000000000000001",
  "type": "balance",
  "target": {
    "type": "balanceAccount",
    "id": "BA00000000000000000LIABLE"
  },
  "currency": "USD",
  "status": "active",
  "conditions": [
    {
      "balanceType": "available",
      "conditionType": "lessThan",
      "value": 500000
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`BalancePlatformsWebhooksSettings400Error`](../../doc/models/balance-platforms-webhooks-settings-400-error.md) |
| 401 | Unauthorized - authentication required. | [`BalancePlatformsWebhooksSettings401Error`](../../doc/models/balance-platforms-webhooks-settings-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalancePlatformsWebhooksSettings403Error`](../../doc/models/balance-platforms-webhooks-settings-403-error.md) |
| 404 | Not Found - the payment was not found | [`BalancePlatformsWebhooksSettings404Error`](../../doc/models/balance-platforms-webhooks-settings-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalancePlatformsWebhooksSettings422Error`](../../doc/models/balance-platforms-webhooks-settings-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalancePlatformsWebhooksSettings500Error`](../../doc/models/balance-platforms-webhooks-settings-500-error.md) |


# Get-Balance Platforms-Balance Platform Id-Webhooks-Webhook Id-Settings-Setting Id

Returns the details of a specific balance webhook setting configured for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(
  balancePlatformId: string,
  webhookId: string,
  settingId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookSetting>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatformId` | `string` | Template, Required | The unique identifier of the balance platform. |
| `webhookId` | `string` | Template, Required | The unique identifier of the balance webhook. |
| `settingId` | `string` | Template, Required | The unique identifier of the balance webhook setting. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`WebhookSetting`](../../doc/models/webhook-setting.md).

## Example Usage

```ts
const balancePlatformId = 'balancePlatformId8';

const webhookId = 'webhookId6';

const settingId = 'settingId0';

try {
  const response = await balancesApi.getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(
    balancePlatformId,
    webhookId,
    settingId
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
    if (error instanceof BalancePlatformsWebhooksSettingsSettingId400Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId401Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId403Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId404Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId422Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId500Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "BWHS00000000000000000000000001",
  "type": "balance",
  "target": {
    "type": "balancePlatform",
    "id": "YOUR_BALANCE_PLATFORM"
  },
  "currency": "USD",
  "status": "active",
  "conditions": [
    {
      "balanceType": "available",
      "conditionType": "lessThan",
      "value": 500000
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`BalancePlatformsWebhooksSettingsSettingId400Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-400-error.md) |
| 401 | Unauthorized - authentication required. | [`BalancePlatformsWebhooksSettingsSettingId401Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalancePlatformsWebhooksSettingsSettingId403Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-403-error.md) |
| 404 | Not Found - the payment was not found | [`BalancePlatformsWebhooksSettingsSettingId404Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalancePlatformsWebhooksSettingsSettingId422Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalancePlatformsWebhooksSettingsSettingId500Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-500-error.md) |


# Delete-Balance Platforms-Balance Platform Id-Webhooks-Webhook Id-Settings-Setting Id

Deletes a balance webhook setting that contains the conditions for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(
  balancePlatformId: string,
  webhookId: string,
  settingId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown | undefined>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatformId` | `string` | Template, Required | The unique identifier of the balance platform. |
| `webhookId` | `string` | Template, Required | The unique identifier of the balance webhook. |
| `settingId` | `string` | Template, Required | The unique identifier of the balance webhook setting. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - the request has been successfully processed, but there is no additional content.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `unknown`.

## Example Usage

```ts
const balancePlatformId = 'balancePlatformId8';

const webhookId = 'webhookId6';

const settingId = 'settingId0';

try {
  const response = await balancesApi.deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(
    balancePlatformId,
    webhookId,
    settingId
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
    if (error instanceof BalancePlatformsWebhooksSettingsSettingId400Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId401Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId403Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId404Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId422Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`BalancePlatformsWebhooksSettingsSettingId400Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-400-error.md) |
| 401 | Unauthorized - authentication required. | [`BalancePlatformsWebhooksSettingsSettingId401Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalancePlatformsWebhooksSettingsSettingId403Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-403-error.md) |
| 404 | Not Found - the payment was not found | [`BalancePlatformsWebhooksSettingsSettingId404Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalancePlatformsWebhooksSettingsSettingId422Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalancePlatformsWebhooksSettingsSettingId500Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-500-error.md) |


# Patch-Balance Platforms-Balance Platform Id-Webhooks-Webhook Id-Settings-Setting Id

Updates the conditions the balance change needs to meet for Adyen to send a [balance webhook](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).

:information_source: **Note** This endpoint does not require authentication.

```ts
async patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(
  balancePlatformId: string,
  webhookId: string,
  settingId: string,
  body: BalanceWebhookSettingInfoUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookSetting>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatformId` | `string` | Template, Required | The unique identifier of the balance platform. |
| `webhookId` | `string` | Template, Required | The unique identifier of the balance webhook. |
| `settingId` | `string` | Template, Required | The unique identifier of the balance webhook setting. |
| `body` | [`BalanceWebhookSettingInfoUpdate`](../../doc/models/balance-webhook-setting-info-update.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`WebhookSetting`](../../doc/models/webhook-setting.md).

## Example Usage

```ts
const balancePlatformId = 'balancePlatformId8';

const webhookId = 'webhookId6';

const settingId = 'settingId0';

const body: BalanceWebhookSettingInfoUpdate = {
  status: Status19.Inactive,
  type: Type20.Balance,
};

try {
  const response = await balancesApi.patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(
    balancePlatformId,
    webhookId,
    settingId,
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
    if (error instanceof BalancePlatformsWebhooksSettingsSettingId400Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId401Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId403Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId404Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId422Error) {
      console.log(error.result);
    } else if (error instanceof BalancePlatformsWebhooksSettingsSettingId500Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "type": "balance",
  "id": "BWHS00000000000000000000000001",
  "target": {
    "type": "balanceAccount",
    "id": "BA00000000000000000LIABLE"
  },
  "currency": "USD",
  "status": "inactive",
  "conditions": [
    {
      "balanceType": "available",
      "conditionType": "lessThan",
      "value": 500000
    },
    {
      "balanceType": "balance",
      "conditionType": "greaterThan",
      "value": 1000000
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`BalancePlatformsWebhooksSettingsSettingId400Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-400-error.md) |
| 401 | Unauthorized - authentication required. | [`BalancePlatformsWebhooksSettingsSettingId401Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-401-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`BalancePlatformsWebhooksSettingsSettingId403Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-403-error.md) |
| 404 | Not Found - the payment was not found | [`BalancePlatformsWebhooksSettingsSettingId404Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`BalancePlatformsWebhooksSettingsSettingId422Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-422-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`BalancePlatformsWebhooksSettingsSettingId500Error`](../../doc/models/balance-platforms-webhooks-settings-setting-id-500-error.md) |

