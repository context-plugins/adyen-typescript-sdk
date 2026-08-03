# Reviewing

```ts
const reviewingApi = new ReviewingApi(client);
```

## Class Name

`ReviewingApi`

## Methods

* [Post-Confirm Third Party](../../doc/controllers/reviewing.md#post-confirm-third-party)
* [Post-Decline Third Party](../../doc/controllers/reviewing.md#post-decline-third-party)


# Post-Confirm Third Party

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
> 
> - If you are building a new integration, use the [Transfers API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
> 
> With the Transfers API, you can:
> 
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
> 
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.

Confirms a previously submitted payout.

To cancel a payout, use the `/declineThirdParty` endpoint.

```ts
async postConfirmThirdParty(
  body?: ModifyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ModifyResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ModifyRequest \| undefined`](../../doc/models/modify-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ModifyResponse`](../../doc/models/modify-response.md).

## Example Usage

```ts
const body: ModifyRequest = {
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  originalReference: '9913140798220028',
};

try {
  const response = await reviewingApi.postConfirmThirdParty(body);

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
  "pspReference": "991617894325358C",
  "response": "[payout-confirm-received]"
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


# Post-Decline Third Party

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
> 
> - If you are building a new integration, use the [Transfers API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
> 
> With the Transfers API, you can:
> 
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
> 
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.

Cancels a previously submitted payout.

To confirm and send a payout, use the `/confirmThirdParty` endpoint.

```ts
async postDeclineThirdParty(
  body?: ModifyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ModifyResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ModifyRequest \| undefined`](../../doc/models/modify-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ModifyResponse`](../../doc/models/modify-response.md).

## Example Usage

```ts
const body: ModifyRequest = {
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  originalReference: '9913140798220028',
};

try {
  const response = await reviewingApi.postDeclineThirdParty(body);

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
  "pspReference": "991617894325360J",
  "response": "[payout-decline-received]"
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

