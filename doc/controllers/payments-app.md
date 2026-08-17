# Payments App

```ts
const paymentsAppApi = new PaymentsAppApi(client);
```

## Class Name

`PaymentsAppApi`

## Methods

* [Post-Merchants-Merchant Id-Generate Payments App Boarding Token](../../doc/controllers/payments-app.md#post-merchants-merchant-id-generate-payments-app-boarding-token)
* [Post-Merchants-Merchant Id-Stores-Store Id-Generate Payments App Boarding Token](../../doc/controllers/payments-app.md#post-merchants-merchant-id-stores-store-id-generate-payments-app-boarding-token)
* [Get-Merchants-Merchant Id-Payments Apps](../../doc/controllers/payments-app.md#get-merchants-merchant-id-payments-apps)
* [Get-Merchants-Merchant Id-Stores-Store Id-Payments Apps](../../doc/controllers/payments-app.md#get-merchants-merchant-id-stores-store-id-payments-apps)
* [Post-Merchants-Merchant Id-Payments Apps-Installation Id-Revoke](../../doc/controllers/payments-app.md#post-merchants-merchant-id-payments-apps-installation-id-revoke)


# Post-Merchants-Merchant Id-Generate Payments App Boarding Token

Creates a boarding token used to authenticate the installation of a Payments App instance on an Android device. The boarding token is created for the `boardingRequestToken` of the Payments App for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Adyen Payments App role

:information_source: **Note** This endpoint does not require authentication.

```ts
async postMerchantsMerchantIdGeneratePaymentsAppBoardingToken(
  merchantId: string,
  body: BoardingTokenRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BoardingTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account.<br><br>**Constraints**: *Minimum Length*: `1` |
| `body` | [`BoardingTokenRequest`](../../doc/models/boarding-token-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BoardingTokenResponse`](../../doc/models/boarding-token-response.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const body: BoardingTokenRequest = {
  boardingRequestToken: 'boardingRequestToken6',
};

try {
  const response = await paymentsAppApi.postMerchantsMerchantIdGeneratePaymentsAppBoardingToken(
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
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Merchants-Merchant Id-Stores-Store Id-Generate Payments App Boarding Token

Creates a boarding token used to authenticate the installation of a Payments App instance on an Android device. The boarding token is created for the `boardingRequestToken` of the Payments App for the store identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Adyen Payments App role

:information_source: **Note** This endpoint does not require authentication.

```ts
async postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken(
  merchantId: string,
  storeId: string,
  body: BoardingTokenRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BoardingTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account.<br><br>**Constraints**: *Minimum Length*: `1` |
| `storeId` | `string` | Template, Required | The unique identifier of the store.<br><br>**Constraints**: *Minimum Length*: `1` |
| `body` | [`BoardingTokenRequest`](../../doc/models/boarding-token-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BoardingTokenResponse`](../../doc/models/boarding-token-response.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const storeId = 'storeId6';

const body: BoardingTokenRequest = {
  boardingRequestToken: 'boardingRequestToken6',
};

try {
  const response = await paymentsAppApi.postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken(
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
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Get-Merchants-Merchant Id-Payments Apps

Returns the list of Payments App instances for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Adyen Payments App role

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMerchantsMerchantIdPaymentsApps(
  merchantId: string,
  statuses?: string,
  limit?: number,
  offset?: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentsAppResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account.<br><br>**Constraints**: *Minimum Length*: `1` |
| `statuses` | `string \| undefined` | Query, Optional | The status of the Payments App. Comma-separated list of one or more values. If no value is provided, the list returns all statuses.<br><br>Possible values:<br><br>* **BOARDING**<br><br>* **BOARDED**<br><br>* **REVOKED** |
| `limit` | `number \| undefined` | Query, Optional | The number of items to return.<br><br>**Default**: `10`<br><br>**Constraints**: `<= 100` |
| `offset` | `bigint \| undefined` | Query, Optional | The number of items to skip.<br><br>**Default**: `0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentsAppResponse`](../../doc/models/payments-app-response.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const limit = 10;

const offset = BigInt(0);

try {
  const response = await paymentsAppApi.getMerchantsMerchantIdPaymentsApps(
    merchantId,
    undefined,
    limit,
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
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Get-Merchants-Merchant Id-Stores-Store Id-Payments Apps

Returns the list of Payments App instances for the store identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Adyen Payments App role

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMerchantsMerchantIdStoresStoreIdPaymentsApps(
  merchantId: string,
  storeId: string,
  statuses?: string,
  limit?: number,
  offset?: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentsAppResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account.<br><br>**Constraints**: *Minimum Length*: `1` |
| `storeId` | `string` | Template, Required | The unique identifier of the store.<br><br>**Constraints**: *Minimum Length*: `1` |
| `statuses` | `string \| undefined` | Query, Optional | The status of the Payments App. Comma-separated list of one or more values. If no value is provided, the list returns all statuses.<br><br>Possible values:<br><br>* **BOARDING**<br><br>* **BOARDED**<br><br>* **REVOKED** |
| `limit` | `number \| undefined` | Query, Optional | The number of items to return.<br><br>**Default**: `10`<br><br>**Constraints**: `<= 100` |
| `offset` | `bigint \| undefined` | Query, Optional | The number of items to skip.<br><br>**Default**: `0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentsAppResponse`](../../doc/models/payments-app-response.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const storeId = 'storeId6';

const limit = 10;

const offset = BigInt(0);

try {
  const response = await paymentsAppApi.getMerchantsMerchantIdStoresStoreIdPaymentsApps(
    merchantId,
    storeId,
    undefined,
    limit,
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
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Merchants-Merchant Id-Payments Apps-Installation Id-Revoke

Revokes the authentication of the Payments App instance for the `installationId` and merchant account identified in the path. This call revokes the authentication of the Payments App instance with the `installationId` identified in the path for both merchant accounts and stores.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Adyen Payments App role

:information_source: **Note** This endpoint does not require authentication.

```ts
async postMerchantsMerchantIdPaymentsAppsInstallationIdRevoke(
  merchantId: string,
  installationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account.<br><br>**Constraints**: *Minimum Length*: `1` |
| `installationId` | `string` | Template, Required | The unique identifier of the Payments App instance on a device.<br><br>**Constraints**: *Minimum Length*: `1` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `unknown`.

## Example Usage

```ts
const merchantId = 'merchantId6';

const installationId = 'installationId4';

try {
  const response = await paymentsAppApi.postMerchantsMerchantIdPaymentsAppsInstallationIdRevoke(
    merchantId,
    installationId
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
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

