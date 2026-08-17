# Donationcampaigns

```ts
const donationcampaignsApi = new DonationcampaignsApi(client);
```

## Class Name

`DonationcampaignsApi`

## Methods

* [Post-Companies-Company Id-Campaign Management](../../doc/controllers/donationcampaigns.md#post-companies-company-id-campaign-management)
* [Get-Companies-Company Id-Campaign Management-Account Holders-Account Holder Id](../../doc/controllers/donationcampaigns.md#get-companies-company-id-campaign-management-account-holders-account-holder-id)
* [Delete-Companies-Company Id-Campaign Management-Donation Campaign Id](../../doc/controllers/donationcampaigns.md#delete-companies-company-id-campaign-management-donation-campaign-id)
* [Patch-Companies-Company Id-Campaign Management-Donation Campaign Id](../../doc/controllers/donationcampaigns.md#patch-companies-company-id-campaign-management-donation-campaign-id)
* [Post-Companies-Company Id-Campaign Management-Donation Campaign Id-Status-Status](../../doc/controllers/donationcampaigns.md#post-companies-company-id-campaign-management-donation-campaign-id-status-status)
* [Post-Companies-Company Id-Nonprofits](../../doc/controllers/donationcampaigns.md#post-companies-company-id-nonprofits)


# Post-Companies-Company Id-Campaign Management

Creates a new donation campaign, to give shoppers the option to donate to a nonprofit organization when making a payment. A campaign can be for online payments, in-person payments, or both online and in-person payments.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Campaign Management read and write

```ts
async postCompaniesCompanyIdCampaignManagement(
  companyId: string,
  body?: DonationCampaignRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DonationCampaign1>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `body` | [`DonationCampaignRequest \| undefined`](../../doc/models/donation-campaign-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DonationCampaign1`](../../doc/models/donation-campaign-1.md).

## Example Usage

```ts
const companyId = 'companyId0';

try {
  const response = await donationCampaignsApi.postCompaniesCompanyIdCampaignManagement(companyId);

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
| 400 | Bad Request - a problem reading or understanding the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Get-Companies-Company Id-Campaign Management-Account Holders-Account Holder Id

Returns a paginated list of donation campaigns associated with the account holder specified in the path. You can filter the list by campaign status.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Campaign Management read
* Management API—Campaign Management read and write

```ts
async getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId(
  companyId: string,
  accountHolderId: string,
  status?: string,
  pageNumber?: number,
  pageSize?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListDonationCampaignsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `accountHolderId` | `string` | Template, Required | The unique identifier of the account holder. |
| `status` | `string \| undefined` | Query, Optional | The campaign status to return campaigns that match. Allowed values: **inactive**, **active**, or **ended**. |
| `pageNumber` | `number \| undefined` | Query, Optional | The number of the page to fetch.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1` |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to have on a page, maximum 100. The default is 10 items on a page.<br><br>**Default**: `10`<br><br>**Constraints**: `>= 1`, `<= 100` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListDonationCampaignsResponse`](../../doc/models/list-donation-campaigns-response.md).

## Example Usage

```ts
const companyId = 'companyId0';

const accountHolderId = 'accountHolderId8';

const pageNumber = 1;

const pageSize = 10;

try {
  const response = await donationCampaignsApi.getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId(
    companyId,
    accountHolderId,
    undefined,
    pageNumber,
    pageSize
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
| 400 | Bad Request - a problem reading or understanding the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Delete-Companies-Company Id-Campaign Management-Donation Campaign Id

Removes the donation campaign specified in the path. This request is only allowed if the campaign has the status **inactive**.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Campaign Management read and write

```ts
async deleteCompaniesCompanyIdCampaignManagementDonationCampaignId(
  companyId: string,
  donationCampaignId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `donationCampaignId` | `string` | Template, Required | The unique identifier of the donation campaign to be deleted. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - the request has been successfully processed, but there is no additional content.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const companyId = 'companyId0';

const donationCampaignId = 'donationCampaignId0';

try {
  const response = await donationCampaignsApi.deleteCompaniesCompanyIdCampaignManagementDonationCampaignId(
    companyId,
    donationCampaignId
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
| 400 | Bad Request - a problem reading or understanding the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Patch-Companies-Company Id-Campaign Management-Donation Campaign Id

Updates the properties of the donation campaign specified in the path. Note the following restrictions:

* You cannot use a PATCH request to update the campaign status. To activate or end a campaign, make a POST request to the `/campaignManagement/{campaignId}/status/{status}` endpoint.
* You get a validation error if you add account holders that are not compatible with the nonprofit.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Campaign Management read and write

```ts
async patchCompaniesCompanyIdCampaignManagementDonationCampaignId(
  companyId: string,
  donationCampaignId: string,
  body?: DonationCampaignUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DonationCampaign1>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `donationCampaignId` | `string` | Template, Required | The unique identifier of the donation campaign to be updated. |
| `body` | [`DonationCampaignUpdate \| undefined`](../../doc/models/donation-campaign-update.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DonationCampaign1`](../../doc/models/donation-campaign-1.md).

## Example Usage

```ts
const companyId = 'companyId0';

const donationCampaignId = 'donationCampaignId0';

try {
  const response = await donationCampaignsApi.patchCompaniesCompanyIdCampaignManagementDonationCampaignId(
    companyId,
    donationCampaignId
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
| 400 | Bad Request - a problem reading or understanding the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Companies-Company Id-Campaign Management-Donation Campaign Id-Status-Status

Starts or stops the donation campaign specified in the path, by providing a path parameter.
Use the path parameter **activate** to start an inactive campaign, or **end** to stop an active campaign. Other status transitions are not allowed.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Campaign Management read and write

```ts
async postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus(
  companyId: string,
  donationCampaignId: string,
  status: CampaignStatusTransitionEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DonationCampaign1>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `donationCampaignId` | `string` | Template, Required | The unique identifier of the donation campaign to activate or end. |
| `status` | [`CampaignStatusTransitionEnum`](../../doc/models/campaign-status-transition-enum.md) | Template, Required | The desired status change. Possible values: **activate** or **end**. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DonationCampaign1`](../../doc/models/donation-campaign-1.md).

## Example Usage

```ts
const companyId = 'companyId0';

const donationCampaignId = 'donationCampaignId0';

const status = CampaignStatusTransitionEnum.Activate;

try {
  const response = await donationCampaignsApi.postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus(
    companyId,
    donationCampaignId,
    status
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
| 400 | Bad Request - a problem reading or understanding the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Post-Companies-Company Id-Nonprofits

Returns a list of supported nonprofit organizations to choose from when creating a donation campaign. The list only contains nonprofits that are compatible with all the account holders specified in the request.

```ts
async postCompaniesCompanyIdNonprofits(
  companyId: string,
  searchTerm?: string,
  pageNumber?: number,
  pageSize?: number,
  goal?: string[],
  body?: ListNonprofitsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListNonprofitsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Template, Required | The unique identifier of the company account. |
| `searchTerm` | `string \| undefined` | Query, Optional | A query to return nonprofit organizations for, maximum 100 characters. For example, `&searchTerm=clean%20water`.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `pageNumber` | `number \| undefined` | Query, Optional | The number of the page to fetch.<br><br>**Constraints**: `>= 1` |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to have on a page, maximum 100. The default is 10 items on a page.<br><br>**Default**: `10`<br><br>**Constraints**: `>= 1`, `<= 100` |
| `goal` | `string[] \| undefined` | Query, Optional | One or more United Nations Sustainable Development Goals to return nonprofit organizations for. Format: `unsdg_<number>`, for example, `&goal=unsdg_6&goal=unsdg_2`. |
| `body` | [`ListNonprofitsRequest \| undefined`](../../doc/models/list-nonprofits-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListNonprofitsResponse`](../../doc/models/list-nonprofits-response.md).

## Example Usage

```ts
const companyId = 'companyId0';

const pageSize = 10;

try {
  const response = await donationCampaignsApi.postCompaniesCompanyIdNonprofits(
    companyId,
    undefined,
    undefined,
    pageSize
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
| 400 | Bad Request - a problem reading or understanding the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - authentication required. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

