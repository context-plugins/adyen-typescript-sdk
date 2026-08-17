# API

```ts
const api = new Api(client);
```

## Class Name

`Api`

## Methods

* [Login Request](../../doc/controllers/api.md#login-request)
* [Logout Request](../../doc/controllers/api.md#logout-request)
* [Enable Service Request](../../doc/controllers/api.md#enable-service-request)
* [Admin Request](../../doc/controllers/api.md#admin-request)
* [Payment Request](../../doc/controllers/api.md#payment-request)
* [Card Acquisition Request](../../doc/controllers/api.md#card-acquisition-request)
* [Stored Value Request](../../doc/controllers/api.md#stored-value-request)
* [Reversal Request](../../doc/controllers/api.md#reversal-request)
* [Reconciliation Request](../../doc/controllers/api.md#reconciliation-request)
* [Get Totals Request](../../doc/controllers/api.md#get-totals-request)
* [Balance Inquiry Request](../../doc/controllers/api.md#balance-inquiry-request)
* [Transaction Status Request](../../doc/controllers/api.md#transaction-status-request)
* [Abort Request](../../doc/controllers/api.md#abort-request)
* [Diagnosis Request](../../doc/controllers/api.md#diagnosis-request)
* [Display Request](../../doc/controllers/api.md#display-request)
* [Input Request](../../doc/controllers/api.md#input-request)
* [Print Request](../../doc/controllers/api.md#print-request)
* [Card Reader APDU Request](../../doc/controllers/api.md#card-reader-apdu-request)


# Login Request

It conveys information related to the session (period between a Login and the following Logout) to process.
Content of the `LoginRequest` message.

```ts
async loginRequest(
  body?: LoginRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LoginRequest \| undefined`](../../doc/models/login-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys Information related to the Login to process.
Content of the Login Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LoginResponse`](../../doc/models/login-response.md).

## Example Usage

```ts
const body: LoginRequest = {
  dateTime: '2016-03-13T12:52:32.123Z',
  saleSoftware: {
    manufacturerID: 'ManufacturerID4',
    applicationName: 'ApplicationName8',
    softwareVersion: 'SoftwareVersion0',
    certificationCode: 'CertificationCode4',
  },
  operatorLanguage: 'OperatorLanguage2',
  trainingModeFlag: false,
};

try {
  const response = await api.loginRequest(body);

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
  }
}
```


# Logout Request

Empty.
Content of the Logout Request message.

```ts
async logoutRequest(
  body?: LogoutRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LogoutResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LogoutRequest \| undefined`](../../doc/models/logout-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys the result of the Logout.
Content of the Logout Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LogoutResponse`](../../doc/models/logout-response.md).

## Example Usage

```ts
const body: LogoutRequest = {
  maintenanceAllowed: false,
};

try {
  const response = await api.logoutRequest(body);

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
  }
}
```


# Enable Service Request

It conveys the services that will be enabled for the POI Terminal without the request of the Sale System, and a possible invitation for the Customer to start the services.
Content of the Enable Service Request message.

```ts
async enableServiceRequest(
  body?: EnableServiceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EnableServiceResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`EnableServiceRequest \| undefined`](../../doc/models/enable-service-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys the result of the Enable Service processing.
Content of the Enable Service Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`EnableServiceResponse`](../../doc/models/enable-service-response.md).

## Example Usage

```ts
try {
  const response = await api.enableServiceRequest();

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
  }
}
```


# Admin Request

Empty.
Content of the Custom Admin Request message.

```ts
async adminRequest(
  body?: AdminRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AdminRequest \| undefined`](../../doc/models/admin-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys the result of the Custom Admin.
Content of the Custom Admin Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminResponse`](../../doc/models/admin-response.md).

## Example Usage

```ts
try {
  const response = await api.adminRequest();

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
  }
}
```


# Payment Request

Request sent to terminal to initiate payment.
It conveys Information related to the Payment transaction to process.
Content of the `PaymentRequest` message.

```ts
async paymentRequest(
  body?: PaymentRequest2,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentResponse4>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PaymentRequest2 \| undefined`](../../doc/models/payment-request-2.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys Information related to the Payment transaction processed by the POI System.
Content of the Payment Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentResponse4`](../../doc/models/payment-response-4.md).

## Example Usage

```ts
try {
  const response = await api.paymentRequest();

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
  }
}
```


# Card Acquisition Request

It conveys Information related to the payment and loyalty cards to read and analyse. This message pair is usually followed by a message pair (e.g. payment or loyalty) which refers to this Card Acquisition message pair.
Content of the Card Acquisition Request message.

```ts
async cardAcquisitionRequest(
  body?: CardAcquisitionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CardAcquisitionResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CardAcquisitionRequest \| undefined`](../../doc/models/card-acquisition-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys Information related to the payment and loyalty cards read and processed by the POI System and entered by the Customer.
Content of the Card Acquisition Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CardAcquisitionResponse`](../../doc/models/card-acquisition-response.md).

## Example Usage

```ts
try {
  const response = await api.cardAcquisitionRequest();

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
  }
}
```


# Stored Value Request

It conveys Information related to the Stored Value transaction to process.
Content of the Stored Value Request message.

```ts
async storedValueRequest(
  body?: StoredValueRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StoredValueResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`StoredValueRequest \| undefined`](../../doc/models/stored-value-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys Information related to the Stored Value transaction processed by the POI System.
Content of the Stored Value Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`StoredValueResponse`](../../doc/models/stored-value-response.md).

## Example Usage

```ts
const body: StoredValueRequest = {
  saleData: {
    saleTransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
  },
  storedValueData: [
    {
      storedValueTransactionType: StoredValueTransactionType1Enum.Reserve,
    }
  ],
};

try {
  const response = await api.storedValueRequest(body);

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
  }
}
```


# Reversal Request

It conveys Information related to the reversal of a previous payment or a loyalty transaction.
Content of the Reversal Request message.

```ts
async reversalRequest(
  body?: ReversalRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReversalResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ReversalRequest \| undefined`](../../doc/models/reversal-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys Information related to the reversal processed by the POI System.
Content of the Reversal Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ReversalResponse`](../../doc/models/reversal-response.md).

## Example Usage

```ts
const body: ReversalRequest = {
  originalPOITransaction: {
    reuseCardDataFlag: true,
  },
  reversalReason: ReversalReason1Enum.CustCancel,
};

try {
  const response = await api.reversalRequest(body);

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
  }
}
```


# Reconciliation Request

Content of the Reconciliation Request message.
It conveys Information related to the Reconciliation requested by the Sale System.

```ts
async reconciliationRequest(
  body?: ReconciliationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReconciliationResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ReconciliationRequest \| undefined`](../../doc/models/reconciliation-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys Information related to the Reconciliation transaction processed by the POI System.
Content of the Reconciliation Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ReconciliationResponse`](../../doc/models/reconciliation-response.md).

## Example Usage

```ts
try {
  const response = await api.reconciliationRequest();

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
  }
}
```


# Get Totals Request

It conveys information from the Sale System related to the scope and the format of the totals to be computed by the POI System.
Content of the Get Totals Request message.

```ts
async getTotalsRequest(
  body?: GetTotalsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTotalsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetTotalsRequest \| undefined`](../../doc/models/get-totals-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Content of the Reconciliation Response message.
It conveys Information related to the Reconciliation transaction processed by the POI System.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetTotalsResponse`](../../doc/models/get-totals-response.md).

## Example Usage

```ts
try {
  const response = await api.getTotalsRequest();

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
  }
}
```


# Balance Inquiry Request

It conveys Information related to the account for which a Balance Inquiry is requested.
Content of the Balance Inquiry Request message.

```ts
async balanceInquiryRequest(
  body?: BalanceInquiryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceInquiryResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BalanceInquiryRequest \| undefined`](../../doc/models/balance-inquiry-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Content of the Balance Inquiry Response message.
It conveys the balance and the identification of the associated payment, loyalty or stored value account.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceInquiryResponse`](../../doc/models/balance-inquiry-response.md).

## Example Usage

```ts
try {
  const response = await api.balanceInquiryRequest();

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
  }
}
```


# Transaction Status Request

Content of the TransactionStatus Request message.
It conveys Information requested for status of the last or current Payment, Loyalty or Reversal transaction.

```ts
async transactionStatusRequest(
  body?: TransactionStatusRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionStatusResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TransactionStatusRequest \| undefined`](../../doc/models/transaction-status-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Content of the TransactionStatus Response message.
It conveys Information related to the status of the last or current Payment, Loyalty or Reversal transaction.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransactionStatusResponse`](../../doc/models/transaction-status-response.md).

## Example Usage

```ts
const body: TransactionStatusRequest = {
  receiptReprintFlag: false,
};

try {
  const response = await api.transactionStatusRequest(body);

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
  }
}
```


# Abort Request

Body of the Abort Request message.
It conveys Information requested for identification of the message request carrying the transaction to abort. A message to display on the CustomerError Device could be sent by the Sale System (DisplayOutput).

```ts
async abortRequest(
  body?: AbortRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown | undefined>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AbortRequest \| undefined`](../../doc/models/abort-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A successful `AbortRequest` returns a response with a **200 OK** HTTP status code and no body.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `unknown`.

## Example Usage

```ts
try {
  const response = await api.abortRequest();

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
  }
}
```


# Diagnosis Request

It conveys Information related to the target POI for which the diagnosis is requested.
Content of the Diagnosis Request message.

```ts
async diagnosisRequest(
  body?: DiagnosisRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DiagnosisResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DiagnosisRequest \| undefined`](../../doc/models/diagnosis-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys the result of the requested diagnosis and a possible message to display on a logical device.
Content of the Diagnosis Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DiagnosisResponse`](../../doc/models/diagnosis-response.md).

## Example Usage

```ts
const body: DiagnosisRequest = {
  hostDiagnosisFlag: false,
};

try {
  const response = await api.diagnosisRequest(body);

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
  }
}
```


# Display Request

It conveys the data to display and the way to process the display. It contains the complete content to display. It might contain an operation (the DisplayOutput element) per Display Device type.
Content of the Display Request message.

```ts
async displayRequest(
  body?: DisplayRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DisplayResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DisplayRequest \| undefined`](../../doc/models/display-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys the result of the display, parallel to the message request, except if response not required and absent.
Content of the Display Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DisplayResponse`](../../doc/models/display-response.md).

## Example Usage

```ts
const body: DisplayRequest = {
  displayOutput: [
    {
      device: Device11Enum.CashierDisplay,
      infoQualify: InfoQualify1Enum.Status,
      outputContent: {
        outputFormat: OutputFormat1Enum.XHTML,
      },
      responseRequiredFlag: true,
      minimumDisplayTime: 0,
    }
  ],
};

try {
  const response = await api.displayRequest(body);

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
  }
}
```


# Input Request

Content of the `InputRequest` message. It conveys the data to display and how to process it. In addition to the display on the Input Device, it might contain an operation (the `DisplayOutput` element) per Display Device type.

```ts
async inputRequest(
  body?: InputRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InputResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`InputRequest \| undefined`](../../doc/models/input-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys the result of the input or the result of the outputs, parallel to the message request, except if response not required and absent.
Content of the Input Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`InputResponse`](../../doc/models/input-response.md).

## Example Usage

```ts
const body: InputRequest = {
  inputData: {
    device: Device2Enum.CashierDisplay,
    infoQualify: InfoQualify2Enum.CustomerAssistance,
    inputCommand: InputCommand1Enum.GetAnyKey,
    notifyCardInputFlag: false,
    immediateResponseFlag: false,
    waitUserValidationFlag: true,
    fromRightToLeftFlag: false,
    maskCharactersFlag: false,
    beepKeyFlag: false,
    globalCorrectionFlag: false,
    disableCancelFlag: false,
    disableCorrectFlag: false,
    disableValidFlag: false,
    menuBackFlag: false,
  },
};

try {
  const response = await api.inputRequest(body);

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
  }
}
```


# Print Request

Content of the Print Request message.
It conveys the complete data to print and how to process the print.

```ts
async printRequest(
  body?: PrintRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrintResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PrintRequest \| undefined`](../../doc/models/print-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: It conveys the result of the print, parallel to the message request, except if response not required and absent.
Content of the Print Response message.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PrintResponse`](../../doc/models/print-response.md).

## Example Usage

```ts
const body: PrintRequest = {
  printOutput: {
    documentQualifier: DocumentQualifier2Enum.CustomerReceipt,
    responseMode: ResponseMode1Enum.PrintEnd,
    outputContent: {
      outputFormat: OutputFormat1Enum.XHTML,
    },
    integratedPrintFlag: false,
    requiredSignatureFlag: false,
  },
};

try {
  const response = await api.printRequest(body);

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
  }
}
```


# Card Reader APDU Request

It contains the APDU request to send to the chip of the card, and a possible invitation message to display on the CashierInterface or the CustomerInterface.
Content of the Card Reader APDU Request message.

```ts
async cardReaderAPDURequest(
  body?: CardReaderAPDURequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CardReaderAPDUResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CardReaderAPDURequest \| undefined`](../../doc/models/card-reader-apdu-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Content of the Card Reader APDU Response message.
It contains the result of the requested service, APDU response sent by the chip of the card in response to the APDU request.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CardReaderAPDUResponse`](../../doc/models/card-reader-apdu-response.md).

## Example Usage

```ts
try {
  const response = await api.cardReaderAPDURequest();

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
  }
}
```

