# Orders

```ts
const ordersApi = new OrdersApi(client);
```

## Class Name

`OrdersApi`

## Methods

* [Post-Orders](../../doc/controllers/orders.md#post-orders)
* [Post-Orders-Cancel](../../doc/controllers/orders.md#post-orders-cancel)
* [Post-Payment Methods-Balance](../../doc/controllers/orders.md#post-payment-methods-balance)


# Post-Orders

Creates an order to be used for partial payments. Make a POST `/orders` call before making a `/payments` call when processing payments with different payment methods.

```ts
async postOrders(
  idempotencyKey?: string,
  body?: CreateOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateOrderResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CreateOrderRequest \| undefined`](../../doc/models/create-order-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreateOrderResponse`](../../doc/models/create-order-response.md).

## Example Usage

```ts
const body: CreateOrderRequest = {
  amount: {
    currency: 'EUR',
    value: BigInt(2500),
  },
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  reference: 'YOUR_ORDER_REFERENCE',
};

try {
  const response = await ordersApi.postOrders(
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
  "pspReference": "8616178914061985",
  "resultCode": "Success",
  "expiresAt": "2021-04-09T14:16:46Z",
  "orderData": "Ab02b4c0!BQABAgCxXvknCldOcRElkxY8Za7iyym4Wv8aDzyNwmj/3nh4G6YtwnUIJHaK62NlN4oIsACdkn1FEjBwKlheG40jvXcYGBk4KFV5WvOhTVCpv/KXnkrI7xQv/u2lE7U4wA+HPB6K4Zj2L8xO/ogZi+zGZqFs5m16jmkH7ku6FzXygXLNuUCuOlmlXSZhdkHHTNVQSq1MELDK9OL74y532ETRPTCNxx8WlEiZB+LDqYrPvH9GgigtD5kw8Do45jfFfG72kWBEgfYqp4mbUmBB9ebXFYZKfF0qvW1x7A2Y9+/MFlTIdXfKW484bJeDBCTTrmKGXIj+U4r5imr5fXTyNLcrxyUqwrb9jg+5B4qg1XB6Cgj5UPlSI4O62I7v0s5TTj69dzLwUQRxSQbwLrZVGYavXzeVKI54BVLRV3d/+BbPvTqnTo34UhfZbPlOx9F2eyaS0ZXdOKnHw89uGUgxUpLsMqnbRysi/pxpZaulel+0mExb68wVxb/7Teob5eRG4gp7cfZVZs6tLXOYWL+W0TqIlsa3hWsfM0LeaovzkoDtW/pK5JABXwMtLig9tsxoEh9ONYtIzkXC21LZ8ebiuSIMaPizjF8yca+QxrCZalQsu6uKnBz/mm8nnsflaGU2QS5zcoxk1RudL1Bl36LM9UZGPpFEYWiYA4sUsnNLw7peJjWCGhDepnwMv4TlgsEtoDtz1T54AEp7ImtleSI6IkFGMEFBQTEwM0NBNTM3RUFFRDg3QzI0REQ1MzkwOUI4MEE3OEE5MjNFMzgyM0Q2OERBQ0M5NEI5RkY4MzA1REMifRslOdmfgUHTXl66WPD9xoW2whIeRx/jR++2MqNE16x6zQy+KtDN8/h60crZwmqkjVTQYqQlsYSYDHSIyb4wnnay16/5il1yS7vN3UCLaTXjYBIAyyx6Wr9j4P3CI/etB+PpviHoESC4mV6ZN4whMDQyziQ8s230GtboXbh42qND7rk9phySBogowQlXrtF+l2n2F46nyif0owEgik5fGARfvjZtY2w23s30KMLNwU4gWSvX4H6RMVS8TfZH2fKfNrwB3tZUXwYkELs5ntaHysswq5Mn5aq2BKAMHu/Rh/wureMSI73Qi0avjrzWCwzt3JH4wnzErMnOZwSdgA==",
  "reference": "shopper-reference-ekvL83",
  "remainingAmount": {
    "currency": "EUR",
    "value": 2500
  },
  "amount": {
    "currency": "EUR",
    "value": 300
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


# Post-Orders-Cancel

Cancels an order. Cancellation of an order results in an automatic rollback of all payments made in the order, either by canceling or refunding the payment, depending on the type of payment method.

```ts
async postOrdersCancel(
  idempotencyKey?: string,
  body?: CancelOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelOrderResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CancelOrderRequest \| undefined`](../../doc/models/cancel-order-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CancelOrderResponse`](../../doc/models/cancel-order-response.md).

## Example Usage

```ts
const body: CancelOrderRequest = {
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  order: {
    orderData: '823fh892f8f18f4...148f13f9f3f',
    pspReference: '8815517812932012',
  },
};

try {
  const response = await ordersApi.postOrdersCancel(
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
  "pspReference": "8816178914079738",
  "resultCode": "Received"
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


# Post-Payment Methods-Balance

Retrieves the balance remaining on a shopper's gift card. To check a gift card's balance, make a POST `/paymentMethods/balance` call and include the gift card's details inside a `paymentMethod` object.

```ts
async postPaymentMethodsBalance(
  idempotencyKey?: string,
  body?: BalanceCheckRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceCheckResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`BalanceCheckRequest \| undefined`](../../doc/models/balance-check-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceCheckResponse`](../../doc/models/balance-check-response.md).

## Example Usage

```ts
const body: BalanceCheckRequest = {
  amount: {
    currency: 'EUR',
    value: BigInt(1000),
  },
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  paymentMethod: {
    'type': 'givex',
    'number': '4126491073027401',
    'cvc': '737'
  },
};

try {
  const response = await ordersApi.postPaymentMethodsBalance(
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
  "pspReference": "KHQC5N7G84BLNK43",
  "resultCode": "Success",
  "balance": {
    "currency": "EUR",
    "value": 5000
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

