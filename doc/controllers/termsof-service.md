# Termsof Service

```ts
const termsofServiceApi = new TermsofServiceApi(client);
```

## Class Name

`TermsofServiceApi`

## Methods

* [Get-Legal Entities-Id-Accepted Terms of Service Document-Termsofserviceacceptancereference](../../doc/controllers/termsof-service.md#get-legal-entities-id-accepted-terms-of-service-document-termsofserviceacceptancereference)
* [Post-Legal Entities-Id-Terms of Service](../../doc/controllers/termsof-service.md#post-legal-entities-id-terms-of-service)
* [Patch-Legal Entities-Id-Terms of Service-Termsofservicedocumentid](../../doc/controllers/termsof-service.md#patch-legal-entities-id-terms-of-service-termsofservicedocumentid)
* [Get-Legal Entities-Id-Terms of Service Acceptance Infos](../../doc/controllers/termsof-service.md#get-legal-entities-id-terms-of-service-acceptance-infos)
* [Get-Legal Entities-Id-Terms of Service Status](../../doc/controllers/termsof-service.md#get-legal-entities-id-terms-of-service-status)


# Get-Legal Entities-Id-Accepted Terms of Service Document-Termsofserviceacceptancereference

Returns the accepted Terms of Service document for a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference(
  id: string,
  termsofserviceacceptancereference: string,
  termsOfServiceDocumentFormat?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAcceptedTermsOfServiceDocumentResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the legal entity. For sole proprietorship, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization. |
| `termsofserviceacceptancereference` | `string` | Template, Required | An Adyen-generated reference for the accepted Terms of Service. |
| `termsOfServiceDocumentFormat` | `string \| undefined` | Query, Optional | The format of the Terms of Service document. Possible values: **JSON**, **PDF**, or **TXT** |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetAcceptedTermsOfServiceDocumentResponse`](../../doc/models/get-accepted-terms-of-service-document-response.md).

## Example Usage

```ts
const id = 'id0';

const termsofserviceacceptancereference = 'termsofserviceacceptancereference8';

try {
  const response = await termsOfServiceApi.getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference(
    id,
    termsofserviceacceptancereference
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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Legal Entities-Id-Terms of Service

Returns the Terms of Service document for a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async postLegalEntitiesIdTermsOfService(
  id: string,
  body?: GetTermsOfServiceDocumentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTermsOfServiceDocumentResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization. |
| `body` | [`GetTermsOfServiceDocumentRequest \| undefined`](../../doc/models/get-terms-of-service-document-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetTermsOfServiceDocumentResponse`](../../doc/models/get-terms-of-service-document-response.md).

## Example Usage

```ts
const id = 'id0';

const body: GetTermsOfServiceDocumentRequest = {
  language: 'en',
  type: Type64Enum.AdyenIssuing,
};

try {
  const response = await termsOfServiceApi.postLegalEntitiesIdTermsOfService(
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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "LE00000000000000000000001",
  "type": "adyenIssuing",
  "language": "en",
  "document": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==",
  "termsOfServiceDocumentId": "abc123",
  "termsOfServiceDocumentFormat": "JSON"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Patch-Legal Entities-Id-Terms of Service-Termsofservicedocumentid

Accepts Terms of Service.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid(
  id: string,
  termsofservicedocumentid: string,
  body?: AcceptTermsOfServiceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AcceptTermsOfServiceResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the legal entity.<br><br>For sole proprietorships, this is the individual legal entity ID of the owner.<br><br>For organizations, this is the ID of the organization.<br><br>For legal representatives of individuals, this is the ID of the individual. |
| `termsofservicedocumentid` | `string` | Template, Required | The unique identifier of the Terms of Service document. |
| `body` | [`AcceptTermsOfServiceRequest \| undefined`](../../doc/models/accept-terms-of-service-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AcceptTermsOfServiceResponse`](../../doc/models/accept-terms-of-service-response.md).

## Example Usage

```ts
const id = 'id0';

const termsofservicedocumentid = 'termsofservicedocumentid2';

const body: AcceptTermsOfServiceRequest = {
  acceptedBy: 'LE00000000000000000000002',
};

try {
  const response = await termsOfServiceApi.patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid(
    id,
    termsofservicedocumentid,
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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "acceptedBy": "LE00000000000000000000002",
  "id": "TOSA000AB00000000B2AAAB2BA0AA0",
  "language": "en",
  "termsOfServiceDocumentId": "abc123",
  "type": "adyenIssuing"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Get-Legal Entities-Id-Terms of Service Acceptance Infos

Returns Terms of Service information for a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async getLegalEntitiesIdTermsOfServiceAcceptanceInfos(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTermsOfServiceAcceptanceInfosResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetTermsOfServiceAcceptanceInfosResponse`](../../doc/models/get-terms-of-service-acceptance-infos-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await termsOfServiceApi.getLegalEntitiesIdTermsOfServiceAcceptanceInfos(id);

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
    if (error instanceof ServiceErrorError1Error) {
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
      "acceptedBy": "LE00000000000000000000002",
      "acceptedFor": "LE00000000000000000000001",
      "createdAt": "2022-12-05T13:36:58.212253Z",
      "id": "TOSA000AB00000000B2AAAB2BA0AA0",
      "type": "adyenIssuing"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Get-Legal Entities-Id-Terms of Service Status

Returns the required types of Terms of Service that need to be accepted by a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async getLegalEntitiesIdTermsOfServiceStatus(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CalculateTermsOfServiceStatusResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CalculateTermsOfServiceStatusResponse`](../../doc/models/calculate-terms-of-service-status-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await termsOfServiceApi.getLegalEntitiesIdTermsOfServiceStatus(id);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "termsOfServiceTypes": [
    "adyenIssuing"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |

