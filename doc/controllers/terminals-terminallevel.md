# Terminals-Terminallevel

```ts
const terminalsTerminallevelApi = new TerminalsTerminallevelApi(client);
```

## Class Name

`TerminalsTerminallevelApi`

## Methods

* [Get-Terminals](../../doc/controllers/terminals-terminallevel.md#get-terminals)
* [Post-Terminals-Terminal Id-Reassign](../../doc/controllers/terminals-terminallevel.md#post-terminals-terminal-id-reassign)


# Get-Terminals

Returns the payment terminals that the API credential has access to and that match the query parameters.
To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API — Terminal actions read

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async getTerminals(
  searchQuery?: string,
  otpQuery?: string,
  countries?: string,
  merchantIds?: string,
  storeIds?: string,
  brandModels?: string,
  pageNumber?: number,
  pageSize?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListTerminalsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `searchQuery` | `string \| undefined` | Query, Optional | Returns terminals with an ID that contains the specified string. If present, other query parameters are ignored. |
| `otpQuery` | `string \| undefined` | Query, Optional | Returns one or more terminals associated with the one-time passwords specified in the request. If this query parameter is used, other query parameters are ignored. |
| `countries` | `string \| undefined` | Query, Optional | Returns terminals located in the countries specified by their [two-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). |
| `merchantIds` | `string \| undefined` | Query, Optional | Returns terminals that belong to the merchant accounts specified by their unique merchant account ID. |
| `storeIds` | `string \| undefined` | Query, Optional | Returns terminals that are assigned to the [stores](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores) specified by their unique store ID. |
| `brandModels` | `string \| undefined` | Query, Optional | Returns terminals of the [models](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/companies/{companyId}/terminalModels) specified in the format *brand.model*. |
| `pageNumber` | `number \| undefined` | Query, Optional | The number of the page to fetch. |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to have on a page, maximum 100. The default is 20 items on a page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListTerminalsResponse`](../../doc/models/list-terminals-response.md).

## Example Usage

```ts
try {
  const response = await terminalsTerminalLevelApi.getTerminals();

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
  "_links": {
    "first": {
      "href": "https://management-test.adyen.com/v3/terminals?pageNumber=1&pageSize=20"
    },
    "last": {
      "href": "https://management-test.adyen.com/v3/terminals?pageNumber=1&pageSize=20"
    },
    "next": {
      "href": "https://management-test.adyen.com/v3/terminals?pageNumber=1&pageSize=20"
    },
    "self": {
      "href": "https://management-test.adyen.com/v3/terminals?pageNumber=0&pageSize=20"
    }
  },
  "itemsTotal": 1,
  "pagesTotal": 1,
  "data": [
    {
      "id": "AMS1-000150183300032",
      "model": "AMS1",
      "serialNumber": "000150183300032",
      "firmwareVersion": "Castles_Android 1.89.4",
      "assignment": {
        "companyId": "YOUR_COMPANY_ACCOUNT",
        "merchantId": "YOUR_MERCHANT_ACCOUNT",
        "storeId": "YOUR_STORE_ID",
        "status": "reassignmentInProgress",
        "reassignmentTarget": {
          "inventory": true
        }
      },
      "connectivity": {
        "cellular": {
          "iccid": "6006491286999921374"
        },
        "wifi": {
          "ipAddress": "198.51.100.1",
          "macAddress": "C4:6E:33:26:36:E4"
        }
      }
    }
  ]
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


# Post-Terminals-Terminal Id-Reassign

Reassigns a payment terminal to a company account, merchant account, merchant account inventory, or a store.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Assign Terminal

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

```ts
async postTerminalsTerminalIdReassign(
  terminalId: string,
  body?: TerminalReassignmentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `terminalId` | `string` | Template, Required | The unique identifier of the payment terminal. |
| `body` | [`TerminalReassignmentRequest \| undefined`](../../doc/models/terminal-reassignment-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: No Content - look at the actual response code for the status of the request.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const terminalId = 'terminalId2';

const body: TerminalReassignmentRequest = {
  inventory: false,
  merchantId: 'YOUR_MERCHANT_ID',
};

try {
  const response = await terminalsTerminalLevelApi.postTerminalsTerminalIdReassign(
    terminalId,
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |

