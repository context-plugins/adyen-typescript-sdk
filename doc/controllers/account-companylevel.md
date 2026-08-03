# Account-Companylevel

```ts
const accountCompanylevelApi = new AccountCompanylevelApi(client);
```

## Class Name

`AccountCompanylevelApi`

## Methods

* [Get-Companies](../../doc/controllers/account-companylevel.md#get-companies)
* [Get-Companies-Company Id](../../doc/controllers/account-companylevel.md#get-companies-company-id)
* [Get-Companies-Company Id-Merchants](../../doc/controllers/account-companylevel.md#get-companies-company-id-merchants)


# Get-Companies

Returns the list of company accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Account read

```ts
async getCompanies(
  pageNumber?: number,
  pageSize?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCompanyResponse>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListCompanyResponse`](../../doc/models/list-company-response.md).

## Example Usage

```ts
try {
  const response = await accountCompanyLevelApi.getCompanies();

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
      "href": "https://management-test.adyen.com/v1/companies?pageNumber=1&pageSize=10"
    },
    "last": {
      "href": "https://management-test.adyen.com/v1/companies?pageNumber=1&pageSize=10"
    },
    "self": {
      "href": "https://management-test.adyen.com/v1/companies?pageNumber=1&pageSize=10"
    }
  },
  "itemsTotal": 1,
  "pagesTotal": 1,
  "data": [
    {
      "id": "YOUR_COMPANY_ACCOUNT",
      "name": "YOUR_COMPANY_NAME",
      "status": "Active",
      "dataCenters": [
        {
          "name": "default",
          "livePrefix": ""
        }
      ],
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT"
        },
        "apiCredentials": {
          "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/apiCredentials"
        },
        "users": {
          "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/users"
        },
        "webhooks": {
          "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/webhooks"
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


# Get-Companies-Company Id

Returns the company account specified in the path. Your API credential must have access to the company account.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Account read

```ts
async getCompaniesCompanyId(
  companyId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Company2>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Company2`](../../doc/models/company-2.md).

## Example Usage

```ts
const companyId = 'companyId0';

try {
  const response = await accountCompanyLevelApi.getCompaniesCompanyId(companyId);

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
  "id": "YOUR_COMPANY_ACCOUNT",
  "name": "YOUR_SHOP_NAME",
  "status": "Active",
  "dataCenters": [
    {
      "name": "default",
      "livePrefix": ""
    }
  ],
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT"
    },
    "apiCredentials": {
      "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/apiCredentials"
    },
    "users": {
      "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/users"
    },
    "webhooks": {
      "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/webhooks"
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


# Get-Companies-Company Id-Merchants

Returns the list of merchant accounts under the company account specified in the path. The list only includes merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Account read

```ts
async getCompaniesCompanyIdMerchants(
  companyId: string,
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
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `pageNumber` | `number \| undefined` | Query, Optional | The number of the page to fetch. |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to have on a page, maximum 100. The default is 10 items on a page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListMerchantResponse`](../../doc/models/list-merchant-response.md).

## Example Usage

```ts
const companyId = 'companyId0';

try {
  const response = await accountCompanyLevelApi.getCompaniesCompanyIdMerchants(companyId);

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
      "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/merchants?pageNumber=1&pageSize=10"
    },
    "last": {
      "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/merchants?pageNumber=3&pageSize=10"
    },
    "next": {
      "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/merchants?pageNumber=2&pageSize=10"
    },
    "self": {
      "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/merchants?pageNumber=1&pageSize=10"
    }
  },
  "itemsTotal": 22,
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
      "status": "Active",
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
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_6"
        },
        "apiCredentials": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_6/apiCredentials"
        },
        "users": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_6/users"
        },
        "webhooks": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_6/webhooks"
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

