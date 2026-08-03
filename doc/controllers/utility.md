# Utility

```ts
const utilityApi = new UtilityApi(client);
```

## Class Name

`UtilityApi`

## Methods

* [Post-Apple Pay-Sessions](../../doc/controllers/utility.md#post-apple-pay-sessions)
* [Post-Origin Keys](../../doc/controllers/utility.md#post-origin-keys)
* [Post-Paypal-Update Order](../../doc/controllers/utility.md#post-paypal-update-order)
* [Post-Validate Shopper Id](../../doc/controllers/utility.md#post-validate-shopper-id)


# Post-Apple Pay-Sessions

You need to use this endpoint if you have an API-only integration with Apple Pay which uses Adyen's Apple Pay certificate.

The endpoint returns the Apple Pay session data which you need to complete the [Apple Pay session validation](https://docs.adyen.com/payment-methods/apple-pay/api-only?tab=adyen-certificate-validation_1#complete-apple-pay-session-validation).

```ts
async postApplePaySessions(
  idempotencyKey?: string,
  body?: ApplePaySessionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplePaySessionResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`ApplePaySessionRequest \| undefined`](../../doc/models/apple-pay-session-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ApplePaySessionResponse`](../../doc/models/apple-pay-session-response.md).

## Example Usage

```ts
const body: ApplePaySessionRequest = {
  displayName: 'YOUR_MERCHANT_NAME',
  domainName: 'YOUR_DOMAIN_NAME',
  merchantIdentifier: 'YOUR_MERCHANT_ID',
};

try {
  const response = await utilityApi.postApplePaySessions(
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
  "data": "eyJ2Z..."
}
```


# Post-Origin Keys

**This endpoint is deprecated.**

This operation takes the origin domains and returns a JSON object containing the corresponding origin keys for the domains.

> If you're still using origin key for your Web Drop-in or Components integration, we recommend [switching to client key](https://docs.adyen.com/development-resources/client-side-authentication/migrate-from-origin-key-to-client-key). This allows you to use a single key for all origins, add or remove origins without generating a new key, and detect the card type from the number entered in your payment form.

```ts
async postOriginKeys(
  idempotencyKey?: string,
  body?: UtilityRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UtilityResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`UtilityRequest \| undefined`](../../doc/models/utility-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UtilityResponse`](../../doc/models/utility-response.md).

## Example Usage

```ts
const body: UtilityRequest = {
  originDomains: [
    'https://www.your-domain1.com',
    'https://www.your-domain2.com',
    'https://www.your-domain3.com'
  ],
};

try {
  const response = await utilityApi.postOriginKeys(
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
    if (error instanceof ServiceError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "originKeys": {
    "https://www.your-domain1.com": "pub.v2.8116178901076090.aHR0cHM6Ly93d3cueW91ci1kb21haW4xLmNvbQ.pvbYlrXz0ICP4kwMJXDGDLVMqALhwXr1MSRjT-fkhvw",
    "https://www.your-domain3.com": "pub.v2.8116178901076090.aHR0cHM6Ly93d3cueW91ci1kb21haW4zLmNvbQ.FrTpVz7_RzAywKasM0kXCRoMfoMkKIKaxjFymRGORIc",
    "https://www.your-domain2.com": "pub.v2.8116178901076090.aHR0cHM6Ly93d3cueW91ci1kb21haW4yLmNvbQ.LdN9kvJ35fYFFiBSJA4idMnwwxJ5_yXpeNS__Ap5wkg"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError1Error`](../../doc/models/service-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError1Error`](../../doc/models/service-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError1Error`](../../doc/models/service-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError1Error`](../../doc/models/service-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError1Error`](../../doc/models/service-error-1-error.md) |


# Post-Paypal-Update Order

Updates the order for PayPal Express Checkout. This can be used to update the PayPal lightbox with an updated amount and delivery methods based on the delivery address.

```ts
async postPaypalUpdateOrder(
  idempotencyKey?: string,
  body?: PaypalUpdateOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaypalUpdateOrderResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`PaypalUpdateOrderRequest \| undefined`](../../doc/models/paypal-update-order-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaypalUpdateOrderResponse`](../../doc/models/paypal-update-order-response.md).

## Example Usage

```ts
const body: PaypalUpdateOrderRequest = {
  amount: {
    currency: 'EUR',
    value: BigInt(12000),
  },
  deliveryMethods: [
    {
      amount: {
        currency: 'EUR',
        value: BigInt(1000),
      },
      description: 'Express Shipping',
      reference: '1',
      selected: true,
      type: Type211.Shipping,
    },
    {
      amount: {
        currency: 'EUR',
        value: BigInt(500),
      },
      description: 'Standard Ground',
      reference: '2',
      selected: false,
      type: Type211.Shipping,
    }
  ],
  paymentData: 'po7XZ...',
  pspReference: 'DZ4DPSHB4WD2WN82',
};

try {
  const response = await utilityApi.postPaypalUpdateOrder(
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
    if (error instanceof ServiceError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "paymentData": "po7XZ...",
  "status": "success"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError1Error`](../../doc/models/service-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError1Error`](../../doc/models/service-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError1Error`](../../doc/models/service-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError1Error`](../../doc/models/service-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError1Error`](../../doc/models/service-error-1-error.md) |


# Post-Validate Shopper Id

Validates the shopperId.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postValidateShopperId(
  body: ValidateShopperIdRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ValidateShopperIdResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ValidateShopperIdRequest`](../../doc/models/validate-shopper-id-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ValidateShopperIdResponse`](../../doc/models/validate-shopper-id-response.md).

## Example Usage

```ts
const body: ValidateShopperIdRequest = {
  merchantAccount: 'merchantAccount2',
  paymentMethod: {
    type: 'ShopperIdPaymentMethod1',
  },
};

try {
  const response = await utilityApi.postValidateShopperId(body);

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
    if (error instanceof CheckoutErrorResponseEntityError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`CheckoutErrorResponseEntityError`](../../doc/models/checkout-error-response-entity-error.md) |
| 401 | Unauthorized - authentication required. | [`CheckoutErrorResponseEntityError`](../../doc/models/checkout-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`CheckoutErrorResponseEntityError`](../../doc/models/checkout-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`CheckoutErrorResponseEntityError`](../../doc/models/checkout-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`CheckoutErrorResponseEntityError`](../../doc/models/checkout-error-response-entity-error.md) |

