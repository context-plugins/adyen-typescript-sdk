# Sessionauthentication

```ts
const sessionauthenticationApi = new SessionauthenticationApi(client);
```

## Class Name

`SessionauthenticationApi`


# Post-Auth-Certificate

Establishes a secure communication session between the Mobile SDK and the Adyen payments platform, through mutual authentication. The request sends a setup token that identifies the SDK and the device. The response returns a session token that the SDK can use to authenticate responses received from the Adyen payments platform.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postAuthCertificate(
  xApiKey?: string,
  body?: CertificateLoadingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateSessionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xApiKey` | `string \| undefined` | Header, Optional | The API key to authenticate API requests. |
| `body` | [`CertificateLoadingRequest \| undefined`](../../doc/models/certificate-loading-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreateSessionResponse`](../../doc/models/create-session-response.md).

## Example Usage

```ts
const body: CertificateLoadingRequest = {
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  setupToken: 'SETUP_TOKEN',
  store: 'YOUR_STORE_REFERENCE',
};

try {
  const response = await sessionAuthenticationApi.postAuthCertificate(
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
    if (error instanceof AuthCertificate400Error) {
      console.log(error.result);
    } else if (error instanceof AuthCertificate401Error) {
      console.log(error.result);
    } else if (error instanceof AuthCertificate422Error) {
      console.log(error.result);
    } else if (error instanceof AuthCertificate500Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "APP_SESSION_ID",
  "installationId": "INSTALLATION_ID",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "store": "YOUR_STORE_REFERENCE",
  "sdkData": "SDK_DATA_BLOB"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request - validation failed. | [`AuthCertificate400Error`](../../doc/models/auth-certificate-400-error.md) |
| 401 | Unauthorized - authentication required. | [`AuthCertificate401Error`](../../doc/models/auth-certificate-401-error.md) |
| 422 | Unprocessable entity - session request could not be processed. | [`AuthCertificate422Error`](../../doc/models/auth-certificate-422-error.md) |
| 500 | Internal server error. | [`AuthCertificate500Error`](../../doc/models/auth-certificate-500-error.md) |

