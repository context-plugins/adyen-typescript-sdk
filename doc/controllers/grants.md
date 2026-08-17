# Grants

```ts
const grantsApi = new GrantsApi(client);
```

## Class Name

`GrantsApi`

## Methods

* [Get-Grants](../../doc/controllers/grants.md#get-grants)
* [Post-Grants](../../doc/controllers/grants.md#post-grants)
* [Get-Grants-Grant Id](../../doc/controllers/grants.md#get-grants-grant-id)
* [Get-Grants-Grant Id-Disbursements](../../doc/controllers/grants.md#get-grants-grant-id-disbursements)
* [Get-Grants-Grant Id-Disbursements-Disbursement Id](../../doc/controllers/grants.md#get-grants-grant-id-disbursements-disbursement-id)
* [Patch-Grants-Grant Id-Disbursements-Disbursement Id](../../doc/controllers/grants.md#patch-grants-grant-id-disbursements-disbursement-id)


# Get-Grants

Returns a list of all the grants of a specific account holder.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getGrants(
  counterpartyAccountHolderId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Grants>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `counterpartyAccountHolderId` | `string` | Query, Required | The unique identifier of the account holder that received the grants. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Grants`](../../doc/models/grants.md).

## Example Usage

```ts
const counterpartyAccountHolderId = 'counterpartyAccountHolderId8';

try {
  const response = await grantsApi.getGrants(counterpartyAccountHolderId);

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
| 404 | Not Found - The entity was not found. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Grants

Make a request for a grant on behalf of an account holder.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postGrants(
  body?: CapitalGrantInfo,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Grant>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CapitalGrantInfo \| undefined`](../../doc/models/capital-grant-info.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Grant`](../../doc/models/grant.md).

## Example Usage

```ts
try {
  const response = await grantsApi.postGrants();

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
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Get-Grants-Grant Id

Returns the details of the specified grant.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getGrantsGrantId(
  grantId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Grant>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantId` | `string` | Template, Required | The unique identifier of the grant reference. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Grant`](../../doc/models/grant.md).

## Example Usage

```ts
const grantId = 'grantId8';

try {
  const response = await grantsApi.getGrantsGrantId(grantId);

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
| 404 | Not Found - The entity was not found. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Get-Grants-Grant Id-Disbursements

Returns the disbursements of a specified grant.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getGrantsGrantIdDisbursements(
  grantId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Disbursements>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantId` | `string` | Template, Required | The unique identifier of the grant reference. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Disbursements`](../../doc/models/disbursements.md).

## Example Usage

```ts
const grantId = 'grantId8';

try {
  const response = await grantsApi.getGrantsGrantIdDisbursements(grantId);

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
| 404 | Not Found - The entity was not found. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Get-Grants-Grant Id-Disbursements-Disbursement Id

Returns the details of a disbursement specified in the path.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getGrantsGrantIdDisbursementsDisbursementId(
  grantId: string,
  disbursementId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Disbursement>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantId` | `string` | Template, Required | The unique identifier of the grant reference. |
| `disbursementId` | `string` | Template, Required | The unique identifier of the disbursement. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Disbursement`](../../doc/models/disbursement.md).

## Example Usage

```ts
const grantId = 'grantId8';

const disbursementId = 'disbursementId8';

try {
  const response = await grantsApi.getGrantsGrantIdDisbursementsDisbursementId(
    grantId,
    disbursementId
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
| 404 | Not Found - The entity was not found. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Patch-Grants-Grant Id-Disbursements-Disbursement Id

Update the percentage of your user's net income that is deducted for repaying the grant.

:information_source: **Note** This endpoint does not require authentication.

```ts
async patchGrantsGrantIdDisbursementsDisbursementId(
  grantId: string,
  disbursementId: string,
  body: DisbursementInfoUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Disbursement>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantId` | `string` | Template, Required | The unique identifier of the grant reference.<br><br>**Constraints**: *Minimum Length*: `1` |
| `disbursementId` | `string` | Template, Required | The unique identifier of the disbursement.<br><br>**Constraints**: *Minimum Length*: `1` |
| `body` | [`DisbursementInfoUpdate`](../../doc/models/disbursement-info-update.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Disbursement`](../../doc/models/disbursement.md).

## Example Usage

```ts
const grantId = 'grantId8';

const disbursementId = 'disbursementId8';

const body: DisbursementInfoUpdate = {
};

try {
  const response = await grantsApi.patchGrantsGrantIdDisbursementsDisbursementId(
    grantId,
    disbursementId,
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
| 404 | Not Found - The entity was not found. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

