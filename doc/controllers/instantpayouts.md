# Instantpayouts

```ts
const instantpayoutsApi = new InstantpayoutsApi(client);
```

## Class Name

`InstantpayoutsApi`


# Post-Payout

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
> 
> - If you are building a new integration, use the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) endpoint instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
> 
> With the Transfers API, you can:
> 
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
> 
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.

With this call, you can pay out to your customers, and funds will be made available within 30 minutes on the cardholder's bank account (this is dependent on whether the issuer supports this functionality). Instant card payouts are only supported for Visa and Mastercard cards.

```ts
async postPayout(
  body?: PayoutRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PayoutResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PayoutRequest \| undefined`](../../doc/models/payout-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PayoutResponse`](../../doc/models/payout-response.md).

## Example Usage

```ts
const body: PayoutRequest = {
  amount: {
    currency: 'USD',
    value: BigInt(2500),
  },
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  reference: 'P9999999999999999',
  billingAddress: {
    city: 'Beverly Hills',
    country: 'US',
    houseNumberOrName: '121',
    postalCode: '90210',
    street: 'Brannan Street',
    stateOrProvince: 'CA',
  },
  card: {
    expiryMonth: '03',
    expiryYear: '2030',
    holderName: 'John Smith',
    number: '4111111111111111',
  },
  shopperName: {
    firstName: 'John',
    lastName: 'Smith',
  },
};

try {
  const response = await instantPayoutsApi.postPayout(body);

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |

