# Allowedorigins-Companylevel

```ts
const allowedoriginsCompanylevelApi = new AllowedoriginsCompanylevelApi(client);
```

## Class Name

`AllowedoriginsCompanylevelApi`

## Methods

* [Get-Companies-Company Id-Api Credentials-Api Credential Id-Allowed Origins](../../doc/controllers/allowedorigins-companylevel.md#get-companies-company-id-api-credentials-api-credential-id-allowed-origins)
* [Post-Companies-Company Id-Api Credentials-Api Credential Id-Allowed Origins](../../doc/controllers/allowedorigins-companylevel.md#post-companies-company-id-api-credentials-api-credential-id-allowed-origins)
* [Get-Companies-Company Id-Api Credentials-Api Credential Id-Allowed Origins-Origin Id](../../doc/controllers/allowedorigins-companylevel.md#get-companies-company-id-api-credentials-api-credential-id-allowed-origins-origin-id)
* [Delete-Companies-Company Id-Api Credentials-Api Credential Id-Allowed Origins-Origin Id](../../doc/controllers/allowedorigins-companylevel.md#delete-companies-company-id-api-credentials-api-credential-id-allowed-origins-origin-id)


# Get-Companies-Company Id-Api Credentials-Api Credential Id-Allowed Origins

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—API credentials read and write

```ts
async getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(
  companyId: string,
  apiCredentialId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AllowedOriginsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `apiCredentialId` | `string` | Template, Required | Unique identifier of the API credential. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AllowedOriginsResponse`](../../doc/models/allowed-origins-response.md).

## Example Usage

```ts
const companyId = 'companyId0';

const apiCredentialId = 'apiCredentialId8';

try {
  const response = await allowedOriginsCompanyLevelApi.getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(
    companyId,
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
          "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL/allowedOrigins/YOUR_ALLOWED_ORIGIN_1"
        }
      }
    },
    {
      "id": "YOUR_ALLOWED_ORIGIN_2",
      "domain": "https://www.us.mystore.com",
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL/allowedOrigins/YOUR_ALLOWED_ORIGIN_2"
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


# Post-Companies-Company Id-Api Credentials-Api Credential Id-Allowed Origins

Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—API credentials read and write

```ts
async postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(
  companyId: string,
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
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `apiCredentialId` | `string` | Template, Required | Unique identifier of the API credential. |
| `body` | [`AllowedOrigin \| undefined`](../../doc/models/allowed-origin.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AllowedOrigin`](../../doc/models/allowed-origin.md).

## Example Usage

```ts
const companyId = 'companyId0';

const apiCredentialId = 'apiCredentialId8';

const body: AllowedOrigin = {
  domain: 'https://www.eu.mystore.com',
};

try {
  const response = await allowedOriginsCompanyLevelApi.postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(
    companyId,
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
  "id": "YOUR_ALLOWED_ORIGIN",
  "domain": "https://www.eu.mystore.com",
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL/allowedOrigins/YOUR_ALLOWED_ORIGIN"
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


# Get-Companies-Company Id-Api Credentials-Api Credential Id-Allowed Origins-Origin Id

Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—API credentials read and write

```ts
async getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
  companyId: string,
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
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `apiCredentialId` | `string` | Template, Required | Unique identifier of the API credential. |
| `originId` | `string` | Template, Required | Unique identifier of the allowed origin. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AllowedOrigin`](../../doc/models/allowed-origin.md).

## Example Usage

```ts
const companyId = 'companyId0';

const apiCredentialId = 'apiCredentialId8';

const originId = 'originId6';

try {
  const response = await allowedOriginsCompanyLevelApi.getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
    companyId,
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
  "domain": "https://www.us.mystore.com",
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL/allowedOrigins/YOUR_ALLOWED_ORIGIN"
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


# Delete-Companies-Company Id-Api Credentials-Api Credential Id-Allowed Origins-Origin Id

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—API credentials read and write

```ts
async deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
  companyId: string,
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
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `apiCredentialId` | `string` | Template, Required | Unique identifier of the API credential. |
| `originId` | `string` | Template, Required | Unique identifier of the allowed origin. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - look at the actual response code for the status of the request.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const companyId = 'companyId0';

const apiCredentialId = 'apiCredentialId8';

const originId = 'originId6';

try {
  const response = await allowedOriginsCompanyLevelApi.deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
    companyId,
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

