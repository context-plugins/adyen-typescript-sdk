# Account-Merchantlevel

```ts
const accountMerchantlevelApi = new AccountMerchantlevelApi(client);
```

## Class Name

`AccountMerchantlevelApi`

## Methods

* [Get-Merchants](../../doc/controllers/account-merchantlevel.md#get-merchants)
* [Post-Merchants](../../doc/controllers/account-merchantlevel.md#post-merchants)
* [Get-Merchants-Merchant Id](../../doc/controllers/account-merchantlevel.md#get-merchants-merchant-id)
* [Post-Merchants-Merchant Id-Activate](../../doc/controllers/account-merchantlevel.md#post-merchants-merchant-id-activate)


# Get-Merchants

Returns the list of merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Account read

```ts
async getMerchants(
  pageNumber?: number,
  pageSize?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListMerchantResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pageNumber` | `number \| undefined` | Query, Optional | The number of the page to fetch. |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to have on a page, maximum 100. The default is 10 items on a page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListMerchantResponse`](../../doc/models/list-merchant-response.md).

## Example Usage

```ts
try {
  const response = await accountMerchantLevelApi.getMerchants();

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
  "_links": {
    "first": {
      "href": "https://management-test.adyen.com/v1/merchants?pageNumber=1&pageSize=10"
    },
    "last": {
      "href": "https://management-test.adyen.com/v1/merchants?pageNumber=3&pageSize=10"
    },
    "next": {
      "href": "https://management-test.adyen.com/v1/merchants?pageNumber=2&pageSize=10"
    },
    "self": {
      "href": "https://management-test.adyen.com/v1/merchants?pageNumber=1&pageSize=10"
    }
  },
  "itemsTotal": 23,
  "pagesTotal": 3,
  "data": [
    {
      "id": "YOUR_MERCHANT_ACCOUNT_1",
      "name": "YOUR_MERCHANT_NAME_1",
      "captureDelay": "immediate",
      "defaultShopperInteraction": "Ecommerce",
      "status": "Active",
      "shopWebAddress": "YOUR_SHOP_URL_1",
      "merchantCity": "Amsterdam",
      "primarySettlementCurrency": "EUR",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_1"
        },
        "apiCredentials": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_1/apiCredentials"
        },
        "users": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_1/users"
        },
        "webhooks": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_1/webhooks"
        }
      }
    },
    {
      "id": "YOUR_MERCHANT_ACCOUNT_2",
      "name": "YOUR_MERCHANT_NAME_2",
      "captureDelay": "immediate",
      "defaultShopperInteraction": "POS",
      "status": "Active",
      "shopWebAddress": "YOUR_SHOP_URL_2",
      "merchantCity": "",
      "primarySettlementCurrency": "EUR",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_2"
        },
        "apiCredentials": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_2/apiCredentials"
        },
        "users": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_2/users"
        },
        "webhooks": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_2/webhooks"
        }
      }
    },
    {
      "id": "YOUR_MERCHANT_ACCOUNT_3",
      "status": "YOUR_MERCHANT_NAME_3",
      "merchantCity": "Amsterdam",
      "primarySettlementCurrency": "EUR",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_3"
        },
        "apiCredentials": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_3/apiCredentials"
        },
        "users": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_3/users"
        },
        "webhooks": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_3/webhooks"
        }
      }
    },
    {
      "id": "YOUR_MERCHANT_ACCOUNT_4",
      "name": "YOUR_MERCHANT_NAME_4",
      "captureDelay": "immediate",
      "defaultShopperInteraction": "Ecommerce",
      "status": "Active",
      "shopWebAddress": "YOUR_SHOP_URL_4",
      "merchantCity": "Sao Paulo",
      "primarySettlementCurrency": "BRL",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_4"
        },
        "apiCredentials": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_4/apiCredentials"
        },
        "users": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_4/users"
        },
        "webhooks": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_4/webhooks"
        }
      }
    },
    {
      "id": "YOUR_MERCHANT_ACCOUNT_5",
      "name": "YOUR_MERCHANT_NAME_5",
      "captureDelay": "3",
      "defaultShopperInteraction": "Ecommerce",
      "status": "Active",
      "shopWebAddress": "YOUR_SHOP_URL_5",
      "primarySettlementCurrency": "EUR",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_5"
        },
        "apiCredentials": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_5/apiCredentials"
        },
        "users": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_5/users"
        },
        "webhooks": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_5/webhooks"
        }
      }
    },
    {
      "id": "YOUR_MERCHANT_ACCOUNT_6",
      "name": "YOUR_MERCHANT_NAME_6",
      "captureDelay": "immediate",
      "defaultShopperInteraction": "Ecommerce",
      "status": "Active",
      "shopWebAddress": "YOUR_SHOP_URL_6",
      "merchantCity": "Zagreb",
      "primarySettlementCurrency": "BRL",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_NAME_6"
        },
        "apiCredentials": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_NAME_6/apiCredentials"
        },
        "users": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_NAME_6/users"
        },
        "webhooks": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_NAME_6/webhooks"
        }
      }
    },
    {
      "id": "YOUR_MERCHANT_ACCOUNT_7",
      "name": "YOUR_MERCHANT_NAME_7",
      "captureDelay": "manual",
      "defaultShopperInteraction": "Moto",
      "status": "Active",
      "shopWebAddress": "YOUR_SHOP_URL_7",
      "merchantCity": "Amsterdam",
      "primarySettlementCurrency": "EUR",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_7"
        },
        "apiCredentials": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_7/apiCredentials"
        },
        "users": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_7/users"
        },
        "webhooks": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_7/webhooks"
        }
      }
    },
    {
      "id": "YOUR_MERCHANT_ACCOUNT_8",
      "name": "YOUR_MERCHANT_NAME_8",
      "captureDelay": "immediate",
      "defaultShopperInteraction": "Ecommerce",
      "status": "Active",
      "shopWebAddress": "YOUR_SHOP_URL_8",
      "merchantCity": "Amsterdam",
      "primarySettlementCurrency": "EUR",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_8"
        },
        "apiCredentials": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_8/apiCredentials"
        },
        "users": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_8/users"
        },
        "webhooks": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_8/webhooks"
        }
      }
    },
    {
      "id": "YOUR_MERCHANT_ACCOUNT_9",
      "name": "YOUR_MERCHANT_NAME_9",
      "captureDelay": "3",
      "defaultShopperInteraction": "Ecommerce",
      "status": "Active",
      "shopWebAddress": "YOUR_SHOP_URL_9",
      "merchantCity": "",
      "primarySettlementCurrency": "EUR",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_9"
        },
        "apiCredentials": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_9/apiCredentials"
        },
        "users": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_9/users"
        },
        "webhooks": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_9/webhooks"
        }
      }
    },
    {
      "id": "YOUR_MERCHANT_ACCOUNT_10",
      "name": "YOUR_MERCHANT_NAME_10",
      "captureDelay": "manual",
      "defaultShopperInteraction": "Ecommerce",
      "status": "Active",
      "shopWebAddress": "YOUR_SHOP_URL_10",
      "merchantCity": "Paris",
      "primarySettlementCurrency": "EUR",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_10"
        },
        "apiCredentials": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_10/apiCredentials"
        },
        "users": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_10/users"
        },
        "webhooks": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_10/webhooks"
        }
      }
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


# Post-Merchants

Creates a merchant account for the company account specified in the request.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Accounts read and write

```ts
async postMerchants(
  body?: CreateMerchantRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateMerchantResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateMerchantRequest \| undefined`](../../doc/models/create-merchant-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreateMerchantResponse`](../../doc/models/create-merchant-response.md).

## Example Usage

```ts
const body: CreateMerchantRequest = {
  companyId: 'YOUR_COMPANY_ACCOUNT',
  businessLineId: 'YOUR_BUSINESS_LINE_ID',
  description: 'YOUR_DESCRIPTION',
  legalEntityId: 'YOUR_LEGAL_ENTITY_ID',
  reference: 'YOUR_OWN_REFERENCE',
};

try {
  const response = await accountMerchantLevelApi.postMerchants(body);

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
  "companyId": "YOUR_COMPANY_ACCOUNT",
  "legalEntityId": "YOUR_LEGAL_ENTITY_ID",
  "businessLineId": "YOUR_BUSINESS_LINE_ID",
  "description": "YOUR_DESCRIPTION",
  "reference": "YOUR_OWN_REFERENCE",
  "id": "YOUR_OWN_REFERENCE"
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


# Get-Merchants-Merchant Id

Returns the merchant account specified in the path. Your API credential must have access to the merchant account.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Account read

```ts
async getMerchantsMerchantId(
  merchantId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Merchant>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Merchant`](../../doc/models/merchant.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

try {
  const response = await accountMerchantLevelApi.getMerchantsMerchantId(merchantId);

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
  "id": "YOUR_MERCHANT_ACCOUNT",
  "name": "YOUR_MERCHANT_NAME",
  "captureDelay": "manual",
  "defaultShopperInteraction": "Ecommerce",
  "status": "Active",
  "shopWebAddress": "YOUR_SHOP_URL",
  "merchantCity": "Amsterdam",
  "primarySettlementCurrency": "EUR",
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
    },
    "apiCredentials": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials"
    },
    "users": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/users"
    },
    "webhooks": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks"
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


# Post-Merchants-Merchant Id-Activate

Sends a request to activate the merchant account identified in the path.

You get the result of the activation asynchronously through a [`merchant.updated`](https://docs.adyen.com/api-explorer/ManagementNotification/latest/post/merchant.updated) webhook. Once the merchant account is activated, you can start using it to accept payments and payouts.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Accounts read and write

```ts
async postMerchantsMerchantIdActivate(
  merchantId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RequestActivationResponse>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RequestActivationResponse`](../../doc/models/request-activation-response.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

try {
  const response = await accountMerchantLevelApi.postMerchantsMerchantIdActivate(merchantId);

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

