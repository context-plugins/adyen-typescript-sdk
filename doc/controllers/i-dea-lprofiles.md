# I DEA Lprofiles

```ts
const ideaLprofilesApi = new IdeaLprofilesApi(client);
```

## Class Name

`IdeaLprofilesApi`

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
  const response = await idealProfilesApi.postIdealProfileAuthLink(body);

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
    if (error instanceof IdealProfileAuthLink400Error) {
      console.log(error.result);
    } else if (error instanceof IdealProfileAuthLink422Error) {
      console.log(error.result);
    } else if (error instanceof IdealProfileAuthLink500Error) {
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
| 400 | Bad Request - The request is malformed or is not the expected format. | [`IdealProfileAuthLink400Error`](../../doc/models/ideal-profile-auth-link-400-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`IdealProfileAuthLink422Error`](../../doc/models/ideal-profile-auth-link-422-error.md) |
| 500 | Internal Service Error - An unrecoverable error occurred while trying to perform the request. | [`IdealProfileAuthLink500Error`](../../doc/models/ideal-profile-auth-link-500-error.md) |


# Post-Ideal-Profile-Authenticate

Generates an redirection URL to finish the authentication flow when requested by iDEAL. Before calling this endpoint, make sure that your user has completed multi-factor authentication.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postIdealProfileAuthenticate(
  body: IdealAuthenticateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdealAuthLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`IdealAuthenticateRequest`](../../doc/models/ideal-authenticate-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`IdealAuthLinkResponse`](../../doc/models/ideal-auth-link-response.md).

## Example Usage

```ts
const body: IdealAuthenticateRequest = {
  accountHolderId: 'AH00000000000000000000000',
  payload: 'https://ideal.auth/somePayload',
};

try {
  const response = await idealProfilesApi.postIdealProfileAuthenticate(body);

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
    if (error instanceof IdealProfileAuthenticate400Error) {
      console.log(error.result);
    } else if (error instanceof IdealProfileAuthenticate422Error) {
      console.log(error.result);
    } else if (error instanceof IdealProfileAuthenticate500Error) {
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
| 400 | Bad Request - The request is malformed or is not the expected format. | [`IdealProfileAuthenticate400Error`](../../doc/models/ideal-profile-authenticate-400-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`IdealProfileAuthenticate422Error`](../../doc/models/ideal-profile-authenticate-422-error.md) |
| 500 | Internal Service Error - An unrecoverable error occurred while trying to perform the request. | [`IdealProfileAuthenticate500Error`](../../doc/models/ideal-profile-authenticate-500-error.md) |


# Post-Ideal-Profile-Register

Register a new iDEAL profile. The profile is linked to the account holder and payment instruments included in the request. The user must be redirected to the URL in the response to finish their IDEAL profile registration.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postIdealProfileRegister(
  body: ProfileRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdealAuthLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ProfileRegistrationRequest`](../../doc/models/profile-registration-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`IdealAuthLinkResponse`](../../doc/models/ideal-auth-link-response.md).

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
  const response = await idealProfilesApi.postIdealProfileRegister(body);

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
    if (error instanceof IdealProfileRegister400Error) {
      console.log(error.result);
    } else if (error instanceof IdealProfileRegister422Error) {
      console.log(error.result);
    } else if (error instanceof IdealProfileRegister500Error) {
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
| 400 | Bad Request - The request is malformed or is not the expected format. | [`IdealProfileRegister400Error`](../../doc/models/ideal-profile-register-400-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`IdealProfileRegister422Error`](../../doc/models/ideal-profile-register-422-error.md) |
| 500 | Internal Service Error - An unrecoverable error occurred while trying to perform the request. | [`IdealProfileRegister500Error`](../../doc/models/ideal-profile-register-500-error.md) |

