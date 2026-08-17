# SC Aassociationmanagement

```ts
const sCAassociationmanagementApi = new SCAassociationmanagementApi(client);
```

## Class Name

`SCAassociationmanagementApi`

## Methods

* [Get-Sca Associations](../../doc/controllers/sc-aassociationmanagement.md#get-sca-associations)
* [Delete-Sca Associations](../../doc/controllers/sc-aassociationmanagement.md#delete-sca-associations)
* [Patch-Sca Associations](../../doc/controllers/sc-aassociationmanagement.md#patch-sca-associations)


# Get-Sca Associations

Returns a paginated list of the SCA devices associated with a specific entity.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getScaAssociations(
  entityType: ScaEntityTypeEnum,
  entityId: string,
  pageSize: number,
  pageNumber: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListAssociationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityType` | [`ScaEntityTypeEnum`](../../doc/models/sca-entity-type-enum.md) | Query, Required | The type of entity you want to retrieve a list of associations for.<br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**. |
| `entityId` | `string` | Query, Required | The unique identifier of the entity.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `pageSize` | `number` | Query, Required | The number of items to have on a page.<br><br>Default: **5**.<br><br>**Constraints**: `>= 1`, `<= 10` |
| `pageNumber` | `number` | Query, Required | The index of the page to retrieve. The index of the first page is **0** (zero).<br><br>Default:  **0**. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListAssociationsResponse`](../../doc/models/list-associations-response.md).

## Example Usage

```ts
const entityType = ScaEntityTypeEnum.AccountHolder;

const entityId = 'entityId2';

const pageSize = 10;

const pageNumber = 110;

try {
  const response = await sCAAssociationManagementApi.getScaAssociations(
    entityType,
    entityId,
    pageSize,
    pageNumber
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
  "_links": {
    "self": {
      "href": "https://exampledomain.com/bcl/api/v2/scaAssociations?pageNumber=0&entityType=accountHolder&pageSize=10&entityId=AH3227J223222D5HHM4779X6X"
    }
  },
  "itemsTotal": 2,
  "pagesTotal": 1,
  "data": [
    {
      "scaDeviceId": "BSDR11111111111A1AAA1AAAAA1AA1",
      "scaDeviceName": "Device 1",
      "scaDeviceType": "ios",
      "entityType": "accountHolder",
      "entityId": "AH00000000000000000000001",
      "status": "active",
      "createdAt": "2025-09-02T14:39:17.232Z"
    },
    {
      "scaDeviceId": "BSDR22222222222B2BBB2BBBBB2BB2",
      "scaDeviceName": "Device 2",
      "scaDeviceType": "ios",
      "entityType": "accountHolder",
      "entityId": "AH00000000000000000000001",
      "status": "pendingApproval",
      "createdAt": "2025-09-02T14:39:17.232Z"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request - The request contains invalid input and fails validation. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - Authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - Insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - The server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Delete-Sca Associations

Deletes one or more SCA associations for a device.

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteScaAssociations(
  wWWAuthenticate: string,
  body?: RemoveAssociationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wWWAuthenticate` | `string` | Header, Required | The header for authenticating through SCA.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20000` |
| `body` | [`RemoveAssociationRequest \| undefined`](../../doc/models/remove-association-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - Successful association deletion.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const wWWAuthenticate = 'WWW-Authenticate2';

const body: RemoveAssociationRequest = {
  entityId: 'AH00000000000000000000001',
  entityType: ScaEntityType3Enum.AccountHolder,
  scaDeviceIds: [
    'BSDR42XV3223223S5N6CDQDGH53M8H'
  ],
};

try {
  const response = await sCAAssociationManagementApi.deleteScaAssociations(
    wWWAuthenticate,
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - Authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - Insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - The server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Patch-Sca Associations

Approves a previously created association that is in a pending state.

:information_source: **Note** This endpoint does not require authentication.

```ts
async patchScaAssociations(
  wWWAuthenticate: string,
  body?: ApproveAssociationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApproveAssociationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wWWAuthenticate` | `string` | Header, Required | The header for authenticating through SCA.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20000` |
| `body` | [`ApproveAssociationRequest \| undefined`](../../doc/models/approve-association-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - Successful approval

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ApproveAssociationResponse`](../../doc/models/approve-association-response.md).

## Example Usage

```ts
const wWWAuthenticate = 'WWW-Authenticate2';

const body: ApproveAssociationRequest = {
  entityId: 'AH00000000000000000000001',
  entityType: ScaEntityType2Enum.AccountHolder,
  scaDeviceIds: [
    'BSDR42XV3223223S5N6CDQDGH53M8H'
  ],
  status: AssociationStatus1Enum.Active,
};

try {
  const response = await sCAAssociationManagementApi.patchScaAssociations(
    wWWAuthenticate,
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
  "scaAssociations": [
    {
      "scaDeviceId": "BSDR42XV3223223S5N6CDQDGH53M8H",
      "entityType": "accountHolder",
      "entityId": "AH00000000000000000000001",
      "status": "active"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - Authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - Insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - The server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

