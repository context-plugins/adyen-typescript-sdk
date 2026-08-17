# Accountholders

```ts
const accountholdersApi = new AccountholdersApi(client);
```

## Class Name

`AccountholdersApi`

## Methods

* [Post-Close Account Holder](../../doc/controllers/accountholders.md#post-close-account-holder)
* [Post-Close Stores](../../doc/controllers/accountholders.md#post-close-stores)
* [Post-Create Account Holder](../../doc/controllers/accountholders.md#post-create-account-holder)
* [Post-Get Account Holder](../../doc/controllers/accountholders.md#post-get-account-holder)
* [Post-Get Tax Form](../../doc/controllers/accountholders.md#post-get-tax-form)
* [Post-Suspend Account Holder](../../doc/controllers/accountholders.md#post-suspend-account-holder)
* [Post-Un Suspend Account Holder](../../doc/controllers/accountholders.md#post-un-suspend-account-holder)
* [Post-Update Account Holder](../../doc/controllers/accountholders.md#post-update-account-holder)
* [Post-Update Account Holder State](../../doc/controllers/accountholders.md#post-update-account-holder-state)
* [Post-Account Holders](../../doc/controllers/accountholders.md#post-account-holders)
* [Get-Account Holders-Id](../../doc/controllers/accountholders.md#get-account-holders-id)
* [Patch-Account Holders-Id](../../doc/controllers/accountholders.md#patch-account-holders-id)
* [Get-Account Holders-Id-Balance Accounts](../../doc/controllers/accountholders.md#get-account-holders-id-balance-accounts)
* [Get-Account Holders-Id-Tax Forms](../../doc/controllers/accountholders.md#get-account-holders-id-tax-forms)
* [Get-Account Holders-Id-Transaction Rules](../../doc/controllers/accountholders.md#get-account-holders-id-transaction-rules)
* [Get-Account Holders-Id-Tax Form Summary](../../doc/controllers/accountholders.md#get-account-holders-id-tax-form-summary)


# Post-Close Account Holder

Changes the [status of an account holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses) to **Closed**. This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a **Closed** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status), the payments are sent to your liable account.

```ts
async postCloseAccountHolder(
  body?: CloseAccountHolderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CloseAccountHolderResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CloseAccountHolderRequest \| undefined`](../../doc/models/close-account-holder-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CloseAccountHolderResponse`](../../doc/models/close-account-holder-response.md).

## Example Usage

```ts
const body: CloseAccountHolderRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
};

try {
  const response = await accountHoldersApi.postCloseAccountHolder(body);

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


# Post-Close Stores

Closes stores associated with an account holder.

```ts
async postCloseStores(
  body?: CloseStoresRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenericResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CloseStoresRequest \| undefined`](../../doc/models/close-stores-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenericResponse`](../../doc/models/generic-response.md).

## Example Usage

```ts
try {
  const response = await accountHoldersApi.postCloseStores();

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


# Post-Create Account Holder

Creates an account holder that [represents the sub-merchant's entity](https://docs.adyen.com/classic-platforms/account-structure#your-platform) in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to [Account holder and accounts](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#legal-entity-types).

```ts
async postCreateAccountHolder(
  body?: CreateAccountHolderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateAccountHolderResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateAccountHolderRequest \| undefined`](../../doc/models/create-account-holder-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreateAccountHolderResponse`](../../doc/models/create-account-holder-response.md).

## Example Usage

```ts
const body: CreateAccountHolderRequest = {
  accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
  accountHolderDetails: {
    address: {
      country: 'US',
    },
    businessDetails: {
      doingBusinessAs: 'Real Good Restaurant',
      legalBusinessName: 'Real Good Restaurant Inc.',
      shareholders: [
        {
          address: {
            country: 'NL',
          },
          email: 'testshareholder@email.com',
          name: {
            firstName: 'John',
            lastName: 'Carpenter',
          },
          shareholderType: ShareholderTypeEnum.Controller,
        }
      ],
    },
    email: 'test@email.com',
    webAddress: 'https://www.your-website.com',
  },
  legalEntity: LegalEntityEnum.Business,
};

try {
  const response = await accountHoldersApi.postCreateAccountHolder(body);

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
  "pspReference": "ALPHANUMERIC_UNIQUE_RESPONSE_REFERENCE",
  "accountHolderCode": "YOUR_UNIQUE_ACCOUNT_HOLDER_CODE",
  "accountHolderDetails": {
    "address": {
      "country": "US"
    },
    "bankAccountDetails": [],
    "businessDetails": {
      "doingBusinessAs": "Real Good Restaurant",
      "legalBusinessName": "Real Good Restaurant Inc.",
      "shareholders": [
        {
          "address": {
            "country": "NL"
          },
          "email": "testshareholder@email.com",
          "name": {
            "firstName": "John",
            "lastName": "Carpenter"
          },
          "shareholderCode": "SHAREHOLDER_CODE",
          "shareholderType": "Controller"
        }
      ]
    },
    "email": "test@email.com",
    "merchantCategoryCode": "MCC_DEFAULT_VALUE",
    "payoutMethods": [],
    "webAddress": "https://www.your-website.com"
  },
  "accountHolderStatus": {
    "status": "Active",
    "processingState": {
      "disabled": false,
      "processedFrom": {
        "currency": "USD",
        "value": 0
      },
      "processedTo": {
        "currency": "USD",
        "value": 0
      },
      "tierNumber": 0
    },
    "payoutState": {
      "allowPayout": true,
      "payoutLimit": {
        "currency": "USD",
        "value": 0
      },
      "disabled": false,
      "tierNumber": 0
    },
    "events": []
  },
  "legalEntity": "Business",
  "invalidFields": [],
  "verification": {}
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


# Post-Get Account Holder

Returns the details of an account holder.

```ts
async postGetAccountHolder(
  body?: GetAccountHolderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAccountHolderResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetAccountHolderRequest \| undefined`](../../doc/models/get-account-holder-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetAccountHolderResponse`](../../doc/models/get-account-holder-response.md).

## Example Usage

```ts
const body: GetAccountHolderRequest = {
  accountCode: 'CODE_OF_ACCOUNT',
};

try {
  const response = await accountHoldersApi.postGetAccountHolder(body);

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


# Post-Get Tax Form

Generates a tax form for account holders operating in the US. For more information, refer to [Providing tax forms](https://docs.adyen.com/classic-platforms/tax-forms).

```ts
async postGetTaxForm(
  body?: GetTaxFormRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTaxFormResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetTaxFormRequest \| undefined`](../../doc/models/get-tax-form-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetTaxFormResponse`](../../doc/models/get-tax-form-response.md).

## Example Usage

```ts
const body: GetTaxFormRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
  formType: '1099-K',
  year: 2020,
};

try {
  const response = await accountHoldersApi.postGetTaxForm(body);

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


# Post-Suspend Account Holder

Changes the [status of an account holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses) to **Suspended**.

```ts
async postSuspendAccountHolder(
  body?: SuspendAccountHolderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuspendAccountHolderResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SuspendAccountHolderRequest \| undefined`](../../doc/models/suspend-account-holder-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SuspendAccountHolderResponse`](../../doc/models/suspend-account-holder-response.md).

## Example Usage

```ts
const body: SuspendAccountHolderRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
};

try {
  const response = await accountHoldersApi.postSuspendAccountHolder(body);

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


# Post-Un Suspend Account Holder

Changes the [status of an account holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses) from **Suspended** to **Inactive**.
Account holders can have a **Suspended** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status) if you suspend them through the [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder) endpoint or if a verification deadline expires.

You can only unsuspend account holders if they do not have verification checks with a **FAILED** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).

```ts
async postUnSuspendAccountHolder(
  body?: UnSuspendAccountHolderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UnSuspendAccountHolderResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UnSuspendAccountHolderRequest \| undefined`](../../doc/models/un-suspend-account-holder-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UnSuspendAccountHolderResponse`](../../doc/models/un-suspend-account-holder-response.md).

## Example Usage

```ts
const body: UnSuspendAccountHolderRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
};

try {
  const response = await accountHoldersApi.postUnSuspendAccountHolder(body);

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


# Post-Update Account Holder

Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders.

When updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the following object:

* `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes, as well as other existing key-value pairs.

When updating any field in the following objects, you must submit all the fields required for validation:

* `address`

* `fullPhoneNumber`

* `bankAccountDetails.BankAccountDetail`

* `businessDetails.shareholders.ShareholderContact`

For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated.

To add a bank account or shareholder, provide the bank account or shareholder details without a `bankAccountUUID` or a `shareholderCode`.

```ts
async postUpdateAccountHolder(
  body?: UpdateAccountHolderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateAccountHolderResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateAccountHolderRequest \| undefined`](../../doc/models/update-account-holder-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UpdateAccountHolderResponse`](../../doc/models/update-account-holder-response.md).

## Example Usage

```ts
const body: UpdateAccountHolderRequest = {
  accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
  accountHolderDetails: {
    address: {
      country: 'US',
      city: 'NY',
      houseNumberOrName: '100',
      postalCode: '12345',
      stateOrProvince: 'NH',
      street: 'Main Street',
    },
    email: 'test@adyen.com',
    fullPhoneNumber: '+31612345678',
    merchantCategoryCode: '7999',
    webAddress: 'http://www.accountholderwebsite.com',
  },
};

try {
  const response = await accountHoldersApi.postUpdateAccountHolder(body);

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


# Post-Update Account Holder State

Disables or enables the processing or payout state of an account holder.

```ts
async postUpdateAccountHolderState(
  body?: UpdateAccountHolderStateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAccountHolderStatusResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateAccountHolderStateRequest \| undefined`](../../doc/models/update-account-holder-state-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetAccountHolderStatusResponse`](../../doc/models/get-account-holder-status-response.md).

## Example Usage

```ts
const body: UpdateAccountHolderStateRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
  disable: true,
  stateType: StateTypeEnum.Payout,
  reason: 'test reason payout',
};

try {
  const response = await accountHoldersApi.postUpdateAccountHolderState(body);

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


# Post-Account Holders

Creates an account holder linked to a [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).

```ts
async postAccountHolders(
  body?: AccountHolderInfo,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountHolder>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AccountHolderInfo \| undefined`](../../doc/models/account-holder-info.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountHolder`](../../doc/models/account-holder.md).

## Example Usage

```ts
const body: AccountHolderInfo = {
  legalEntityId: 'LE322JV223222D5GG42KN6869',
  description: 'Account holder used for international payments and payouts',
  reference: 'S.Eller-001',
};

try {
  const response = await accountHoldersApi.postAccountHolders(body);

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
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "description": "Account holder used for international payments and payouts",
  "legalEntityId": "LE322JV223222D5GG42KN6869",
  "reference": "S.Eller-001",
  "capabilities": {
    "receiveFromPlatformPayments": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    },
    "receiveFromBalanceAccount": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    },
    "sendToBalanceAccount": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    },
    "sendToTransferInstrument": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "requestedSettings": {
        "interval": "daily",
        "maxAmount": {
          "currency": "EUR",
          "value": 0
        }
      },
      "verificationStatus": "pending"
    }
  },
  "id": "AH3227C223222H5J4DCLW9VBV",
  "status": "active"
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


# Get-Account Holders-Id

Returns an account holder.

```ts
async getAccountHoldersId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountHolder>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the account holder. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountHolder`](../../doc/models/account-holder.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await accountHoldersApi.getAccountHoldersId(id);

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
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "description": "Account holder used for international payments and payouts",
  "legalEntityId": "LE322JV223222D5GG42KN6869",
  "reference": "S.Eller-001",
  "capabilities": {
    "receiveFromPlatformPayments": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    },
    "receiveFromBalanceAccount": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    },
    "sendToBalanceAccount": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    },
    "sendToTransferInstrument": {
      "enabled": true,
      "requested": true,
      "allowed": false,
      "transferInstruments": [
        {
          "enabled": true,
          "requested": true,
          "allowed": false,
          "id": "SE322KH223222F5GXZFNM3BGP",
          "verificationStatus": "pending"
        }
      ],
      "verificationStatus": "pending"
    }
  },
  "id": "AH3227C223222C5GXQXF658WB",
  "status": "active"
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


# Patch-Account Holders-Id

Updates an account holder. When updating an account holder resource, if a parameter is not provided in the request, it is left unchanged.

```ts
async patchAccountHoldersId(
  id: string,
  body?: AccountHolderUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountHolder>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the account holder. |
| `body` | [`AccountHolderUpdateRequest \| undefined`](../../doc/models/account-holder-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountHolder`](../../doc/models/account-holder.md).

## Example Usage

```ts
const id = 'id0';

const body: AccountHolderUpdateRequest = {
  capabilities: {
    'receivePayments': {
      requested: true,
    }
  },
  description: 'Account holder used for international payments and payouts',
  reference: 'S.Eller-001',
};

try {
  const response = await accountHoldersApi.patchAccountHoldersId(
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
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "description": "Account holder used for international payments and payouts",
  "legalEntityId": "LE322JV223222F5GKQZZ9DS99",
  "reference": "S.Eller-001",
  "capabilities": {
    "receivePayments": {
      "enabled": false,
      "requested": true,
      "allowed": false,
      "verificationStatus": "pending"
    }
  },
  "id": "AH3227C223222C5GKR23686TF",
  "status": "active"
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


# Get-Account Holders-Id-Balance Accounts

Returns a paginated list of the balance accounts associated with an account holder. To fetch multiple pages, use the query parameters.

For example, to limit the page to 5 balance accounts and skip the first 10, use `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.

```ts
async getAccountHoldersIdBalanceAccounts(
  id: string,
  offset?: number,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaginatedBalanceAccountsResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the account holder. |
| `offset` | `number \| undefined` | Query, Optional | The number of items that you want to skip. |
| `limit` | `number \| undefined` | Query, Optional | The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaginatedBalanceAccountsResponse`](../../doc/models/paginated-balance-accounts-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await accountHoldersApi.getAccountHoldersIdBalanceAccounts(id);

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
  "balanceAccounts": [
    {
      "accountHolderId": "AH32272223222B5CTBMZT6W2V",
      "defaultCurrencyCode": "EUR",
      "description": "S. Hopper - Main Account",
      "reference": "YOUR_REFERENCE-X173L",
      "timeZone": "Europe/Amsterdam",
      "id": "BA32272223222B5CTDNB66W2Z",
      "status": "active"
    },
    {
      "accountHolderId": "AH32272223222B5CTBMZT6W2V",
      "defaultCurrencyCode": "EUR",
      "description": "S. Hopper - Main Account",
      "reference": "YOUR_REFERENCE-X173L",
      "timeZone": "Europe/Amsterdam",
      "id": "BA32272223222B5CTDQPM6W2H",
      "status": "active"
    },
    {
      "accountHolderId": "AH32272223222B5CTBMZT6W2V",
      "defaultCurrencyCode": "EUR",
      "description": "S. Hopper - Main Account",
      "reference": "YOUR_REFERENCE-X173L",
      "timeZone": "Europe/Amsterdam",
      "id": "BA32272223222B5CVF5J63LMW",
      "status": "active"
    }
  ],
  "hasNext": true,
  "hasPrevious": false
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


# Get-Account Holders-Id-Tax Forms

Generates a tax form for account holders operating in the US. For more information, refer to US tax forms for [marketplaces](https://docs.adyen.com/marketplaces/us-tax-forms/) or [platforms](https://docs.adyen.com/platforms/us-tax-forms/) .

```ts
async getAccountHoldersIdTaxForms(
  id: string,
  formType: FormTypeEnum,
  year: number,
  legalEntityId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTaxFormResponse1>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the account holder. |
| `formType` | [`FormTypeEnum`](../../doc/models/form-type-enum.md) | Query, Required | The type of tax form you want to retrieve. Accepted values are **US1099k** and **US1099nec**. |
| `year` | `number` | Query, Required | The tax year in **YYYY** format for the tax form you want to retrieve. |
| `legalEntityId` | `string \| undefined` | Query, Optional | The legal entity reference whose tax form you want to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetTaxFormResponse1`](../../doc/models/get-tax-form-response-1.md).

## Example Usage

```ts
const id = 'id0';

const formType = FormTypeEnum.US1099k;

const year = 248;

try {
  const response = await accountHoldersApi.getAccountHoldersIdTaxForms(
    id,
    formType,
    year
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
  "content": "JVBERi0xLjcKJcfsj6IKJSVJbnZvY2F0aW9uOiBwYXRoL2dzd2luNjQuZXhlIC1kRGlzcGxh",
  "contentType": "application/pdf"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 404 | The requested tax form was not available. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Get-Account Holders-Id-Transaction Rules

Returns a list of transaction rules associated with an account holder.

```ts
async getAccountHoldersIdTransactionRules(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionRulesResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the account holder. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransactionRulesResponse`](../../doc/models/transaction-rules-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await accountHoldersApi.getAccountHoldersIdTransactionRules(id);

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


# Get-Account Holders-Id-Tax Form Summary

Returns a summary of all tax forms for an account holder.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAccountHoldersIdTaxFormSummary(
  id: string,
  formType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TaxFormSummaryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the account holder. |
| `formType` | `string` | Query, Required | The type of tax form you want a summary for. Accepted values are **US1099k** and **US1099nec**. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TaxFormSummaryResponse`](../../doc/models/tax-form-summary-response.md).

## Example Usage

```ts
const id = 'id0';

const formType = 'formType6';

try {
  const response = await accountHoldersApi.getAccountHoldersIdTaxFormSummary(
    id,
    formType
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
  }
}
```

## Example Response *(as JSON)*

```json
{
  "data": [
    {
      "legalEntityId": "LE123",
      "taxYears": [
        2023
      ]
    },
    {
      "legalEntityId": "LE987",
      "taxYears": [
        2024,
        2025
      ]
    }
  ]
}
```

