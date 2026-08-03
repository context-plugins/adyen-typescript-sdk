# Hosted Onboarding Page

```ts
const hostedOnboardingPageApi = new HostedOnboardingPageApi(client);
```

## Class Name

`HostedOnboardingPageApi`


# Post-Get Onboarding Url

Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/classic-platforms/onboard-users/hosted-onboarding-page).

```ts
async postGetOnboardingUrl(
  body?: GetOnboardingUrlRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetOnboardingUrlResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetOnboardingUrlRequest \| undefined`](../../doc/models/get-onboarding-url-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetOnboardingUrlResponse`](../../doc/models/get-onboarding-url-response.md).

## Example Usage

```ts
const body: GetOnboardingUrlRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
  returnUrl: 'https://your.return-url.com/?submerchant=123',
};

try {
  const response = await hostedOnboardingPageApi.postGetOnboardingUrl(body);

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

## Example Response *(as JSON)*

```json
{
  "invalidFields": [],
  "pspReference": "9115677600500127",
  "resultCode": "Success",
  "redirectUrl": "https://hop-test.adyen.com/hop/view/?token=<token>"
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

