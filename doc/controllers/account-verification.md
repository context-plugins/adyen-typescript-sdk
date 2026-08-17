# Account Verification

```ts
const accountVerificationApi = new AccountVerificationApi(client);
```

## Class Name

`AccountVerificationApi`

## Methods

* [Get-Account Verification-Reports-Code](../../doc/controllers/account-verification.md#get-account-verification-reports-code)
* [Post-Account Verification-Routes](../../doc/controllers/account-verification.md#post-account-verification-routes)


# Get-Account Verification-Reports-Code

Get the account verification report using a unique code from a successful open banking connection. This report provides identity verification and bank account details.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAccountVerificationReportsCode(
  code: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountVerificationReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string` | Template, Required | The unique code you receive after a successful open banking flow that is included as a query parameter in the `redirectUrl` callback.<br><br>**Constraints**: *Minimum Length*: `1` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountVerificationReportResponse`](../../doc/models/account-verification-report-response.md).

## Example Usage

```ts
const code = 'code8';

try {
  const response = await accountVerificationApi.getAccountVerificationReportsCode(code);

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

## Example Response *(as JSON)*

```json
{
  "id": "nJwJE68h6vlSEnk",
  "country": "US",
  "accounts": [
    {
      "accountId": "XvNzLGMpl3fBevllWEwks3jvBvPy88sbkypkP",
      "accountType": "CURRENT",
      "accountName": "Plaid Gold Standard 0% Interest Checking",
      "accountNumber": "1111222233330000",
      "currency": "USD",
      "identifiers": {
        "ach": {
          "accountNumber": "1111222233330000",
          "routingNumber": "011401533"
        }
      },
      "parties": [
        {
          "identity": {
            "fullLegalName": "Jane Doe",
            "name": "Jane Doe"
          },
          "role": "HOLDER"
        }
      ],
      "bankName": "Wells Fargo"
    },
    {
      "accountId": "XvNzLGMpl3fBevllWEwks3jvBvPy88sbkypkP",
      "accountType": "CURRENT",
      "accountName": "Plaid Gold Standard 0% Interest Checking",
      "accountNumber": "3333222211110000",
      "currency": "USD",
      "identifiers": {
        "ach": {
          "accountNumber": "3333222211110000",
          "routingNumber": "033587521"
        }
      },
      "parties": [
        {
          "identity": {
            "fullLegalName": "Jane Doe",
            "name": "Jane Doe"
          },
          "role": "HOLDER"
        }
      ],
      "bankName": "Bank of America"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - The request is malformed or is not in the expected format. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - The API credential used in the request is invalid or does not have the right permissions. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 404 | Not Found - The entity was not found. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 429 | Too Many Requests - Request rate limit exceeded. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Service Error - An unrecoverable error occurred while trying to perform the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Account Verification-Routes

Create a list of routes for verifying bank accounts of third-party individuals. Successful connections generate a unique code used for requesting bank reports and verifying identity.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postAccountVerificationRoutes(
  body: AccountVerificationRoutesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountVerificationRoutesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AccountVerificationRoutesRequest`](../../doc/models/account-verification-routes-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountVerificationRoutesResponse`](../../doc/models/account-verification-routes-response.md).

## Example Usage

```ts
const body: AccountVerificationRoutesRequest = {
  country: AccountVerificationCountry2Enum.NL,
  redirectUrl: 'https://merchanturl.example.org/redirect/url',
  locale: 'en-US',
  state: '11a1e60a-18b0-4dda-9258-e0ae29e1e2a3',
};

try {
  const response = await accountVerificationApi.postAccountVerificationRoutes(body);

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

## Example Response *(as JSON)*

```json
{
  "routes": [
    {
      "provider": {
        "name": "Tink",
        "logoURL": "https://obgateway.adyen.com/obgateway/static/provider/images/tink-logo.svg"
      },
      "link": "https://obgateway.adyen.com/obgateway/provider/outgoing/tink/redirect/13ec4802-c987-4f8c-8909-9a75ff567256"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - The request is malformed or is not in the expected format. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - The API credential used in the request is invalid or does not have the right permissions. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 429 | Too Many Requests - Request rate limit exceeded. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Service Error - An unrecoverable error occurred while trying to perform the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

