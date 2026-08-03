# SC Adevicemanagement

```ts
const scAdevicemanagementApi = new ScAdevicemanagementApi(client);
```

## Class Name

`ScAdevicemanagementApi`

## Methods

* [Post-Sca Devices](../../doc/controllers/sc-adevicemanagement.md#post-sca-devices)
* [Delete-Sca Devices-Device Id](../../doc/controllers/sc-adevicemanagement.md#delete-sca-devices-device-id)
* [Patch-Sca Devices-Device Id](../../doc/controllers/sc-adevicemanagement.md#patch-sca-devices-device-id)
* [Post-Sca Devices-Device Id-Sca Associations](../../doc/controllers/sc-adevicemanagement.md#post-sca-devices-device-id-sca-associations)


# Post-Sca Devices

Begins the registration process for a new Strong Customer Authentication (SCA) device.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postScaDevices(
  body?: BeginScaDeviceRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BeginScaDeviceRegistrationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BeginScaDeviceRegistrationRequest \| undefined`](../../doc/models/begin-sca-device-registration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: Created - A device resource is created. The initial step of registration is complete, but the device isn't ready for use.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BeginScaDeviceRegistrationResponse`](../../doc/models/begin-sca-device-registration-response.md).

## Example Usage

```ts
const body: BeginScaDeviceRegistrationRequest = {
  name: 'My Device',
  sdkOutput: 'eyJjaGFsbGVuZ2UiOiJVWEZaTURONGNXWjZUVFExUlhWV2JuaEJPVzVzTm05cVVEUktUbFZtZGtrPSJ9',
};

try {
  const response = await scaDeviceManagementApi.postScaDevices(body);

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
    if (error instanceof ScaDevices400Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices401Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices403Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices422Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices500Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "scaDevice": {
    "id": "BSDR42XV3223223S5N6CDQDGH53M8H",
    "name": "My Device",
    "type": "ios"
  },
  "sdkInput": "eyJjaGFsbGVuZ2UiOiJVWEZaTURONGNXWjZUVFExUlhWV2JuaEJPVzVzTm05cVVEUktUbFZtZGtrPSJ9"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - The request contains invalid input and fails validation. | [`ScaDevices400Error`](../../doc/models/sca-devices-400-error.md) |
| 401 | Unauthorized - Authentication required. | [`ScaDevices401Error`](../../doc/models/sca-devices-401-error.md) |
| 403 | Forbidden - Insufficient permissions to process the request. | [`ScaDevices403Error`](../../doc/models/sca-devices-403-error.md) |
| 422 | Unprocessable entity - A request validation error. | [`ScaDevices422Error`](../../doc/models/sca-devices-422-error.md) |
| 500 | Internal Server Error - The server could not process the request. | [`ScaDevices500Error`](../../doc/models/sca-devices-500-error.md) |


# Delete-Sca Devices-Device Id

Deletes a Strong Customer Authentication (SCA) device.

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteScaDevicesDeviceId(
  deviceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Template, Required | The unique identifier of the SCA device to delete.<br><br>**Constraints**: *Minimum Length*: `30`, *Maximum Length*: `30` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - The device was deleted successfully.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const deviceId = 'deviceId0';

try {
  const response = await scaDeviceManagementApi.deleteScaDevicesDeviceId(deviceId);

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
    if (error instanceof ScaDevices400Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices401Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices403Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices404Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices422Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - The request contains invalid input and fails validation. | [`ScaDevices400Error`](../../doc/models/sca-devices-400-error.md) |
| 401 | Unauthorized - Authentication required. | [`ScaDevices401Error`](../../doc/models/sca-devices-401-error.md) |
| 403 | Forbidden - Insufficient permissions to process the request. | [`ScaDevices403Error`](../../doc/models/sca-devices-403-error.md) |
| 404 | Not Found - Device not found. | [`ScaDevices404Error`](../../doc/models/sca-devices-404-error.md) |
| 422 | Unprocessable entity - A request validation error. | [`ScaDevices422Error`](../../doc/models/sca-devices-422-error.md) |
| 500 | Internal Server Error - The server could not process the request. | [`ScaDevices500Error`](../../doc/models/sca-devices-500-error.md) |


# Patch-Sca Devices-Device Id

Finishes the registration process for a new Strong Customer Authentication (SCA) device.

:information_source: **Note** This endpoint does not require authentication.

```ts
async patchScaDevicesDeviceId(
  deviceId: string,
  body?: FinishScaDeviceRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FinishScaDeviceRegistrationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Template, Required | The unique identifier of the SCA device that you are associating with a resource.<br><br>**Constraints**: *Minimum Length*: `30`, *Maximum Length*: `30` |
| `body` | [`FinishScaDeviceRegistrationRequest \| undefined`](../../doc/models/finish-sca-device-registration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - Device registration was completed successfully.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`FinishScaDeviceRegistrationResponse`](../../doc/models/finish-sca-device-registration-response.md).

## Example Usage

```ts
const deviceId = 'deviceId0';

const body: FinishScaDeviceRegistrationRequest = {
  sdkOutput: 'eyJjaGFsbGVuZ2UiOiJVWEZaTURONGNXWjZUVFExUlhWV2JuaEJPVzVzTm05cVVEUktUbFZtZGtrPSJ9',
};

try {
  const response = await scaDeviceManagementApi.patchScaDevicesDeviceId(
    deviceId,
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
    if (error instanceof ScaDevices400Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices401Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices403Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices404Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices422Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevices500Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "scaDevice": {
    "id": "BSDR42XV3223223S5N6CDQDGH53M8H",
    "name": "Device",
    "type": "ios"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - The request contains invalid input and fails validation. | [`ScaDevices400Error`](../../doc/models/sca-devices-400-error.md) |
| 401 | Unauthorized - Authentication required. | [`ScaDevices401Error`](../../doc/models/sca-devices-401-error.md) |
| 403 | Forbidden - Insufficient permissions to process the request. | [`ScaDevices403Error`](../../doc/models/sca-devices-403-error.md) |
| 404 | Not Found - Device not found. | [`ScaDevices404Error`](../../doc/models/sca-devices-404-error.md) |
| 422 | Unprocessable entity - A request validation error. | [`ScaDevices422Error`](../../doc/models/sca-devices-422-error.md) |
| 500 | Internal Server Error - The server could not process the request. | [`ScaDevices500Error`](../../doc/models/sca-devices-500-error.md) |


# Post-Sca Devices-Device Id-Sca Associations

Creates an association between an SCA-enabled device and an entity, such as an account holder. This action does not guarantee the association is immediately ready for use; its status may be `pendingApproval` if the account holder has existing devices.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postScaDevicesDeviceIdScaAssociations(
  deviceId: string,
  body?: SubmitScaAssociationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubmitScaAssociationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Template, Required | The unique identifier of the SCA device that you are associating with a resource.<br><br>**Constraints**: *Minimum Length*: `30`, *Maximum Length*: `30` |
| `body` | [`SubmitScaAssociationRequest \| undefined`](../../doc/models/submit-sca-association-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: Created - Association created.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SubmitScaAssociationResponse`](../../doc/models/submit-sca-association-response.md).

## Example Usage

```ts
const deviceId = 'deviceId0';

const body: SubmitScaAssociationRequest = {
  entities: [
    {
      id: 'AH00000000000000000000001',
      type: ScaEntityType4.AccountHolder,
    }
  ],
};

try {
  const response = await scaDeviceManagementApi.postScaDevicesDeviceIdScaAssociations(
    deviceId,
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
    if (error instanceof ScaDevicesScaAssociations400Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevicesScaAssociations401Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevicesScaAssociations403Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevicesScaAssociations404Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevicesScaAssociations422Error) {
      console.log(error.result);
    } else if (error instanceof ScaDevicesScaAssociations500Error) {
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
      "scaDeviceId": "BSDR11111111111A1AAA1AAAAA1AA1",
      "entityType": "accountHolder",
      "entityId": "AH00000000000000000000001",
      "status": "pendingApproval"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - The request contains invalid input and fails validation. | [`ScaDevicesScaAssociations400Error`](../../doc/models/sca-devices-sca-associations-400-error.md) |
| 401 | Unauthorized - Authentication required. | [`ScaDevicesScaAssociations401Error`](../../doc/models/sca-devices-sca-associations-401-error.md) |
| 403 | Forbidden - Insufficient permissions to process the request. | [`ScaDevicesScaAssociations403Error`](../../doc/models/sca-devices-sca-associations-403-error.md) |
| 404 | Not Found - Device not found. | [`ScaDevicesScaAssociations404Error`](../../doc/models/sca-devices-sca-associations-404-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`ScaDevicesScaAssociations422Error`](../../doc/models/sca-devices-sca-associations-422-error.md) |
| 500 | Internal Server Error - The server could not process the request. | [`ScaDevicesScaAssociations500Error`](../../doc/models/sca-devices-sca-associations-500-error.md) |

