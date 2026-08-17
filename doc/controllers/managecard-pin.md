# Managecard PIN

```ts
const managecardPINApi = new ManagecardPINApi(client);
```

## Class Name

`ManagecardPINApi`

## Methods

* [Post-Pins-Change](../../doc/controllers/managecard-pin.md#post-pins-change)
* [Post-Pins-Reveal](../../doc/controllers/managecard-pin.md#post-pins-reveal)
* [Get-Public Key](../../doc/controllers/managecard-pin.md#get-public-key)


# Post-Pins-Change

Changes the personal identification number (PIN) of a specified card.

To make this request, your API credential must have the following role:

* Bank Issuing PIN Change Webservice role

```ts
async postPinsChange(
  body?: PinChangeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PinChangeResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PinChangeRequest \| undefined`](../../doc/models/pin-change-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PinChangeResponse`](../../doc/models/pin-change-response.md).

## Example Usage

```ts
const body: PinChangeRequest = {
  encryptedKey: '75989E8881284D10153ABACF022EEA09F5...',
  encryptedPinBlock: '63E5060591EF65F48DD1D4FECD0FECD5',
  paymentInstrumentId: 'PI6789678967896789',
  token: '5555341244441115',
};

try {
  const response = await manageCardPINApi.postPinsChange(body);

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
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "status": "completed"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Post-Pins-Reveal

Returns an encrypted PIN block that contains the PIN of a specified card. You can use the decrypted data to reveal the PIN in your user interface.

To make this request, your API credential must have the following role:

* Bank Issuing PIN Reveal Webservice role

```ts
async postPinsReveal(
  body?: RevealPinRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RevealPinResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RevealPinRequest \| undefined`](../../doc/models/reveal-pin-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RevealPinResponse`](../../doc/models/reveal-pin-response.md).

## Example Usage

```ts
const body: RevealPinRequest = {
  encryptedKey: '75989E8881284D10153ABACF022EEA09F5...',
  paymentInstrumentId: 'PI3227C223222B5BPCMFXD2XG',
};

try {
  const response = await manageCardPINApi.postPinsReveal(body);

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
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "encryptedPinBlock": "63E5060591EF65F48DD1D4FECD0FECD5",
  "token": "5555341244441115"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Get-Public Key

Get an [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) public key to encrypt or decrypt card data.

You need the RSA public key to generate the `encryptedKey` required to:

- [Change a PIN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/pins/change).
- [Reveal a PIN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/pins/reveal).
- [Reveal a PAN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/paymentInstruments/reveal).

```ts
async getPublicKey(
  purpose?: string,
  format?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicKeyResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `purpose` | `string \| undefined` | Query, Optional | The purpose of the public key.<br><br>Possible values: **pinChange**, **pinReveal**, **panReveal**.<br><br>Default value: **pinReveal**. |
| `format` | `string \| undefined` | Query, Optional | The encoding format of public key.<br><br>Possible values: **jwk**, **pem**.<br><br>Default value: **pem**. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PublicKeyResponse`](../../doc/models/public-key-response.md).

## Example Usage

```ts
try {
  const response = await manageCardPINApi.getPublicKey();

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
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMII...",
  "publicKeyExpiryDate": "2023-12-12"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |

