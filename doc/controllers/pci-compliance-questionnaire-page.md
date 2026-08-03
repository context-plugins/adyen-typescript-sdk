# PCI Compliance Questionnaire Page

```ts
const pciComplianceQuestionnairePageApi = new PciComplianceQuestionnairePageApi(client);
```

## Class Name

`PciComplianceQuestionnairePageApi`


# Post-Get Pci Questionnaire Url

Returns a link to a PCI compliance questionnaire that you can send to your account holder.

> You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/classic-platforms/platforms-for-partners).

```ts
async postGetPciQuestionnaireUrl(
  body?: GetPciUrlRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPciUrlResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetPciUrlRequest \| undefined`](../../doc/models/get-pci-url-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetPciUrlResponse`](../../doc/models/get-pci-url-response.md).

## Example Usage

```ts
const body: GetPciUrlRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
  returnUrl: 'https://your.return-url.com/?submerchant=123',
};

try {
  const response = await pciComplianceQuestionnairePageApi.postGetPciQuestionnaireUrl(body);

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
  "pspReference": "8315748692943050",
  "resultCode": "Success",
  "redirectUrl": "https://hop-test.adyen.com/hop/pci/?token=<token>"
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

