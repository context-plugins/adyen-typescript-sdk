# Paymentlinks

```ts
const paymentlinksApi = new PaymentlinksApi(client);
```

## Class Name

`PaymentlinksApi`

## Methods

* [Post-Payment Links](../../doc/controllers/paymentlinks.md#post-payment-links)
* [Get-Payment Links-Link Id](../../doc/controllers/paymentlinks.md#get-payment-links-link-id)
* [Patch-Payment Links-Link Id](../../doc/controllers/paymentlinks.md#patch-payment-links-link-id)


# Post-Payment Links

Creates a payment link to a [Pay by Link](https://docs.adyen.com/unified-commerce/pay-by-link/) page where the shopper can pay. The list of payment methods presented to the shopper depends on the `currency` and `country` parameters sent in the request.

For more information, refer to [Pay by Link documentation](https://docs.adyen.com/online-payments/pay-by-link#create-payment-links-through-api).

```ts
async postPaymentLinks(
  idempotencyKey?: string,
  body?: PaymentLinkRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentLinkResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`PaymentLinkRequest \| undefined`](../../doc/models/payment-link-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: Created - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentLinkResponse`](../../doc/models/payment-link-response.md).

## Example Usage

```ts
const body: PaymentLinkRequest = {
  amount: {
    currency: 'BRL',
    value: BigInt(1250),
  },
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  reference: 'YOUR_ORDER_NUMBER',
  billingAddress: {
    city: 'São Paulo',
    country: 'BR',
    houseNumberOrName: '999',
    postalCode: '59000060',
    street: 'Roque Petroni Jr',
    stateOrProvince: 'SP',
  },
  countryCode: 'BR',
  deliveryAddress: {
    city: 'São Paulo',
    country: 'BR',
    houseNumberOrName: '999',
    postalCode: '59000060',
    street: 'Roque Petroni Jr',
    stateOrProvince: 'SP',
  },
  shopperEmail: 'test@email.com',
  shopperLocale: 'pt-BR',
  shopperReference: 'YOUR_SHOPPER_REFERENCE',
};

try {
  const response = await paymentLinksApi.postPaymentLinks(
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
  "amount": {
    "currency": "BRL",
    "value": 1250
  },
  "billingAddress": {
    "city": "São Paulo",
    "country": "BR",
    "houseNumberOrName": "999",
    "postalCode": "59000060",
    "stateOrProvince": "SP",
    "street": "Roque Petroni Jr"
  },
  "countryCode": "BR",
  "deliveryAddress": {
    "city": "São Paulo",
    "country": "BR",
    "houseNumberOrName": "999",
    "postalCode": "59000060",
    "stateOrProvince": "SP",
    "street": "Roque Petroni Jr"
  },
  "expiresAt": "2022-10-28T09:16:22Z",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "YOUR_ORDER_NUMBER",
  "reusable": false,
  "shopperEmail": "test@email.com",
  "shopperLocale": "pt-BR",
  "shopperReference": "YOUR_SHOPPER_REFERENCE",
  "id": "PLE83C39B0A0DE0C1E",
  "status": "active",
  "url": "https://test.adyen.link/PLE83C39B0A0DE0C1E"
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


# Get-Payment Links-Link Id

Retrieves the payment link details using the payment link `id`.

```ts
async getPaymentLinksLinkId(
  linkId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentLinkResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkId` | `string` | Template, Required | Unique identifier of the payment link. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentLinkResponse`](../../doc/models/payment-link-response.md).

## Example Usage

```ts
const linkId = 'linkId6';

try {
  const response = await paymentLinksApi.getPaymentLinksLinkId(linkId);

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
  "amount": {
    "currency": "EUR",
    "value": 8700
  },
  "countryCode": "NL",
  "expiresAt": "2021-04-08T14:06:39Z",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "shopper-reference-ekvL83",
  "shopperLocale": "hu-HU",
  "shopperReference": "shopper-reference-LZfdWZ",
  "status": "active",
  "url": "https://test.adyen.link/PL61C53A8B97E6915A",
  "id": "PL61C53A8B97E6915A"
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


# Patch-Payment Links-Link Id

Updates the status of a payment link. Use this endpoint to [force the expiry of a payment link](https://docs.adyen.com/online-payments/pay-by-link#update-payment-link-status).

```ts
async patchPaymentLinksLinkId(
  linkId: string,
  body?: UpdatePaymentLinkRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentLinkResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkId` | `string` | Template, Required | Unique identifier of the payment link. |
| `body` | [`UpdatePaymentLinkRequest \| undefined`](../../doc/models/update-payment-link-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentLinkResponse`](../../doc/models/payment-link-response.md).

## Example Usage

```ts
const linkId = 'linkId6';

const body: UpdatePaymentLinkRequest = {
  status: Status28.Expired,
};

try {
  const response = await paymentLinksApi.patchPaymentLinksLinkId(
    linkId,
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
  "amount": {
    "currency": "EUR",
    "value": 8700
  },
  "countryCode": "NL",
  "expiresAt": "2021-04-08T14:06:39Z",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "shopper-reference-ekvL83",
  "shopperLocale": "hu-HU",
  "shopperReference": "shopper-reference-LZfdWZ",
  "status": "expired",
  "url": "https://test.adyen.link/PL61C53A8B97E6915A",
  "id": "PL61C53A8B97E6915A"
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

