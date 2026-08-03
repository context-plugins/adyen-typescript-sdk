# Allowedorigins-Merchantlevel

```ts
const allowedoriginsMerchantlevelApi = new AllowedoriginsMerchantlevelApi(client);
```

## Class Name

`AllowedoriginsMerchantlevelApi`

## Methods

* [Get-Merchants-Merchant Id-Api Credentials-Api Credential Id-Allowed Origins](../../doc/controllers/allowedorigins-merchantlevel.md#get-merchants-merchant-id-api-credentials-api-credential-id-allowed-origins)
* [Post-Merchants-Merchant Id-Api Credentials-Api Credential Id-Allowed Origins](../../doc/controllers/allowedorigins-merchantlevel.md#post-merchants-merchant-id-api-credentials-api-credential-id-allowed-origins)
* [Get-Merchants-Merchant Id-Api Credentials-Api Credential Id-Allowed Origins-Origin Id](../../doc/controllers/allowedorigins-merchantlevel.md#get-merchants-merchant-id-api-credentials-api-credential-id-allowed-origins-origin-id)
* [Delete-Merchants-Merchant Id-Api Credentials-Api Credential Id-Allowed Origins-Origin Id](../../doc/controllers/allowedorigins-merchantlevel.md#delete-merchants-merchant-id-api-credentials-api-credential-id-allowed-origins-origin-id)


# Get-Merchants-Merchant Id-Api Credentials-Api Credential Id-Allowed Origins

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—API credentials read and write

```ts
async getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(
  merchantId: string,
  apiCredentialId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AllowedOriginsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `apiCredentialId` | `string` | Template, Required | Unique identifier of the API credential. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AllowedOriginsResponse`](../../doc/models/allowed-origins-response.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const apiCredentialId = 'apiCredentialId8';

try {
  const response = await allowedOriginsMerchantLevelApi.getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(
    merchantId,
    apiCredentialId
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
  "data": [
    {
      "id": "YOUR_ALLOWED_ORIGIN_1",
      "domain": "https://www.eu.mystore.com",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL/allowedOrigins/YOUR_ALLOWED_ORIGIN_1"
        }
      }
    },
    {
      "id": "YOUR_ALLOWED_ORIGIN_2",
      "domain": "https://www.us.mystore.com",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL/allowedOrigins/YOUR_ALLOWED_ORIGIN_2"
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


# Post-Merchants-Merchant Id-Api Credentials-Api Credential Id-Allowed Origins

Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—API credentials read and write

```ts
async postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(
  merchantId: string,
  apiCredentialId: string,
  body?: AllowedOrigin,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AllowedOrigin>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `apiCredentialId` | `string` | Template, Required | Unique identifier of the API credential. |
| `body` | [`AllowedOrigin \| undefined`](../../doc/models/allowed-origin.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AllowedOrigin`](../../doc/models/allowed-origin.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const apiCredentialId = 'apiCredentialId8';

const body: AllowedOrigin = {
  domain: 'https://www.eu.mystore.com',
};

try {
  const response = await allowedOriginsMerchantLevelApi.postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(
    merchantId,
    apiCredentialId,
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
  "domain": "https://www.eu.mystore.com",
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL/allowedOrigins/YOUR_ALLOWED_ORIGIN"
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


# Get-Merchants-Merchant Id-Api Credentials-Api Credential Id-Allowed Origins-Origin Id

Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—API credentials read and write

```ts
async getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
  merchantId: string,
  apiCredentialId: string,
  originId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AllowedOrigin>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `apiCredentialId` | `string` | Template, Required | Unique identifier of the API credential. |
| `originId` | `string` | Template, Required | Unique identifier of the allowed origin. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AllowedOrigin`](../../doc/models/allowed-origin.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const apiCredentialId = 'apiCredentialId8';

const originId = 'originId6';

try {
  const response = await allowedOriginsMerchantLevelApi.getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
    merchantId,
    apiCredentialId,
    originId
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
  "id": "YOUR_ALLOWED_ORIGIN",
  "domain": "https://www.eu.mystore.com",
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL/allowedOrigins/YOUR_ALLOWED_ORIGIN"
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


# Delete-Merchants-Merchant Id-Api Credentials-Api Credential Id-Allowed Origins-Origin Id

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—API credentials read and write

```ts
async deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
  merchantId: string,
  apiCredentialId: string,
  originId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `apiCredentialId` | `string` | Template, Required | Unique identifier of the API credential. |
| `originId` | `string` | Template, Required | Unique identifier of the allowed origin. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - look at the actual response code for the status of the request.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const merchantId = 'merchantId6';

const apiCredentialId = 'apiCredentialId8';

const originId = 'originId6';

try {
  const response = await allowedOriginsMerchantLevelApi.deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
    merchantId,
    apiCredentialId,
    originId
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

