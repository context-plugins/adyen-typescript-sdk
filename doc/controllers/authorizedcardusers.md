# Authorizedcardusers

```ts
const authorizedcardusersApi = new AuthorizedcardusersApi(client);
```

## Class Name

`AuthorizedcardusersApi`

## Methods

* [Get-Payment Instruments-Payment Instrument Id-Authorised Card Users](../../doc/controllers/authorizedcardusers.md#get-payment-instruments-payment-instrument-id-authorised-card-users)
* [Post-Payment Instruments-Payment Instrument Id-Authorised Card Users](../../doc/controllers/authorizedcardusers.md#post-payment-instruments-payment-instrument-id-authorised-card-users)
* [Delete-Payment Instruments-Payment Instrument Id-Authorised Card Users](../../doc/controllers/authorizedcardusers.md#delete-payment-instruments-payment-instrument-id-authorised-card-users)
* [Patch-Payment Instruments-Payment Instrument Id-Authorised Card Users](../../doc/controllers/authorizedcardusers.md#patch-payment-instruments-payment-instrument-id-authorised-card-users)


# Get-Payment Instruments-Payment Instrument Id-Authorised Card Users

Returns the authorized users for a card.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
  paymentInstrumentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuthorisedCardUsers>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AuthorisedCardUsers`](../../doc/models/authorised-card-users.md).

## Example Usage

```ts
const paymentInstrumentId = 'paymentInstrumentId2';

try {
  const response = await authorizedCardUsersApi.getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(paymentInstrumentId);

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
    if (error instanceof PaymentInstrumentsAuthorisedCardUsers401Error) {
      console.log(error.result);
    } else if (error instanceof PaymentInstrumentsAuthorisedCardUsers403Error) {
      console.log(error.result);
    } else if (error instanceof PaymentInstrumentsAuthorisedCardUsers404Error) {
      console.log(error.result);
    } else if (error instanceof PaymentInstrumentsAuthorisedCardUsers422Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "legalEntityIds": [
    "LE328V522322685LV3KTNF35M",
    "LE328SW223226B5LWVWNQ8THN"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`PaymentInstrumentsAuthorisedCardUsers401Error`](../../doc/models/payment-instruments-authorised-card-users-401-error.md) |
| 403 | Forbidden | [`PaymentInstrumentsAuthorisedCardUsers403Error`](../../doc/models/payment-instruments-authorised-card-users-403-error.md) |
| 404 | Not Found | [`PaymentInstrumentsAuthorisedCardUsers404Error`](../../doc/models/payment-instruments-authorised-card-users-404-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`PaymentInstrumentsAuthorisedCardUsers422Error`](../../doc/models/payment-instruments-authorised-card-users-422-error.md) |


# Post-Payment Instruments-Payment Instrument Id-Authorised Card Users

Assigns authorized users to a card. Users must have the **authorisedPaymentInstrumentUser** capability to be able to use the card.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
  paymentInstrumentId: string,
  body: AuthorisedCardUsers,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentId` | `string` | Template, Required | - |
| `body` | [`AuthorisedCardUsers`](../../doc/models/authorised-card-users.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: Successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const paymentInstrumentId = 'paymentInstrumentId2';

const body: AuthorisedCardUsers = {
  legalEntityIds: [
    'LE328V522322685LV3KTNF35M',
    'LE328SW223226B5LWVWNQ8THN'
  ],
};

try {
  const response = await authorizedCardUsersApi.postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
    paymentInstrumentId,
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
    if (error instanceof PaymentInstrumentsAuthorisedCardUsers400Error) {
      console.log(error.result);
    } else if (error instanceof PaymentInstrumentsAuthorisedCardUsers401Error) {
      console.log(error.result);
    } else if (error instanceof PaymentInstrumentsAuthorisedCardUsers403Error) {
      console.log(error.result);
    } else if (error instanceof PaymentInstrumentsAuthorisedCardUsers422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`PaymentInstrumentsAuthorisedCardUsers400Error`](../../doc/models/payment-instruments-authorised-card-users-400-error.md) |
| 401 | Unauthorized | [`PaymentInstrumentsAuthorisedCardUsers401Error`](../../doc/models/payment-instruments-authorised-card-users-401-error.md) |
| 403 | Forbidden | [`PaymentInstrumentsAuthorisedCardUsers403Error`](../../doc/models/payment-instruments-authorised-card-users-403-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`PaymentInstrumentsAuthorisedCardUsers422Error`](../../doc/models/payment-instruments-authorised-card-users-422-error.md) |


# Delete-Payment Instruments-Payment Instrument Id-Authorised Card Users

Deletes the list of authorized users assigned to a card.

:information_source: **Note** This endpoint does not require authentication.

```ts
async deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
  paymentInstrumentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: Successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const paymentInstrumentId = 'paymentInstrumentId2';

try {
  const response = await authorizedCardUsersApi.deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(paymentInstrumentId);

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
    if (error instanceof PaymentInstrumentsAuthorisedCardUsers401Error) {
      console.log(error.result);
    } else if (error instanceof PaymentInstrumentsAuthorisedCardUsers403Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`PaymentInstrumentsAuthorisedCardUsers401Error`](../../doc/models/payment-instruments-authorised-card-users-401-error.md) |
| 403 | Forbidden | [`PaymentInstrumentsAuthorisedCardUsers403Error`](../../doc/models/payment-instruments-authorised-card-users-403-error.md) |


# Patch-Payment Instruments-Payment Instrument Id-Authorised Card Users

Updates the list of authorized users for a card.

> This request replaces all existing authorized users for the card.

:information_source: **Note** This endpoint does not require authentication.

```ts
async patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
  paymentInstrumentId: string,
  body: AuthorisedCardUsers,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentId` | `string` | Template, Required | - |
| `body` | [`AuthorisedCardUsers`](../../doc/models/authorised-card-users.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: Successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const paymentInstrumentId = 'paymentInstrumentId2';

const body: AuthorisedCardUsers = {
  legalEntityIds: [
    'LE328V522322685LV3KTNF35M',
    'LE328SW223226B5LWVWNQ8THN'
  ],
};

try {
  const response = await authorizedCardUsersApi.patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
    paymentInstrumentId,
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
    if (error instanceof PaymentInstrumentsAuthorisedCardUsers400Error) {
      console.log(error.result);
    } else if (error instanceof PaymentInstrumentsAuthorisedCardUsers401Error) {
      console.log(error.result);
    } else if (error instanceof PaymentInstrumentsAuthorisedCardUsers403Error) {
      console.log(error.result);
    } else if (error instanceof PaymentInstrumentsAuthorisedCardUsers422Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`PaymentInstrumentsAuthorisedCardUsers400Error`](../../doc/models/payment-instruments-authorised-card-users-400-error.md) |
| 401 | Unauthorized | [`PaymentInstrumentsAuthorisedCardUsers401Error`](../../doc/models/payment-instruments-authorised-card-users-401-error.md) |
| 403 | Forbidden | [`PaymentInstrumentsAuthorisedCardUsers403Error`](../../doc/models/payment-instruments-authorised-card-users-403-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`PaymentInstrumentsAuthorisedCardUsers422Error`](../../doc/models/payment-instruments-authorised-card-users-422-error.md) |

