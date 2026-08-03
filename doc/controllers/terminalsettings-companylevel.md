# Terminalsettings-Companylevel

```ts
const terminalsettingsCompanylevelApi = new TerminalsettingsCompanylevelApi(client);
```

## Class Name

`TerminalsettingsCompanylevelApi`

## Methods

* [Get-Companies-Company Id-Terminal Logos](../../doc/controllers/terminalsettings-companylevel.md#get-companies-company-id-terminal-logos)
* [Patch-Companies-Company Id-Terminal Logos](../../doc/controllers/terminalsettings-companylevel.md#patch-companies-company-id-terminal-logos)
* [Get-Companies-Company Id-Terminal Settings](../../doc/controllers/terminalsettings-companylevel.md#get-companies-company-id-terminal-settings)
* [Patch-Companies-Company Id-Terminal Settings](../../doc/controllers/terminalsettings-companylevel.md#patch-companies-company-id-terminal-settings)


# Get-Companies-Company Id-Terminal Logos

Returns the logo that is configured for a specific payment terminal model at the company identified in the path.

The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file.
This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Terminal settings read
* Management API—Terminal settings read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async getCompaniesCompanyIdTerminalLogos(
  companyId: string,
  model: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Logo>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `model` | `string` | Query, Required | The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Logo`](../../doc/models/logo.md).

## Example Usage

```ts
const companyId = 'companyId0';

const model = 'model2';

try {
  const response = await terminalSettingsCompanyLevelApi.getCompaniesCompanyIdTerminalLogos(
    companyId,
    model
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
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "data": "BASE-64_ENCODED_STRING"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Patch-Companies-Company Id-Terminal Logos

Updates the logo that is configured for a specific payment terminal model at the company identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal).

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from the Adyen PSP level, specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Terminal settings read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async patchCompaniesCompanyIdTerminalLogos(
  companyId: string,
  model: string,
  body?: Logo,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Logo>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `model` | `string` | Query, Required | The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T. |
| `body` | [`Logo \| undefined`](../../doc/models/logo.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Logo`](../../doc/models/logo.md).

## Example Usage

```ts
const companyId = 'companyId0';

const model = 'model2';

const body: Logo = {
  data: '',
};

try {
  const response = await terminalSettingsCompanyLevelApi.patchCompaniesCompanyIdTerminalLogos(
    companyId,
    model,
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
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "data": "LOGO_INHERITED_FROM_HIGHER_LEVEL_BASE-64_ENCODED_STRING"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Get-Companies-Company Id-Terminal Settings

Returns the payment terminal settings that are configured for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:

* Management API—Terminal settings Advanced read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async getCompaniesCompanyIdTerminalSettings(
  companyId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TerminalSettings>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TerminalSettings`](../../doc/models/terminal-settings.md).

## Example Usage

```ts
const companyId = 'companyId0';

try {
  const response = await terminalSettingsCompanyLevelApi.getCompaniesCompanyIdTerminalSettings(companyId);

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
  "cardholderReceipt": {
    "headerForAuthorizedReceipt": "header1,header2,filler"
  },
  "gratuities": [
    {
      "currency": "EUR",
      "usePredefinedTipEntries": true,
      "predefinedTipEntries": [
        "100",
        "1%",
        "5%"
      ],
      "allowCustomAmount": true
    }
  ],
  "nexo": {
    "displayUrls": {
      "localUrls": [
        {
          "password": "BASIC_AUTH_PASSWORD",
          "url": "https://your-display-notifications-endpoint.com",
          "username": "BASIC_AUTH_USERNAME"
        }
      ]
    },
    "encryptionKey": {
      "identifier": "KEY_IDENTIFIER",
      "passphrase": "KEY_PASSPHRASE",
      "version": 1
    },
    "eventUrls": {
      "eventPublicUrls": [
        {
          "password": "BASIC_AUTH_PASSWORD",
          "url": "https://your-event-notifications-endpoint.com",
          "username": "BASIC_AUTH_USERNAME"
        }
      ]
    }
  },
  "opi": {
    "enablePayAtTable": true,
    "payAtTableStoreNumber": "1",
    "payAtTableURL": "https:/your-pay-at-table-endpoint.com"
  },
  "offlineProcessing": {
    "chipFloorLimit": 0
  },
  "receiptOptions": {
    "qrCodeData": "http://www.example.com/order/${pspreference}/${merchantreference}"
  },
  "receiptPrinting": {
    "shopperApproved": true,
    "shopperRefused": true,
    "shopperCancelled": true,
    "shopperRefundApproved": true,
    "shopperRefundRefused": true,
    "shopperVoid": true
  },
  "signature": {
    "askSignatureOnScreen": true,
    "skipSignature": false,
    "deviceName": "Amsterdam-236203386"
  },
  "wifiProfiles": {
    "profiles": [
      {
        "authType": "wpa-psk",
        "autoWifi": false,
        "bssType": "infra",
        "channel": 0,
        "defaultProfile": true,
        "hiddenSsid": false,
        "name": "Guest Wi-Fi",
        "psk": "4R8R2R3V456X",
        "ssid": "G470P37660D4G",
        "wsec": "ccmp"
      }
    ],
    "settings": {
      "band": "All",
      "roaming": true
    }
  },
  "timeouts": {
    "fromActiveToSleep": 30
  },
  "hardware": {
    "displayMaximumBackLight": 75
  },
  "passcodes": {
    "adminMenuPin": "1234",
    "txMenuPin": "1234",
    "screenLockPin": "1234"
  },
  "storeAndForward": {
    "maxAmount": [
      {
        "amount": 10000,
        "currencyCode": "EUR"
      }
    ],
    "maxPayments": 10,
    "supportedCardTypes": {
      "credit": true,
      "debit": true,
      "deferredDebit": true,
      "prepaid": true,
      "unknown": false
    }
  },
  "terminalInstructions": {
    "adyenAppRestart": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Patch-Companies-Company Id-Terminal Settings

Updates payment terminal settings for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal).

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from the Adyen PSP level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:

* Management API—Terminal settings Advanced read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async patchCompaniesCompanyIdTerminalSettings(
  companyId: string,
  body?: TerminalSettings,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TerminalSettings>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `body` | [`TerminalSettings \| undefined`](../../doc/models/terminal-settings.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TerminalSettings`](../../doc/models/terminal-settings.md).

## Example Usage

```ts
const companyId = 'companyId0';

const body: TerminalSettings = {
  wifiProfiles: {
    profiles: [
      {
        authType: 'wpa-eap',
        bssType: 'infra',
        ssid: 'your-network',
        wsec: 'ccmp',
        autoWifi: false,
        channel: 0,
        defaultProfile: true,
        eap: 'peap',
        eapCaCert: {
          data: 'MD1rKS05M2JqRVFNQ...RTtLH1tLWo=',
          name: 'eap-peap-ca.pem',
        },
        eapIdentity: 'admin',
        eapIntermediateCert: {
          data: 'PD3tUS1CRDdJTiGDR...EFoLS0tLQg=',
          name: 'eap-peap-client.pem',
        },
        eapPwd: 'EAP_PEAP_PASSWORD',
        hiddenSsid: false,
        name: 'Profile-eap-peap-1',
      },
      {
        authType: 'wpa-psk',
        bssType: 'infra',
        ssid: 'your-network',
        wsec: 'ccmp',
        autoWifi: false,
        channel: 0,
        defaultProfile: false,
        hiddenSsid: false,
        name: 'Profile-guest-wifi',
        psk: 'WIFI_PASSWORD',
      }
    ],
    settings: {
      band: '2.4GHz',
      roaming: true,
      timeout: 5,
    },
  },
};

try {
  const response = await terminalSettingsCompanyLevelApi.patchCompaniesCompanyIdTerminalSettings(
    companyId,
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
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "cardholderReceipt": {
    "headerForAuthorizedReceipt": "header1,header2,filler"
  },
  "gratuities": [
    {
      "currency": "EUR",
      "usePredefinedTipEntries": true,
      "predefinedTipEntries": [
        "100",
        "1%",
        "5%"
      ],
      "allowCustomAmount": true
    }
  ],
  "nexo": {
    "displayUrls": {
      "localUrls": [
        {
          "password": "BASIC_AUTH_PASSWORD",
          "url": "https://your-display-notifications-endpoint.com",
          "username": "BASIC_AUTH_USERNAME"
        }
      ]
    },
    "encryptionKey": {
      "identifier": "KEY_IDENTIFIER",
      "passphrase": "KEY_PASSPHRASE",
      "version": 1
    },
    "eventUrls": {
      "eventPublicUrls": [
        {
          "password": "BASIC_AUTH_PASSWORD",
          "url": "https://your-event-notifications-endpoint.com",
          "username": "BASIC_AUTH_USERNAME"
        }
      ]
    }
  },
  "opi": {
    "enablePayAtTable": true,
    "payAtTableStoreNumber": "1",
    "payAtTableURL": "https:/your-pay-at-table-endpoint.com"
  },
  "offlineProcessing": {
    "chipFloorLimit": 0
  },
  "receiptOptions": {
    "qrCodeData": "http://www.example.com/order/${pspreference}/${merchantreference}"
  },
  "receiptPrinting": {
    "shopperApproved": true,
    "shopperRefused": true,
    "shopperCancelled": true,
    "shopperRefundApproved": true,
    "shopperRefundRefused": true,
    "shopperVoid": true
  },
  "signature": {
    "askSignatureOnScreen": true,
    "skipSignature": false,
    "deviceName": "Amsterdam-236203386"
  },
  "wifiProfiles": {
    "profiles": [
      {
        "authType": "wpa-eap",
        "autoWifi": false,
        "bssType": "infra",
        "channel": 0,
        "defaultProfile": true,
        "eap": "peap",
        "eapCaCert": {
          "data": "MD1rKS05M2JqRVFNQ...RTtLH1tLWo=",
          "name": "eap-peap-ca.pem"
        },
        "eapIdentity": "admin",
        "eapIntermediateCert": {
          "data": "PD3tUS1CRDdJTiGDR...EFoLS0tLQg=",
          "name": "eap-peap-client.pem"
        },
        "eapPwd": "EAP_PEAP_PASSWORD",
        "hiddenSsid": false,
        "name": "Profile-eap-peap-1",
        "ssid": "your-network",
        "wsec": "ccmp"
      },
      {
        "authType": "wpa-psk",
        "autoWifi": false,
        "bssType": "infra",
        "channel": 0,
        "defaultProfile": false,
        "hiddenSsid": false,
        "name": "Profile-guest-wifi",
        "psk": "WIFI_PASSWORD",
        "ssid": "your-network",
        "wsec": "ccmp"
      }
    ],
    "settings": {
      "band": "2.4GHz",
      "roaming": true,
      "timeout": 5
    }
  },
  "timeouts": {
    "fromActiveToSleep": 30
  },
  "hardware": {
    "displayMaximumBackLight": 75
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |

