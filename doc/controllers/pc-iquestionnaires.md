# PC Iquestionnaires

```ts
const pcIquestionnairesApi = new PcIquestionnairesApi(client);
```

## Class Name

`PcIquestionnairesApi`

## Methods

* [Get-Legal Entities-Id-Pci Questionnaires](../../doc/controllers/pc-iquestionnaires.md#get-legal-entities-id-pci-questionnaires)
* [Post-Legal Entities-Id-Pci Questionnaires-Generate Pci Templates](../../doc/controllers/pc-iquestionnaires.md#post-legal-entities-id-pci-questionnaires-generate-pci-templates)
* [Post-Legal Entities-Id-Pci Questionnaires-Sign Pci Templates](../../doc/controllers/pc-iquestionnaires.md#post-legal-entities-id-pci-questionnaires-sign-pci-templates)
* [Post-Legal Entities-Id-Pci Questionnaires-Signing Required](../../doc/controllers/pc-iquestionnaires.md#post-legal-entities-id-pci-questionnaires-signing-required)
* [Get-Legal Entities-Id-Pci Questionnaires-Pciid](../../doc/controllers/pc-iquestionnaires.md#get-legal-entities-id-pci-questionnaires-pciid)


# Get-Legal Entities-Id-Pci Questionnaires

Get a list of signed PCI questionnaires.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async getLegalEntitiesIdPciQuestionnaires(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPciQuestionnaireInfosResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the legal entity to get PCI questionnaire information. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetPciQuestionnaireInfosResponse`](../../doc/models/get-pci-questionnaire-infos-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await pciQuestionnairesApi.getLegalEntitiesIdPciQuestionnaires(id);

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
  "data": [
    {
      "createdAt": "2023-03-02T17:54:19.538365Z",
      "id": "PCID422GZ22322565HHMH48CW63CPH",
      "validUntil": "2024-03-01T17:54:19.538365Z"
    },
    {
      "createdAt": "2023-03-02T17:54:19.538365Z",
      "id": "PCID422GZ22322565HHMH49CW75Z9H",
      "validUntil": "2024-03-01T17:54:19.538365Z"
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


# Post-Legal Entities-Id-Pci Questionnaires-Generate Pci Templates

Generates the required PCI questionnaires based on the user's [salesChannel](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__reqParam_salesChannels).

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates(
  id: string,
  body?: GeneratePciDescriptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GeneratePciDescriptionResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the legal entity to get PCI questionnaire information. |
| `body` | [`GeneratePciDescriptionRequest \| undefined`](../../doc/models/generate-pci-description-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GeneratePciDescriptionResponse`](../../doc/models/generate-pci-description-response.md).

## Example Usage

```ts
const id = 'id0';

const body: GeneratePciDescriptionRequest = {
  language: 'fr',
};

try {
  const response = await pciQuestionnairesApi.postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates(
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
  "content": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==",
  "language": "fr",
  "pciTemplateReferences": [
    "PCIT-T7KC6VGL",
    "PCIT-PKB6DKS4"
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


# Post-Legal Entities-Id-Pci Questionnaires-Sign Pci Templates

Signs the required PCI questionnaire.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async postLegalEntitiesIdPciQuestionnairesSignPciTemplates(
  id: string,
  body?: PciSigningRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PciSigningResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The legal entity ID of the user that has a contractual relationship with your platform. |
| `body` | [`PciSigningRequest \| undefined`](../../doc/models/pci-signing-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PciSigningResponse`](../../doc/models/pci-signing-response.md).

## Example Usage

```ts
const id = 'id0';

const body: PciSigningRequest = {
  pciTemplateReferences: [
    'PCIT-T7KC6VGL',
    'PCIT-PKB6DKS4'
  ],
  signedBy: 'LE00000000000000000000002',
};

try {
  const response = await pciQuestionnairesApi.postLegalEntitiesIdPciQuestionnairesSignPciTemplates(
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
  "pciQuestionnaireIds": [
    "PCID422GZ22322565HHMH48CW63CPH",
    "PCID422GZ22322565HHMH49CW75Z9H"
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


# Post-Legal Entities-Id-Pci Questionnaires-Signing Required

Calculate PCI status of a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async postLegalEntitiesIdPciQuestionnairesSigningRequired(
  id: string,
  body?: CalculatePciStatusRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CalculatePciStatusResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the legal entity to calculate PCI status. |
| `body` | [`CalculatePciStatusRequest \| undefined`](../../doc/models/calculate-pci-status-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CalculatePciStatusResponse`](../../doc/models/calculate-pci-status-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await pciQuestionnairesApi.postLegalEntitiesIdPciQuestionnairesSigningRequired(id);

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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Get-Legal Entities-Id-Pci Questionnaires-Pciid

Returns the signed PCI questionnaire.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

```ts
async getLegalEntitiesIdPciQuestionnairesPciid(
  id: string,
  pciid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPciQuestionnaireResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The legal entity ID of the individual who signed the PCI questionnaire. |
| `pciid` | `string` | Template, Required | The unique identifier of the signed PCI questionnaire. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetPciQuestionnaireResponse`](../../doc/models/get-pci-questionnaire-response.md).

## Example Usage

```ts
const id = 'id0';

const pciid = 'pciid8';

try {
  const response = await pciQuestionnairesApi.getLegalEntitiesIdPciQuestionnairesPciid(
    id,
    pciid
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
  "content": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==",
  "createdAt": "2023-03-02T17:54:19.538365Z",
  "id": "PCID422GZ22322565HHMH48CW63CPH",
  "validUntil": "2024-03-01T17:54:19.538365Z"
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

