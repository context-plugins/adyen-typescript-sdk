# Account-Storelevel

```ts
const accountStorelevelApi = new AccountStorelevelApi(client);
```

## Class Name

`AccountStorelevelApi`

## Methods

* [Get-Merchants-Merchant Id-Stores](../../doc/controllers/account-storelevel.md#get-merchants-merchant-id-stores)
* [Post-Merchants-Merchant Id-Stores](../../doc/controllers/account-storelevel.md#post-merchants-merchant-id-stores)
* [Get-Merchants-Merchant Id-Stores-Store Id](../../doc/controllers/account-storelevel.md#get-merchants-merchant-id-stores-store-id)
* [Patch-Merchants-Merchant Id-Stores-Store Id](../../doc/controllers/account-storelevel.md#patch-merchants-merchant-id-stores-store-id)
* [Get-Stores](../../doc/controllers/account-storelevel.md#get-stores)
* [Post-Stores](../../doc/controllers/account-storelevel.md#post-stores)
* [Get-Stores-Store Id](../../doc/controllers/account-storelevel.md#get-stores-store-id)
* [Patch-Stores-Store Id](../../doc/controllers/account-storelevel.md#patch-stores-store-id)


# Get-Merchants-Merchant Id-Stores

Returns a list of stores for the merchant account identified in the path. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Stores read
* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async getMerchantsMerchantIdStores(
  merchantId: string,
  pageNumber?: number,
  pageSize?: number,
  reference?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListStoresResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `pageNumber` | `number \| undefined` | Query, Optional | The number of the page to fetch. |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to have on a page, maximum 100. The default is 10 items on a page. |
| `reference` | `string \| undefined` | Query, Optional | The reference of the store. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListStoresResponse`](../../doc/models/list-stores-response.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

try {
  const response = await accountStoreLevelApi.getMerchantsMerchantIdStores(merchantId);

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
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_ID/stores?pageNumber=1&pageSize=1"
    },
    "last": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_ID/stores?pageNumber=2&pageSize=1"
    },
    "next": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_ID/stores?pageNumber=2&pageSize=1"
    },
    "self": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_ID/stores?pageNumber=1&pageSize=1"
    }
  },
  "itemsTotal": 2,
  "pagesTotal": 1,
  "data": [
    {
      "id": "ST322LJ223223K5F4SQNR9XL5",
      "address": {
        "city": "Springfield",
        "country": "US",
        "line1": "200 Main Street",
        "line2": "Building 5A",
        "line3": "Suite 3",
        "postalCode": "20250",
        "stateOrProvince": "NY"
      },
      "description": "City centre store",
      "merchantId": "YOUR_MERCHANT_ACCOUNT_ID",
      "phoneNumber": "+13123456789",
      "reference": "Springfield Shop",
      "status": "active",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/stores/ST322LJ223223K5F4SQNR9XL5"
        }
      }
    },
    {
      "id": "ST322LJ223223K5F4SQNR9XL6",
      "address": {
        "city": "North Madison",
        "country": "US",
        "line1": "1492 Townline Road",
        "line2": "Rowland Business Park",
        "postalCode": "20577",
        "stateOrProvince": "NY"
      },
      "description": "West location",
      "merchantId": "YOUR_MERCHANT_ACCOUNT_ID",
      "phoneNumber": "+1211992213193020",
      "reference": "Second Madison store",
      "status": "active",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/stores/ST322LJ223223K5F4SQNR9XL6"
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


# Post-Merchants-Merchant Id-Stores

Creates a store for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async postMerchantsMerchantIdStores(
  merchantId: string,
  body?: StoreCreationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Store>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `body` | [`StoreCreationRequest \| undefined`](../../doc/models/store-creation-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Store`](../../doc/models/store.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const body: StoreCreationRequest = {
  address: {
    country: 'US',
    city: 'Springfield',
    line1: '200 Main Street',
    line2: 'Building 5A',
    line3: 'Suite 3',
    postalCode: '20250',
    stateOrProvince: 'NY',
  },
  description: 'City centre store',
  phoneNumber: '13123456789',
  shopperStatement: 'Springfield Shop',
  reference: 'Spring_store_2',
};

try {
  const response = await accountStoreLevelApi.postMerchantsMerchantIdStores(
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
  "id": "YOUR_STORE_ID",
  "address": {
    "country": "US",
    "line1": "200 Main Street",
    "line2": "Building 5A",
    "line3": "Suite 3",
    "city": "Springfield",
    "stateOrProvince": "NY",
    "postalCode": "20250"
  },
  "description": "City centre store",
  "merchantId": "YOUR_MERCHANT_ACCOUNT_ID",
  "shopperStatement": "Springfield Shop",
  "phoneNumber": "13123456789",
  "reference": "Spring_store_2",
  "status": "active",
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/stores/YOUR_STORE_ID"
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


# Get-Merchants-Merchant Id-Stores-Store Id

Returns the details of the store identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Stores read
* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async getMerchantsMerchantIdStoresStoreId(
  merchantId: string,
  storeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Store>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `storeId` | `string` | Template, Required | The unique identifier of the store. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Store`](../../doc/models/store.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const storeId = 'storeId6';

try {
  const response = await accountStoreLevelApi.getMerchantsMerchantIdStoresStoreId(
    merchantId,
    storeId
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
  "address": {
    "city": "Springfield",
    "country": "US",
    "line1": "200 Main Street",
    "line2": "Building 5A",
    "line3": "Suite 3",
    "postalCode": "20250",
    "stateOrProvince": "NY"
  },
  "description": "City centre store",
  "merchantId": "YOUR_MERCHANT_ACCOUNT_ID",
  "phoneNumber": "+13123456789",
  "reference": "Springfield Shop",
  "status": "active",
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/stores/ST322LJ223223K5F4SQNR9XL5"
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


# Patch-Merchants-Merchant Id-Stores-Store Id

Updates the store identified in the path. You can only update some store parameters.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async patchMerchantsMerchantIdStoresStoreId(
  merchantId: string,
  storeId: string,
  body?: UpdateStoreRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Store>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `storeId` | `string` | Template, Required | The unique identifier of the store. |
| `body` | [`UpdateStoreRequest \| undefined`](../../doc/models/update-store-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Store`](../../doc/models/store.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const storeId = 'storeId6';

const body: UpdateStoreRequest = {
  address: {
    line1: '1776 West Pinewood Avenue',
    line2: 'Heartland Building',
    line3: '',
    postalCode: '20251',
  },
};

try {
  const response = await accountStoreLevelApi.patchMerchantsMerchantIdStoresStoreId(
    merchantId,
    storeId,
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
  "id": "YOUR_STORE_ID",
  "address": {
    "country": "US",
    "line1": "1776 West Pinewood Avenue",
    "line2": "Heartland Building",
    "line3": "",
    "city": "Springfield",
    "stateOrProvince": "NY",
    "postalCode": "20251"
  },
  "description": "City centre store",
  "merchantId": "YOUR_MERCHANT_ACCOUNT_ID",
  "shopperStatement": "Springfield Shop",
  "phoneNumber": "+13123456789",
  "reference": "Spring_store_2",
  "status": "active",
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/stores/YOUR_STORE_ID"
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


# Get-Stores

Returns a list of stores. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Stores read
* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async getStores(
  pageNumber?: number,
  pageSize?: number,
  reference?: string,
  merchantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListStoresResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pageNumber` | `number \| undefined` | Query, Optional | The number of the page to fetch. |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to have on a page, maximum 100. The default is 10 items on a page. |
| `reference` | `string \| undefined` | Query, Optional | The reference of the store. |
| `merchantId` | `string \| undefined` | Query, Optional | The unique identifier of the merchant account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListStoresResponse`](../../doc/models/list-stores-response.md).

## Example Usage

```ts
try {
  const response = await accountStoreLevelApi.getStores();

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
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_ID/stores?pageNumber=1&pageSize=1"
    },
    "last": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_ID/stores?pageNumber=2&pageSize=1"
    },
    "next": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_ID/stores?pageNumber=2&pageSize=1"
    },
    "self": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_ID/stores?pageNumber=1&pageSize=1"
    }
  },
  "itemsTotal": 2,
  "pagesTotal": 1,
  "data": [
    {
      "id": "ST322LJ223223K5F4SQNR9XL5",
      "address": {
        "city": "Springfield",
        "country": "US",
        "line1": "200 Main Street",
        "line2": "Building 5A",
        "line3": "Suite 3",
        "postalCode": "20250",
        "stateOrProvince": "NY"
      },
      "description": "City centre store",
      "merchantId": "YOUR_MERCHANT_ACCOUNT_ID",
      "phoneNumber": "+1312345678",
      "reference": "Springfield Shop",
      "status": "active",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/stores/ST322LJ223223K5F4SQNR9XL5"
        }
      }
    },
    {
      "id": "ST322LJ223223K5F4SQNR9XL6",
      "address": {
        "city": "North Madison",
        "country": "US",
        "line1": "1492 Townline Road",
        "line2": "Rowland Business Park",
        "postalCode": "20577",
        "stateOrProvince": "NY"
      },
      "description": "West location",
      "merchantId": "YOUR_MERCHANT_ACCOUNT_ID",
      "phoneNumber": "+1211992213193020",
      "reference": "Second Madison store",
      "status": "active",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/stores/ST322LJ223223K5F4SQNR9XL6"
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


# Post-Stores

Creates a store for the merchant account specified in the request.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async postStores(
  body?: StoreCreationWithMerchantCodeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Store>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`StoreCreationWithMerchantCodeRequest \| undefined`](../../doc/models/store-creation-with-merchant-code-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Store`](../../doc/models/store.md).

## Example Usage

```ts
const body: StoreCreationWithMerchantCodeRequest = {
  address: {
    country: 'US',
    city: 'Springfield',
    line1: '200 Main Street',
    line2: 'Building 5A',
    line3: 'Suite 3',
    postalCode: '20250',
    stateOrProvince: 'NY',
  },
  description: 'City centre store',
  merchantId: 'YOUR_MERCHANT_ACCOUNT_ID',
  phoneNumber: '+13123456789',
  shopperStatement: 'Springfield Shop',
  reference: 'Spring_store_2',
};

try {
  const response = await accountStoreLevelApi.postStores(body);

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
  "id": "YOUR_STORE_ID",
  "address": {
    "country": "US",
    "line1": "200 Main Street",
    "line2": "Building 5A",
    "line3": "Suite 3",
    "city": "Springfield",
    "stateOrProvince": "NY",
    "postalCode": "20250"
  },
  "description": "City centre store",
  "merchantId": "YOUR_MERCHANT_ACCOUNT_ID",
  "shopperStatement": "Springfield Shop",
  "phoneNumber": "+13123456789",
  "reference": "Spring_store_2",
  "status": "active",
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/stores/YOUR_STORE_ID"
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


# Get-Stores-Store Id

Returns the details of the store identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Stores read
* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async getStoresStoreId(
  storeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Store>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storeId` | `string` | Template, Required | The unique identifier of the store. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Store`](../../doc/models/store.md).

## Example Usage

```ts
const storeId = 'storeId6';

try {
  const response = await accountStoreLevelApi.getStoresStoreId(storeId);

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
  "id": "ST322LJ223223K5F4SQNR9XL5",
  "address": {
    "city": "Springfield",
    "country": "US",
    "line1": "200 Main Street",
    "line2": "Building 5A",
    "line3": "Suite 3",
    "postalCode": "20250",
    "stateOrProvince": "NY"
  },
  "description": "City centre store",
  "merchantId": "YOUR_MERCHANT_ACCOUNT_ID",
  "phoneNumber": "+13123456789",
  "reference": "Springfield Shop",
  "status": "active",
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/stores/ST322LJ223223K5F4SQNR9XL5"
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


# Patch-Stores-Store Id

Updates the store identified in the path.
You can only update some store parameters.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async patchStoresStoreId(
  storeId: string,
  body?: UpdateStoreRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Store>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storeId` | `string` | Template, Required | The unique identifier of the store. |
| `body` | [`UpdateStoreRequest \| undefined`](../../doc/models/update-store-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Store`](../../doc/models/store.md).

## Example Usage

```ts
const storeId = 'storeId6';

const body: UpdateStoreRequest = {
  address: {
    line1: '1776 West Pinewood Avenue',
    line2: 'Heartland Building',
    line3: '',
    postalCode: '20251',
  },
};

try {
  const response = await accountStoreLevelApi.patchStoresStoreId(
    storeId,
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
  "id": "YOUR_STORE_ID",
  "address": {
    "country": "US",
    "line1": "1776 West Pinewood Avenue",
    "line2": "Heartland Building",
    "line3": "",
    "city": "Springfield",
    "stateOrProvince": "NY",
    "postalCode": "20251"
  },
  "description": "City centre store",
  "merchantId": "YOUR_MERCHANT_ACCOUNT_ID",
  "shopperStatement": "Springfield Shop",
  "phoneNumber": "+13123456789",
  "reference": "Spring_store_2",
  "status": "active",
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/stores/YOUR_STORE_ID"
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

