# Cardorders

```ts
const cardordersApi = new CardordersApi(client);
```

## Class Name

`CardordersApi`

## Methods

* [Get-Cardorders](../../doc/controllers/cardorders.md#get-cardorders)
* [Get-Cardorders-Id-Items](../../doc/controllers/cardorders.md#get-cardorders-id-items)


# Get-Cardorders

Returns a paginated list of card orders.

```ts
async getCardorders(
  id?: string,
  cardManufacturingProfileId?: string,
  status?: string,
  txVariantCode?: string,
  createdSince?: string,
  createdUntil?: string,
  lockedSince?: string,
  lockedUntil?: string,
  serviceCenter?: string,
  offset?: number,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaginatedGetCardOrderResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Query, Optional | The unique identifier of the card order. |
| `cardManufacturingProfileId` | `string \| undefined` | Query, Optional | The unique identifier of the card manufacturer profile. |
| `status` | `string \| undefined` | Query, Optional | The status of the card order. |
| `txVariantCode` | `string \| undefined` | Query, Optional | The unique code of the card manufacturer profile.<br><br>Possible values: **mcmaestro**, **mc**, **visa**, **mcdebit**. |
| `createdSince` | `string \| undefined` | Query, Optional | Only include card orders that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**. |
| `createdUntil` | `string \| undefined` | Query, Optional | Only include card orders that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**. |
| `lockedSince` | `string \| undefined` | Query, Optional | Only include card orders that have been locked on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**. |
| `lockedUntil` | `string \| undefined` | Query, Optional | Only include card orders that have been locked on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**. |
| `serviceCenter` | `string \| undefined` | Query, Optional | The service center at which the card is issued. The value is case-sensitive. |
| `offset` | `number \| undefined` | Query, Optional | Specifies the position of an element in a list of card orders. The response includes a list of card orders that starts at the specified offset.<br><br>**Default:** 0, which means that the response contains all the elements in the list of card orders. |
| `limit` | `number \| undefined` | Query, Optional | The number of card orders returned per page. **Default:** 10. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaginatedGetCardOrderResponse`](../../doc/models/paginated-get-card-order-response.md).

## Example Usage

```ts
try {
  const response = await cardOrdersApi.getCardorders();

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
  "cardOrders": [
    {
      "beginDate": "2022-12-05T00:00:00+01:00",
      "cardManufacturingProfileId": "UNIQUE_CARD_MANUFACTURER_PROFILE_ID",
      "endDate": "2022-12-06T00:00:00+01:00",
      "id": "UNIQUE_CARD_ORDER_ID",
      "lockDate": "2023-04-14T16:43:02+02:00",
      "serviceCenter": "IDEMIA Sittard",
      "status": "closed"
    }
  ],
  "hasNext": true,
  "hasPrevious": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Get-Cardorders-Id-Items

Returns the item list of a specific card order.

```ts
async getCardordersIdItems(
  id: string,
  offset?: number,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaginatedGetCardOrderItemResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the card order. |
| `offset` | `number \| undefined` | Query, Optional | Specifies the position of an element in a list of card orders. The response includes a list of card order items that starts at the specified offset.<br><br>**Default:** 0, which means that the response contains all the elements in the list of card order items. |
| `limit` | `number \| undefined` | Query, Optional | The number of card order items returned per page. **Default:** 10. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaginatedGetCardOrderItemResponse`](../../doc/models/paginated-get-card-order-item-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await cardOrdersApi.getCardordersIdItems(id);

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
  "data": [
    {
      "card": {
        "status": "shipped"
      },
      "cardOrderItemId": "UNIQUE_CARD_ORDER_ITEM_ID",
      "paymentInstrumentId": "UNIQUE_PAYMENT_INSTRUMENT_ID",
      "pin": {
        "status": "produced"
      },
      "shippingMethod": "Cardholder Post Basic National"
    }
  ],
  "hasNext": false,
  "hasPrevious": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |

