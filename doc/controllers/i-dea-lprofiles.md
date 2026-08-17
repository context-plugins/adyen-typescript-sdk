# I DEA Lprofiles

```ts
const iDEALprofilesApi = new IDEALprofilesApi(client);
```

## Class Name

`IDEALprofilesApi`

## Methods

* [Post-Ideal-Profile-Auth-Link](../../doc/controllers/i-dea-lprofiles.md#post-ideal-profile-auth-link)
* [Post-Ideal-Profile-Authenticate](../../doc/controllers/i-dea-lprofiles.md#post-ideal-profile-authenticate)
* [Post-Ideal-Profile-Register](../../doc/controllers/i-dea-lprofiles.md#post-ideal-profile-register)


# Post-Ideal-Profile-Auth-Link

Manage an already registered iDEAL profile. Generates a redirection URL to manage the iDEAL profile linked to the account holder from the request.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postIdealProfileAuthLink(
  body: IdealAuthLinkRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdealAuthLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`IdealAuthLinkRequest`](../../doc/models/ideal-auth-link-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`IdealAuthLinkResponse`](../../doc/models/ideal-auth-link-response.md).

## Example Usage

```ts
const body: IdealAuthLinkRequest = {
  accountHolderId: 'AH00000000000000000000000',
};

try {
  const response = await iDEALProfilesApi.postIdealProfileAuthLink(body);

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
  "redirectUrl": {
    "href": "https://ideal.auth/someUrl"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - The request is malformed or is not the expected format. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Service Error - An unrecoverable error occurred while trying to perform the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Ideal-Profile-Authenticate

Generates an redirection URL to finish the authentication flow when requested by iDEAL. Before calling this endpoint, make sure that your user has completed multi-factor authentication.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postIdealProfileAuthenticate(
  body: IdealAuthenticateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdealAuthenticateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`IdealAuthenticateRequest`](../../doc/models/ideal-authenticate-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`IdealAuthenticateResponse`](../../doc/models/ideal-authenticate-response.md).

## Example Usage

```ts
const body: IdealAuthenticateRequest = {
  accountHolderId: 'AH00000000000000000000000',
  payload: 'https://ideal.auth/somePayload',
};

try {
  const response = await iDEALProfilesApi.postIdealProfileAuthenticate(body);

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
  "redirectUrl": {
    "href": "https://ideal.auth/someUrl"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - The request is malformed or is not the expected format. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Service Error - An unrecoverable error occurred while trying to perform the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Ideal-Profile-Register

Register a new iDEAL profile. The profile is linked to the account holder and payment instruments included in the request. The user must be redirected to the URL in the response to finish their IDEAL profile registration.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postIdealProfileRegister(
  body: ProfileRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProfileRegistrationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ProfileRegistrationRequest`](../../doc/models/profile-registration-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ProfileRegistrationResponse`](../../doc/models/profile-registration-response.md).

## Example Usage

```ts
const body: ProfileRegistrationRequest = {
  accountHolderId: 'AH00000000000000000000000',
  paymentInstrumentIds: [
    'PI00000000000000000000000',
    'PI11111111111111111111111'
  ],
};

try {
  const response = await iDEALProfilesApi.postIdealProfileRegister(body);

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
  "redirectUrl": {
    "href": "https://ideal.auth/someUrl"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - The request is malformed or is not the expected format. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Service Error - An unrecoverable error occurred while trying to perform the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

