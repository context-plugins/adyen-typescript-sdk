# Sessionauthentication

```ts
const sessionauthenticationApi = new SessionauthenticationApi(client);
```

## Class Name

`SessionauthenticationApi`

## Methods

* [Post-Sessions](../../doc/controllers/sessionauthentication.md#post-sessions)
* [Post-Auth-Certificate](../../doc/controllers/sessionauthentication.md#post-auth-certificate)


# Post-Sessions

Creates a session token that is required to integrate [components](https://docs.adyen.com/platforms/components-overview).

The response contains encrypted session data. The front end then uses the session data to make the required server-side calls for the component.

To create a token, you must meet specific requirements. These requirements vary depending on the type of component. For more information, see the documentation for [Onboarding](https://docs.adyen.com/platforms/onboard-users/components) and [Platform Experience](https://docs.adyen.com/platforms/build-user-dashboards) components.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postSessions(
  body: AuthenticationSessionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuthenticationSessionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AuthenticationSessionRequest`](../../doc/models/authentication-session-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AuthenticationSessionResponse`](../../doc/models/authentication-session-response.md).

## Example Usage

```ts
const body: AuthenticationSessionRequest = {
  allowOrigin: 'https://www.your-website.com',
  policy: {
    resources: [
      {
        legalEntityId: 'LE00000000000000000000001',
        type: 'legalEntity',
      } as LegalEntityResource
    ],
    roles: [
      'createTransferInstrumentComponent',
      'manageTransferInstrumentComponent'
    ],
  },
  product: ProductType2Enum.Onboarding,
};

try {
  const response = await sessionAuthenticationApi.postSessions(body);

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
    if (error instanceof DefaultErrorResponseEntityError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "11a1e60a-18b0-4dda-9258-e0ae29e1e2a3",
  "token": "eyJraWQiOiJwbGF0Zm9ybWNvbGRlciI..."
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Auth-Certificate

Establishes a secure communication session between the Mobile SDK and the Adyen payments platform, through mutual authentication. The request sends a setup token that identifies the SDK and the device. The response returns a session token that the SDK can use to authenticate responses received from the Adyen payments platform.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postAuthCertificate(
  xAPIKey?: string,
  body?: CertificateLoadingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CertificateLoadingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xAPIKey` | `string \| undefined` | Header, Optional | The API key to authenticate API requests. |
| `body` | [`CertificateLoadingRequest \| undefined`](../../doc/models/certificate-loading-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CertificateLoadingResponse`](../../doc/models/certificate-loading-response.md).

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
    if (error instanceof DefaultErrorResponseEntityError) {
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
| 400 | Bad request - validation failed. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable entity - session request could not be processed. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal server error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

