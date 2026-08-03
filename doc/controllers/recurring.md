# Recurring

```ts
const recurringApi = new RecurringApi(client);
```

## Class Name

`RecurringApi`

## Methods

* [Post-Forward](../../doc/controllers/recurring.md#post-forward)
* [Get-Stored Payment Methods](../../doc/controllers/recurring.md#get-stored-payment-methods)
* [Post-Stored Payment Methods](../../doc/controllers/recurring.md#post-stored-payment-methods)
* [Delete-Stored Payment Methods-Stored Payment Method Id](../../doc/controllers/recurring.md#delete-stored-payment-methods-stored-payment-method-id)


# Post-Forward

Forwards the payment details you stored with Adyen to a third-party that you specify and returns the response from the third-party. Supports forwarding stored card details or [network tokens](https://docs.adyen.com/online-payments/network-tokenization). For more information, see [Forward stored payment details](https://docs.adyen.com/online-payments/tokenization/forward-payment-details).

```ts
async postForward(
  idempotencyKey?: string,
  body?: CheckoutForwardRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CheckoutForwardResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CheckoutForwardRequest \| undefined`](../../doc/models/checkout-forward-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CheckoutForwardResponse`](../../doc/models/checkout-forward-response.md).

## Example Usage

```ts
const body: CheckoutForwardRequest = {
  baseUrl: 'http://thirdparty.example.com',
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  request: {
    body: '{"amount":{"value":100,"currency":"USD"},"paymentMethod":{"creditCard":{"holderName":"{{holderName}}","number":"{{number}}","expiryMonth":"{{expiryMonth}}","expiryYear":"{{expiryYear}}"}}}',
    httpMethod: HttpMethod.Post,
    credentials: 'YOUR_CREDENTIALS_FOR_THE_THIRD_PARTY',
    headers: {
      'Authorization': 'Basic {{credentials}}'
    },
    urlSuffix: '/payments',
  },
  shopperReference: 'YOUR_SHOPPER_REFERENCE',
  storedPaymentMethodId: 'M5N7TQ4TG5PFWR50',
};

try {
  const response = await recurringApi.postForward(
    undefined,
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
  }
}
```

## Example Response *(as JSON)*

```json
{
  "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
  "pspReference": "XB7XNCQ8HXSKGK82",
  "response": {
    "status": 200,
    "headers": {
      "thirdparty-version": "2023-10-16"
    },
    "body": "{\"success\": \"ok\",\"data\": {\"tokenizeCreditCard\": {\"paymentMethod\": {\"id\": \"PAYMENT_METHOD_ID\"}}}}"
  }
}
```


# Get-Stored Payment Methods

Lists the tokens for stored payment details for the shopper identified in the path, if there are any available. The token ID can be used with payment requests for the shopper's payment. A summary of the stored details is included.

```ts
async getStoredPaymentMethods(
  shopperReference?: string,
  merchantAccount?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListStoredPaymentMethodsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shopperReference` | `string \| undefined` | Query, Optional | Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br><br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| `merchantAccount` | `string \| undefined` | Query, Optional | Your merchant account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListStoredPaymentMethodsResponse`](../../doc/models/list-stored-payment-methods-response.md).

## Example Usage

```ts
try {
  const response = await recurringApi.getStoredPaymentMethods();

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
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "shopperReference": "YOUR_SHOPPER_REFERENCE",
  "storedPaymentMethods": [
    {
      "brand": "visa",
      "expiryMonth": "10",
      "expiryYear": "30",
      "holderName": "John Smith",
      "id": "7219687191761347",
      "issuerName": "ISSUER_NAME",
      "lastFour": "1111",
      "name": "VISA",
      "shopperEmail": "john.smith@example.com",
      "shopperReference": "YOUR_SHOPPER_REFERENCE",
      "supportedRecurringProcessingModels": [
        "CardOnFile",
        "Subscription",
        "UnscheduledCardOnFile"
      ],
      "type": "scheme"
    }
  ]
}
```


# Post-Stored Payment Methods

Creates a token to store the shopper's payment details. This token can be used for the shopper's future payments.

```ts
async postStoredPaymentMethods(
  idempotencyKey?: string,
  body?: StoredPaymentMethodRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StoredPaymentMethodResource>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`StoredPaymentMethodRequest \| undefined`](../../doc/models/stored-payment-method-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: Created - the request has been fulfilled and has resulted in one or more new resources being created.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`StoredPaymentMethodResource`](../../doc/models/stored-payment-method-resource.md).

## Example Usage

```ts
const body: StoredPaymentMethodRequest = {
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  paymentMethod: {
    encryptedCardNumber: 'test_4111111111111111',
    encryptedExpiryMonth: 'test_03',
    encryptedExpiryYear: 'test_2030',
    encryptedSecurityCode: 'test_737',
    holderName: 'John Smith',
    type: 'scheme',
  },
  recurringProcessingModel: RecurringProcessingModel1.Subscription,
  shopperReference: 'YOUR_SHOPPER_REFERENCE',
  shopperEmail: 's.hopper@test.com',
  shopperIp: '192.0.2.1',
};

try {
  const response = await recurringApi.postStoredPaymentMethods(
    undefined,
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
  }
}
```

## Example Response *(as JSON)*

```json
{
  "expiryMonth": "03",
  "expiryYear": "2030",
  "holderName": "John Smith",
  "id": "KHQC5N7G84BLNK43",
  "lastFour": "1111",
  "shopperReference": "YOUR_SHOPPER_REFERENCE",
  "type": "scheme"
}
```


# Delete-Stored Payment Methods-Stored Payment Method Id

Deletes the token identified in the path. The token can no longer be used with payment requests.

```ts
async deleteStoredPaymentMethodsStoredPaymentMethodId(
  storedPaymentMethodId: string,
  shopperReference: string,
  merchantAccount: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedPaymentMethodId` | `string` | Template, Required | The unique identifier of the token. |
| `shopperReference` | `string` | Query, Required | Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br><br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| `merchantAccount` | `string` | Query, Required | Your merchant account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - look at the actual response code for the status of the request.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const storedPaymentMethodId = 'storedPaymentMethodId4';

const shopperReference = 'shopperReference8';

const merchantAccount = 'merchantAccount8';

try {
  const response = await recurringApi.deleteStoredPaymentMethodsStoredPaymentMethodId(
    storedPaymentMethodId,
    shopperReference,
    merchantAccount
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

