# Verification

```ts
const verificationApi = new VerificationApi(client);
```

## Class Name

`VerificationApi`

## Methods

* [Post-Check Account Holder](../../doc/controllers/verification.md#post-check-account-holder)
* [Post-Delete Bank Accounts](../../doc/controllers/verification.md#post-delete-bank-accounts)
* [Post-Delete Legal Arrangements](../../doc/controllers/verification.md#post-delete-legal-arrangements)
* [Post-Delete Payout Methods](../../doc/controllers/verification.md#post-delete-payout-methods)
* [Post-Delete Shareholders](../../doc/controllers/verification.md#post-delete-shareholders)
* [Post-Delete Signatories](../../doc/controllers/verification.md#post-delete-signatories)
* [Post-Get Uploaded Documents](../../doc/controllers/verification.md#post-get-uploaded-documents)
* [Post-Upload Document](../../doc/controllers/verification.md#post-upload-document)


# Post-Check Account Holder

Triggers the verification of an account holder even if the checks are not yet required for the volume that they are currently processing.

```ts
async postCheckAccountHolder(
  body?: PerformVerificationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenericResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PerformVerificationRequest \| undefined`](../../doc/models/perform-verification-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenericResponse`](../../doc/models/generic-response.md).

## Example Usage

```ts
const body: PerformVerificationRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
  accountStateType: AccountStateTypeEnum.Processing,
  tier: 2,
};

try {
  const response = await verificationApi.postCheckAccountHolder(body);

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


# Post-Delete Bank Accounts

Deletes bank accounts associated with an account holder.

```ts
async postDeleteBankAccounts(
  body?: DeleteBankAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenericResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeleteBankAccountRequest \| undefined`](../../doc/models/delete-bank-account-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenericResponse`](../../doc/models/generic-response.md).

## Example Usage

```ts
const body: DeleteBankAccountRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
  bankAccountUUIDs: [
    'eeb6ed22-3bae-483c-83b9-bc2097a75d40'
  ],
};

try {
  const response = await verificationApi.postDeleteBankAccounts(body);

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


# Post-Delete Legal Arrangements

Deletes legal arrangements and/or legal arrangement entities associated with an account holder.

```ts
async postDeleteLegalArrangements(
  body?: DeleteLegalArrangementRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenericResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeleteLegalArrangementRequest \| undefined`](../../doc/models/delete-legal-arrangement-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenericResponse`](../../doc/models/generic-response.md).

## Example Usage

```ts
const body: DeleteLegalArrangementRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
  legalArrangements: [
    {
      legalArrangementCode: 'cdf92f5a-a114-4ce6-8f19-c3f6ec83141c',
    }
  ],
};

try {
  const response = await verificationApi.postDeleteLegalArrangements(body);

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
  "invalidFields": [],
  "pspReference": "8816080397613514"
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


# Post-Delete Payout Methods

Deletes payout methods associated with an account holder.

```ts
async postDeletePayoutMethods(
  body?: DeletePayoutMethodRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenericResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeletePayoutMethodRequest \| undefined`](../../doc/models/delete-payout-method-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenericResponse`](../../doc/models/generic-response.md).

## Example Usage

```ts
const body: DeletePayoutMethodRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
  payoutMethodCodes: [
    '34b6ed22-3bae-483c-83b9-bc2097a75d40'
  ],
};

try {
  const response = await verificationApi.postDeletePayoutMethods(body);

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


# Post-Delete Shareholders

Deletes shareholders associated with an account holder.

```ts
async postDeleteShareholders(
  body?: DeleteShareholderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenericResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeleteShareholderRequest \| undefined`](../../doc/models/delete-shareholder-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenericResponse`](../../doc/models/generic-response.md).

## Example Usage

```ts
const body: DeleteShareholderRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
  shareholderCodes: [
    '9188218c-576e-4cbe-8e86-72722f453920'
  ],
};

try {
  const response = await verificationApi.postDeleteShareholders(body);

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


# Post-Delete Signatories

Deletes signatories associated with an account holder.

```ts
async postDeleteSignatories(
  body?: DeleteSignatoriesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenericResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeleteSignatoriesRequest \| undefined`](../../doc/models/delete-signatories-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenericResponse`](../../doc/models/generic-response.md).

## Example Usage

```ts
try {
  const response = await verificationApi.postDeleteSignatories();

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


# Post-Get Uploaded Documents

Returns documents that were previously uploaded for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/classic-platforms/verification-process).

```ts
async postGetUploadedDocuments(
  body?: GetUploadedDocumentsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetUploadedDocumentsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetUploadedDocumentsRequest \| undefined`](../../doc/models/get-uploaded-documents-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetUploadedDocumentsResponse`](../../doc/models/get-uploaded-documents-response.md).

## Example Usage

```ts
const body: GetUploadedDocumentsRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
  bankAccountUUID: 'EXAMPLE_UUID',
};

try {
  const response = await verificationApi.postGetUploadedDocuments(body);

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


# Post-Upload Document

Uploads a document for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/classic-platforms/verification-process).

```ts
async postUploadDocument(
  body?: UploadDocumentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateAccountHolderResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UploadDocumentRequest \| undefined`](../../doc/models/upload-document-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UpdateAccountHolderResponse`](../../doc/models/update-account-holder-response.md).

## Example Usage

```ts
const body: UploadDocumentRequest = {
  documentContent: 'dGVzdCBkb2N1bWVudCBjb250ZW50',
  documentDetail: {
    documentType: DocumentTypeEnum.PASSPORT,
    accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
    description: 'test passport description',
    filename: 'passport.png',
  },
};

try {
  const response = await verificationApi.postUploadDocument(body);

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

