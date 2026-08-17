# Paymentinstruments

```ts
const paymentinstrumentsApi = new PaymentinstrumentsApi(client);
```

## Class Name

`PaymentinstrumentsApi`

## Methods

* [Post-Payment Instruments](../../doc/controllers/paymentinstruments.md#post-payment-instruments)
* [Post-Payment Instruments-Reveal](../../doc/controllers/paymentinstruments.md#post-payment-instruments-reveal)
* [Get-Payment Instruments-Id](../../doc/controllers/paymentinstruments.md#get-payment-instruments-id)
* [Patch-Payment Instruments-Id](../../doc/controllers/paymentinstruments.md#patch-payment-instruments-id)
* [Get-Payment Instruments-Id-Network Token Activation Data](../../doc/controllers/paymentinstruments.md#get-payment-instruments-id-network-token-activation-data)
* [Post-Payment Instruments-Id-Network Token Activation Data](../../doc/controllers/paymentinstruments.md#post-payment-instruments-id-network-token-activation-data)
* [Get-Payment Instruments-Id-Network Tokens](../../doc/controllers/paymentinstruments.md#get-payment-instruments-id-network-tokens)
* [Get-Payment Instruments-Id-Reveal](../../doc/controllers/paymentinstruments.md#get-payment-instruments-id-reveal)
* [Get-Payment Instruments-Id-Transaction Rules](../../doc/controllers/paymentinstruments.md#get-payment-instruments-id-transaction-rules)


# Post-Payment Instruments

Creates a payment instrument to issue a physical card, a virtual card, or a business account to your user.

For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/platforms/business-accounts).

```ts
async postPaymentInstruments(
  body?: PaymentInstrumentInfo,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentInstrument1>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PaymentInstrumentInfo \| undefined`](../../doc/models/payment-instrument-info.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentInstrument1`](../../doc/models/payment-instrument-1.md).

## Example Usage

```ts
const body: PaymentInstrumentInfo = {
  balanceAccountId: 'BA3227C223222B5CTBLR8BWJB',
  issuingCountryCode: 'NL',
  type: Type111Enum.BankAccount,
  description: 'YOUR_DESCRIPTION',
};

try {
  const response = await paymentInstrumentsApi.postPaymentInstruments(body);

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
  "balanceAccountId": "BA3227C223222B5CTBLR8BWJB",
  "issuingCountryCode": "NL",
  "status": "active",
  "type": "bankAccount",
  "description": "YOUR_DESCRIPTION",
  "bankAccount": {
    "formFactor": "physical",
    "type": "iban",
    "iban": "NL20ADYB2017000035"
  },
  "id": "PI322LJ223222B5DJS7CD9LWL"
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


# Post-Payment Instruments-Reveal

Returns the encrypted data of a specified payment instrument. These data include:

- The primary account number (PAN)
- The card verification code (CVC)
- The expiry date

You can decrypt the data to reveal it in your user interface.

To make this request, your API credential must have the following role:

* Bank Issuing PAN Reveal Webservice role

```ts
async postPaymentInstrumentsReveal(
  body?: PaymentInstrumentRevealRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentInstrumentRevealResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PaymentInstrumentRevealRequest \| undefined`](../../doc/models/payment-instrument-reveal-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentInstrumentRevealResponse`](../../doc/models/payment-instrument-reveal-response.md).

## Example Usage

```ts
try {
  const response = await paymentInstrumentsApi.postPaymentInstrumentsReveal();

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


# Get-Payment Instruments-Id

Returns the details of a payment instrument.

```ts
async getPaymentInstrumentsId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentInstrument1>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the payment instrument. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentInstrument1`](../../doc/models/payment-instrument-1.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await paymentInstrumentsApi.getPaymentInstrumentsId(id);

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
  "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
  "description": "S. Hopper - Main card",
  "issuingCountryCode": "GB",
  "status": "active",
  "type": "card",
  "card": {
    "brand": "mc",
    "brandVariant": "mcdebit",
    "cardholderName": "Simon Hopper",
    "formFactor": "virtual",
    "bin": "555544",
    "expiration": {
      "month": "01",
      "year": "2024"
    },
    "lastFour": "3548",
    "number": "************3548"
  },
  "id": "PI32272223222B5CMD3MQ3HXX"
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


# Patch-Payment Instruments-Id

Updates a payment instrument. Once a payment instrument is already active, you can only update its status. However, for cards created with **inactive** status, you can still update the balance account associated with the card.

```ts
async patchPaymentInstrumentsId(
  id: string,
  body?: PaymentInstrumentUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdatePaymentInstrument>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the payment instrument. |
| `body` | [`PaymentInstrumentUpdateRequest \| undefined`](../../doc/models/payment-instrument-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UpdatePaymentInstrument`](../../doc/models/update-payment-instrument.md).

## Example Usage

```ts
const id = 'id0';

const body: PaymentInstrumentUpdateRequest = {
  balanceAccountId: 'BA32272223222B5CM82WL892M',
};

try {
  const response = await paymentInstrumentsApi.patchPaymentInstrumentsId(
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
  "balanceAccountId": "BA32272223222B5CM82WL892M",
  "description": "S. Hopper - Main card",
  "issuingCountryCode": "GB",
  "status": "inactive",
  "type": "card",
  "card": {
    "brand": "mc",
    "brandVariant": "mcdebit",
    "cardholderName": "Simon Hopper",
    "formFactor": "virtual",
    "bin": "555544",
    "expiration": {
      "month": "01",
      "year": "2024"
    },
    "lastFour": "5785",
    "number": "************5785"
  },
  "id": "PI3227C223222B5CMD278FKGS"
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


# Get-Payment Instruments-Id-Network Token Activation Data

Get the network token activation data for a payment instrument.

```ts
async getPaymentInstrumentsIdNetworkTokenActivationData(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NetworkTokenActivationDataResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the payment instrument. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`NetworkTokenActivationDataResponse`](../../doc/models/network-token-activation-data-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await paymentInstrumentsApi.getPaymentInstrumentsIdNetworkTokenActivationData(id);

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


# Post-Payment Instruments-Id-Network Token Activation Data

Create provisioning data for a network token. Use the provisioning data to add a user's payment instrument to their digital wallet.

```ts
async postPaymentInstrumentsIdNetworkTokenActivationData(
  id: string,
  body?: NetworkTokenActivationDataRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NetworkTokenActivationDataResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the payment instrument. |
| `body` | [`NetworkTokenActivationDataRequest \| undefined`](../../doc/models/network-token-activation-data-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`NetworkTokenActivationDataResponse`](../../doc/models/network-token-activation-data-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await paymentInstrumentsApi.postPaymentInstrumentsIdNetworkTokenActivationData(id);

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


# Get-Payment Instruments-Id-Network Tokens

List the network tokens connected to a payment instrument.

```ts
async getPaymentInstrumentsIdNetworkTokens(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListNetworkTokensResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the payment instrument. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListNetworkTokensResponse`](../../doc/models/list-network-tokens-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await paymentInstrumentsApi.getPaymentInstrumentsIdNetworkTokens(id);

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


# Get-Payment Instruments-Id-Reveal

Returns the primary account number (PAN) of a payment instrument.

To make this request, your API credential must have the following [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):

* Balance Platform BCL PCI role

```ts
async getPaymentInstrumentsIdReveal(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentInstrumentRevealInfo>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the payment instrument. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentInstrumentRevealInfo`](../../doc/models/payment-instrument-reveal-info.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await paymentInstrumentsApi.getPaymentInstrumentsIdReveal(id);

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
  "cvc": "123",
  "expiration": {
    "month": "02",
    "year": "2026"
  },
  "pan": "5555444411209883"
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


# Get-Payment Instruments-Id-Transaction Rules

Returns a list of transaction rules associated with a payment instrument.

```ts
async getPaymentInstrumentsIdTransactionRules(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionRulesResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the payment instrument. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransactionRulesResponse`](../../doc/models/transaction-rules-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await paymentInstrumentsApi.getPaymentInstrumentsIdTransactionRules(id);

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
  "transactionRules": [
    {
      "description": "Only allow point-of-sale transactions",
      "entityKey": {
        "entityReference": "PI3227C223222B5FN65FN5NS9",
        "entityType": "paymentInstrument"
      },
      "interval": {
        "timeZone": "UTC",
        "type": "perTransaction"
      },
      "outcomeType": "hardBlock",
      "reference": "YOUR_REFERENCE_4F7346",
      "requestType": "authorization",
      "ruleRestrictions": {
        "processingTypes": {
          "operation": "noneMatch",
          "value": [
            "pos"
          ]
        }
      },
      "startDate": "2022-08-02T16:07:00.851374+02:00",
      "status": "active",
      "type": "blockList",
      "id": "TR32272223222B5GFSGFLFCHM"
    },
    {
      "description": "Set the maximum number of active network tokens to one for this card",
      "entityKey": {
        "entityReference": "PI3227C223222B5FN65FN5NS9",
        "entityType": "paymentInstrument"
      },
      "interval": {
        "timeZone": "UTC",
        "type": "perTransaction"
      },
      "outcomeType": "hardBlock",
      "reference": "myRule123",
      "requestType": "authorization",
      "ruleRestrictions": {
        "activeNetworkTokens": {
          "operation": "greaterThanOrEqualTo",
          "value": 1
        }
      },
      "startDate": "2022-10-03T14:48:28.999314+02:00",
      "status": "active",
      "type": "blockList",
      "id": "TR32272223222C5GQJ93L7J8Z"
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

