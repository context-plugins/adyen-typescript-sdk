# Splitconfiguration-Merchantlevel

```ts
const splitconfigurationMerchantlevelApi = new SplitconfigurationMerchantlevelApi(client);
```

## Class Name

`SplitconfigurationMerchantlevelApi`

## Methods

* [Get-Merchants-Merchant Id-Split Configurations](../../doc/controllers/splitconfiguration-merchantlevel.md#get-merchants-merchant-id-split-configurations)
* [Post-Merchants-Merchant Id-Split Configurations](../../doc/controllers/splitconfiguration-merchantlevel.md#post-merchants-merchant-id-split-configurations)
* [Get-Merchants-Merchant Id-Split Configurations-Split Configuration Id](../../doc/controllers/splitconfiguration-merchantlevel.md#get-merchants-merchant-id-split-configurations-split-configuration-id)
* [Post-Merchants-Merchant Id-Split Configurations-Split Configuration Id](../../doc/controllers/splitconfiguration-merchantlevel.md#post-merchants-merchant-id-split-configurations-split-configuration-id)
* [Delete-Merchants-Merchant Id-Split Configurations-Split Configuration Id](../../doc/controllers/splitconfiguration-merchantlevel.md#delete-merchants-merchant-id-split-configurations-split-configuration-id)
* [Patch-Merchants-Merchant Id-Split Configurations-Split Configuration Id](../../doc/controllers/splitconfiguration-merchantlevel.md#patch-merchants-merchant-id-split-configurations-split-configuration-id)
* [Delete-Merchants-Merchant Id-Split Configurations-Split Configuration Id-Rules-Rule Id](../../doc/controllers/splitconfiguration-merchantlevel.md#delete-merchants-merchant-id-split-configurations-split-configuration-id-rules-rule-id)
* [Patch-Merchants-Merchant Id-Split Configurations-Split Configuration Id-Rules-Rule Id](../../doc/controllers/splitconfiguration-merchantlevel.md#patch-merchants-merchant-id-split-configurations-split-configuration-id-rules-rule-id)
* [Patch-Merchants-Split Configurations-Rules-Split Logic](../../doc/controllers/splitconfiguration-merchantlevel.md#patch-merchants-split-configurations-rules-split-logic)


# Get-Merchants-Merchant Id-Split Configurations

Returns the list of split configuration profiles for the merchant account.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API - SplitConfiguration read and write

```ts
async getMerchantsMerchantIdSplitConfigurations(
  merchantId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SplitConfigurationList>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SplitConfigurationList`](../../doc/models/split-configuration-list.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

try {
  const response = await splitConfigurationMerchantLevelApi.getMerchantsMerchantIdSplitConfigurations(merchantId);

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
      "description": "Your description for the split configuration",
      "rules": [
        {
          "currency": "GBP",
          "fundingSource": "ANY",
          "paymentMethod": "ANY",
          "ruleId": "SCRL4224P22322585HP89PPCST6BCZ",
          "shopperInteraction": "ANY",
          "splitLogic": {
            "additionalCommission": {
              "fixedAmount": 100,
              "variablePercentage": 100,
              "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
            },
            "chargeback": "deductFromLiableAccount",
            "commission": {
              "fixedAmount": 200,
              "variablePercentage": 100
            },
            "splitLogicId": "SCLG4224P22322585HP89PPCSV27VP",
            "paymentFee": "deductFromLiableAccount",
            "remainder": "addToOneBalanceAccount",
            "tip": "addToOneBalanceAccount"
          }
        }
      ],
      "splitConfigurationId": "SCNF4224P22322585HP89PPCSS24MF"
    },
    {
      "description": "Your description for the second split configuration",
      "rules": [
        {
          "currency": "ANY",
          "fundingSource": "ANY",
          "paymentMethod": "ANY",
          "ruleId": "SCRL4224P22322585HPCX384JW65VW",
          "shopperInteraction": "ANY",
          "splitLogic": {
            "additionalCommission": {
              "fixedAmount": 10,
              "variablePercentage": 50,
              "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
            },
            "chargeback": "deductFromLiableAccount",
            "commission": {
              "fixedAmount": 10,
              "variablePercentage": 100
            },
            "splitLogicId": "SCLG4224P22322585HPCX384JX52M2",
            "paymentFee": "deductFromLiableAccount",
            "remainder": "addToOneBalanceAccount",
            "tip": "addToOneBalanceAccount"
          }
        },
        {
          "currency": "EUR",
          "fundingSource": "ANY",
          "paymentMethod": "visa",
          "ruleId": "SCRL4224P22322585HPCX5V4KV6L2R",
          "shopperInteraction": "ANY",
          "splitLogic": {
            "additionalCommission": {
              "fixedAmount": 100,
              "variablePercentage": 0,
              "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
            },
            "chargeback": "deductFromLiableAccount",
            "commission": {
              "fixedAmount": 100,
              "variablePercentage": 100
            },
            "splitLogicId": "SCLG4224P22322585HPCX5V4KW26C9",
            "paymentFee": "deductFromLiableAccount",
            "remainder": "addToLiableAccount",
            "tip": "addToLiableAccount"
          }
        }
      ],
      "splitConfigurationId": "SCNF4224P22322585HPCX384JV6JGX"
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


# Post-Merchants-Merchant Id-Split Configurations

Creates a split configuration profile to [split payments automatically](https://docs.adyen.com/platforms/automatic-split-configuration/). After you [associate it with a store](https://docs.adyen.com/api-explorer/Management/latest/patch/merchants/(merchantId)/stores/(storeId)#request-splitConfiguration) in your merchant account, it splits the funds of all transactions processed through that store between your liable balance account and [your user's balance account](https://docs.adyen.com/api-explorer/Management/latest/patch/merchants/(merchantId)/stores/(storeId)#request-splitConfiguration-balanceAccountId).

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API - SplitConfiguration read and write

```ts
async postMerchantsMerchantIdSplitConfigurations(
  merchantId: string,
  body?: SplitConfiguration,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SplitConfiguration>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `body` | [`SplitConfiguration \| undefined`](../../doc/models/split-configuration.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SplitConfiguration`](../../doc/models/split-configuration.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const body: SplitConfiguration = {
  description: 'Your description for the split configuration',
  rules: [
    {
      currency: 'ANY',
      fundingSource: FundingSource1Enum.ANY,
      paymentMethod: 'ANY',
      shopperInteraction: ShopperInteraction11Enum.ANY,
      splitLogic: {
        commission: {
          fixedAmount: BigInt(10),
          variablePercentage: BigInt(100),
        },
        additionalCommission: {
          balanceAccountId: 'BA3227C223222H5HQ2XX77VVH',
          fixedAmount: BigInt(10),
          variablePercentage: BigInt(50),
        },
        chargeback: BehaviorEnum.DeductFromLiableAccount,
        paymentFee: PaymentFeeEnum.DeductFromLiableAccount,
        remainder: RemainderEnum.AddToOneBalanceAccount,
        tip: TipEnum.AddToOneBalanceAccount,
      },
    }
  ],
};

try {
  const response = await splitConfigurationMerchantLevelApi.postMerchantsMerchantIdSplitConfigurations(
    merchantId,
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
  "description": "Your description for the split configuration",
  "rules": [
    {
      "currency": "ANY",
      "fundingSource": "ANY",
      "paymentMethod": "ANY",
      "ruleId": "SCRL4224P22322585HPCX384JW65VW",
      "shopperInteraction": "ANY",
      "splitLogic": {
        "additionalCommission": {
          "fixedAmount": 10,
          "variablePercentage": 50,
          "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
        },
        "chargeback": "deductFromLiableAccount",
        "commission": {
          "fixedAmount": 10,
          "variablePercentage": 100
        },
        "splitLogicId": "SCLG4224P22322585HPCX384JX52M2",
        "paymentFee": "deductFromLiableAccount",
        "remainder": "addToOneBalanceAccount",
        "tip": "addToOneBalanceAccount"
      }
    }
  ],
  "splitConfigurationId": "SCNF4224P22322585HPCX384JV6JGX"
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


# Get-Merchants-Merchant Id-Split Configurations-Split Configuration Id

Returns the details of the split configuration profile specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API - SplitConfiguration read and write

```ts
async getMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
  merchantId: string,
  splitConfigurationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SplitConfiguration>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `splitConfigurationId` | `string` | Template, Required | The unique identifier of the split configuration. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SplitConfiguration`](../../doc/models/split-configuration.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const splitConfigurationId = 'splitConfigurationId4';

try {
  const response = await splitConfigurationMerchantLevelApi.getMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
    merchantId,
    splitConfigurationId
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
  "description": "Your description for the split configuration",
  "rules": [
    {
      "currency": "ANY",
      "fundingSource": "ANY",
      "paymentMethod": "ANY",
      "ruleId": "SCRL4224P22322585HPCX384JW65VW",
      "shopperInteraction": "ANY",
      "splitLogic": {
        "additionalCommission": {
          "fixedAmount": 10,
          "variablePercentage": 50,
          "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
        },
        "chargeback": "deductFromLiableAccount",
        "commission": {
          "fixedAmount": 10,
          "variablePercentage": 100
        },
        "splitLogicId": "SCLG4224P22322585HPCX384JX52M2",
        "paymentFee": "deductFromLiableAccount",
        "remainder": "addToOneBalanceAccount",
        "tip": "addToOneBalanceAccount"
      }
    },
    {
      "currency": "EUR",
      "fundingSource": "ANY",
      "paymentMethod": "visa",
      "ruleId": "SCRL4224P22322585HPCX5V4KV6L2R",
      "shopperInteraction": "ANY",
      "splitLogic": {
        "additionalCommission": {
          "fixedAmount": 100,
          "variablePercentage": 0,
          "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
        },
        "chargeback": "deductFromLiableAccount",
        "commission": {
          "fixedAmount": 100,
          "variablePercentage": 100
        },
        "splitLogicId": "SCLG4224P22322585HPCX5V4KW26C9",
        "paymentFee": "deductFromLiableAccount",
        "remainder": "addToLiableAccount",
        "tip": "addToLiableAccount"
      }
    }
  ],
  "splitConfigurationId": "SCNF4224P22322585HPCX384JV6JGX"
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


# Post-Merchants-Merchant Id-Split Configurations-Split Configuration Id

[Creates a rule](https://docs.adyen.com/platforms/automatic-split-configuration/manage-split-configurations/api/#create-rule) in the split configuration profile specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API - SplitConfiguration read and write

```ts
async postMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
  merchantId: string,
  splitConfigurationId: string,
  body?: SplitConfigurationRule,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SplitConfiguration>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `splitConfigurationId` | `string` | Template, Required | The unique identifier of the split configuration. |
| `body` | [`SplitConfigurationRule \| undefined`](../../doc/models/split-configuration-rule.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SplitConfiguration`](../../doc/models/split-configuration.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const splitConfigurationId = 'splitConfigurationId4';

const body: SplitConfigurationRule = {
  currency: 'USD',
  fundingSource: FundingSource1Enum.ANY,
  paymentMethod: 'visa',
  shopperInteraction: ShopperInteraction11Enum.POS,
  splitLogic: {
    commission: {
      fixedAmount: BigInt(10),
      variablePercentage: BigInt(100),
    },
    additionalCommission: {
      balanceAccountId: 'BA3227C223222H5HQ2XX77VVH',
      fixedAmount: BigInt(10),
      variablePercentage: BigInt(50),
    },
    chargeback: BehaviorEnum.DeductFromLiableAccount,
    paymentFee: PaymentFeeEnum.DeductFromLiableAccount,
    remainder: RemainderEnum.AddToLiableAccount,
    tip: TipEnum.AddToOneBalanceAccount,
  },
};

try {
  const response = await splitConfigurationMerchantLevelApi.postMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
    merchantId,
    splitConfigurationId,
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
  "description": "My first split configuration",
  "rules": [
    {
      "currency": "ANY",
      "fundingSource": "ANY",
      "paymentMethod": "ANY",
      "ruleId": "SCRL4224P22322585HPCX384JW65VW",
      "shopperInteraction": "ANY",
      "splitLogic": {
        "additionalCommission": {
          "fixedAmount": 10,
          "variablePercentage": 50,
          "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
        },
        "chargeback": "deductFromLiableAccount",
        "commission": {
          "fixedAmount": 10,
          "variablePercentage": 100
        },
        "splitLogicId": "SCLG4224P22322585HPCX384JX52M2",
        "paymentFee": "deductFromLiableAccount",
        "remainder": "addToOneBalanceAccount",
        "tip": "addToOneBalanceAccount"
      }
    },
    {
      "currency": "USD",
      "fundingSource": "ANY",
      "paymentMethod": "visa",
      "ruleId": "SCRL4224P22322585HPCX5V4KV6L2R",
      "shopperInteraction": "POS",
      "splitLogic": {
        "additionalCommission": {
          "fixedAmount": 10,
          "variablePercentage": 50,
          "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
        },
        "chargeback": "deductFromLiableAccount",
        "commission": {
          "fixedAmount": 10,
          "variablePercentage": 100
        },
        "splitLogicId": "SCLG4224P22322585HPCX5V4KW26C9",
        "paymentFee": "deductFromLiableAccount",
        "remainder": "addToLiableAccount",
        "tip": "addToOneBalanceAccount"
      }
    }
  ],
  "splitConfigurationId": "SCNF4224P22322585HPCX384JV6JGX"
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


# Delete-Merchants-Merchant Id-Split Configurations-Split Configuration Id

Deletes the split configuration profile specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API - SplitConfiguration read and write

```ts
async deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
  merchantId: string,
  splitConfigurationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SplitConfiguration>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `splitConfigurationId` | `string` | Template, Required | The unique identifier of the split configuration. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SplitConfiguration`](../../doc/models/split-configuration.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const splitConfigurationId = 'splitConfigurationId4';

try {
  const response = await splitConfigurationMerchantLevelApi.deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
    merchantId,
    splitConfigurationId
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


# Patch-Merchants-Merchant Id-Split Configurations-Split Configuration Id

Changes the description of the split configuration profile specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API - SplitConfiguration read and write

```ts
async patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
  merchantId: string,
  splitConfigurationId: string,
  body?: UpdateSplitConfigurationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SplitConfiguration>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `splitConfigurationId` | `string` | Template, Required | The unique identifier of the split configuration. |
| `body` | [`UpdateSplitConfigurationRequest \| undefined`](../../doc/models/update-split-configuration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SplitConfiguration`](../../doc/models/split-configuration.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const splitConfigurationId = 'splitConfigurationId4';

const body: UpdateSplitConfigurationRequest = {
  description: 'Updated description for the split configuration',
};

try {
  const response = await splitConfigurationMerchantLevelApi.patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
    merchantId,
    splitConfigurationId,
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
  "description": "Updated description for the split configuration",
  "rules": [
    {
      "currency": "ANY",
      "fundingSource": "ANY",
      "paymentMethod": "ANY",
      "ruleId": "SCRL4224P22322585HPCX384JW65VW",
      "shopperInteraction": "ANY",
      "splitLogic": {
        "additionalCommission": {
          "fixedAmount": 10,
          "variablePercentage": 50,
          "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
        },
        "chargeback": "deductFromLiableAccount",
        "commission": {
          "fixedAmount": 10,
          "variablePercentage": 100
        },
        "splitLogicId": "SCLG4224P22322585HPCX384JX52M2",
        "paymentFee": "deductFromLiableAccount",
        "remainder": "addToOneBalanceAccount",
        "tip": "addToOneBalanceAccount"
      }
    },
    {
      "currency": "EUR",
      "fundingSource": "ANY",
      "paymentMethod": "visa",
      "ruleId": "SCRL4224P22322585HPCX5V4KV6L2R",
      "shopperInteraction": "ANY",
      "splitLogic": {
        "additionalCommission": {
          "fixedAmount": 100,
          "variablePercentage": 0,
          "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
        },
        "chargeback": "deductFromLiableAccount",
        "commission": {
          "fixedAmount": 100,
          "variablePercentage": 100
        },
        "splitLogicId": "SCLG4224P22322585HPCX5V4KW26C9",
        "paymentFee": "deductFromLiableAccount",
        "remainder": "addToLiableAccount",
        "tip": "addToLiableAccount"
      }
    }
  ],
  "splitConfigurationId": "SCNF4224P22322585HPCX384JV6JGX"
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


# Delete-Merchants-Merchant Id-Split Configurations-Split Configuration Id-Rules-Rule Id

Deletes the rule specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API - SplitConfiguration read and write

```ts
async deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(
  merchantId: string,
  splitConfigurationId: string,
  ruleId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SplitConfiguration>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `splitConfigurationId` | `string` | Template, Required | The unique identifier of the split configuration. |
| `ruleId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SplitConfiguration`](../../doc/models/split-configuration.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const splitConfigurationId = 'splitConfigurationId4';

const ruleId = 'ruleId4';

try {
  const response = await splitConfigurationMerchantLevelApi.deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(
    merchantId,
    splitConfigurationId,
    ruleId
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


# Patch-Merchants-Merchant Id-Split Configurations-Split Configuration Id-Rules-Rule Id

Changes the [split conditions of the rule](https://docs.adyen.com/platforms/automatic-split-configuration/manage-split-configurations/api/#update-condition) specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API - SplitConfiguration read and write

```ts
async patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(
  merchantId: string,
  splitConfigurationId: string,
  ruleId: string,
  body?: UpdateSplitConfigurationRuleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SplitConfiguration>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `splitConfigurationId` | `string` | Template, Required | The identifier of the split configuration. |
| `ruleId` | `string` | Template, Required | The unique identifier of the split configuration rule. |
| `body` | [`UpdateSplitConfigurationRuleRequest \| undefined`](../../doc/models/update-split-configuration-rule-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SplitConfiguration`](../../doc/models/split-configuration.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const splitConfigurationId = 'splitConfigurationId4';

const ruleId = 'ruleId4';

const body: UpdateSplitConfigurationRuleRequest = {
  currency: 'EUR',
  fundingSource: 'ANY',
  paymentMethod: 'visa',
  shopperInteraction: 'ANY',
};

try {
  const response = await splitConfigurationMerchantLevelApi.patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(
    merchantId,
    splitConfigurationId,
    ruleId,
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
  "description": "Your description for the split configuration",
  "rules": [
    {
      "currency": "ANY",
      "fundingSource": "ANY",
      "paymentMethod": "ANY",
      "ruleId": "SCRL4224P22322585HPCX384JW65VW",
      "shopperInteraction": "ANY",
      "splitLogic": {
        "additionalCommission": {
          "fixedAmount": 10,
          "variablePercentage": 50,
          "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
        },
        "chargeback": "deductFromLiableAccount",
        "commission": {
          "fixedAmount": 10,
          "variablePercentage": 100
        },
        "splitLogicId": "SCLG4224P22322585HPCX384JX52M2",
        "paymentFee": "deductFromLiableAccount",
        "remainder": "addToOneBalanceAccount",
        "tip": "addToOneBalanceAccount"
      }
    },
    {
      "currency": "EUR",
      "fundingSource": "ANY",
      "paymentMethod": "visa",
      "ruleId": "SCRL4224P22322585HPCX5V4KV6L2R",
      "shopperInteraction": "ANY",
      "splitLogic": {
        "additionalCommission": {
          "fixedAmount": 10,
          "variablePercentage": 50,
          "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
        },
        "chargeback": "deductFromLiableAccount",
        "commission": {
          "fixedAmount": 10,
          "variablePercentage": 100
        },
        "splitLogicId": "SCLG4224P22322585HPCX5V4KW26C9",
        "paymentFee": "deductFromLiableAccount",
        "remainder": "addToLiableAccount",
        "tip": "addToOneBalanceAccount"
      }
    }
  ],
  "splitConfigurationId": "SCNF4224P22322585HPCX384JV6JGX"
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


# Patch-Merchants-Split Configurations-Rules-Split Logic

Changes the [split logic](https://docs.adyen.com/platforms/automatic-split-configuration/manage-split-configurations/api/#update-split-logic) specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API - SplitConfiguration read and write

```ts
async patchMerchantsSplitConfigurationsRulesSplitLogic(
  merchantId: string,
  splitConfigurationId: string,
  ruleId: string,
  splitLogicId: string,
  body?: UpdateSplitConfigurationLogicRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SplitConfiguration>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `splitConfigurationId` | `string` | Template, Required | The unique identifier of the split configuration. |
| `ruleId` | `string` | Template, Required | The unique identifier of the split configuration rule. |
| `splitLogicId` | `string` | Template, Required | The unique identifier of the split configuration split. |
| `body` | [`UpdateSplitConfigurationLogicRequest \| undefined`](../../doc/models/update-split-configuration-logic-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SplitConfiguration`](../../doc/models/split-configuration.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const splitConfigurationId = 'splitConfigurationId4';

const ruleId = 'ruleId4';

const splitLogicId = 'splitLogicId4';

const body: UpdateSplitConfigurationLogicRequest = {
  commission: {
    fixedAmount: BigInt(100),
    variablePercentage: BigInt(100),
  },
  additionalCommission: {
    balanceAccountId: 'BA3227C223222H5HQ2XX77VVH',
    fixedAmount: BigInt(100),
    variablePercentage: BigInt(0),
  },
  chargeback: BehaviorEnum.DeductFromLiableAccount,
  paymentFee: PaymentFeeEnum.DeductFromLiableAccount,
  remainder: RemainderEnum.AddToLiableAccount,
  tip: TipEnum.AddToLiableAccount,
};

try {
  const response = await splitConfigurationMerchantLevelApi.patchMerchantsSplitConfigurationsRulesSplitLogic(
    merchantId,
    splitConfigurationId,
    ruleId,
    splitLogicId,
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
  "description": "Your description for the split configuration",
  "rules": [
    {
      "currency": "ANY",
      "fundingSource": "ANY",
      "paymentMethod": "ANY",
      "ruleId": "SCRL4224P22322585HPCX384JW65VW",
      "shopperInteraction": "ANY",
      "splitLogic": {
        "additionalCommission": {
          "fixedAmount": 10,
          "variablePercentage": 50,
          "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
        },
        "chargeback": "deductFromLiableAccount",
        "commission": {
          "fixedAmount": 10,
          "variablePercentage": 100
        },
        "splitLogicId": "SCLG4224P22322585HPCX384JX52M2",
        "paymentFee": "deductFromLiableAccount",
        "remainder": "addToOneBalanceAccount",
        "tip": "addToOneBalanceAccount"
      }
    },
    {
      "currency": "EUR",
      "fundingSource": "ANY",
      "paymentMethod": "visa",
      "ruleId": "SCRL4224P22322585HPCX5V4KV6L2R",
      "shopperInteraction": "ANY",
      "splitLogic": {
        "additionalCommission": {
          "fixedAmount": 100,
          "variablePercentage": 0,
          "balanceAccountId": "BA3227C223222H5HQ2XX77VVH"
        },
        "chargeback": "deductFromLiableAccount",
        "commission": {
          "fixedAmount": 100,
          "variablePercentage": 100
        },
        "splitLogicId": "SCLG4224P22322585HPCX5V4KW26C9",
        "paymentFee": "deductFromLiableAccount",
        "remainder": "addToLiableAccount",
        "tip": "addToLiableAccount"
      }
    }
  ],
  "splitConfigurationId": "SCNF4224P22322585HPCX384JV6JGX"
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

