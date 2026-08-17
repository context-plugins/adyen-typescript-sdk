# Accounts

```ts
const accountsApi = new AccountsApi(client);
```

## Class Name

`AccountsApi`

## Methods

* [Post-Close Account](../../doc/controllers/accounts.md#post-close-account)
* [Post-Create Account](../../doc/controllers/accounts.md#post-create-account)
* [Post-Update Account](../../doc/controllers/accounts.md#post-update-account)


# Post-Close Account

Closes an account. If an account is closed, you cannot process transactions, pay out its funds, or reopen it. If payments are made to a closed account, the payments are sent to your liable account.

```ts
async postCloseAccount(
  body?: CloseAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CloseAccountResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CloseAccountRequest \| undefined`](../../doc/models/close-account-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CloseAccountResponse`](../../doc/models/close-account-response.md).

## Example Usage

```ts
const body: CloseAccountRequest = {
  accountCode: 'CODE_OF_ACCOUNT',
};

try {
  const response = await accountsApi.postCloseAccount(body);

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


# Post-Create Account

Creates an account under an account holder. An account holder can have [multiple accounts](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#create-additional-accounts).

```ts
async postCreateAccount(
  body?: CreateAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateAccountResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateAccountRequest \| undefined`](../../doc/models/create-account-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreateAccountResponse`](../../doc/models/create-account-response.md).

## Example Usage

```ts
const body: CreateAccountRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
};

try {
  const response = await accountsApi.postCreateAccount(body);

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


# Post-Update Account

Updates the description or payout schedule of an account.

```ts
async postUpdateAccount(
  body?: UpdateAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateAccountResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateAccountRequest \| undefined`](../../doc/models/update-account-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UpdateAccountResponse`](../../doc/models/update-account-response.md).

## Example Usage

```ts
const body: UpdateAccountRequest = {
  accountCode: 'CODE_OF_ACCOUNT',
  payoutSchedule: {
    schedule: Schedule1Enum.WEEKLY,
    action: ActionEnum.CLOSE,
  },
};

try {
  const response = await accountsApi.postUpdateAccount(body);

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

