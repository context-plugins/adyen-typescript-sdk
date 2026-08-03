# Hosted Onboarding

```ts
const hostedOnboardingApi = new HostedOnboardingApi(client);
```

## Class Name

`HostedOnboardingApi`

## Methods

* [Post-Legal Entities-Id-Onboarding Links](../../doc/controllers/hosted-onboarding.md#post-legal-entities-id-onboarding-links)
* [Get-Themes](../../doc/controllers/hosted-onboarding.md#get-themes)
* [Get-Themes-Id](../../doc/controllers/hosted-onboarding.md#get-themes-id)


# Post-Legal Entities-Id-Onboarding Links

Returns a link to an Adyen-hosted onboarding page where you need to redirect your user.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async postLegalEntitiesIdOnboardingLinks(
  id: string,
  body?: OnboardingLinkInfo,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OnboardingLink>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the legal entity |
| `body` | [`OnboardingLinkInfo \| undefined`](../../doc/models/onboarding-link-info.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`OnboardingLink`](../../doc/models/onboarding-link.md).

## Example Usage

```ts
const id = 'id0';

const body: OnboardingLinkInfo = {
  locale: 'nl-NL',
  redirectUrl: 'https://your-company.example.com',
  themeId: 'YOUR_THEME_ID',
};

try {
  const response = await hostedOnboardingApi.postLegalEntitiesIdOnboardingLinks(
    id,
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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "url": "https://balanceplatform-test.adyen.com/balanceplatform/uo/form/xtl-...?signature=..&cd=..&redirectUrl=https%3A%2F%2Fyour-company.example.com%2F&expiry=1667226404807&locale=nl-NL"
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


# Get-Themes

Returns a list of hosted onboarding page themes.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async getThemes(
  requestOptions?: RequestOptions
): Promise<ApiResponse<OnboardingThemes>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`OnboardingThemes`](../../doc/models/onboarding-themes.md).

## Example Usage

```ts
try {
  const response = await hostedOnboardingApi.getThemes();

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
  "themes": [
    {
      "description": "Dark colors theme",
      "properties": {
        "supportPage": "https://www.adyen.com/contact",
        "logo": "ONBA422JV223222D5G8VG2T8JV39GV",
        "pageTitle": "Example onboarding dark colors",
        "backgroundColor": "#000000",
        "faqPage": "https://docs.adyen.com/hosted-onboarding-faqs",
        "backgroundImage": "ONBA422KH223222D5G8VG2TG9S5ZBH",
        "pageLayout": "withBackground"
      },
      "createdAt": "2022-01-20T00:00:00+01:00",
      "id": "ONBT422JV223222D5FGJ77B9C52WNN",
      "updatedAt": "2022-08-25T00:00:00+02:00"
    },
    {
      "description": "Light colors theme",
      "properties": {
        "privacyStatementPage": "https://www.adyen.com/legal/terms-and-conditions",
        "supportPage": "https://www.adyen.com/contact",
        "logo": "ONBA422JV223222D5FWC4TK25S3DQW",
        "pageTitle": "Example onboarding light colors",
        "backgroundColor": "#FFFFFF",
        "faqPage": "https://docs.adyen.com/hosted-onboarding-faqs",
        "backgroundImage": "ONBA422JV223222D5G82M96F6P2VTV",
        "pageLayout": "withBackground"
      },
      "createdAt": "2022-06-22T00:00:00+02:00",
      "id": "ONBT422KH223222D5G82M968PB46HR",
      "updatedAt": "2022-08-25T00:00:00+02:00"
    }
  ]
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


# Get-Themes-Id

Returns the details of the theme identified in the path.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async getThemesId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OnboardingTheme>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the theme |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`OnboardingTheme`](../../doc/models/onboarding-theme.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await hostedOnboardingApi.getThemesId(id);

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
  "description": "Light colors theme",
  "properties": {
    "privacyStatementPage": "https://www.adyen.com/legal/terms-and-conditions",
    "supportPage": "https://www.adyen.com/contact",
    "logo": "ONBA422JV223222D5FWC4TK25S3DQW",
    "pageTitle": "Example onboarding light colors",
    "backgroundColor": "#FFFFFF",
    "faqPage": "https://docs.adyen.com/hosted-onboarding-faqs",
    "backgroundImage": "ONBA422JV223222D5G82M96F6P2VTV",
    "pageLayout": "withBackground"
  },
  "createdAt": "2022-06-22T00:00:00+02:00",
  "id": "ONBT422KH223222D5G82M968PB46HR",
  "updatedAt": "2022-08-25T00:00:00+02:00"
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

