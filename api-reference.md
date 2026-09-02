# Reference

> Source: [AdyenClient](src/client.ts)

<details>
<summary><code>abortRequest(request: AdyenClient.AbortRequestRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body of the Abort Request message.
It conveys Information requested for identification of the message request carrying the transaction to abort. A message to display on the CustomerError Device could be sent by the Sale System (DisplayOutput).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.abortRequest();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AbortRequest](src/models/abort-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminRequest(request: AdyenClient.AdminRequestRequest, options?: RequestOptions): ApiPromise&lt;AdminResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Empty.
Content of the Custom Admin Request message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminRequest();
  // TODO: Handle 'response' of type AdminResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AdminRequest](src/models/admin-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdminResponse](src/models/admin-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>balanceInquiryRequest(request: AdyenClient.BalanceInquiryRequestRequest, options?: RequestOptions): ApiPromise&lt;BalanceInquiryResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It conveys Information related to the account for which a Balance Inquiry is requested.
Content of the Balance Inquiry Request message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.balanceInquiryRequest();
  // TODO: Handle 'response' of type BalanceInquiryResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[BalanceInquiryRequest](src/models/balance-inquiry-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceInquiryResponse](src/models/balance-inquiry-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cardAcquisitionRequest(request: AdyenClient.CardAcquisitionRequestRequest, options?: RequestOptions): ApiPromise&lt;CardAcquisitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It conveys Information related to the payment and loyalty cards to read and analyse. This message pair is usually followed by a message pair (e.g. payment or loyalty) which refers to this Card Acquisition message pair.
Content of the Card Acquisition Request message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cardAcquisitionRequest();
  // TODO: Handle 'response' of type CardAcquisitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CardAcquisitionRequest](src/models/card-acquisition-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardAcquisitionResponse](src/models/card-acquisition-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cardReaderApduRequest(request: AdyenClient.CardReaderApduRequestRequest, options?: RequestOptions): ApiPromise&lt;CardReaderApduResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It contains the APDU request to send to the chip of the card, and a possible invitation message to display on the CashierInterface or the CustomerInterface.
Content of the Card Reader APDU Request message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cardReaderApduRequest();
  // TODO: Handle 'response' of type CardReaderApduResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CardReaderApduRequest](src/models/card-reader-apdu-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardReaderApduResponse](src/models/card-reader-apdu-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>diagnosisRequest(request: AdyenClient.DiagnosisRequestRequest, options?: RequestOptions): ApiPromise&lt;DiagnosisResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It conveys Information related to the target POI for which the diagnosis is requested.
Content of the Diagnosis Request message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosisRequest();
  // TODO: Handle 'response' of type DiagnosisResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DiagnosisRequest](src/models/diagnosis-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiagnosisResponse](src/models/diagnosis-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>displayRequest(request: AdyenClient.DisplayRequestRequest, options?: RequestOptions): ApiPromise&lt;DisplayResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It conveys the data to display and the way to process the display. It contains the complete content to display. It might contain an operation (the DisplayOutput element) per Display Device type.
Content of the Display Request message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.displayRequest();
  // TODO: Handle 'response' of type DisplayResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DisplayRequest](src/models/display-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisplayResponse](src/models/display-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableServiceRequest(request: AdyenClient.EnableServiceRequestRequest, options?: RequestOptions): ApiPromise&lt;EnableServiceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It conveys the services that will be enabled for the POI Terminal without the request of the Sale System, and a possible invitation for the Customer to start the services.
Content of the Enable Service Request message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.enableServiceRequest();
  // TODO: Handle 'response' of type EnableServiceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[EnableServiceRequest](src/models/enable-service-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnableServiceResponse](src/models/enable-service-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTotalsRequest(request: AdyenClient.GetTotalsRequestRequest, options?: RequestOptions): ApiPromise&lt;GetTotalsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It conveys information from the Sale System related to the scope and the format of the totals to be computed by the POI System.
Content of the Get Totals Request message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.getTotalsRequest();
  // TODO: Handle 'response' of type GetTotalsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetTotalsRequest](src/models/get-totals-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTotalsResponse](src/models/get-totals-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inputRequest(request: AdyenClient.InputRequestRequest, options?: RequestOptions): ApiPromise&lt;InputResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Content of the `InputRequest` message. It conveys the data to display and how to process it. In addition to the display on the Input Device, it might contain an operation (the `DisplayOutput` element) per Display Device type.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.inputRequest();
  // TODO: Handle 'response' of type InputResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[InputRequest](src/models/input-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InputResponse](src/models/input-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>loginRequest(request: AdyenClient.LoginRequestRequest, options?: RequestOptions): ApiPromise&lt;LoginResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It conveys information related to the session (period between a Login and the following Logout) to process.
Content of the `LoginRequest` message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.loginRequest();
  // TODO: Handle 'response' of type LoginResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[LoginRequest](src/models/login-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LoginResponse](src/models/login-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>logoutRequest(request: AdyenClient.LogoutRequestRequest, options?: RequestOptions): ApiPromise&lt;LogoutResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Empty.
Content of the Logout Request message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.logoutRequest();
  // TODO: Handle 'response' of type LogoutResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[LogoutRequest](src/models/logout-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LogoutResponse](src/models/logout-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentRequest(request: AdyenClient.PaymentRequestRequest, options?: RequestOptions): ApiPromise&lt;PaymentResponse4, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request sent to terminal to initiate payment.
It conveys Information related to the Payment transaction to process.
Content of the `PaymentRequest` message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentRequest();
  // TODO: Handle 'response' of type PaymentResponse4
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PaymentRequest2](src/models/payment-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponse4](src/models/payment-response4.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>printRequest(request: AdyenClient.PrintRequestRequest, options?: RequestOptions): ApiPromise&lt;PrintResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Content of the Print Request message.
It conveys the complete data to print and how to process the print.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.printRequest();
  // TODO: Handle 'response' of type PrintResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PrintRequest](src/models/print-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PrintResponse](src/models/print-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reconciliationRequest(request: AdyenClient.ReconciliationRequestRequest, options?: RequestOptions): ApiPromise&lt;ReconciliationResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Content of the Reconciliation Request message.
It conveys Information related to the Reconciliation requested by the Sale System.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reconciliationRequest();
  // TODO: Handle 'response' of type ReconciliationResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ReconciliationRequest](src/models/reconciliation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReconciliationResponse](src/models/reconciliation-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reversalRequest(request: AdyenClient.ReversalRequestRequest, options?: RequestOptions): ApiPromise&lt;ReversalResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It conveys Information related to the reversal of a previous payment or a loyalty transaction.
Content of the Reversal Request message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reversalRequest();
  // TODO: Handle 'response' of type ReversalResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ReversalRequest](src/models/reversal-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReversalResponse](src/models/reversal-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storedValueRequest(request: AdyenClient.StoredValueRequestRequest, options?: RequestOptions): ApiPromise&lt;StoredValueResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It conveys Information related to the Stored Value transaction to process.
Content of the Stored Value Request message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.storedValueRequest();
  // TODO: Handle 'response' of type StoredValueResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[StoredValueRequest](src/models/stored-value-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoredValueResponse](src/models/stored-value-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionStatusRequest(request: AdyenClient.TransactionStatusRequestRequest, options?: RequestOptions): ApiPromise&lt;TransactionStatusResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Content of the TransactionStatus Request message.
It conveys Information requested for status of the last or current Payment, Loyalty or Reversal transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionStatusRequest();
  // TODO: Handle 'response' of type TransactionStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TransactionStatusRequest](src/models/transaction-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionStatusResponse](src/models/transaction-status-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Payments

> Source: [Payments](src/resources/payments.ts)

<details>
<summary><code>getSessionsSessionId(request: Payments.GetSessionsSessionIdRequest, options?: RequestOptions): ApiPromise&lt;SessionResultResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the status of the payment session with the `sessionId` and `sessionResult` specified in the path.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.getSessionsSessionId({ sessionId, sessionResult });
  // TODO: Handle 'response' of type SessionResultResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId</code> | <code>string</code> | A unique identifier of the session. |
| <code>sessionResult</code> | <code>string</code> | The `sessionResult` value from the Drop-in or Component. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionResultResponse](src/models/session-result-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postAuthorise(request: Payments.PostAuthoriseRequest, options?: RequestOptions): ApiPromise&lt;PaymentResult, Payments.PostAuthoriseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a payment with a unique reference (`pspReference`) and attempts to obtain an authorisation hold. For cards, this amount can be captured or cancelled later. Non-card payment methods typically don't support this and will automatically capture as part of the authorisation.

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

>The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postAuthorise();
  // TODO: Handle 'response' of type PaymentResult
} catch (err) {
  if (err instanceof Payments.PostAuthoriseError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PaymentRequest1](src/models/payment-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResult](src/models/payment-result.ts)</code>

**OnError**: <code>[Payments.PostAuthoriseError](src/resources/payments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postAuthorise3D(request: Payments.PostAuthorise3DRequest, options?: RequestOptions): ApiPromise&lt;PaymentResult, Payments.PostAuthorise3DError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an authenticated 3D Secure session, completes the payment authorisation. This endpoint must receive the `md` and `paResponse` parameters that you get from the card issuer after a shopper pays via 3D Secure.

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/details`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/details) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postAuthorise3D();
  // TODO: Handle 'response' of type PaymentResult
} catch (err) {
  if (err instanceof Payments.PostAuthorise3DError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PaymentRequest3D](src/models/payment-request3-d.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResult](src/models/payment-result.ts)</code>

**OnError**: <code>[Payments.PostAuthorise3DError](src/resources/payments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postAuthorise3Ds2(request: Payments.PostAuthorise3Ds2Request, options?: RequestOptions): ApiPromise&lt;PaymentResult, Payments.PostAuthorise3Ds2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an authenticated 3D Secure 2 session, completes the payment authorisation. This endpoint must receive the `threeDS2Token` and `threeDS2Result` parameters.

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/details`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/details) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

>The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postAuthorise3Ds2();
  // TODO: Handle 'response' of type PaymentResult
} catch (err) {
  if (err instanceof Payments.PostAuthorise3Ds2Error && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PaymentRequest3Ds2](src/models/payment-request3-ds2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResult](src/models/payment-result.ts)</code>

**OnError**: <code>[Payments.PostAuthorise3Ds2Error](src/resources/payments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCardDetails(request: Payments.PostCardDetailsRequest, options?: RequestOptions): ApiPromise&lt;CardDetailsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to get information about the card or network token that enables you to decide on the routing of the transaction and the eligibility of the card for the type of transaction.

If you include [your supported brands](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/cardDetails__reqParam_supportedBrands) in the request, the response also tells you if you support each [brand that was identified on the card](https://docs.adyen.com/api-explorer/Checkout/latest/post/cardDetails#responses-200-brands).

If you have an API-only integration and collect card data, use this endpoint to find out if the shopper's card is co-bad. For co-badged cards, you must let the shopper choose the brand to pay with  if you support both brands.

## Server-side API libraries
We provide open-source [server-side API libraries](https://docs.adyen.com/development-resources/libraries/) in several languages: 
- PHP
- Java
- Node.js
- .NET
- Go
- Python
- Ruby
- Apex (beta)

See our [integration examples](https://github.com/adyen-examples#%EF%B8%8F-official-integration-examples) for example uses of the libraries.

## Developer resources
BIN Lookup API is available through a Postman collection. Click the button below to create a fork, then set the environment variables at **Environments**&nbsp;>&nbsp;**Adyen&nbsp;APIs**. 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25716737-677c7679-a695-4ebb-91da-68b4e7c9228a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D25716737-677c7679-a695-4ebb-91da-68b4e7c9228a%26entityType%3Dcollection%26workspaceId%3Da8d63f9f-cfc7-4810-90c5-9e0c60030d3e#?env%5BAdyen%20APIs%5D=W3sia2V5IjoiWC1BUEktS2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0In0seyJrZXkiOiJZT1VSX01FUkNIQU5UX0FDQ09VTlQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJZT1VSX0NPTVBBTllfQUNDT1VOVCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6IllPVVJfQkFMQU5DRV9QTEFURk9STSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)




</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postCardDetails();
  // TODO: Handle 'response' of type CardDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[CardDetailsRequest](src/models/card-details-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardDetailsResponse](src/models/card-details-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetAuthenticationResult(request: Payments.PostGetAuthenticationResultRequest, options?: RequestOptions): ApiPromise&lt;AuthenticationResultResponse, Payments.PostGetAuthenticationResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the authentication result after doing a 3D Secure authentication only.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postGetAuthenticationResult();
  // TODO: Handle 'response' of type AuthenticationResultResponse
} catch (err) {
  if (err instanceof Payments.PostGetAuthenticationResultError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AuthenticationResultRequest](src/models/authentication-result-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthenticationResultResponse](src/models/authentication-result-response.ts)</code>

**OnError**: <code>[Payments.PostGetAuthenticationResultError](src/resources/payments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentMethods(request: Payments.PostPaymentMethodsRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethodsResponse, Payments.PostPaymentMethodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of available payment methods for the transaction, based on the transaction information like amount, country, and currency.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postPaymentMethods();
  // TODO: Handle 'response' of type PaymentMethodsResponse
} catch (err) {
  if (err instanceof Payments.PostPaymentMethodsError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[PaymentMethodsRequest](src/models/payment-methods-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentMethodsResponse](src/models/payment-methods-response.ts)</code>

**OnError**: <code>[Payments.PostPaymentMethodsError](src/resources/payments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPayments(request: Payments.PostPaymentsRequest, options?: RequestOptions): ApiPromise&lt;PaymentResponse, Payments.PostPaymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends payment parameters (like amount, country, and currency) together with other required input details collected from the shopper. To know more about required parameters for specific payment methods, refer to our [payment method guides](https://docs.adyen.com/payment-methods). 
The response depends on the [payment flow](https://docs.adyen.com/payment-methods#payment-flow):
* For a direct flow, the response includes a `pspReference` and a `resultCode` with the payment result, for example **Authorised** or **Refused**. 
* For a redirect or additional action, the response contains an `action` object. 

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postPayments();
  // TODO: Handle 'response' of type PaymentResponse
} catch (err) {
  if (err instanceof Payments.PostPaymentsError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[PaymentRequest](src/models/payment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponse](src/models/payment-response.ts)</code>

**OnError**: <code>[Payments.PostPaymentsError](src/resources/payments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentsCancel(request: Payments.PostPaymentsCancelRequest, options?: RequestOptions): ApiPromise&lt;CancelPaymentResponse, Payments.PostPaymentsCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the payment. Returns a URL for user redirection.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postPaymentsCancel({ body });
  // TODO: Handle 'response' of type CancelPaymentResponse
} catch (err) {
  if (err instanceof Payments.PostPaymentsCancelError && err.payload.kind === "defaultErrorResponseEntity") {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CancelPaymentRequest](src/models/cancel-payment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelPaymentResponse](src/models/cancel-payment-response.ts)</code>

**OnError**: <code>[Payments.PostPaymentsCancelError](src/resources/payments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentsConfirm(request: Payments.PostPaymentsConfirmRequest, options?: RequestOptions): ApiPromise&lt;ConfirmPaymentResponse, Payments.PostPaymentsConfirmError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

    Confirms the payment using Strong Customer Authentication (SCA).

    To confirm a payment you must make this request two times:

    1. Make this request to initiate SCA and receive the WWW-Authenticate header.
    2. After the user completes the SCA challenge, make this request again, including the updated WWW-Authenticate header.

    The second response provides a redirection URL that guides the user to a payment success or failure page.
For more information, see our [documentation](https://docs.adyen.com/business-accounts/send-funds-ideal-integration).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postPaymentsConfirm({ body });
  // TODO: Handle 'response' of type ConfirmPaymentResponse
} catch (err) {
  if (err instanceof Payments.PostPaymentsConfirmError && err.payload.kind === "defaultErrorResponseEntity") {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wwwAuthenticate?</code> | <code>string</code> | Header for authenticating through SCA: Contains information for an SCA challenge for A2A payments. |
| <code>body</code> | <code>[ConfirmPaymentRequest](src/models/confirm-payment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConfirmPaymentResponse](src/models/confirm-payment-response.ts)</code>

**OnError**: <code>[Payments.PostPaymentsConfirmError](src/resources/payments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentsDetails(request: Payments.PostPaymentsDetailsRequest, options?: RequestOptions): ApiPromise&lt;PaymentDetailsResponse, Payments.PostPaymentsDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits details for a payment created using `/payments`. This step is only needed when no final state has been reached on the `/payments` request, for example when the shopper was redirected to another page to complete the payment.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postPaymentsDetails();
  // TODO: Handle 'response' of type PaymentDetailsResponse
} catch (err) {
  if (err instanceof Payments.PostPaymentsDetailsError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[PaymentDetailsRequest](src/models/payment-details-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentDetailsResponse](src/models/payment-details-response.ts)</code>

**OnError**: <code>[Payments.PostPaymentsDetailsError](src/resources/payments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentsDetails1(request: Payments.PostPaymentsDetails1Request, options?: RequestOptions): ApiPromise&lt;PaymentDetailsResponse1, Payments.PostPaymentsDetails1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of an open payment, which you must show to the user. Also provides a token required to [confirm](https://docs.adyen.com/api-explorer/a2a-payments/latest/post/payments/confirm) or [cancel](https://docs.adyen.com/api-explorer/a2a-payments/latest/post/payments/cancel) the payment.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postPaymentsDetails1({ body });
  // TODO: Handle 'response' of type PaymentDetailsResponse1
} catch (err) {
  if (
    err instanceof Payments.PostPaymentsDetails1Error && err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IdealPaymentDetailsRequest](src/models/ideal-payment-details-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentDetailsResponse1](src/models/payment-details-response1.ts)</code>

**OnError**: <code>[Payments.PostPaymentsDetails1Error](src/resources/payments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postRetrieve3Ds2Result(request: Payments.PostRetrieve3Ds2ResultRequest, options?: RequestOptions): ApiPromise&lt;ThreeDs2ResultResponse, Payments.PostRetrieve3Ds2ResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the `threeDS2Result` after doing a 3D Secure 2 authentication only.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postRetrieve3Ds2Result();
  // TODO: Handle 'response' of type ThreeDs2ResultResponse
} catch (err) {
  if (err instanceof Payments.PostRetrieve3Ds2ResultError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ThreeDs2ResultRequest](src/models/three-ds2-result-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ThreeDs2ResultResponse](src/models/three-ds2-result-response.ts)</code>

**OnError**: <code>[Payments.PostRetrieve3Ds2ResultError](src/resources/payments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postSessions(request: Payments.PostSessionsRequest, options?: RequestOptions): ApiPromise&lt;CreateCheckoutSessionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a payment session for [Drop-in](https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/?platform=Web&integration=Drop-in), [Components](https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/?platform=Web&integration=Components), and [Hosted Checkout](https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/?platform=Web&integration=Hosted+Checkout) integrations.

The response contains encrypted payment session data. The front end then uses the session data to make any required server-side calls for the payment flow.

You get the payment outcome asynchronously, in an [AUTHORISATION](https://docs.adyen.com/api-explorer/#/Webhooks/latest/post/AUTHORISATION) webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.postSessions();
  // TODO: Handle 'response' of type CreateCheckoutSessionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[CreateCheckoutSessionRequest](src/models/create-checkout-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateCheckoutSessionResponse](src/models/create-checkout-session-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Donations

> Source: [Donations](src/resources/donations.ts)

<details>
<summary><code>postDonationCampaigns(request: Donations.PostDonationCampaignsRequest, options?: RequestOptions): ApiPromise&lt;DonationCampaignsResponse, Donations.PostDonationCampaignsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queries the available donation campaigns for a donation based on the donation context (like merchant account, currency, and locale). The response contains active donation campaigns.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.donations.postDonationCampaigns();
  // TODO: Handle 'response' of type DonationCampaignsResponse
} catch (err) {
  if (err instanceof Donations.PostDonationCampaignsError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[DonationCampaignsRequest](src/models/donation-campaigns-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DonationCampaignsResponse](src/models/donation-campaigns-response.ts)</code>

**OnError**: <code>[Donations.PostDonationCampaignsError](src/resources/donations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDonations(request: Donations.PostDonationsRequest, options?: RequestOptions): ApiPromise&lt;DonationPaymentResponse, Donations.PostDonationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Takes in the donation token generated by the `/payments` request and uses it to make the donation.

For more information, see [Donations](https://docs.adyen.com/online-payments/donations).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.donations.postDonations();
  // TODO: Handle 'response' of type DonationPaymentResponse
} catch (err) {
  if (err instanceof Donations.PostDonationsError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[DonationPaymentRequest](src/models/donation-payment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DonationPaymentResponse](src/models/donation-payment-response.ts)</code>

**OnError**: <code>[Donations.PostDonationsError](src/resources/donations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentLinks

> Source: [PaymentLinks](src/resources/payment-links.ts)

<details>
<summary><code>getPaymentLinksLinkId(request: PaymentLinks.GetPaymentLinksLinkIdRequest, options?: RequestOptions): ApiPromise&lt;PaymentLinkResponse, PaymentLinks.GetPaymentLinksLinkIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the payment link details using the payment link `id`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentLinks.getPaymentLinksLinkId({ linkId });
  // TODO: Handle 'response' of type PaymentLinkResponse
} catch (err) {
  if (err instanceof PaymentLinks.GetPaymentLinksLinkIdError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linkId</code> | <code>string</code> | Unique identifier of the payment link. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentLinkResponse](src/models/payment-link-response.ts)</code>

**OnError**: <code>[PaymentLinks.GetPaymentLinksLinkIdError](src/resources/payment-links.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchPaymentLinksLinkId(request: PaymentLinks.PatchPaymentLinksLinkIdRequest, options?: RequestOptions): ApiPromise&lt;PaymentLinkResponse, PaymentLinks.PatchPaymentLinksLinkIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the status of a payment link. Use this endpoint to [force the expiry of a payment link](https://docs.adyen.com/online-payments/pay-by-link#update-payment-link-status).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentLinks.patchPaymentLinksLinkId({ linkId });
  // TODO: Handle 'response' of type PaymentLinkResponse
} catch (err) {
  if (err instanceof PaymentLinks.PatchPaymentLinksLinkIdError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linkId</code> | <code>string</code> | Unique identifier of the payment link. |
| <code>body?</code> | <code>[UpdatePaymentLinkRequest](src/models/update-payment-link-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentLinkResponse](src/models/payment-link-response.ts)</code>

**OnError**: <code>[PaymentLinks.PatchPaymentLinksLinkIdError](src/resources/payment-links.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentLinks(request: PaymentLinks.PostPaymentLinksRequest, options?: RequestOptions): ApiPromise&lt;PaymentLinkResponse, PaymentLinks.PostPaymentLinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a payment link to a [Pay by Link](https://docs.adyen.com/unified-commerce/pay-by-link/) page where the shopper can pay. The list of payment methods presented to the shopper depends on the `currency` and `country` parameters sent in the request.

For more information, refer to [Pay by Link documentation](https://docs.adyen.com/online-payments/pay-by-link#create-payment-links-through-api).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentLinks.postPaymentLinks();
  // TODO: Handle 'response' of type PaymentLinkResponse
} catch (err) {
  if (err instanceof PaymentLinks.PostPaymentLinksError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[PaymentLinkRequest](src/models/payment-link-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentLinkResponse](src/models/payment-link-response.ts)</code>

**OnError**: <code>[PaymentLinks.PostPaymentLinksError](src/resources/payment-links.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Modifications

> Source: [Modifications](src/resources/modifications.ts)

<details>
<summary><code>postAdjustAuthorisation(request: Modifications.PostAdjustAuthorisationRequest, options?: RequestOptions): ApiPromise&lt;ModificationResult, Modifications.PostAdjustAuthorisationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allows you to increase or decrease the authorised amount after the initial authorisation has taken place. This functionality enables for example tipping, improving the chances your authorisation will be valid, or charging the shopper when they have already left the merchant premises.

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/{paymentPspReference}/amountUpdates`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/amountUpdates) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

>The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postAdjustAuthorisation();
  // TODO: Handle 'response' of type ModificationResult
} catch (err) {
  if (err instanceof Modifications.PostAdjustAuthorisationError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AdjustAuthorisationRequest](src/models/adjust-authorisation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModificationResult](src/models/modification-result.ts)</code>

**OnError**: <code>[Modifications.PostAdjustAuthorisationError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCancel(request: Modifications.PostCancelRequest, options?: RequestOptions): ApiPromise&lt;ModificationResult, Modifications.PostCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the authorisation hold on a payment, returning a unique reference for this request. You can cancel payments after authorisation only for payment methods that support distinct authorisations and captures.

For more information, refer to [Cancel](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel).

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/{paymentPspReference}/cancels`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/cancels) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postCancel();
  // TODO: Handle 'response' of type ModificationResult
} catch (err) {
  if (err instanceof Modifications.PostCancelError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CancelRequest](src/models/cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModificationResult](src/models/modification-result.ts)</code>

**OnError**: <code>[Modifications.PostCancelError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCancelOrRefund(request: Modifications.PostCancelOrRefundRequest, options?: RequestOptions): ApiPromise&lt;ModificationResult, Modifications.PostCancelOrRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a payment if it has not been captured yet, or refunds it if it has already been captured. This is useful when it is not certain if the payment has been captured or not (for example, when using auto-capture).

Do not use this endpoint for payments that involve:
 * [Multiple partial captures](https://docs.adyen.com/online-payments/capture).
 * [Split data](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information) either at time of payment or capture for Adyen for Platforms.

 Instead, check if the payment has been captured and make a corresponding [`/refund`](https://docs.adyen.com/api-explorer/#/Payment/refund) or [`/cancel`](https://docs.adyen.com/api-explorer/#/Payment/cancel) call.

For more information, refer to [Cancel or refund](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel-or-refund).

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/reversals) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postCancelOrRefund();
  // TODO: Handle 'response' of type ModificationResult
} catch (err) {
  if (err instanceof Modifications.PostCancelOrRefundError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CancelOrRefundRequest](src/models/cancel-or-refund-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModificationResult](src/models/modification-result.ts)</code>

**OnError**: <code>[Modifications.PostCancelOrRefundError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCancels(request: Modifications.PostCancelsRequest, options?: RequestOptions): ApiPromise&lt;StandalonePaymentCancelResponse, Modifications.PostCancelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the authorisation on a payment that has not yet been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures), and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**TECHNICAL_CANCEL** webhook](https://docs.adyen.com/online-payments/cancel#cancellation-webhook).

If you want to cancel a payment using the [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference), use the [`/payments/{paymentPspReference}/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/cancels) endpoint instead.

If you want to cancel a payment but are not sure whether it has been captured, use the [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals) endpoint instead.

For more information, refer to [Cancel](https://docs.adyen.com/online-payments/cancel).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postCancels();
  // TODO: Handle 'response' of type StandalonePaymentCancelResponse
} catch (err) {
  if (err instanceof Modifications.PostCancelsError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[StandalonePaymentCancelRequest](src/models/standalone-payment-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StandalonePaymentCancelResponse](src/models/standalone-payment-cancel-response.ts)</code>

**OnError**: <code>[Modifications.PostCancelsError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCapture(request: Modifications.PostCaptureRequest, options?: RequestOptions): ApiPromise&lt;ModificationResult, Modifications.PostCaptureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Captures the authorisation hold on a payment, returning a unique reference for this request. Usually the full authorisation amount is captured, however it's also possible to capture a smaller amount, which results in cancelling the remaining authorisation balance.

Payment methods that are captured automatically after authorisation don't need to be captured. However, submitting a capture request on these transactions will not result in double charges. If immediate or delayed auto-capture is enabled, calling the capture method is not necessary.

For more information refer to [Capture](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/capture).

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/{paymentPspReference}/captures`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/captures) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postCapture();
  // TODO: Handle 'response' of type ModificationResult
} catch (err) {
  if (err instanceof Modifications.PostCaptureError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CaptureRequest](src/models/capture-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModificationResult](src/models/modification-result.ts)</code>

**OnError**: <code>[Modifications.PostCaptureError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDonate(request: Modifications.PostDonateRequest, options?: RequestOptions): ApiPromise&lt;ModificationResult, Modifications.PostDonateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a new payment to be created (including a new authorisation request) for the specified donation using the payment details of the original payment.

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/donations`](https://docs.adyen.com/api-explorer/Checkout/latest/post/donations) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postDonate();
  // TODO: Handle 'response' of type ModificationResult
} catch (err) {
  if (err instanceof Modifications.PostDonateError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DonationRequest](src/models/donation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModificationResult](src/models/modification-result.ts)</code>

**OnError**: <code>[Modifications.PostDonateError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentsPaymentPspReferenceAmountUpdates(request: Modifications.PostPaymentsPaymentPspReferenceAmountUpdatesRequest, options?: RequestOptions): ApiPromise&lt;PaymentAmountUpdateResponse, Modifications.PostPaymentsPaymentPspReferenceAmountUpdatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Increases or decreases the authorised payment amount and returns a unique reference for this request. You get the outcome of the request asynchronously, in an [**AUTHORISATION_ADJUSTMENT** webhook](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes).

You can only update authorised amounts that have not yet been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures).

The amount you specify in the request is the updated amount, which is larger or smaller than the initial authorised amount.

For more information, refer to [Authorisation adjustment](https://docs.adyen.com/online-payments/adjust-authorisation#use-cases).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postPaymentsPaymentPspReferenceAmountUpdates({
    paymentPspReference,
  });
  // TODO: Handle 'response' of type PaymentAmountUpdateResponse
} catch (err) {
  if (
    err instanceof Modifications.PostPaymentsPaymentPspReferenceAmountUpdatesError &&
      err.payload.kind === "serviceError"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentPspReference</code> | <code>string</code> | The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[PaymentAmountUpdateRequest](src/models/payment-amount-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentAmountUpdateResponse](src/models/payment-amount-update-response.ts)</code>

**OnError**: <code>[Modifications.PostPaymentsPaymentPspReferenceAmountUpdatesError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentsPaymentPspReferenceCancels(request: Modifications.PostPaymentsPaymentPspReferenceCancelsRequest, options?: RequestOptions): ApiPromise&lt;PaymentCancelResponse, Modifications.PostPaymentsPaymentPspReferenceCancelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the authorisation on a payment that has not yet been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures), and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CANCELLATION** webhook](https://docs.adyen.com/online-payments/cancel#cancellation-webhook).

If you want to cancel a payment but don't have the [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference), use the [`/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/cancels) endpoint instead.

If you want to cancel a payment but are not sure whether it has been captured, use the [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals) endpoint instead.

For more information, refer to [Cancel](https://docs.adyen.com/online-payments/cancel).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postPaymentsPaymentPspReferenceCancels({ paymentPspReference });
  // TODO: Handle 'response' of type PaymentCancelResponse
} catch (err) {
  if (
    err instanceof Modifications.PostPaymentsPaymentPspReferenceCancelsError &&
      err.payload.kind === "serviceError"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentPspReference</code> | <code>string</code> | The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment that you want to cancel. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[PaymentCancelRequest](src/models/payment-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentCancelResponse](src/models/payment-cancel-response.ts)</code>

**OnError**: <code>[Modifications.PostPaymentsPaymentPspReferenceCancelsError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentsPaymentPspReferenceCaptures(request: Modifications.PostPaymentsPaymentPspReferenceCapturesRequest, options?: RequestOptions): ApiPromise&lt;PaymentCaptureResponse, Modifications.PostPaymentsPaymentPspReferenceCapturesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

 Captures an authorised payment and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CAPTURE** webhook](https://docs.adyen.com/online-payments/capture#capture-notification).

You can capture either the full authorised amount or a part of the authorised amount. By default, any unclaimed amount after a partial capture gets cancelled. This does not apply if you enabled multiple partial captures on your account and the payment method supports multiple partial captures. 

[Automatic capture](https://docs.adyen.com/online-payments/capture#automatic-capture) is the default setting for most payment methods. In these cases, you don't need to make capture requests. However, making capture requests for payments that are captured automatically does not result in double charges.

For more information, refer to [Capture](https://docs.adyen.com/online-payments/capture).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postPaymentsPaymentPspReferenceCaptures({
    paymentPspReference,
  });
  // TODO: Handle 'response' of type PaymentCaptureResponse
} catch (err) {
  if (
    err instanceof Modifications.PostPaymentsPaymentPspReferenceCapturesError &&
      err.payload.kind === "serviceError"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentPspReference</code> | <code>string</code> | The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment that you want to capture. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[PaymentCaptureRequest](src/models/payment-capture-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentCaptureResponse](src/models/payment-capture-response.ts)</code>

**OnError**: <code>[Modifications.PostPaymentsPaymentPspReferenceCapturesError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentsPaymentPspReferenceRefunds(request: Modifications.PostPaymentsPaymentPspReferenceRefundsRequest, options?: RequestOptions): ApiPromise&lt;PaymentRefundResponse, Modifications.PostPaymentsPaymentPspReferenceRefundsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refunds a payment that has been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures), and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**REFUND** webhook](https://docs.adyen.com/online-payments/refund#refund-webhook).

You can refund either the full captured amount or a part of the captured amount. You can also perform multiple partial refunds, as long as their sum doesn't exceed the captured amount.

> Some payment methods do not support partial refunds. To learn if a payment method supports partial refunds, refer to the payment method page such as [cards](https://docs.adyen.com/payment-methods/cards#supported-cards), [iDEAL](https://docs.adyen.com/payment-methods/ideal), or [Klarna](https://docs.adyen.com/payment-methods/klarna). 

If you want to refund a payment but are not sure whether it has been captured, use the [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals) endpoint instead.

For more information, refer to [Refund](https://docs.adyen.com/online-payments/refund).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postPaymentsPaymentPspReferenceRefunds({ paymentPspReference });
  // TODO: Handle 'response' of type PaymentRefundResponse
} catch (err) {
  if (
    err instanceof Modifications.PostPaymentsPaymentPspReferenceRefundsError &&
      err.payload.kind === "serviceError"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentPspReference</code> | <code>string</code> | The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment that you want to refund. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[PaymentRefundRequest](src/models/payment-refund-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentRefundResponse](src/models/payment-refund-response.ts)</code>

**OnError**: <code>[Modifications.PostPaymentsPaymentPspReferenceRefundsError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentsPaymentPspReferenceReversals(request: Modifications.PostPaymentsPaymentPspReferenceReversalsRequest, options?: RequestOptions): ApiPromise&lt;PaymentReversalResponse, Modifications.PostPaymentsPaymentPspReferenceReversalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

[Refunds](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/refunds) a payment if it has already been captured, and [cancels](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/cancels) a payment if it has not yet been captured. Returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CANCEL_OR_REFUND** webhook](https://docs.adyen.com/online-payments/reversal/#cancel-or-refund-webhook).

The reversed amount is always the full payment amount.
> Do not use this request for payments that involve multiple partial captures.

For more information, refer to [Reversal](https://docs.adyen.com/online-payments/reversal).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postPaymentsPaymentPspReferenceReversals({
    paymentPspReference,
  });
  // TODO: Handle 'response' of type PaymentReversalResponse
} catch (err) {
  if (
    err instanceof Modifications.PostPaymentsPaymentPspReferenceReversalsError &&
      err.payload.kind === "serviceError"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentPspReference</code> | <code>string</code> | The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment that you want to reverse. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[PaymentReversalRequest](src/models/payment-reversal-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentReversalResponse](src/models/payment-reversal-response.ts)</code>

**OnError**: <code>[Modifications.PostPaymentsPaymentPspReferenceReversalsError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postRefund(request: Modifications.PostRefundRequest, options?: RequestOptions): ApiPromise&lt;ModificationResult, Modifications.PostRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refunds a payment that has previously been captured, returning a unique reference for this request. Refunding can be done on the full captured amount or a partial amount. Multiple (partial) refunds will be accepted as long as their sum doesn't exceed the captured amount. Payments which have been authorised, but not captured, cannot be refunded, use the /cancel method instead.

Some payment methods/gateways do not support partial/multiple refunds.
A margin above the captured limit can be configured to cover shipping/handling costs.

For more information, refer to [Refund](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/refund).

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/payments/{paymentPspReference}/refunds`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/refunds) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postRefund();
  // TODO: Handle 'response' of type ModificationResult
} catch (err) {
  if (err instanceof Modifications.PostRefundError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[RefundRequest](src/models/refund-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModificationResult](src/models/modification-result.ts)</code>

**OnError**: <code>[Modifications.PostRefundError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postTechnicalCancel(request: Modifications.PostTechnicalCancelRequest, options?: RequestOptions): ApiPromise&lt;ModificationResult, Modifications.PostTechnicalCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to cancel a payment if you do not have the PSP reference of the original payment request available.

In your call, refer to the original payment by using the `reference` that you specified in your payment request.

For more information, see [Technical cancel](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel#technical-cancel). 

> This endpoint is [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle) and is no longer supported for new integrations.
> * If you are building a new integration, use the Checkout API [`/cancels`](https://docs.adyen.com/api-explorer/Checkout/latest/post/cancels) endpoint instead.
> * If you have an existing integration using this endpoint, reach out to your Adyen contact and [migrate to the Checkout API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).

> The Checkout API enables your [online payments](https://docs.adyen.com/online-payments) integration to accept all supported payment methods, use the latest features, and access more benefits.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postTechnicalCancel();
  // TODO: Handle 'response' of type ModificationResult
} catch (err) {
  if (err instanceof Modifications.PostTechnicalCancelError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TechnicalCancelRequest](src/models/technical-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModificationResult](src/models/modification-result.ts)</code>

**OnError**: <code>[Modifications.PostTechnicalCancelError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postVoidPendingRefund(request: Modifications.PostVoidPendingRefundRequest, options?: RequestOptions): ApiPromise&lt;ModificationResult, Modifications.PostVoidPendingRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to cancel an unreferenced refund request before it has been completed.

In your call, you can refer to the original refund request either by using the `tenderReference`, or the `pspReference`. We recommend implementing based on the `tenderReference`, as this is generated for both offline and online transactions.

For more information, refer to [Cancel an unreferenced refund](https://docs.adyen.com/point-of-sale/basic-tapi-integration/refund-payment/cancel-unreferenced).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.modifications.postVoidPendingRefund();
  // TODO: Handle 'response' of type ModificationResult
} catch (err) {
  if (err instanceof Modifications.PostVoidPendingRefundError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[VoidPendingRefundRequest](src/models/void-pending-refund-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModificationResult](src/models/modification-result.ts)</code>

**OnError**: <code>[Modifications.PostVoidPendingRefundError](src/resources/modifications.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RecurringApi

> Source: [RecurringApi](src/resources/recurring-api.ts)

<details>
<summary><code>deleteStoredPaymentMethodsStoredPaymentMethodId(request: RecurringApi.DeleteStoredPaymentMethodsStoredPaymentMethodIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the token identified in the path. The token can no longer be used with payment requests.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.recurringApi.deleteStoredPaymentMethodsStoredPaymentMethodId({
    storedPaymentMethodId,
    shopperReference,
    merchantAccount,
  });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storedPaymentMethodId</code> | <code>string</code> | The unique identifier of the token. |
| <code>shopperReference</code> | <code>string</code> | Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| <code>merchantAccount</code> | <code>string</code> | Your merchant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStoredPaymentMethods(request: RecurringApi.GetStoredPaymentMethodsRequest, options?: RequestOptions): ApiPromise&lt;ListStoredPaymentMethodsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tokens for stored payment details for the shopper identified in the path, if there are any available. The token ID can be used with payment requests for the shopper's payment. A summary of the stored details is included.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringApi.getStoredPaymentMethods();
  // TODO: Handle 'response' of type ListStoredPaymentMethodsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>shopperReference?</code> | <code>string</code> | Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| <code>merchantAccount?</code> | <code>string</code> | Your merchant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListStoredPaymentMethodsResponse](src/models/list-stored-payment-methods-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postForward(request: RecurringApi.PostForwardRequest, options?: RequestOptions): ApiPromise&lt;CheckoutForwardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Forwards the payment details you stored with Adyen to a third-party that you specify and returns the response from the third-party. Supports forwarding stored card details or [network tokens](https://docs.adyen.com/online-payments/network-tokenization). For more information, see [Forward stored payment details](https://docs.adyen.com/online-payments/tokenization/forward-payment-details).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringApi.postForward();
  // TODO: Handle 'response' of type CheckoutForwardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[CheckoutForwardRequest](src/models/checkout-forward-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutForwardResponse](src/models/checkout-forward-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postStoredPaymentMethods(request: RecurringApi.PostStoredPaymentMethodsRequest, options?: RequestOptions): ApiPromise&lt;StoredPaymentMethodResource, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a token to store the shopper's payment details. This token can be used for the shopper's future payments.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringApi.postStoredPaymentMethods();
  // TODO: Handle 'response' of type StoredPaymentMethodResource
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[StoredPaymentMethodRequest](src/models/stored-payment-method-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoredPaymentMethodResource](src/models/stored-payment-method-resource.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](src/resources/orders.ts)

<details>
<summary><code>postOrders(request: Orders.PostOrdersRequest, options?: RequestOptions): ApiPromise&lt;CreateOrderResponse, Orders.PostOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an order to be used for partial payments. Make a POST `/orders` call before making a `/payments` call when processing payments with different payment methods.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.postOrders();
  // TODO: Handle 'response' of type CreateOrderResponse
} catch (err) {
  if (err instanceof Orders.PostOrdersError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[CreateOrderRequest](src/models/create-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateOrderResponse](src/models/create-order-response.ts)</code>

**OnError**: <code>[Orders.PostOrdersError](src/resources/orders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postOrdersCancel(request: Orders.PostOrdersCancelRequest, options?: RequestOptions): ApiPromise&lt;CancelOrderResponse, Orders.PostOrdersCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels an order. Cancellation of an order results in an automatic rollback of all payments made in the order, either by canceling or refunding the payment, depending on the type of payment method.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.postOrdersCancel();
  // TODO: Handle 'response' of type CancelOrderResponse
} catch (err) {
  if (err instanceof Orders.PostOrdersCancelError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[CancelOrderRequest](src/models/cancel-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelOrderResponse](src/models/cancel-order-response.ts)</code>

**OnError**: <code>[Orders.PostOrdersCancelError](src/resources/orders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentMethodsBalance(request: Orders.PostPaymentMethodsBalanceRequest, options?: RequestOptions): ApiPromise&lt;BalanceCheckResponse, Orders.PostPaymentMethodsBalanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the balance remaining on a shopper's gift card. To check a gift card's balance, make a POST `/paymentMethods/balance` call and include the gift card's details inside a `paymentMethod` object.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.postPaymentMethodsBalance();
  // TODO: Handle 'response' of type BalanceCheckResponse
} catch (err) {
  if (err instanceof Orders.PostPaymentMethodsBalanceError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[BalanceCheckRequest](src/models/balance-check-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceCheckResponse](src/models/balance-check-response.ts)</code>

**OnError**: <code>[Orders.PostPaymentMethodsBalanceError](src/resources/orders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Utility

> Source: [Utility](src/resources/utility.ts)

<details>
<summary><code>postApplePaySessions(request: Utility.PostApplePaySessionsRequest, options?: RequestOptions): ApiPromise&lt;ApplePaySessionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You need to use this endpoint if you have an API-only integration with Apple Pay which uses Adyen's Apple Pay certificate.

The endpoint returns the Apple Pay session data which you need to complete the [Apple Pay session validation](https://docs.adyen.com/payment-methods/apple-pay/api-only?tab=adyen-certificate-validation_1#complete-apple-pay-session-validation).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.utility.postApplePaySessions();
  // TODO: Handle 'response' of type ApplePaySessionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[ApplePaySessionRequest](src/models/apple-pay-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplePaySessionResponse](src/models/apple-pay-session-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postOriginKeys(request: Utility.PostOriginKeysRequest, options?: RequestOptions): ApiPromise&lt;UtilityResponse, Utility.PostOriginKeysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation takes the origin domains and returns a JSON object containing the corresponding origin keys for the domains. 
> If you're still using origin key for your Web Drop-in or Components integration, we recommend [switching to client key](https://docs.adyen.com/development-resources/client-side-authentication/migrate-from-origin-key-to-client-key). This allows you to use a single key for all origins, add or remove origins without generating a new key, and detect the card type from the number entered in your payment form. 

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.utility.postOriginKeys();
  // TODO: Handle 'response' of type UtilityResponse
} catch (err) {
  if (err instanceof Utility.PostOriginKeysError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[UtilityRequest](src/models/utility-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UtilityResponse](src/models/utility-response.ts)</code>

**OnError**: <code>[Utility.PostOriginKeysError](src/resources/utility.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaypalUpdateOrder(request: Utility.PostPaypalUpdateOrderRequest, options?: RequestOptions): ApiPromise&lt;PaypalUpdateOrderResponse, Utility.PostPaypalUpdateOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the order for PayPal Express Checkout. This can be used to update the PayPal lightbox with an updated amount and delivery methods based on the delivery address.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.utility.postPaypalUpdateOrder();
  // TODO: Handle 'response' of type PaypalUpdateOrderResponse
} catch (err) {
  if (err instanceof Utility.PostPaypalUpdateOrderError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[PaypalUpdateOrderRequest](src/models/paypal-update-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaypalUpdateOrderResponse](src/models/paypal-update-order-response.ts)</code>

**OnError**: <code>[Utility.PostPaypalUpdateOrderError](src/resources/utility.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postValidateShopperId(request: Utility.PostValidateShopperIdRequest, options?: RequestOptions): ApiPromise&lt;ValidateShopperIdResponse, Utility.PostValidateShopperIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validates the shopperId.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.utility.postValidateShopperId({ body });
  // TODO: Handle 'response' of type ValidateShopperIdResponse
} catch (err) {
  if (
    err instanceof Utility.PostValidateShopperIdError && err.payload.kind === "checkoutErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type CheckoutErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ValidateShopperIdRequest](src/models/validate-shopper-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValidateShopperIdResponse](src/models/validate-shopper-id-response.ts)</code>

**OnError**: <code>[Utility.PostValidateShopperIdError](src/resources/utility.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## General

> Source: [General](src/resources/general.ts)

<details>
<summary><code>postAcceptDispute(request: General.PostAcceptDisputeRequest, options?: RequestOptions): ApiPromise&lt;AcceptDisputeResponse, General.PostAcceptDisputeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts a specific dispute.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postAcceptDispute();
  // TODO: Handle 'response' of type AcceptDisputeResponse
} catch (err) {
  if (err instanceof General.PostAcceptDisputeError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AcceptDisputeRequest](src/models/accept-dispute-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AcceptDisputeResponse](src/models/accept-dispute-response.ts)</code>

**OnError**: <code>[General.PostAcceptDisputeError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postAccountHolderBalance(request: General.PostAccountHolderBalanceRequest, options?: RequestOptions): ApiPromise&lt;AccountHolderBalanceResponse, General.PostAccountHolderBalanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the account balances of an account holder. An account's balances are organized according by currencies. This mean that an account may have multiple balances: one for each currency.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postAccountHolderBalance();
  // TODO: Handle 'response' of type AccountHolderBalanceResponse
} catch (err) {
  if (err instanceof General.PostAccountHolderBalanceError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CloseAccountHolderRequest](src/models/close-account-holder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountHolderBalanceResponse](src/models/account-holder-balance-response.ts)</code>

**OnError**: <code>[General.PostAccountHolderBalanceError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postAccountHolderTransactionList(request: General.PostAccountHolderTransactionListRequest, options?: RequestOptions): ApiPromise&lt;AccountHolderTransactionListResponse, General.PostAccountHolderTransactionListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of transactions for an account holder's accounts. You can specify the accounts and transaction statuses to be included on the list. The call returns a maximum of 50 transactions for each account. To retrieve all transactions, you must make another call with the 'page' value incremented. Transactions are listed in chronological order, with the most recent transaction first.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postAccountHolderTransactionList();
  // TODO: Handle 'response' of type AccountHolderTransactionListResponse
} catch (err) {
  if (err instanceof General.PostAccountHolderTransactionListError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AccountHolderTransactionListRequest](src/models/account-holder-transaction-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountHolderTransactionListResponse](src/models/account-holder-transaction-list-response.ts)</code>

**OnError**: <code>[General.PostAccountHolderTransactionListError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postAssignTerminals(request: General.PostAssignTerminalsRequest, options?: RequestOptions): ApiPromise&lt;AssignTerminalsResponse, General.PostAssignTerminalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns one or more payment terminals to a merchant account or a store. You can also use this endpoint to reassign terminals between merchant accounts or stores, and to unassign a terminal and return it to company inventory.

>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postAssignTerminals();
  // TODO: Handle 'response' of type AssignTerminalsResponse
} catch (err) {
  if (err instanceof General.PostAssignTerminalsError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AssignTerminalsRequest](src/models/assign-terminals-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AssignTerminalsResponse](src/models/assign-terminals-response.ts)</code>

**OnError**: <code>[General.PostAssignTerminalsError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postChangeStatus(request: General.PostChangeStatusRequest, options?: RequestOptions): ApiPromise&lt;StoredValueStatusChangeResponse, General.PostChangeStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the status of the provided payment method to the specified status.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postChangeStatus();
  // TODO: Handle 'response' of type StoredValueStatusChangeResponse
} catch (err) {
  if (err instanceof General.PostChangeStatusError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[StoredValueStatusChangeRequest](src/models/stored-value-status-change-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoredValueStatusChangeResponse](src/models/stored-value-status-change-response.ts)</code>

**OnError**: <code>[General.PostChangeStatusError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCheckBalance(request: General.PostCheckBalanceRequest, options?: RequestOptions): ApiPromise&lt;StoredValueBalanceCheckResponse, General.PostCheckBalanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks the balance of the provided payment method.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postCheckBalance();
  // TODO: Handle 'response' of type StoredValueBalanceCheckResponse
} catch (err) {
  if (err instanceof General.PostCheckBalanceError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[StoredValueBalanceCheckRequest](src/models/stored-value-balance-check-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoredValueBalanceCheckResponse](src/models/stored-value-balance-check-response.ts)</code>

**OnError**: <code>[General.PostCheckBalanceError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCreateNotificationConfiguration(request: General.PostCreateNotificationConfigurationRequest, options?: RequestOptions): ApiPromise&lt;GetNotificationConfigurationResponse, General.PostCreateNotificationConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postCreateNotificationConfiguration();
  // TODO: Handle 'response' of type GetNotificationConfigurationResponse
} catch (err) {
  if (
    err instanceof General.PostCreateNotificationConfigurationError && err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateNotificationConfigurationRequest](src/models/create-notification-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetNotificationConfigurationResponse](src/models/get-notification-configuration-response.ts)</code>

**OnError**: <code>[General.PostCreateNotificationConfigurationError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCreatePermit(request: General.PostCreatePermitRequest, options?: RequestOptions): ApiPromise&lt;CreatePermitResult, General.PostCreatePermitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create permits for a recurring contract, including support for defining restrictions.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postCreatePermit();
  // TODO: Handle 'response' of type CreatePermitResult
} catch (err) {
  if (err instanceof General.PostCreatePermitError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreatePermitRequest](src/models/create-permit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreatePermitResult](src/models/create-permit-result.ts)</code>

**OnError**: <code>[General.PostCreatePermitError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCreateTestCardRanges(request: General.PostCreateTestCardRangesRequest, options?: RequestOptions): ApiPromise&lt;CreateTestCardRangesResult, General.PostCreateTestCardRangesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates one or more test card ranges.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postCreateTestCardRanges();
  // TODO: Handle 'response' of type CreateTestCardRangesResult
} catch (err) {
  if (err instanceof General.PostCreateTestCardRangesError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateTestCardRangesRequest](src/models/create-test-card-ranges-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateTestCardRangesResult](src/models/create-test-card-ranges-result.ts)</code>

**OnError**: <code>[General.PostCreateTestCardRangesError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDebitAccountHolder(request: General.PostDebitAccountHolderRequest, options?: RequestOptions): ApiPromise&lt;DebitAccountHolderResponse, General.PostDebitAccountHolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a direct debit request to an account holder's bank account. If the direct debit is successful, the funds are settled in the accounts specified in the split instructions. Adyen sends the result of the direct debit in a [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED) notification webhook.

 To learn more about direct debits, see [Top up accounts](https://docs.adyen.com/classic-platforms/top-up-accounts).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postDebitAccountHolder();
  // TODO: Handle 'response' of type DebitAccountHolderResponse
} catch (err) {
  if (err instanceof General.PostDebitAccountHolderError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DebitAccountHolderRequest](src/models/debit-account-holder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DebitAccountHolderResponse](src/models/debit-account-holder-response.ts)</code>

**OnError**: <code>[General.PostDebitAccountHolderError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDefendDispute(request: General.PostDefendDisputeRequest, options?: RequestOptions): ApiPromise&lt;DefendDisputeResponse, General.PostDefendDisputeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Defends a specific dispute.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postDefendDispute();
  // TODO: Handle 'response' of type DefendDisputeResponse
} catch (err) {
  if (err instanceof General.PostDefendDisputeError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DefendDisputeRequest](src/models/defend-dispute-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DefendDisputeResponse](src/models/defend-dispute-response.ts)</code>

**OnError**: <code>[General.PostDefendDisputeError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDeleteDisputeDefenseDocument(request: General.PostDeleteDisputeDefenseDocumentRequest, options?: RequestOptions): ApiPromise&lt;DeleteDefenseDocumentResponse, General.PostDeleteDisputeDefenseDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific dispute defense document that was supplied earlier.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postDeleteDisputeDefenseDocument();
  // TODO: Handle 'response' of type DeleteDefenseDocumentResponse
} catch (err) {
  if (err instanceof General.PostDeleteDisputeDefenseDocumentError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DeleteDefenseDocumentRequest](src/models/delete-defense-document-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteDefenseDocumentResponse](src/models/delete-defense-document-response.ts)</code>

**OnError**: <code>[General.PostDeleteDisputeDefenseDocumentError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDeleteNotificationConfigurations(request: General.PostDeleteNotificationConfigurationsRequest, options?: RequestOptions): ApiPromise&lt;GenericResponse, General.PostDeleteNotificationConfigurationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL defined in the subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postDeleteNotificationConfigurations();
  // TODO: Handle 'response' of type GenericResponse
} catch (err) {
  if (
    err instanceof General.PostDeleteNotificationConfigurationsError && err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DeleteNotificationConfigurationRequest](src/models/delete-notification-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericResponse](src/models/generic-response.ts)</code>

**OnError**: <code>[General.PostDeleteNotificationConfigurationsError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDisable(request: General.PostDisableRequest, options?: RequestOptions): ApiPromise&lt;DisableResult, General.PostDisableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables stored payment details to stop charging a shopper with this particular recurring detail ID.

For more information, refer to [Disable stored details](https://docs.adyen.com/online-payments/classic-integrations/classic-api-integration/tokenization/disable-stored-details).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postDisable();
  // TODO: Handle 'response' of type DisableResult
} catch (err) {
  if (err instanceof General.PostDisableError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DisableRequest](src/models/disable-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisableResult](src/models/disable-result.ts)</code>

**OnError**: <code>[General.PostDisableError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDisablePermit(request: General.PostDisablePermitRequest, options?: RequestOptions): ApiPromise&lt;DisablePermitResult, General.PostDisablePermitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disable a permit that was previously linked to a recurringDetailReference.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postDisablePermit();
  // TODO: Handle 'response' of type DisablePermitResult
} catch (err) {
  if (err instanceof General.PostDisablePermitError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DisablePermitRequest](src/models/disable-permit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisablePermitResult](src/models/disable-permit-result.ts)</code>

**OnError**: <code>[General.PostDisablePermitError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postFindTerminal(request: General.PostFindTerminalRequest, options?: RequestOptions): ApiPromise&lt;FindTerminalResponse, General.PostFindTerminalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the company account, merchant account, or store that a payment terminal is assigned to.

>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postFindTerminal();
  // TODO: Handle 'response' of type FindTerminalResponse
} catch (err) {
  if (err instanceof General.PostFindTerminalError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[FindTerminalRequest](src/models/find-terminal-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindTerminalResponse](src/models/find-terminal-response.ts)</code>

**OnError**: <code>[General.PostFindTerminalError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGet3DsAvailability(request: General.PostGet3DsAvailabilityRequest, options?: RequestOptions): ApiPromise&lt;ThreeDsAvailabilityResponse, General.PostGet3DsAvailabilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.

For more information, refer to [3D Secure 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postGet3DsAvailability();
  // TODO: Handle 'response' of type ThreeDsAvailabilityResponse
} catch (err) {
  if (err instanceof General.PostGet3DsAvailabilityError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ThreeDsAvailabilityRequest](src/models/three-ds-availability-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ThreeDsAvailabilityResponse](src/models/three-ds-availability-response.ts)</code>

**OnError**: <code>[General.PostGet3DsAvailabilityError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetCostEstimate(request: General.PostGetCostEstimateRequest, options?: RequestOptions): ApiPromise&lt;CostEstimateResponse, General.PostGetCostEstimateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

>This API is available only for merchants operating in Australia, the EU, and the UK.

Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.

To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).

> Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postGetCostEstimate();
  // TODO: Handle 'response' of type CostEstimateResponse
} catch (err) {
  if (err instanceof General.PostGetCostEstimateError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CostEstimateRequest](src/models/cost-estimate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CostEstimateResponse](src/models/cost-estimate-response.ts)</code>

**OnError**: <code>[General.PostGetCostEstimateError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetNotificationConfiguration(request: General.PostGetNotificationConfigurationRequest, options?: RequestOptions): ApiPromise&lt;GetNotificationConfigurationResponse, General.PostGetNotificationConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the configuration of a notification subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postGetNotificationConfiguration();
  // TODO: Handle 'response' of type GetNotificationConfigurationResponse
} catch (err) {
  if (err instanceof General.PostGetNotificationConfigurationError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetNotificationConfigurationRequest](src/models/get-notification-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetNotificationConfigurationResponse](src/models/get-notification-configuration-response.ts)</code>

**OnError**: <code>[General.PostGetNotificationConfigurationError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetNotificationConfigurationList(request: General.PostGetNotificationConfigurationListRequest, options?: RequestOptions): ApiPromise&lt;GetNotificationConfigurationListResponse, General.PostGetNotificationConfigurationListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the configurations of all of the notification subscriptions in the platform of the executing user.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postGetNotificationConfigurationList();
  // TODO: Handle 'response' of type GetNotificationConfigurationListResponse
} catch (err) {
  if (
    err instanceof General.PostGetNotificationConfigurationListError && err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetNotificationConfigurationListResponse](src/models/get-notification-configuration-list-response.ts)</code>

**OnError**: <code>[General.PostGetNotificationConfigurationListError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetStoresUnderAccount(request: General.PostGetStoresUnderAccountRequest, options?: RequestOptions): ApiPromise&lt;GetStoresUnderAccountResponse, General.PostGetStoresUnderAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of stores associated with a company account or a merchant account, including the status of each store.

>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postGetStoresUnderAccount();
  // TODO: Handle 'response' of type GetStoresUnderAccountResponse
} catch (err) {
  if (err instanceof General.PostGetStoresUnderAccountError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetStoresUnderAccountRequest](src/models/get-stores-under-account-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetStoresUnderAccountResponse](src/models/get-stores-under-account-response.ts)</code>

**OnError**: <code>[General.PostGetStoresUnderAccountError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetTerminalDetails(request: General.PostGetTerminalDetailsRequest, options?: RequestOptions): ApiPromise&lt;GetTerminalDetailsResponse, General.PostGetTerminalDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a payment terminal, including where the terminal is assigned to. The response returns the same details that are provided in the terminal list in your Customer Area and in the Terminal Fleet report.

>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postGetTerminalDetails();
  // TODO: Handle 'response' of type GetTerminalDetailsResponse
} catch (err) {
  if (err instanceof General.PostGetTerminalDetailsError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetTerminalDetailsRequest](src/models/get-terminal-details-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTerminalDetailsResponse](src/models/get-terminal-details-response.ts)</code>

**OnError**: <code>[General.PostGetTerminalDetailsError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetTerminalsUnderAccount(request: General.PostGetTerminalsUnderAccountRequest, options?: RequestOptions): ApiPromise&lt;GetTerminalsUnderAccountResponse, General.PostGetTerminalsUnderAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of payment terminals associated with a company account, merchant account, or store. The response shows whether the terminals are in the inventory, or in-store (ready for boarding or already boarded).

>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postGetTerminalsUnderAccount();
  // TODO: Handle 'response' of type GetTerminalsUnderAccountResponse
} catch (err) {
  if (err instanceof General.PostGetTerminalsUnderAccountError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetTerminalsUnderAccountRequest](src/models/get-terminals-under-account-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTerminalsUnderAccountResponse](src/models/get-terminals-under-account-response.ts)</code>

**OnError**: <code>[General.PostGetTerminalsUnderAccountError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postIssue(request: General.PostIssueRequest, options?: RequestOptions): ApiPromise&lt;StoredValueIssueResponse, General.PostIssueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Issues a new card of the given payment method.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postIssue();
  // TODO: Handle 'response' of type StoredValueIssueResponse
} catch (err) {
  if (err instanceof General.PostIssueError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[StoredValueIssueRequest](src/models/stored-value-issue-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoredValueIssueResponse](src/models/stored-value-issue-response.ts)</code>

**OnError**: <code>[General.PostIssueError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postListRecurringDetails(request: General.PostListRecurringDetailsRequest, options?: RequestOptions): ApiPromise&lt;RecurringDetailsResult, General.PostListRecurringDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.

For more information, refer to [Retrieve stored details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postListRecurringDetails();
  // TODO: Handle 'response' of type RecurringDetailsResult
} catch (err) {
  if (err instanceof General.PostListRecurringDetailsError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[RecurringDetailsRequest](src/models/recurring-details-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringDetailsResult](src/models/recurring-details-result.ts)</code>

**OnError**: <code>[General.PostListRecurringDetailsError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postLoad(request: General.PostLoadRequest, options?: RequestOptions): ApiPromise&lt;StoredValueLoadResponse, General.PostLoadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Loads the payment method with the specified funds.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postLoad();
  // TODO: Handle 'response' of type StoredValueLoadResponse
} catch (err) {
  if (err instanceof General.PostLoadError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[StoredValueLoadRequest](src/models/stored-value-load-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoredValueLoadResponse](src/models/stored-value-load-response.ts)</code>

**OnError**: <code>[General.PostLoadError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMergeBalance(request: General.PostMergeBalanceRequest, options?: RequestOptions): ApiPromise&lt;StoredValueBalanceMergeResponse, General.PostMergeBalanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Increases the balance of the paymentmethod by the full amount left on the source paymentmethod

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postMergeBalance();
  // TODO: Handle 'response' of type StoredValueBalanceMergeResponse
} catch (err) {
  if (err instanceof General.PostMergeBalanceError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[StoredValueBalanceMergeRequest](src/models/stored-value-balance-merge-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoredValueBalanceMergeResponse](src/models/stored-value-balance-merge-response.ts)</code>

**OnError**: <code>[General.PostMergeBalanceError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postNotifyShopper(request: General.PostNotifyShopperRequest, options?: RequestOptions): ApiPromise&lt;NotifyShopperResult, General.PostNotifyShopperError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a request to the issuer so they can inform the shopper about the upcoming recurring payment. This endpoint is used only for local acquiring in India. For more information, refer to [Recurring card payments in India](https://docs.adyen.com/payment-methods/cards/cards-recurring-india).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postNotifyShopper();
  // TODO: Handle 'response' of type NotifyShopperResult
} catch (err) {
  if (err instanceof General.PostNotifyShopperError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[NotifyShopperRequest](src/models/notify-shopper-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotifyShopperResult](src/models/notify-shopper-result.ts)</code>

**OnError**: <code>[General.PostNotifyShopperError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPayoutAccountHolder(request: General.PostPayoutAccountHolderRequest, options?: RequestOptions): ApiPromise&lt;PayoutAccountHolderResponse, General.PostPayoutAccountHolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pays out a specified amount from an account to the bank account of account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postPayoutAccountHolder();
  // TODO: Handle 'response' of type PayoutAccountHolderResponse
} catch (err) {
  if (err instanceof General.PostPayoutAccountHolderError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PayoutAccountHolderRequest](src/models/payout-account-holder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutAccountHolderResponse](src/models/payout-account-holder-response.ts)</code>

**OnError**: <code>[General.PostPayoutAccountHolderError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postRefundFundsTransfer(request: General.PostRefundFundsTransferRequest, options?: RequestOptions): ApiPromise&lt;RefundFundsTransferResponse, General.PostRefundFundsTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refunds funds transferred from one account to another. Both accounts must be in the same platform, but can have different account holders. 

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postRefundFundsTransfer();
  // TODO: Handle 'response' of type RefundFundsTransferResponse
} catch (err) {
  if (err instanceof General.PostRefundFundsTransferError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[RefundFundsTransferRequest](src/models/refund-funds-transfer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RefundFundsTransferResponse](src/models/refund-funds-transfer-response.ts)</code>

**OnError**: <code>[General.PostRefundFundsTransferError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postRefundNotPaidOutTransfers(request: General.PostRefundNotPaidOutTransfersRequest, options?: RequestOptions): ApiPromise&lt;GenericResponse, General.PostRefundNotPaidOutTransfersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refunds all the transactions of an account that have taken place since the most recent payout. This request is on a account basis (as opposed to a payment basis), so only the portion of the payment that was made to the specified account is refunded. The commissions, fees, and payments to other accounts remain in the accounts to which they were sent as designated by the original payment's split details.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postRefundNotPaidOutTransfers();
  // TODO: Handle 'response' of type GenericResponse
} catch (err) {
  if (err instanceof General.PostRefundNotPaidOutTransfersError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[RefundNotPaidOutTransfersRequest](src/models/refund-not-paid-out-transfers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericResponse](src/models/generic-response.ts)</code>

**OnError**: <code>[General.PostRefundNotPaidOutTransfersError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postRequestSubjectErasure(request: General.PostRequestSubjectErasureRequest, options?: RequestOptions): ApiPromise&lt;SubjectErasureResponse, General.PostRequestSubjectErasureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends the PSP reference containing the shopper data that should be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postRequestSubjectErasure();
  // TODO: Handle 'response' of type SubjectErasureResponse
} catch (err) {
  if (err instanceof General.PostRequestSubjectErasureError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SubjectErasureByPspReferenceRequest](src/models/subject-erasure-by-psp-reference-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubjectErasureResponse](src/models/subject-erasure-response.ts)</code>

**OnError**: <code>[General.PostRequestSubjectErasureError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postRetrieveApplicableDefenseReasons(request: General.PostRetrieveApplicableDefenseReasonsRequest, options?: RequestOptions): ApiPromise&lt;DefenseReasonsResponse, General.PostRetrieveApplicableDefenseReasonsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all applicable defense reasons to defend a specific dispute.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postRetrieveApplicableDefenseReasons();
  // TODO: Handle 'response' of type DefenseReasonsResponse
} catch (err) {
  if (
    err instanceof General.PostRetrieveApplicableDefenseReasonsError && err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DefenseReasonsRequest](src/models/defense-reasons-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DefenseReasonsResponse](src/models/defense-reasons-response.ts)</code>

**OnError**: <code>[General.PostRetrieveApplicableDefenseReasonsError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postScheduleAccountUpdater(request: General.PostScheduleAccountUpdaterRequest, options?: RequestOptions): ApiPromise&lt;ScheduleAccountUpdaterResult, General.PostScheduleAccountUpdaterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When making the API call, you can submit either the credit card information, or the recurring detail reference and the shopper reference:
* If the card information is provided, all the sub-fields for `card` are mandatory.
* If the recurring detail reference is provided, the fields for `shopperReference` and `selectedRecurringDetailReference` are mandatory.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postScheduleAccountUpdater();
  // TODO: Handle 'response' of type ScheduleAccountUpdaterResult
} catch (err) {
  if (err instanceof General.PostScheduleAccountUpdaterError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ScheduleAccountUpdaterRequest](src/models/schedule-account-updater-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduleAccountUpdaterResult](src/models/schedule-account-updater-result.ts)</code>

**OnError**: <code>[General.PostScheduleAccountUpdaterError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postSessions3(request: General.PostSessions3Request, options?: RequestOptions): ApiPromise&lt;CertificateLoadingResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Establishes a secure communications session between the POS Mobile SDK and the Adyen payments platform, through mutual authentication. 
The request sends a setup token that identifies the SDK and the device. The response returns a session token that the SDK can use to authenticate responses received from the Adyen payments platform.
>This request applies to **mobile in-person** transactions. You cannot use this request to create online payments sessions. 



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postSessions3();
  // TODO: Handle 'response' of type CertificateLoadingResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateSessionRequest](src/models/create-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CertificateLoadingResponse](src/models/certificate-loading-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postSetupBeneficiary(request: General.PostSetupBeneficiaryRequest, options?: RequestOptions): ApiPromise&lt;GenericResponse, General.PostSetupBeneficiaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Defines a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. A series of benefactor/beneficiaries may not exceed four beneficiaries and may not have a cycle in it.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postSetupBeneficiary();
  // TODO: Handle 'response' of type GenericResponse
} catch (err) {
  if (err instanceof General.PostSetupBeneficiaryError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SetupBeneficiaryRequest](src/models/setup-beneficiary-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericResponse](src/models/generic-response.ts)</code>

**OnError**: <code>[General.PostSetupBeneficiaryError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postSupplyDefenseDocument(request: General.PostSupplyDefenseDocumentRequest, options?: RequestOptions): ApiPromise&lt;SupplyDefenseDocumentResponse, General.PostSupplyDefenseDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Supplies a specific dispute defense document.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postSupplyDefenseDocument();
  // TODO: Handle 'response' of type SupplyDefenseDocumentResponse
} catch (err) {
  if (err instanceof General.PostSupplyDefenseDocumentError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SupplyDefenseDocumentRequest](src/models/supply-defense-document-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SupplyDefenseDocumentResponse](src/models/supply-defense-document-response.ts)</code>

**OnError**: <code>[General.PostSupplyDefenseDocumentError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postTestNotificationConfiguration(request: General.PostTestNotificationConfigurationRequest, options?: RequestOptions): ApiPromise&lt;TestNotificationConfigurationResponse, General.PostTestNotificationConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Tests an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postTestNotificationConfiguration();
  // TODO: Handle 'response' of type TestNotificationConfigurationResponse
} catch (err) {
  if (err instanceof General.PostTestNotificationConfigurationError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TestNotificationConfigurationRequest](src/models/test-notification-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestNotificationConfigurationResponse](src/models/test-notification-configuration-response.ts)</code>

**OnError**: <code>[General.PostTestNotificationConfigurationError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postTransferFunds(request: General.PostTransferFundsRequest, options?: RequestOptions): ApiPromise&lt;TransferFundsResponse, General.PostTransferFundsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transfers funds from one account to another account. Both accounts must be in the same platform, but can have different account holders. The transfer must include a transfer code, which should be determined by the platform, in compliance with local regulations.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postTransferFunds();
  // TODO: Handle 'response' of type TransferFundsResponse
} catch (err) {
  if (err instanceof General.PostTransferFundsError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TransferFundsRequest](src/models/transfer-funds-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferFundsResponse](src/models/transfer-funds-response.ts)</code>

**OnError**: <code>[General.PostTransferFundsError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postUpdateNotificationConfiguration(request: General.PostUpdateNotificationConfigurationRequest, options?: RequestOptions): ApiPromise&lt;GetNotificationConfigurationResponse, General.PostUpdateNotificationConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing notification subscription configuration. If you are updating the event types, you must provide all event types, otherwise the previous event type configuration will be overwritten.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postUpdateNotificationConfiguration();
  // TODO: Handle 'response' of type GetNotificationConfigurationResponse
} catch (err) {
  if (
    err instanceof General.PostUpdateNotificationConfigurationError && err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UpdateNotificationConfigurationRequest](src/models/update-notification-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetNotificationConfigurationResponse](src/models/get-notification-configuration-response.ts)</code>

**OnError**: <code>[General.PostUpdateNotificationConfigurationError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postVoidTransaction(request: General.PostVoidTransactionRequest, options?: RequestOptions): ApiPromise&lt;StoredValueVoidResponse, General.PostVoidTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Voids the referenced stored value transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.general.postVoidTransaction();
  // TODO: Handle 'response' of type StoredValueVoidResponse
} catch (err) {
  if (err instanceof General.PostVoidTransactionError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[StoredValueVoidRequest](src/models/stored-value-void-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoredValueVoidResponse](src/models/stored-value-void-response.ts)</code>

**OnError**: <code>[General.PostVoidTransactionError](src/resources/general.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Initialization

> Source: [Initialization](src/resources/initialization.ts)

<details>
<summary><code>postStoreDetail(request: Initialization.PostStoreDetailRequest, options?: RequestOptions): ApiPromise&lt;StoreDetailResponse, Initialization.PostStoreDetailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the [Transfers API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


Stores payment details under the `PAYOUT` recurring contract. These payment details can be used later to submit a payout via the `/submitThirdParty` call.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.initialization.postStoreDetail();
  // TODO: Handle 'response' of type StoreDetailResponse
} catch (err) {
  if (err instanceof Initialization.PostStoreDetailError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[StoreDetailRequest](src/models/store-detail-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoreDetailResponse](src/models/store-detail-response.ts)</code>

**OnError**: <code>[Initialization.PostStoreDetailError](src/resources/initialization.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postStoreDetailAndSubmitThirdParty(request: Initialization.PostStoreDetailAndSubmitThirdPartyRequest, options?: RequestOptions): ApiPromise&lt;StoreDetailAndSubmitResponse, Initialization.PostStoreDetailAndSubmitThirdPartyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) endpoint instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


Submits a payout and stores its details for subsequent payouts.

The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.initialization.postStoreDetailAndSubmitThirdParty();
  // TODO: Handle 'response' of type StoreDetailAndSubmitResponse
} catch (err) {
  if (
    err instanceof Initialization.PostStoreDetailAndSubmitThirdPartyError &&
      err.payload.kind === "serviceError"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[StoreDetailAndSubmitRequest](src/models/store-detail-and-submit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoreDetailAndSubmitResponse](src/models/store-detail-and-submit-response.ts)</code>

**OnError**: <code>[Initialization.PostStoreDetailAndSubmitThirdPartyError](src/resources/initialization.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postSubmitThirdParty(request: Initialization.PostSubmitThirdPartyRequest, options?: RequestOptions): ApiPromise&lt;SubmitResponse, Initialization.PostSubmitThirdPartyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) endpoint instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


Submits a payout using the previously stored payment details. To store payment details, use the `/storeDetail` API call.

The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.initialization.postSubmitThirdParty();
  // TODO: Handle 'response' of type SubmitResponse
} catch (err) {
  if (err instanceof Initialization.PostSubmitThirdPartyError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SubmitRequest](src/models/submit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubmitResponse](src/models/submit-response.ts)</code>

**OnError**: <code>[Initialization.PostSubmitThirdPartyError](src/resources/initialization.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Reviewing

> Source: [Reviewing](src/resources/reviewing.ts)

<details>
<summary><code>postConfirmThirdParty(request: Reviewing.PostConfirmThirdPartyRequest, options?: RequestOptions): ApiPromise&lt;ModifyResponse, Reviewing.PostConfirmThirdPartyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the [Transfers API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


Confirms a previously submitted payout.

To cancel a payout, use the `/declineThirdParty` endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reviewing.postConfirmThirdParty();
  // TODO: Handle 'response' of type ModifyResponse
} catch (err) {
  if (err instanceof Reviewing.PostConfirmThirdPartyError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ModifyRequest](src/models/modify-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModifyResponse](src/models/modify-response.ts)</code>

**OnError**: <code>[Reviewing.PostConfirmThirdPartyError](src/resources/reviewing.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDeclineThirdParty(request: Reviewing.PostDeclineThirdPartyRequest, options?: RequestOptions): ApiPromise&lt;ModifyResponse, Reviewing.PostDeclineThirdPartyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the [Transfers API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


Cancels a previously submitted payout.

To confirm and send a payout, use the `/confirmThirdParty` endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reviewing.postDeclineThirdParty();
  // TODO: Handle 'response' of type ModifyResponse
} catch (err) {
  if (err instanceof Reviewing.PostDeclineThirdPartyError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ModifyRequest](src/models/modify-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModifyResponse](src/models/modify-response.ts)</code>

**OnError**: <code>[Reviewing.PostDeclineThirdPartyError](src/resources/reviewing.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## InstantPayouts

> Source: [InstantPayouts](src/resources/instant-payouts.ts)

<details>
<summary><code>postPayout(request: InstantPayouts.PostPayoutRequest, options?: RequestOptions): ApiPromise&lt;PayoutResponse, InstantPayouts.PostPayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:
>- If you are building a new integration, use the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) endpoint instead.
> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.
>
> With the Transfers API, you can:
> - Handle multiple payout use cases with a single API.
> - Use new payout functionalities, such as instant payouts to bank accounts.
> - Receive webhooks with more details and defined transfer states.
>
> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.


With this call, you can pay out to your customers, and funds will be made available within 30 minutes on the cardholder's bank account (this is dependent on whether the issuer supports this functionality). Instant card payouts are only supported for Visa and Mastercard cards.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.instantPayouts.postPayout();
  // TODO: Handle 'response' of type PayoutResponse
} catch (err) {
  if (err instanceof InstantPayouts.PostPayoutError && err.payload.kind === "serviceError") {
    // TODO: Handle 'err.payload.body' of type ServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PayoutRequest](src/models/payout-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutResponse](src/models/payout-response.ts)</code>

**OnError**: <code>[InstantPayouts.PostPayoutError](src/resources/instant-payouts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Rates

> Source: [Rates](src/resources/rates.ts)

<details>
<summary><code>postRatesCalculate(request: Rates.PostRatesCalculateRequest, options?: RequestOptions): ApiPromise&lt;CalculateRateResponse, Rates.PostRatesCalculateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the calculated amounts and rates required to convert the currency of a transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.rates.postRatesCalculate({ body });
  // TODO: Handle 'response' of type CalculateRateResponse
} catch (err) {
  if (err instanceof Rates.PostRatesCalculateError && err.payload.kind === "defaultErrorResponseEntity") {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CalculateRateRequest](src/models/calculate-rate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CalculateRateResponse](src/models/calculate-rate-response.ts)</code>

**OnError**: <code>[Rates.PostRatesCalculateError](src/resources/rates.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AccountCompanyLevel

> Source: [AccountCompanyLevel](src/resources/account-company-level.ts)

<details>
<summary><code>getCompanies(request: AccountCompanyLevel.GetCompaniesRequest, options?: RequestOptions): ApiPromise&lt;ListCompanyResponse, AccountCompanyLevel.GetCompaniesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of company accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Account read

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountCompanyLevel.getCompanies();
  // TODO: Handle 'response' of type ListCompanyResponse
} catch (err) {
  if (err instanceof AccountCompanyLevel.GetCompaniesError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 10 items on a page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListCompanyResponse](src/models/list-company-response.ts)</code>

**OnError**: <code>[AccountCompanyLevel.GetCompaniesError](src/resources/account-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyId(request: AccountCompanyLevel.GetCompaniesCompanyIdRequest, options?: RequestOptions): ApiPromise&lt;Company2, AccountCompanyLevel.GetCompaniesCompanyIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the company account specified in the path. Your API credential must have access to the company account. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountCompanyLevel.getCompaniesCompanyId({ companyId });
  // TODO: Handle 'response' of type Company2
} catch (err) {
  if (
    err instanceof AccountCompanyLevel.GetCompaniesCompanyIdError && err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company2](src/models/company2.ts)</code>

**OnError**: <code>[AccountCompanyLevel.GetCompaniesCompanyIdError](src/resources/account-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdMerchants(request: AccountCompanyLevel.GetCompaniesCompanyIdMerchantsRequest, options?: RequestOptions): ApiPromise&lt;ListMerchantResponse, AccountCompanyLevel.GetCompaniesCompanyIdMerchantsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of merchant accounts under the company account specified in the path. The list only includes merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountCompanyLevel.getCompaniesCompanyIdMerchants({ companyId });
  // TODO: Handle 'response' of type ListMerchantResponse
} catch (err) {
  if (
    err instanceof AccountCompanyLevel.GetCompaniesCompanyIdMerchantsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 10 items on a page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMerchantResponse](src/models/list-merchant-response.ts)</code>

**OnError**: <code>[AccountCompanyLevel.GetCompaniesCompanyIdMerchantsError](src/resources/account-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AccountMerchantLevel

> Source: [AccountMerchantLevel](src/resources/account-merchant-level.ts)

<details>
<summary><code>getMerchants(request: AccountMerchantLevel.GetMerchantsRequest, options?: RequestOptions): ApiPromise&lt;ListMerchantResponse, AccountMerchantLevel.GetMerchantsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountMerchantLevel.getMerchants();
  // TODO: Handle 'response' of type ListMerchantResponse
} catch (err) {
  if (err instanceof AccountMerchantLevel.GetMerchantsError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 10 items on a page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMerchantResponse](src/models/list-merchant-response.ts)</code>

**OnError**: <code>[AccountMerchantLevel.GetMerchantsError](src/resources/account-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantId(request: AccountMerchantLevel.GetMerchantsMerchantIdRequest, options?: RequestOptions): ApiPromise&lt;Merchant, AccountMerchantLevel.GetMerchantsMerchantIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the merchant account specified in the path. Your API credential must have access to the merchant account.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountMerchantLevel.getMerchantsMerchantId({ merchantId });
  // TODO: Handle 'response' of type Merchant
} catch (err) {
  if (
    err instanceof AccountMerchantLevel.GetMerchantsMerchantIdError && err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Merchant](src/models/merchant.ts)</code>

**OnError**: <code>[AccountMerchantLevel.GetMerchantsMerchantIdError](src/resources/account-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchants(request: AccountMerchantLevel.PostMerchantsRequest, options?: RequestOptions): ApiPromise&lt;CreateMerchantResponse, AccountMerchantLevel.PostMerchantsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a merchant account for the company account specified in the request.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Accounts read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountMerchantLevel.postMerchants();
  // TODO: Handle 'response' of type CreateMerchantResponse
} catch (err) {
  if (err instanceof AccountMerchantLevel.PostMerchantsError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateMerchantRequest](src/models/create-merchant-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateMerchantResponse](src/models/create-merchant-response.ts)</code>

**OnError**: <code>[AccountMerchantLevel.PostMerchantsError](src/resources/account-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdActivate(request: AccountMerchantLevel.PostMerchantsMerchantIdActivateRequest, options?: RequestOptions): ApiPromise&lt;RequestActivationResponse, AccountMerchantLevel.PostMerchantsMerchantIdActivateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a request to activate the merchant account identified in the path.

You get the result of the activation asynchronously through a [`merchant.updated`](https://docs.adyen.com/api-explorer/ManagementNotification/latest/post/merchant.updated) webhook. Once the merchant account is activated, you can start using it to accept payments and payouts.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Accounts read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountMerchantLevel.postMerchantsMerchantIdActivate({ merchantId });
  // TODO: Handle 'response' of type RequestActivationResponse
} catch (err) {
  if (
    err instanceof AccountMerchantLevel.PostMerchantsMerchantIdActivateError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestActivationResponse](src/models/request-activation-response.ts)</code>

**OnError**: <code>[AccountMerchantLevel.PostMerchantsMerchantIdActivateError](src/resources/account-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AccountStoreLevel

> Source: [AccountStoreLevel](src/resources/account-store-level.ts)

<details>
<summary><code>getMerchantsMerchantIdStores(request: AccountStoreLevel.GetMerchantsMerchantIdStoresRequest, options?: RequestOptions): ApiPromise&lt;ListStoresResponse, AccountStoreLevel.GetMerchantsMerchantIdStoresError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of stores for the merchant account identified in the path. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountStoreLevel.getMerchantsMerchantIdStores({ merchantId });
  // TODO: Handle 'response' of type ListStoresResponse
} catch (err) {
  if (
    err instanceof AccountStoreLevel.GetMerchantsMerchantIdStoresError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 10 items on a page. |
| <code>reference?</code> | <code>string</code> | The reference of the store. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListStoresResponse](src/models/list-stores-response.ts)</code>

**OnError**: <code>[AccountStoreLevel.GetMerchantsMerchantIdStoresError](src/resources/account-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdStoresStoreId(request: AccountStoreLevel.GetMerchantsMerchantIdStoresStoreIdRequest, options?: RequestOptions): ApiPromise&lt;Store, AccountStoreLevel.GetMerchantsMerchantIdStoresStoreIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the store identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountStoreLevel.getMerchantsMerchantIdStoresStoreId({
    merchantId,
    storeId,
  });
  // TODO: Handle 'response' of type Store
} catch (err) {
  if (
    err instanceof AccountStoreLevel.GetMerchantsMerchantIdStoresStoreIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>storeId</code> | <code>string</code> | The unique identifier of the store. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Store](src/models/store.ts)</code>

**OnError**: <code>[AccountStoreLevel.GetMerchantsMerchantIdStoresStoreIdError](src/resources/account-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStores(request: AccountStoreLevel.GetStoresRequest, options?: RequestOptions): ApiPromise&lt;ListStoresResponse, AccountStoreLevel.GetStoresError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of stores. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountStoreLevel.getStores();
  // TODO: Handle 'response' of type ListStoresResponse
} catch (err) {
  if (err instanceof AccountStoreLevel.GetStoresError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 10 items on a page. |
| <code>reference?</code> | <code>string</code> | The reference of the store. |
| <code>merchantId?</code> | <code>string</code> | The unique identifier of the merchant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListStoresResponse](src/models/list-stores-response.ts)</code>

**OnError**: <code>[AccountStoreLevel.GetStoresError](src/resources/account-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStoresStoreId(request: AccountStoreLevel.GetStoresStoreIdRequest, options?: RequestOptions): ApiPromise&lt;Store, AccountStoreLevel.GetStoresStoreIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the store identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountStoreLevel.getStoresStoreId({ storeId });
  // TODO: Handle 'response' of type Store
} catch (err) {
  if (err instanceof AccountStoreLevel.GetStoresStoreIdError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storeId</code> | <code>string</code> | The unique identifier of the store. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Store](src/models/store.ts)</code>

**OnError**: <code>[AccountStoreLevel.GetStoresStoreIdError](src/resources/account-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdStoresStoreId(request: AccountStoreLevel.PatchMerchantsMerchantIdStoresStoreIdRequest, options?: RequestOptions): ApiPromise&lt;Store, AccountStoreLevel.PatchMerchantsMerchantIdStoresStoreIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the store identified in the path. You can only update some store parameters.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountStoreLevel.patchMerchantsMerchantIdStoresStoreId({
    merchantId,
    storeId,
  });
  // TODO: Handle 'response' of type Store
} catch (err) {
  if (
    err instanceof AccountStoreLevel.PatchMerchantsMerchantIdStoresStoreIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>storeId</code> | <code>string</code> | The unique identifier of the store. |
| <code>body?</code> | <code>[UpdateStoreRequest](src/models/update-store-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Store](src/models/store.ts)</code>

**OnError**: <code>[AccountStoreLevel.PatchMerchantsMerchantIdStoresStoreIdError](src/resources/account-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchStoresStoreId(request: AccountStoreLevel.PatchStoresStoreIdRequest, options?: RequestOptions): ApiPromise&lt;Store, AccountStoreLevel.PatchStoresStoreIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the store identified in the path.
You can only update some store parameters.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountStoreLevel.patchStoresStoreId({ storeId });
  // TODO: Handle 'response' of type Store
} catch (err) {
  if (err instanceof AccountStoreLevel.PatchStoresStoreIdError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storeId</code> | <code>string</code> | The unique identifier of the store. |
| <code>body?</code> | <code>[UpdateStoreRequest](src/models/update-store-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Store](src/models/store.ts)</code>

**OnError**: <code>[AccountStoreLevel.PatchStoresStoreIdError](src/resources/account-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdStores(request: AccountStoreLevel.PostMerchantsMerchantIdStoresRequest, options?: RequestOptions): ApiPromise&lt;Store, AccountStoreLevel.PostMerchantsMerchantIdStoresError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a store for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountStoreLevel.postMerchantsMerchantIdStores({ merchantId });
  // TODO: Handle 'response' of type Store
} catch (err) {
  if (
    err instanceof AccountStoreLevel.PostMerchantsMerchantIdStoresError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>body?</code> | <code>[StoreCreationRequest](src/models/store-creation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Store](src/models/store.ts)</code>

**OnError**: <code>[AccountStoreLevel.PostMerchantsMerchantIdStoresError](src/resources/account-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postStores(request: AccountStoreLevel.PostStoresRequest, options?: RequestOptions): ApiPromise&lt;Store, AccountStoreLevel.PostStoresError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a store for the merchant account specified in the request.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountStoreLevel.postStores();
  // TODO: Handle 'response' of type Store
} catch (err) {
  if (err instanceof AccountStoreLevel.PostStoresError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[StoreCreationWithMerchantCodeRequest](src/models/store-creation-with-merchant-code-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Store](src/models/store.ts)</code>

**OnError**: <code>[AccountStoreLevel.PostStoresError](src/resources/account-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PayoutSettingsMerchantLevel

> Source: [PayoutSettingsMerchantLevel](src/resources/payout-settings-merchant-level.ts)

<details>
<summary><code>deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId(request: PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the payout setting identified in the path.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Payout account settings read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.payoutSettingsMerchantLevel.deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId({
    merchantId,
    payoutSettingsId,
  });
} catch (err) {
  if (
    err instanceof PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>payoutSettingsId</code> | <code>string</code> | The unique identifier of the payout setting. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError](src/resources/payout-settings-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdPayoutSettings(request: PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsRequest, options?: RequestOptions): ApiPromise&lt;PayoutSettingsResponse, PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of payout settings for the merchant account identified in the path.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payout account settings read

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payoutSettingsMerchantLevel.getMerchantsMerchantIdPayoutSettings({
    merchantId,
  });
  // TODO: Handle 'response' of type PayoutSettingsResponse
} catch (err) {
  if (
    err instanceof PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutSettingsResponse](src/models/payout-settings-response.ts)</code>

**OnError**: <code>[PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsError](src/resources/payout-settings-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdPayoutSettingsPayoutSettingsId(request: PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest, options?: RequestOptions): ApiPromise&lt;PayoutSettings, PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the payout setting identified in the path.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payout account settings read

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.payoutSettingsMerchantLevel.getMerchantsMerchantIdPayoutSettingsPayoutSettingsId({
      merchantId,
      payoutSettingsId,
    });
  // TODO: Handle 'response' of type PayoutSettings
} catch (err) {
  if (
    err instanceof PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>payoutSettingsId</code> | <code>string</code> | The unique identifier of the payout setting. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutSettings](src/models/payout-settings.ts)</code>

**OnError**: <code>[PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError](src/resources/payout-settings-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId(request: PayoutSettingsMerchantLevel.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest, options?: RequestOptions): ApiPromise&lt;PayoutSettings, PayoutSettingsMerchantLevel.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the payout setting identified in the path. You can enable or disable the payout setting.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Payout account settings read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.payoutSettingsMerchantLevel.patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId({
      merchantId,
      payoutSettingsId,
    });
  // TODO: Handle 'response' of type PayoutSettings
} catch (err) {
  if (
    err instanceof PayoutSettingsMerchantLevel.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>payoutSettingsId</code> | <code>string</code> | The unique identifier of the payout setting. |
| <code>body?</code> | <code>[UpdatePayoutSettingsRequest](src/models/update-payout-settings-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutSettings](src/models/payout-settings.ts)</code>

**OnError**: <code>[PayoutSettingsMerchantLevel.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError](src/resources/payout-settings-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdPayoutSettings(request: PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsRequest, options?: RequestOptions): ApiPromise&lt;PayoutSettings, PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a request to add a payout setting for the merchant account specified in the path. A payout setting links the merchant account to the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments) that contains the details of the payout bank account. Adyen verifies the bank account before allowing and enabling the payout setting.

If you're accepting payments in multiple currencies, you may add multiple payout settings for the merchant account.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Payout account settings read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.payoutSettingsMerchantLevel.postMerchantsMerchantIdPayoutSettings({
    merchantId,
  });
  // TODO: Handle 'response' of type PayoutSettings
} catch (err) {
  if (
    err instanceof PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>body?</code> | <code>[PayoutSettingsRequest](src/models/payout-settings-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutSettings](src/models/payout-settings.ts)</code>

**OnError**: <code>[PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsError](src/resources/payout-settings-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UsersCompanyLevel

> Source: [UsersCompanyLevel](src/resources/users-company-level.ts)

<details>
<summary><code>getCompaniesCompanyIdUsers(request: UsersCompanyLevel.GetCompaniesCompanyIdUsersRequest, options?: RequestOptions): ApiPromise&lt;ListCompanyUsersResponse, UsersCompanyLevel.GetCompaniesCompanyIdUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of users for the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersCompanyLevel.getCompaniesCompanyIdUsers({ companyId });
  // TODO: Handle 'response' of type ListCompanyUsersResponse
} catch (err) {
  if (
    err instanceof UsersCompanyLevel.GetCompaniesCompanyIdUsersError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to return. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page. Maximum value is **100**. The default is **10** items on a page. |
| <code>username?</code> | <code>string</code> | The partial or complete username to select all users that match. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListCompanyUsersResponse](src/models/list-company-users-response.ts)</code>

**OnError**: <code>[UsersCompanyLevel.GetCompaniesCompanyIdUsersError](src/resources/users-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdUsersUserId(request: UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdRequest, options?: RequestOptions): ApiPromise&lt;CompanyUser, UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns user details for the `userId` and the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersCompanyLevel.getCompaniesCompanyIdUsersUserId({ companyId, userId });
  // TODO: Handle 'response' of type CompanyUser
} catch (err) {
  if (
    err instanceof UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>userId</code> | <code>string</code> | The unique identifier of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyUser](src/models/company-user.ts)</code>

**OnError**: <code>[UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdError](src/resources/users-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchCompaniesCompanyIdUsersUserId(request: UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdRequest, options?: RequestOptions): ApiPromise&lt;CompanyUser, UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates user details for the `userId` and the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersCompanyLevel.patchCompaniesCompanyIdUsersUserId({ companyId, userId });
  // TODO: Handle 'response' of type CompanyUser
} catch (err) {
  if (
    err instanceof UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>userId</code> | <code>string</code> | The unique identifier of the user. |
| <code>body?</code> | <code>[UpdateCompanyUserRequest](src/models/update-company-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyUser](src/models/company-user.ts)</code>

**OnError**: <code>[UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdError](src/resources/users-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdUsers(request: UsersCompanyLevel.PostCompaniesCompanyIdUsersRequest, options?: RequestOptions): ApiPromise&lt;CreateCompanyUserResponse, UsersCompanyLevel.PostCompaniesCompanyIdUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates the user for the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersCompanyLevel.postCompaniesCompanyIdUsers({ companyId });
  // TODO: Handle 'response' of type CreateCompanyUserResponse
} catch (err) {
  if (
    err instanceof UsersCompanyLevel.PostCompaniesCompanyIdUsersError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>body?</code> | <code>[CreateCompanyUserRequest](src/models/create-company-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateCompanyUserResponse](src/models/create-company-user-response.ts)</code>

**OnError**: <code>[UsersCompanyLevel.PostCompaniesCompanyIdUsersError](src/resources/users-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UsersMerchantLevel

> Source: [UsersMerchantLevel](src/resources/users-merchant-level.ts)

<details>
<summary><code>getMerchantsMerchantIdUsers(request: UsersMerchantLevel.GetMerchantsMerchantIdUsersRequest, options?: RequestOptions): ApiPromise&lt;ListMerchantUsersResponse, UsersMerchantLevel.GetMerchantsMerchantIdUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of users associated with the `merchantId` specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersMerchantLevel.getMerchantsMerchantIdUsers({ merchantId });
  // TODO: Handle 'response' of type ListMerchantUsersResponse
} catch (err) {
  if (
    err instanceof UsersMerchantLevel.GetMerchantsMerchantIdUsersError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | Unique identifier of the merchant. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page. Maximum value is **100**. The default is **10** items on a page. |
| <code>username?</code> | <code>string</code> | The partial or complete username to select all users that match. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMerchantUsersResponse](src/models/list-merchant-users-response.ts)</code>

**OnError**: <code>[UsersMerchantLevel.GetMerchantsMerchantIdUsersError](src/resources/users-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdUsersUserId(request: UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdRequest, options?: RequestOptions): ApiPromise&lt;User, UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns user details for the `userId` and the `merchantId` specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersMerchantLevel.getMerchantsMerchantIdUsersUserId({ merchantId, userId });
  // TODO: Handle 'response' of type User
} catch (err) {
  if (
    err instanceof UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | Unique identifier of the merchant. |
| <code>userId</code> | <code>string</code> | Unique identifier of the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/models/user.ts)</code>

**OnError**: <code>[UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdError](src/resources/users-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdUsersUserId(request: UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdRequest, options?: RequestOptions): ApiPromise&lt;User, UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates user details for the `userId` and the `merchantId` specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersMerchantLevel.patchMerchantsMerchantIdUsersUserId({
    merchantId,
    userId,
  });
  // TODO: Handle 'response' of type User
} catch (err) {
  if (
    err instanceof UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | Unique identifier of the merchant. |
| <code>userId</code> | <code>string</code> | Unique identifier of the user. |
| <code>body?</code> | <code>[UpdateMerchantUserRequest](src/models/update-merchant-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/models/user.ts)</code>

**OnError**: <code>[UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdError](src/resources/users-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdUsers(request: UsersMerchantLevel.PostMerchantsMerchantIdUsersRequest, options?: RequestOptions): ApiPromise&lt;CreateUserResponse, UsersMerchantLevel.PostMerchantsMerchantIdUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a user for the `merchantId` specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersMerchantLevel.postMerchantsMerchantIdUsers({ merchantId });
  // TODO: Handle 'response' of type CreateUserResponse
} catch (err) {
  if (
    err instanceof UsersMerchantLevel.PostMerchantsMerchantIdUsersError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | Unique identifier of the merchant. |
| <code>body?</code> | <code>[CreateMerchantUserRequest](src/models/create-merchant-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateUserResponse](src/models/create-user-response.ts)</code>

**OnError**: <code>[UsersMerchantLevel.PostMerchantsMerchantIdUsersError](src/resources/users-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MyApiCredential

> Source: [MyApiCredential](src/resources/my-api-credential.ts)

<details>
<summary><code>deleteMeAllowedOriginsOriginId(request: MyApiCredential.DeleteMeAllowedOriginsOriginIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, MyApiCredential.DeleteMeAllowedOriginsOriginIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) specified in the path.
The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).

You can make this request with any of the Management API roles.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.myApiCredential.deleteMeAllowedOriginsOriginId({ originId });
} catch (err) {
  if (
    err instanceof MyApiCredential.DeleteMeAllowedOriginsOriginIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>originId</code> | <code>string</code> | Unique identifier of the allowed origin. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[MyApiCredential.DeleteMeAllowedOriginsOriginIdError](src/resources/my-api-credential.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMe(options?: RequestOptions): ApiPromise&lt;MeApiCredential, MyApiCredential.GetMeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns your [API credential](https://docs.adyen.com/development-resources/api-credentials) details based on the API Key you used in the request.

You can make this request with any of the Management API roles.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.myApiCredential.getMe();
  // TODO: Handle 'response' of type MeApiCredential
} catch (err) {
  if (err instanceof MyApiCredential.GetMeError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MeApiCredential](src/models/me-api-credential.ts)</code>

**OnError**: <code>[MyApiCredential.GetMeError](src/resources/my-api-credential.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMeAllowedOrigins(options?: RequestOptions): ApiPromise&lt;AllowedOriginsResponse, MyApiCredential.GetMeAllowedOriginsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) of your [API credential](https://docs.adyen.com/development-resources/api-credentials) based on the API key you used in the request.

You can make this request with any of the Management API roles.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.myApiCredential.getMeAllowedOrigins();
  // TODO: Handle 'response' of type AllowedOriginsResponse
} catch (err) {
  if (err instanceof MyApiCredential.GetMeAllowedOriginsError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllowedOriginsResponse](src/models/allowed-origins-response.ts)</code>

**OnError**: <code>[MyApiCredential.GetMeAllowedOriginsError](src/resources/my-api-credential.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMeAllowedOriginsOriginId(request: MyApiCredential.GetMeAllowedOriginsOriginIdRequest, options?: RequestOptions): ApiPromise&lt;AllowedOrigin, MyApiCredential.GetMeAllowedOriginsOriginIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) specified in the path.
The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).

You can make this request with any of the Management API roles.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.myApiCredential.getMeAllowedOriginsOriginId({ originId });
  // TODO: Handle 'response' of type AllowedOrigin
} catch (err) {
  if (
    err instanceof MyApiCredential.GetMeAllowedOriginsOriginIdError && err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>originId</code> | <code>string</code> | Unique identifier of the allowed origin. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllowedOrigin](src/models/allowed-origin.ts)</code>

**OnError**: <code>[MyApiCredential.GetMeAllowedOriginsOriginIdError](src/resources/my-api-credential.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMeAllowedOrigins(request: MyApiCredential.PostMeAllowedOriginsRequest, options?: RequestOptions): ApiPromise&lt;AllowedOrigin, MyApiCredential.PostMeAllowedOriginsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an allowed origin to the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) of your API credential.
The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).

You can make this request with any of the Management API roles.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.myApiCredential.postMeAllowedOrigins();
  // TODO: Handle 'response' of type AllowedOrigin
} catch (err) {
  if (err instanceof MyApiCredential.PostMeAllowedOriginsError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateAllowedOriginRequest](src/models/create-allowed-origin-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllowedOrigin](src/models/allowed-origin.ts)</code>

**OnError**: <code>[MyApiCredential.PostMeAllowedOriginsError](src/resources/my-api-credential.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMeGenerateClientKey(options?: RequestOptions): ApiPromise&lt;GenerateClientKeyResponse, MyApiCredential.PostMeGenerateClientKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a new [client key](https://docs.adyen.com/development-resources/client-side-authentication/) used to authenticate requests from your payment environment.
You can use the new client key a few minutes after generating it.
The old client key stops working 24 hours after generating a new one.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.myApiCredential.postMeGenerateClientKey();
  // TODO: Handle 'response' of type GenerateClientKeyResponse
} catch (err) {
  if (
    err instanceof MyApiCredential.PostMeGenerateClientKeyError && err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenerateClientKeyResponse](src/models/generate-client-key-response.ts)</code>

**OnError**: <code>[MyApiCredential.PostMeGenerateClientKeyError](src/resources/my-api-credential.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ApiCredentialsCompanyLevel

> Source: [ApiCredentialsCompanyLevel](src/resources/api-credentials-company-level.ts)

<details>
<summary><code>getCompaniesCompanyIdApiCredentials(request: ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsRequest, options?: RequestOptions): ApiPromise&lt;ListCompanyApiCredentialsResponse, ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of [API credentials](https://docs.adyen.com/development-resources/api-credentials) for the company account. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiCredentialsCompanyLevel.getCompaniesCompanyIdApiCredentials({ companyId });
  // TODO: Handle 'response' of type ListCompanyApiCredentialsResponse
} catch (err) {
  if (
    err instanceof ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 10 items on a page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListCompanyApiCredentialsResponse](src/models/list-company-api-credentials-response.ts)</code>

**OnError**: <code>[ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsError](src/resources/api-credentials-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdApiCredentialsApiCredentialId(request: ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdRequest, options?: RequestOptions): ApiPromise&lt;CompanyApiCredential, ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiCredentialsCompanyLevel.getCompaniesCompanyIdApiCredentialsApiCredentialId(
    { companyId, apiCredentialId },
  );
  // TODO: Handle 'response' of type CompanyApiCredential
} catch (err) {
  if (
    err instanceof ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyApiCredential](src/models/company-api-credential.ts)</code>

**OnError**: <code>[ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdError](src/resources/api-credentials-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchCompaniesCompanyIdApiCredentialsApiCredentialId(request: ApiCredentialsCompanyLevel.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest, options?: RequestOptions): ApiPromise&lt;CompanyApiCredential, ApiCredentialsCompanyLevel.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the API credential's roles, merchant account access, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.apiCredentialsCompanyLevel.patchCompaniesCompanyIdApiCredentialsApiCredentialId({
      companyId,
      apiCredentialId,
    });
  // TODO: Handle 'response' of type CompanyApiCredential
} catch (err) {
  if (
    err instanceof ApiCredentialsCompanyLevel.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |
| <code>body?</code> | <code>[UpdateCompanyApiCredentialRequest](src/models/update-company-api-credential-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyApiCredential](src/models/company-api-credential.ts)</code>

**OnError**: <code>[ApiCredentialsCompanyLevel.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError](src/resources/api-credentials-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdApiCredentials(request: ApiCredentialsCompanyLevel.PostCompaniesCompanyIdApiCredentialsRequest, options?: RequestOptions): ApiPromise&lt;CreateCompanyApiCredentialResponse, ApiCredentialsCompanyLevel.PostCompaniesCompanyIdApiCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for the company account identified in the path. In the request, you can specify which merchant accounts the new API credential will have access to, as well as its roles and allowed origins.

The response includes several types of authentication details:
* [API key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication): used for API request authentication.
* [Client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works): public key used for client-side authentication.
* [Username and password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication): used for basic authentication.

> Make sure you store the API key securely in your system. You won't be able to retrieve it later.

If your API key is lost or compromised, you need to [generate a new API key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiCredentialsCompanyLevel.postCompaniesCompanyIdApiCredentials({
    companyId,
  });
  // TODO: Handle 'response' of type CreateCompanyApiCredentialResponse
} catch (err) {
  if (
    err instanceof ApiCredentialsCompanyLevel.PostCompaniesCompanyIdApiCredentialsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>body?</code> | <code>[CreateCompanyApiCredentialRequest](src/models/create-company-api-credential-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateCompanyApiCredentialResponse](src/models/create-company-api-credential-response.ts)</code>

**OnError**: <code>[ApiCredentialsCompanyLevel.PostCompaniesCompanyIdApiCredentialsError](src/resources/api-credentials-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ApiCredentialsMerchantLevel

> Source: [ApiCredentialsMerchantLevel](src/resources/api-credentials-merchant-level.ts)

<details>
<summary><code>getMerchantsMerchantIdApiCredentials(request: ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsRequest, options?: RequestOptions): ApiPromise&lt;ListMerchantApiCredentialsResponse, ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of [API credentials](https://docs.adyen.com/development-resources/api-credentials) for the merchant account. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiCredentialsMerchantLevel.getMerchantsMerchantIdApiCredentials({
    merchantId,
  });
  // TODO: Handle 'response' of type ListMerchantApiCredentialsResponse
} catch (err) {
  if (
    err instanceof ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 10 items on a page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMerchantApiCredentialsResponse](src/models/list-merchant-api-credentials-response.ts)</code>

**OnError**: <code>[ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsError](src/resources/api-credentials-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdApiCredentialsApiCredentialId(request: ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest, options?: RequestOptions): ApiPromise&lt;ApiCredential, ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.apiCredentialsMerchantLevel.getMerchantsMerchantIdApiCredentialsApiCredentialId({
      merchantId,
      apiCredentialId,
    });
  // TODO: Handle 'response' of type ApiCredential
} catch (err) {
  if (
    err instanceof ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiCredential](src/models/api-credential.ts)</code>

**OnError**: <code>[ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdError](src/resources/api-credentials-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdApiCredentialsApiCredentialId(request: ApiCredentialsMerchantLevel.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdRequest, options?: RequestOptions): ApiPromise&lt;ApiCredential, ApiCredentialsMerchantLevel.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the API credential's roles, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.apiCredentialsMerchantLevel.patchMerchantsMerchantIdApiCredentialsApiCredentialId({
      merchantId,
      apiCredentialId,
    });
  // TODO: Handle 'response' of type ApiCredential
} catch (err) {
  if (
    err instanceof ApiCredentialsMerchantLevel.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |
| <code>body?</code> | <code>[UpdateMerchantApiCredentialRequest](src/models/update-merchant-api-credential-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiCredential](src/models/api-credential.ts)</code>

**OnError**: <code>[ApiCredentialsMerchantLevel.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError](src/resources/api-credentials-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdApiCredentials(request: ApiCredentialsMerchantLevel.PostMerchantsMerchantIdApiCredentialsRequest, options?: RequestOptions): ApiPromise&lt;CreateApiCredentialResponse, ApiCredentialsMerchantLevel.PostMerchantsMerchantIdApiCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for the company account identified in the path. In the request, you can specify the roles and allowed origins for the new API credential.

The response includes the:
* [API key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication): used for API request authentication.
* [Client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works): public key used for client-side authentication.
* [Username and password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication): used for basic authentication.

> Make sure you store the API key securely in your system. You won't be able to retrieve it later.

If your API key is lost or compromised, you need to [generate a new API key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiCredentialsMerchantLevel.postMerchantsMerchantIdApiCredentials({
    merchantId,
  });
  // TODO: Handle 'response' of type CreateApiCredentialResponse
} catch (err) {
  if (
    err instanceof ApiCredentialsMerchantLevel.PostMerchantsMerchantIdApiCredentialsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>body?</code> | <code>[CreateMerchantApiCredentialRequest](src/models/create-merchant-api-credential-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateApiCredentialResponse](src/models/create-api-credential-response.ts)</code>

**OnError**: <code>[ApiCredentialsMerchantLevel.PostMerchantsMerchantIdApiCredentialsError](src/resources/api-credentials-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ApiKeyCompanyLevel

> Source: [ApiKeyCompanyLevel](src/resources/api-key-company-level.ts)

<details>
<summary><code>postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey(request: ApiKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRequest, options?: RequestOptions): ApiPromise&lt;GenerateApiKeyResponse, ApiKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a new API key for the API credential. You can use the new API key a few minutes after generating it. The old API key stops working 24 hours after generating a new one.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.apiKeyCompanyLevel.postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey({
      companyId,
      apiCredentialId,
    });
  // TODO: Handle 'response' of type GenerateApiKeyResponse
} catch (err) {
  if (
    err instanceof
      ApiKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenerateApiKeyResponse](src/models/generate-api-key-response.ts)</code>

**OnError**: <code>[ApiKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError](src/resources/api-key-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ApiKeyMerchantLevel

> Source: [ApiKeyMerchantLevel](src/resources/api-key-merchant-level.ts)

<details>
<summary><code>postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey(request: ApiKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRequest, options?: RequestOptions): ApiPromise&lt;GenerateApiKeyResponse, ApiKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a new API key for the API credential. You can use the new API key a few minutes after generating it. The old API key stops working 24 hours after generating a new one.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.apiKeyMerchantLevel.postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey({
      merchantId,
      apiCredentialId,
    });
  // TODO: Handle 'response' of type GenerateApiKeyResponse
} catch (err) {
  if (
    err instanceof
      ApiKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenerateApiKeyResponse](src/models/generate-api-key-response.ts)</code>

**OnError**: <code>[ApiKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError](src/resources/api-key-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ClientKeyCompanyLevel

> Source: [ClientKeyCompanyLevel](src/resources/client-key-company-level.ts)

<details>
<summary><code>postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey(request: ClientKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRequest, options?: RequestOptions): ApiPromise&lt;GenerateClientKeyResponse, ClientKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a new [client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works) for the API credential identified in the path. You can use the new client key a few minutes after generating it. The old client key stops working 24 hours after generating a new one.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.clientKeyCompanyLevel.postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey({
      companyId,
      apiCredentialId,
    });
  // TODO: Handle 'response' of type GenerateClientKeyResponse
} catch (err) {
  if (
    err instanceof
      ClientKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenerateClientKeyResponse](src/models/generate-client-key-response.ts)</code>

**OnError**: <code>[ClientKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError](src/resources/client-key-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ClientKeyMerchantLevel

> Source: [ClientKeyMerchantLevel](src/resources/client-key-merchant-level.ts)

<details>
<summary><code>postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey(request: ClientKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyRequest, options?: RequestOptions): ApiPromise&lt;GenerateClientKeyResponse, ClientKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a new [client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works) for the API credential identified in the path. You can use the new client key a few minutes after generating it. The old client key stops working 24 hours after generating a new one.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.clientKeyMerchantLevel.postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey(
      { merchantId, apiCredentialId },
    );
  // TODO: Handle 'response' of type GenerateClientKeyResponse
} catch (err) {
  if (
    err instanceof
      ClientKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenerateClientKeyResponse](src/models/generate-client-key-response.ts)</code>

**OnError**: <code>[ClientKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyError](src/resources/client-key-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AllowedOriginsCompanyLevel

> Source: [AllowedOriginsCompanyLevel](src/resources/allowed-origins-company-level.ts)

<details>
<summary><code>deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(request: AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.allowedOriginsCompanyLevel.deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
    { companyId, apiCredentialId, originId },
  );
} catch (err) {
  if (
    err instanceof
      AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |
| <code>originId</code> | <code>string</code> | Unique identifier of the allowed origin. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError](src/resources/allowed-origins-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(request: AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest, options?: RequestOptions): ApiPromise&lt;AllowedOriginsResponse, AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.allowedOriginsCompanyLevel.getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins({
      companyId,
      apiCredentialId,
    });
  // TODO: Handle 'response' of type AllowedOriginsResponse
} catch (err) {
  if (
    err instanceof
      AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllowedOriginsResponse](src/models/allowed-origins-response.ts)</code>

**OnError**: <code>[AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError](src/resources/allowed-origins-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(request: AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest, options?: RequestOptions): ApiPromise&lt;AllowedOrigin, AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.allowedOriginsCompanyLevel.getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
      { companyId, apiCredentialId, originId },
    );
  // TODO: Handle 'response' of type AllowedOrigin
} catch (err) {
  if (
    err instanceof
      AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |
| <code>originId</code> | <code>string</code> | Unique identifier of the allowed origin. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllowedOrigin](src/models/allowed-origin.ts)</code>

**OnError**: <code>[AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError](src/resources/allowed-origins-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(request: AllowedOriginsCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest, options?: RequestOptions): ApiPromise&lt;AllowedOrigin, AllowedOriginsCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.allowedOriginsCompanyLevel.postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(
      { companyId, apiCredentialId },
    );
  // TODO: Handle 'response' of type AllowedOrigin
} catch (err) {
  if (
    err instanceof
      AllowedOriginsCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |
| <code>body?</code> | <code>[AllowedOrigin](src/models/allowed-origin.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllowedOrigin](src/models/allowed-origin.ts)</code>

**OnError**: <code>[AllowedOriginsCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError](src/resources/allowed-origins-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AllowedOriginsMerchantLevel

> Source: [AllowedOriginsMerchantLevel](src/resources/allowed-origins-merchant-level.ts)

<details>
<summary><code>deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(request: AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.allowedOriginsMerchantLevel.deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
    { merchantId, apiCredentialId, originId },
  );
} catch (err) {
  if (
    err instanceof
      AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |
| <code>originId</code> | <code>string</code> | Unique identifier of the allowed origin. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError](src/resources/allowed-origins-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(request: AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest, options?: RequestOptions): ApiPromise&lt;AllowedOriginsResponse, AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.allowedOriginsMerchantLevel.getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(
      { merchantId, apiCredentialId },
    );
  // TODO: Handle 'response' of type AllowedOriginsResponse
} catch (err) {
  if (
    err instanceof
      AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllowedOriginsResponse](src/models/allowed-origins-response.ts)</code>

**OnError**: <code>[AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError](src/resources/allowed-origins-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(request: AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest, options?: RequestOptions): ApiPromise&lt;AllowedOrigin, AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.allowedOriginsMerchantLevel.getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
      { merchantId, apiCredentialId, originId },
    );
  // TODO: Handle 'response' of type AllowedOrigin
} catch (err) {
  if (
    err instanceof
      AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |
| <code>originId</code> | <code>string</code> | Unique identifier of the allowed origin. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllowedOrigin](src/models/allowed-origin.ts)</code>

**OnError**: <code>[AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError](src/resources/allowed-origins-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(request: AllowedOriginsMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest, options?: RequestOptions): ApiPromise&lt;AllowedOrigin, AllowedOriginsMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.allowedOriginsMerchantLevel.postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(
      { merchantId, apiCredentialId },
    );
  // TODO: Handle 'response' of type AllowedOrigin
} catch (err) {
  if (
    err instanceof
      AllowedOriginsMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>apiCredentialId</code> | <code>string</code> | Unique identifier of the API credential. |
| <code>body?</code> | <code>[AllowedOrigin](src/models/allowed-origin.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AllowedOrigin](src/models/allowed-origin.ts)</code>

**OnError**: <code>[AllowedOriginsMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError](src/resources/allowed-origins-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksCompanyLevel

> Source: [WebhooksCompanyLevel](src/resources/webhooks-company-level.ts)

<details>
<summary><code>deleteCompaniesCompanyIdWebhooksWebhookId(request: WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the configuration for the webhook identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.webhooksCompanyLevel.deleteCompaniesCompanyIdWebhooksWebhookId({ companyId, webhookId });
} catch (err) {
  if (
    err instanceof WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>webhookId</code> | <code>string</code> | Unique identifier of the webhook configuration. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdError](src/resources/webhooks-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdWebhooks(request: WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksRequest, options?: RequestOptions): ApiPromise&lt;ListWebhooksResponse, WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all webhook configurations for the company account.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksCompanyLevel.getCompaniesCompanyIdWebhooks({ companyId });
  // TODO: Handle 'response' of type ListWebhooksResponse
} catch (err) {
  if (
    err instanceof WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | Unique identifier of the [company account](https://docs.adyen.com/account/account-structure#company-account). |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 10 items on a page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListWebhooksResponse](src/models/list-webhooks-response.ts)</code>

**OnError**: <code>[WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksError](src/resources/webhooks-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdWebhooksWebhookId(request: WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdRequest, options?: RequestOptions): ApiPromise&lt;Webhook, WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the configuration for the webhook identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksCompanyLevel.getCompaniesCompanyIdWebhooksWebhookId({
    companyId,
    webhookId,
  });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  if (
    err instanceof WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | Unique identifier of the [company account](https://docs.adyen.com/account/account-structure#company-account). |
| <code>webhookId</code> | <code>string</code> | Unique identifier of the webhook configuration. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>

**OnError**: <code>[WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdError](src/resources/webhooks-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchCompaniesCompanyIdWebhooksWebhookId(request: WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdRequest, options?: RequestOptions): ApiPromise&lt;Webhook, WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksCompanyLevel.patchCompaniesCompanyIdWebhooksWebhookId({
    companyId,
    webhookId,
  });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  if (
    err instanceof WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>webhookId</code> | <code>string</code> | Unique identifier of the webhook configuration. |
| <code>body?</code> | <code>[UpdateCompanyWebhookRequest](src/models/update-company-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>

**OnError**: <code>[WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdError](src/resources/webhooks-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdWebhooks(request: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksRequest, options?: RequestOptions): ApiPromise&lt;Webhook, WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribe to receive webhook notifications about events related to your company account. You can add basic authentication to make sure the data is secure.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksCompanyLevel.postCompaniesCompanyIdWebhooks({ companyId });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  if (
    err instanceof WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | Unique identifier of the [company account](https://docs.adyen.com/account/account-structure#company-account). |
| <code>body?</code> | <code>[CreateCompanyWebhookRequest](src/models/create-company-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>

**OnError**: <code>[WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksError](src/resources/webhooks-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac(request: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest, options?: RequestOptions): ApiPromise&lt;GenerateHmacKeyResponse, WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving [HMAC-signed notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures) from Adyen. Find out more about how to [verify HMAC signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksCompanyLevel.postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac({
    companyId,
    webhookId,
  });
  // TODO: Handle 'response' of type GenerateHmacKeyResponse
} catch (err) {
  if (
    err instanceof WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>webhookId</code> | <code>string</code> | Unique identifier of the webhook configuration. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenerateHmacKeyResponse](src/models/generate-hmac-key-response.ts)</code>

**OnError**: <code>[WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError](src/resources/webhooks-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdWebhooksWebhookIdTest(request: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestRequest, options?: RequestOptions): ApiPromise&lt;TestWebhookResponse, WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends sample notifications to test if the webhook is set up correctly.

We send sample notifications for maximum 20 of the merchant accounts that the webhook is configured for. If the webhook is configured for more than 20 merchant accounts, use the `merchantIds` array to specify a subset of the merchant accounts for which to send test notifications.

We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.

The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other response fields to troubleshoot unsuccessful tests.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksCompanyLevel.postCompaniesCompanyIdWebhooksWebhookIdTest({
    companyId,
    webhookId,
  });
  // TODO: Handle 'response' of type TestWebhookResponse
} catch (err) {
  if (
    err instanceof WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>webhookId</code> | <code>string</code> | Unique identifier of the webhook configuration. |
| <code>body?</code> | <code>[TestCompanyWebhookRequest](src/models/test-company-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestWebhookResponse](src/models/test-webhook-response.ts)</code>

**OnError**: <code>[WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestError](src/resources/webhooks-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksMerchantLevel

> Source: [WebhooksMerchantLevel](src/resources/webhooks-merchant-level.ts)

<details>
<summary><code>deleteMerchantsMerchantIdWebhooksWebhookId(request: WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the configuration for the webhook identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.webhooksMerchantLevel.deleteMerchantsMerchantIdWebhooksWebhookId({ merchantId, webhookId });
} catch (err) {
  if (
    err instanceof WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>webhookId</code> | <code>string</code> | Unique identifier of the webhook configuration. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdError](src/resources/webhooks-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdWebhooks(request: WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksRequest, options?: RequestOptions): ApiPromise&lt;ListWebhooksResponse, WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all webhook configurations for the merchant account.

> This call does not return webhook configurations for the company account to which the specified merchant account belongs. You can see these in your Customer Area under **Developers** > **Webhooks**.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksMerchantLevel.getMerchantsMerchantIdWebhooks({ merchantId });
  // TODO: Handle 'response' of type ListWebhooksResponse
} catch (err) {
  if (
    err instanceof WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 10 items on a page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListWebhooksResponse](src/models/list-webhooks-response.ts)</code>

**OnError**: <code>[WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksError](src/resources/webhooks-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdWebhooksWebhookId(request: WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdRequest, options?: RequestOptions): ApiPromise&lt;Webhook, WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the configuration for the webhook identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksMerchantLevel.getMerchantsMerchantIdWebhooksWebhookId({
    merchantId,
    webhookId,
  });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  if (
    err instanceof WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>webhookId</code> | <code>string</code> | Unique identifier of the webhook configuration. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>

**OnError**: <code>[WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdError](src/resources/webhooks-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdWebhooksWebhookId(request: WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdRequest, options?: RequestOptions): ApiPromise&lt;Webhook, WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksMerchantLevel.patchMerchantsMerchantIdWebhooksWebhookId({
    merchantId,
    webhookId,
  });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  if (
    err instanceof WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>webhookId</code> | <code>string</code> | Unique identifier of the webhook configuration. |
| <code>body?</code> | <code>[UpdateMerchantWebhookRequest](src/models/update-merchant-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>

**OnError**: <code>[WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdError](src/resources/webhooks-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdWebhooks(request: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksRequest, options?: RequestOptions): ApiPromise&lt;Webhook, WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribe to receive webhook notifications about events related to your merchant account. You can add basic authentication to make sure the data is secure.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksMerchantLevel.postMerchantsMerchantIdWebhooks({ merchantId });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  if (
    err instanceof WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>body?</code> | <code>[CreateMerchantWebhookRequest](src/models/create-merchant-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>

**OnError**: <code>[WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksError](src/resources/webhooks-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac(request: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRequest, options?: RequestOptions): ApiPromise&lt;GenerateHmacKeyResponse, WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving [HMAC-signed notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures) from Adyen. Find out more about how to [verify HMAC signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksMerchantLevel.postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac({
    merchantId,
    webhookId,
  });
  // TODO: Handle 'response' of type GenerateHmacKeyResponse
} catch (err) {
  if (
    err instanceof WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>webhookId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenerateHmacKeyResponse](src/models/generate-hmac-key-response.ts)</code>

**OnError**: <code>[WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError](src/resources/webhooks-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdWebhooksWebhookIdTest(request: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdTestRequest, options?: RequestOptions): ApiPromise&lt;TestWebhookResponse, WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdTestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends sample notifications to test if the webhook is set up correctly.

We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.

The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other fields to troubleshoot unsuccessful tests.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksMerchantLevel.postMerchantsMerchantIdWebhooksWebhookIdTest({
    merchantId,
    webhookId,
  });
  // TODO: Handle 'response' of type TestWebhookResponse
} catch (err) {
  if (
    err instanceof WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdTestError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>webhookId</code> | <code>string</code> | Unique identifier of the webhook configuration. |
| <code>body?</code> | <code>[TestWebhookRequest](src/models/test-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestWebhookResponse](src/models/test-webhook-response.ts)</code>

**OnError**: <code>[WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdTestError](src/resources/webhooks-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentMethodsMerchantLevel

> Source: [PaymentMethodsMerchantLevel](src/resources/payment-methods-merchant-level.ts)

<details>
<summary><code>getMerchantsMerchantIdPaymentMethodSettings(request: PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethodResponse, PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for all payment methods of the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsMerchantLevel.getMerchantsMerchantIdPaymentMethodSettings({
    merchantId,
  });
  // TODO: Handle 'response' of type PaymentMethodResponse
} catch (err) {
  if (
    err instanceof PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>storeId?</code> | <code>string</code> | The unique identifier of the store for which to return the payment methods. |
| <code>businessLineId?</code> | <code>string</code> | The unique identifier of the Business Line for which to return the payment methods. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 10 items on a page. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentMethodResponse](src/models/payment-method-response.ts)</code>

**OnError**: <code>[PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsError](src/resources/payment-methods-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(request: PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest, options?: RequestOptions): ApiPromise&lt;ManagementPaymentMethod, PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for the merchant account and the payment method identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.paymentMethodsMerchantLevel.getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId({
      merchantId,
      paymentMethodId,
    });
  // TODO: Handle 'response' of type ManagementPaymentMethod
} catch (err) {
  if (
    err instanceof
      PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>paymentMethodId</code> | <code>string</code> | The unique identifier of the payment method. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManagementPaymentMethod](src/models/management-payment-method.ts)</code>

**OnError**: <code>[PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError](src/resources/payment-methods-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains(request: PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRequest, options?: RequestOptions): ApiPromise&lt;ApplePayResponseInfo, PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.paymentMethodsMerchantLevel.getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains(
      { merchantId, paymentMethodId },
    );
  // TODO: Handle 'response' of type ApplePayResponseInfo
} catch (err) {
  if (
    err instanceof
      PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>paymentMethodId</code> | <code>string</code> | The unique identifier of the payment method. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplePayResponseInfo](src/models/apple-pay-response-info.ts)</code>

**OnError**: <code>[PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError](src/resources/payment-methods-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(request: PaymentMethodsMerchantLevel.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest, options?: RequestOptions): ApiPromise&lt;ManagementPaymentMethod, PaymentMethodsMerchantLevel.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates payment method details for the merchant account and the payment method identified in the path.
Depending the payment method [`type`](https://docs.adyen.com/api-explorer/Management/latest/patch/merchants/_merchantId_/paymentMethodSettings#request-type), you may need to send an additional object required for the payment method.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read and write


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.paymentMethodsMerchantLevel.patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId({
      merchantId,
      paymentMethodId,
    });
  // TODO: Handle 'response' of type ManagementPaymentMethod
} catch (err) {
  if (
    err instanceof
      PaymentMethodsMerchantLevel.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>paymentMethodId</code> | <code>string</code> | The unique identifier of the payment method. |
| <code>body?</code> | <code>[UpdatePaymentMethodInfo](src/models/update-payment-method-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManagementPaymentMethod](src/models/management-payment-method.ts)</code>

**OnError**: <code>[PaymentMethodsMerchantLevel.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError](src/resources/payment-methods-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdPaymentMethodSettings(request: PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsRequest, options?: RequestOptions): ApiPromise&lt;ManagementPaymentMethod, PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a request to add a new payment method to the merchant account identified in the path.
Depending the payment method [`type`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings#request-type), you may need to send an additional object required for the payment method.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read and write


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsMerchantLevel.postMerchantsMerchantIdPaymentMethodSettings({
    merchantId,
  });
  // TODO: Handle 'response' of type ManagementPaymentMethod
} catch (err) {
  if (
    err instanceof PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>body?</code> | <code>[PaymentMethodSetupInfo](src/models/payment-method-setup-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManagementPaymentMethod](src/models/management-payment-method.ts)</code>

**OnError**: <code>[PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsError](src/resources/payment-methods-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains(request: PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the new domain to the list of Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/web-drop-in/?tab=adyen-certificate-live_1#going-live).

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read and write


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.paymentMethodsMerchantLevel.postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains(
    { merchantId, paymentMethodId },
  );
} catch (err) {
  if (
    err instanceof
      PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>paymentMethodId</code> | <code>string</code> | The unique identifier of the payment method. |
| <code>body?</code> | <code>[ApplePayInfo](src/models/apple-pay-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError](src/resources/payment-methods-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TerminalsTerminalLevel

> Source: [TerminalsTerminalLevel](src/resources/terminals-terminal-level.ts)

<details>
<summary><code>getTerminals(request: TerminalsTerminalLevel.GetTerminalsRequest, options?: RequestOptions): ApiPromise&lt;ListTerminalsResponse, TerminalsTerminalLevel.GetTerminalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the payment terminals that the API credential has access to and that match the query parameters. 
To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API — Terminal actions read

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalsTerminalLevel.getTerminals();
  // TODO: Handle 'response' of type ListTerminalsResponse
} catch (err) {
  if (err instanceof TerminalsTerminalLevel.GetTerminalsError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>searchQuery?</code> | <code>string</code> | Returns terminals with an ID that contains the specified string. If present, other query parameters are ignored. |
| <code>otpQuery?</code> | <code>string</code> | Returns one or more terminals associated with the one-time passwords specified in the request. If this query parameter is used, other query parameters are ignored. |
| <code>countries?</code> | <code>string</code> | Returns terminals located in the countries specified by their [two-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). |
| <code>merchantIds?</code> | <code>string</code> | Returns terminals that belong to the merchant accounts specified by their unique merchant account ID. |
| <code>storeIds?</code> | <code>string</code> | Returns terminals that are assigned to the [stores](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores) specified by their unique store ID. |
| <code>brandModels?</code> | <code>string</code> | Returns terminals of the [models](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/companies/{companyId}/terminalModels) specified in the format *brand.model*. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 20 items on a page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTerminalsResponse](src/models/list-terminals-response.ts)</code>

**OnError**: <code>[TerminalsTerminalLevel.GetTerminalsError](src/resources/terminals-terminal-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postTerminalsTerminalIdReassign(request: TerminalsTerminalLevel.PostTerminalsTerminalIdReassignRequest, options?: RequestOptions): ApiPromise&lt;undefined, TerminalsTerminalLevel.PostTerminalsTerminalIdReassignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reassigns a payment terminal to a company account, merchant account, merchant account inventory, or a store.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Assign Terminal

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.terminalsTerminalLevel.postTerminalsTerminalIdReassign({ terminalId });
} catch (err) {
  if (
    err instanceof TerminalsTerminalLevel.PostTerminalsTerminalIdReassignError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>terminalId</code> | <code>string</code> | The unique identifier of the payment terminal. |
| <code>body?</code> | <code>[TerminalReassignmentRequest](src/models/terminal-reassignment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[TerminalsTerminalLevel.PostTerminalsTerminalIdReassignError](src/resources/terminals-terminal-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TerminalActionsCompanyLevel

> Source: [TerminalActionsCompanyLevel](src/resources/terminal-actions-company-level.ts)

<details>
<summary><code>getCompaniesCompanyIdTerminalActions(request: TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsRequest, options?: RequestOptions): ApiPromise&lt;ListExternalTerminalActionsResponse, TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) that have been scheduled for the company identified in the path.The response doesn't include actions that are scheduled by Adyen.
To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalActionsCompanyLevel.getCompaniesCompanyIdTerminalActions({
    companyId,
  });
  // TODO: Handle 'response' of type ListExternalTerminalActionsResponse
} catch (err) {
  if (
    err instanceof TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 20 items on a page. |
| <code>status?</code> | <code>string</code> | Returns terminal actions with the specified status. <br>Allowed values: **pending**, **successful**, **failed**, **cancelled**, **tryLater**. |
| <code>type?</code> | <code>string</code> | Returns terminal actions of the specified type. <br>Allowed values: **InstallAndroidApp**, **UninstallAndroidApp**, **InstallAndroidCertificate**, **UninstallAndroidCertificate**. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListExternalTerminalActionsResponse](src/models/list-external-terminal-actions-response.ts)</code>

**OnError**: <code>[TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsError](src/resources/terminal-actions-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdTerminalActionsActionId(request: TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsActionIdRequest, options?: RequestOptions): ApiPromise&lt;ExternalTerminalAction, TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsActionIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the [terminal action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) identified in the path.
To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalActionsCompanyLevel.getCompaniesCompanyIdTerminalActionsActionId({
    companyId,
    actionId,
  });
  // TODO: Handle 'response' of type ExternalTerminalAction
} catch (err) {
  if (
    err instanceof TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsActionIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>actionId</code> | <code>string</code> | The unique identifier of the terminal action. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExternalTerminalAction](src/models/external-terminal-action.ts)</code>

**OnError**: <code>[TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsActionIdError](src/resources/terminal-actions-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TerminalActionsTerminalLevel

> Source: [TerminalActionsTerminalLevel](src/resources/terminal-actions-terminal-level.ts)

<details>
<summary><code>postTerminalsScheduleActions(request: TerminalActionsTerminalLevel.PostTerminalsScheduleActionsRequest, options?: RequestOptions): ApiPromise&lt;ScheduleTerminalActionsResponse, TerminalActionsTerminalLevel.PostTerminalsScheduleActionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a [terminal action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) by specifying the action and the terminals that the action must be applied to. 

The following restrictions apply:
* You can schedule only one action at a time. For example, to install a new app version and remove an old app version, you have to make two API requests. 
* The maximum number of terminals in a request is **100**. For example, to apply an action to 250 terminals, you have to divide the terminals over three API requests. 
* If there is an error with one or more terminal IDs in the request, the action is scheduled for none of the terminals. You need to fix the error and try again. 

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalActionsTerminalLevel.postTerminalsScheduleActions();
  // TODO: Handle 'response' of type ScheduleTerminalActionsResponse
} catch (err) {
  if (
    err instanceof TerminalActionsTerminalLevel.PostTerminalsScheduleActionsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ScheduleTerminalActionsRequest](src/models/schedule-terminal-actions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduleTerminalActionsResponse](src/models/schedule-terminal-actions-response.ts)</code>

**OnError**: <code>[TerminalActionsTerminalLevel.PostTerminalsScheduleActionsError](src/resources/terminal-actions-terminal-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TerminalOrdersCompanyLevel

> Source: [TerminalOrdersCompanyLevel](src/resources/terminal-orders-company-level.ts)

<details>
<summary><code>getCompaniesCompanyIdBillingEntities(request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesRequest, options?: RequestOptions): ApiPromise&lt;BillingEntitiesResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the billing entities of the company identified in the path and all merchant accounts belonging to the company.
A billing entity is a legal entity where we charge orders to. An order for terminal products must contain the ID of a billing entity.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersCompanyLevel.getCompaniesCompanyIdBillingEntities({
    companyId,
  });
  // TODO: Handle 'response' of type BillingEntitiesResponse
} catch (err) {
  if (
    err instanceof TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>name?</code> | <code>string</code> | The name of the billing entity. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingEntitiesResponse](src/models/billing-entities-response.ts)</code>

**OnError**: <code>[TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesError](src/resources/terminal-orders-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdShippingLocations(request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsRequest, options?: RequestOptions): ApiPromise&lt;ShippingLocationsResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the shipping locations for the company identified in the path and all merchant accounts belonging to the company.
A shipping location includes the address where orders can be delivered, and an ID which you need to specify when ordering terminal products.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersCompanyLevel.getCompaniesCompanyIdShippingLocations({
    companyId,
  });
  // TODO: Handle 'response' of type ShippingLocationsResponse
} catch (err) {
  if (
    err instanceof TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>name?</code> | <code>string</code> | The name of the shipping location. |
| <code>offset?</code> | <code>number</code> | The number of locations to skip. |
| <code>limit?</code> | <code>number</code> | The number of locations to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ShippingLocationsResponse](src/models/shipping-locations-response.ts)</code>

**OnError**: <code>[TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsError](src/resources/terminal-orders-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdTerminalModels(request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsRequest, options?: RequestOptions): ApiPromise&lt;TerminalModelsResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of payment terminal models that the company identified in the path has access to.
The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersCompanyLevel.getCompaniesCompanyIdTerminalModels({ companyId });
  // TODO: Handle 'response' of type TerminalModelsResponse
} catch (err) {
  if (
    err instanceof TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalModelsResponse](src/models/terminal-models-response.ts)</code>

**OnError**: <code>[TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsError](src/resources/terminal-orders-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdTerminalOrders(request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersRequest, options?: RequestOptions): ApiPromise&lt;TerminalOrdersResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a lists of terminal products orders for the company identified in the path.
To filter the list, use one or more of the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersCompanyLevel.getCompaniesCompanyIdTerminalOrders({ companyId });
  // TODO: Handle 'response' of type TerminalOrdersResponse
} catch (err) {
  if (
    err instanceof TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>customerOrderReference?</code> | <code>string</code> | Your purchase order number. |
| <code>status?</code> | <code>string</code> | The order status. Possible values (not case-sensitive): Placed, Confirmed, Cancelled, Shipped, Delivered. |
| <code>offset?</code> | <code>number</code> | The number of orders to skip. |
| <code>limit?</code> | <code>number</code> | The number of orders to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalOrdersResponse](src/models/terminal-orders-response.ts)</code>

**OnError**: <code>[TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersError](src/resources/terminal-orders-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdTerminalOrdersOrderId(request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdRequest, options?: RequestOptions): ApiPromise&lt;TerminalOrder, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the terminal products order identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersCompanyLevel.getCompaniesCompanyIdTerminalOrdersOrderId({
    companyId,
    orderId,
  });
  // TODO: Handle 'response' of type TerminalOrder
} catch (err) {
  if (
    err instanceof TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>orderId</code> | <code>string</code> | The unique identifier of the order. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalOrder](src/models/terminal-order.ts)</code>

**OnError**: <code>[TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdError](src/resources/terminal-orders-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdTerminalProducts(request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsRequest, options?: RequestOptions): ApiPromise&lt;TerminalProductsResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a country-specific list of payment terminal packages and parts that the company identified in the path has access to.
 
To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersCompanyLevel.getCompaniesCompanyIdTerminalProducts({
    companyId,
    country,
  });
  // TODO: Handle 'response' of type TerminalProductsResponse
} catch (err) {
  if (
    err instanceof TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>country</code> | <code>string</code> | The country to return products for, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **US** |
| <code>terminalModelId?</code> | <code>string</code> | The terminal model to return products for. Use the ID returned in the [GET `/terminalModels`](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/companies/{companyId}/terminalModels) response. For example, **Verifone.M400** |
| <code>offset?</code> | <code>number</code> | The number of products to skip. |
| <code>limit?</code> | <code>number</code> | The number of products to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalProductsResponse](src/models/terminal-products-response.ts)</code>

**OnError**: <code>[TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsError](src/resources/terminal-orders-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchCompaniesCompanyIdTerminalOrdersOrderId(request: TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest, options?: RequestOptions): ApiPromise&lt;TerminalOrder, TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the terminal products order identified in the path.
Updating is only possible while the order has the status **Placed**.

The request body only needs to contain what you want to change. 
However, to update the products in the `items` array, you must provide the entire array. For example, if the array has three items:
 To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersCompanyLevel.patchCompaniesCompanyIdTerminalOrdersOrderId({
    companyId,
    orderId,
  });
  // TODO: Handle 'response' of type TerminalOrder
} catch (err) {
  if (
    err instanceof TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>orderId</code> | <code>string</code> | The unique identifier of the order. |
| <code>body?</code> | <code>[TerminalOrderRequest](src/models/terminal-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalOrder](src/models/terminal-order.ts)</code>

**OnError**: <code>[TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdError](src/resources/terminal-orders-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdShippingLocations(request: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsRequest, options?: RequestOptions): ApiPromise&lt;ShippingLocation, TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a shipping location for the company identified in the path. A shipping location defines an address where orders can be delivered.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersCompanyLevel.postCompaniesCompanyIdShippingLocations({
    companyId,
  });
  // TODO: Handle 'response' of type ShippingLocation
} catch (err) {
  if (
    err instanceof TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>body?</code> | <code>[ShippingLocation](src/models/shipping-location.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ShippingLocation](src/models/shipping-location.ts)</code>

**OnError**: <code>[TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsError](src/resources/terminal-orders-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdTerminalOrders(request: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersRequest, options?: RequestOptions): ApiPromise&lt;TerminalOrder, TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an order for payment terminal products for the company identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write
>Requests to the Management API test endpoint do not create actual orders for test terminals. To order test terminals, you need to [submit a sales order](https://docs.adyen.com/point-of-sale/managing-terminals/order-terminals/#sales-order-steps) in your Customer Area.

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersCompanyLevel.postCompaniesCompanyIdTerminalOrders({
    companyId,
  });
  // TODO: Handle 'response' of type TerminalOrder
} catch (err) {
  if (
    err instanceof TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>body?</code> | <code>[TerminalOrderRequest](src/models/terminal-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalOrder](src/models/terminal-order.ts)</code>

**OnError**: <code>[TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersError](src/resources/terminal-orders-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdTerminalOrdersOrderIdCancel(request: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelRequest, options?: RequestOptions): ApiPromise&lt;TerminalOrder, TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the terminal products order identified in the path.
Cancelling is only possible while the order has the status **Placed**.
To cancel an order, make a POST call without a request body. The response returns the full order details, but with the status changed to **Cancelled**.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersCompanyLevel.postCompaniesCompanyIdTerminalOrdersOrderIdCancel({
    companyId,
    orderId,
  });
  // TODO: Handle 'response' of type TerminalOrder
} catch (err) {
  if (
    err instanceof TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>orderId</code> | <code>string</code> | The unique identifier of the order. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalOrder](src/models/terminal-order.ts)</code>

**OnError**: <code>[TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError](src/resources/terminal-orders-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TerminalOrdersMerchantLevel

> Source: [TerminalOrdersMerchantLevel](src/resources/terminal-orders-merchant-level.ts)

<details>
<summary><code>getMerchantsMerchantIdBillingEntities(request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesRequest, options?: RequestOptions): ApiPromise&lt;BillingEntitiesResponse, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the billing entities of the merchant account identified in the path.
A billing entity is a legal entity where we charge orders to. An order for terminal products must contain the ID of a billing entity.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersMerchantLevel.getMerchantsMerchantIdBillingEntities({
    merchantId,
  });
  // TODO: Handle 'response' of type BillingEntitiesResponse
} catch (err) {
  if (
    err instanceof TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>name?</code> | <code>string</code> | The name of the billing entity. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingEntitiesResponse](src/models/billing-entities-response.ts)</code>

**OnError**: <code>[TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesError](src/resources/terminal-orders-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdShippingLocations(request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsRequest, options?: RequestOptions): ApiPromise&lt;ShippingLocationsResponse, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the shipping locations for the merchant account identified in the path.
A shipping location includes the address where orders can be delivered, and an ID which you need to specify when ordering terminal products.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersMerchantLevel.getMerchantsMerchantIdShippingLocations({
    merchantId,
  });
  // TODO: Handle 'response' of type ShippingLocationsResponse
} catch (err) {
  if (
    err instanceof TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>name?</code> | <code>string</code> | The name of the shipping location. |
| <code>offset?</code> | <code>number</code> | The number of locations to skip. |
| <code>limit?</code> | <code>number</code> | The number of locations to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ShippingLocationsResponse](src/models/shipping-locations-response.ts)</code>

**OnError**: <code>[TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsError](src/resources/terminal-orders-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdTerminalModels(request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsRequest, options?: RequestOptions): ApiPromise&lt;TerminalModelsResponse, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the payment terminal models that the merchant account identified in the path has access to. The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersMerchantLevel.getMerchantsMerchantIdTerminalModels({
    merchantId,
  });
  // TODO: Handle 'response' of type TerminalModelsResponse
} catch (err) {
  if (
    err instanceof TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalModelsResponse](src/models/terminal-models-response.ts)</code>

**OnError**: <code>[TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsError](src/resources/terminal-orders-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdTerminalOrders(request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersRequest, options?: RequestOptions): ApiPromise&lt;TerminalOrdersResponse, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of terminal products orders for the merchant account identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersMerchantLevel.getMerchantsMerchantIdTerminalOrders({
    merchantId,
  });
  // TODO: Handle 'response' of type TerminalOrdersResponse
} catch (err) {
  if (
    err instanceof TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | - |
| <code>customerOrderReference?</code> | <code>string</code> | Your purchase order number. |
| <code>status?</code> | <code>string</code> | The order status. Possible values (not case-sensitive): Placed, Confirmed, Cancelled, Shipped, Delivered. |
| <code>offset?</code> | <code>number</code> | The number of orders to skip. |
| <code>limit?</code> | <code>number</code> | The number of orders to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalOrdersResponse](src/models/terminal-orders-response.ts)</code>

**OnError**: <code>[TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersError](src/resources/terminal-orders-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdTerminalOrdersOrderId(request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdRequest, options?: RequestOptions): ApiPromise&lt;TerminalOrder, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the terminal products order identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersMerchantLevel.getMerchantsMerchantIdTerminalOrdersOrderId({
    merchantId,
    orderId,
  });
  // TODO: Handle 'response' of type TerminalOrder
} catch (err) {
  if (
    err instanceof TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>orderId</code> | <code>string</code> | The unique identifier of the order. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalOrder](src/models/terminal-order.ts)</code>

**OnError**: <code>[TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdError](src/resources/terminal-orders-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdTerminalProducts(request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsRequest, options?: RequestOptions): ApiPromise&lt;TerminalProductsResponse, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a country-specific list of payment terminal packages and parts that the merchant account identified in the path has access to.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersMerchantLevel.getMerchantsMerchantIdTerminalProducts({
    merchantId,
    country,
  });
  // TODO: Handle 'response' of type TerminalProductsResponse
} catch (err) {
  if (
    err instanceof TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>country</code> | <code>string</code> | The country to return products for, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **US** |
| <code>terminalModelId?</code> | <code>string</code> | The terminal model to return products for. Use the ID returned in the [GET `/terminalModels`](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/merchants/{merchantId}/terminalModels) response. For example, **Verifone.M400** |
| <code>offset?</code> | <code>number</code> | The number of products to skip. |
| <code>limit?</code> | <code>number</code> | The number of products to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalProductsResponse](src/models/terminal-products-response.ts)</code>

**OnError**: <code>[TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsError](src/resources/terminal-orders-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdTerminalOrdersOrderId(request: TerminalOrdersMerchantLevel.PatchMerchantsMerchantIdTerminalOrdersOrderIdRequest, options?: RequestOptions): ApiPromise&lt;TerminalOrder, TerminalOrdersMerchantLevel.PatchMerchantsMerchantIdTerminalOrdersOrderIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the terminal products order identified in the path.
Updating is only possible while the order has the status **Placed**.

The request body only needs to contain what you want to change. 
However, to update the products in the `items` array, you must provide the entire array. For example, if the array has three items:
 To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersMerchantLevel.patchMerchantsMerchantIdTerminalOrdersOrderId({
    merchantId,
    orderId,
  });
  // TODO: Handle 'response' of type TerminalOrder
} catch (err) {
  if (
    err instanceof TerminalOrdersMerchantLevel.PatchMerchantsMerchantIdTerminalOrdersOrderIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>orderId</code> | <code>string</code> | The unique identifier of the order. |
| <code>body?</code> | <code>[TerminalOrderRequest](src/models/terminal-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalOrder](src/models/terminal-order.ts)</code>

**OnError**: <code>[TerminalOrdersMerchantLevel.PatchMerchantsMerchantIdTerminalOrdersOrderIdError](src/resources/terminal-orders-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdShippingLocations(request: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsRequest, options?: RequestOptions): ApiPromise&lt;ShippingLocation, TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a shipping location for the merchant account identified in the path. A shipping location defines an address where orders can be shipped to. 

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersMerchantLevel.postMerchantsMerchantIdShippingLocations({
    merchantId,
  });
  // TODO: Handle 'response' of type ShippingLocation
} catch (err) {
  if (
    err instanceof TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>body?</code> | <code>[ShippingLocation](src/models/shipping-location.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ShippingLocation](src/models/shipping-location.ts)</code>

**OnError**: <code>[TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsError](src/resources/terminal-orders-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdTerminalOrders(request: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersRequest, options?: RequestOptions): ApiPromise&lt;TerminalOrder, TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an order for payment terminal products for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write
>Requests to the Management API test endpoint do not create actual orders for test terminals. To order test terminals, you need to [submit a sales order](https://docs.adyen.com/point-of-sale/managing-terminals/order-terminals/#sales-order-steps) in your Customer Area.

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalOrdersMerchantLevel.postMerchantsMerchantIdTerminalOrders({
    merchantId,
  });
  // TODO: Handle 'response' of type TerminalOrder
} catch (err) {
  if (
    err instanceof TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>body?</code> | <code>[TerminalOrderRequest](src/models/terminal-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalOrder](src/models/terminal-order.ts)</code>

**OnError**: <code>[TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersError](src/resources/terminal-orders-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdTerminalOrdersOrderIdCancel(request: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelRequest, options?: RequestOptions): ApiPromise&lt;TerminalOrder, TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the terminal products order identified in the path.
Cancelling is only possible while the order has the status **Placed**.
To cancel an order, make a POST call without a request body. The response returns the full order details, but with the status changed to **Cancelled**.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.terminalOrdersMerchantLevel.postMerchantsMerchantIdTerminalOrdersOrderIdCancel({
      merchantId,
      orderId,
    });
  // TODO: Handle 'response' of type TerminalOrder
} catch (err) {
  if (
    err instanceof TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>orderId</code> | <code>string</code> | The unique identifier of the order. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalOrder](src/models/terminal-order.ts)</code>

**OnError**: <code>[TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError](src/resources/terminal-orders-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TerminalSettingsCompanyLevel

> Source: [TerminalSettingsCompanyLevel](src/resources/terminal-settings-company-level.ts)

<details>
<summary><code>getCompaniesCompanyIdTerminalLogos(request: TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalLogosRequest, options?: RequestOptions): ApiPromise&lt;Logo, TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalLogosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the logo that is configured for a specific payment terminal model at the company identified in the path. 

The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsCompanyLevel.getCompaniesCompanyIdTerminalLogos({
    companyId,
    model,
  });
  // TODO: Handle 'response' of type Logo
} catch (err) {
  if (
    err instanceof TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalLogosError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>model</code> | <code>string</code> | The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Logo](src/models/logo.ts)</code>

**OnError**: <code>[TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalLogosError](src/resources/terminal-settings-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdTerminalSettings(request: TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise&lt;TerminalSettings, TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the payment terminal settings that are configured for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsCompanyLevel.getCompaniesCompanyIdTerminalSettings({
    companyId,
  });
  // TODO: Handle 'response' of type TerminalSettings
} catch (err) {
  if (
    err instanceof TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalSettings](src/models/terminal-settings.ts)</code>

**OnError**: <code>[TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalSettingsError](src/resources/terminal-settings-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchCompaniesCompanyIdTerminalLogos(request: TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalLogosRequest, options?: RequestOptions): ApiPromise&lt;Logo, TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalLogosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the logo that is configured for a specific payment terminal model at the company identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal). 
* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from the Adyen PSP level, specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsCompanyLevel.patchCompaniesCompanyIdTerminalLogos({
    companyId,
    model,
  });
  // TODO: Handle 'response' of type Logo
} catch (err) {
  if (
    err instanceof TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalLogosError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>model</code> | <code>string</code> | The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T. |
| <code>body?</code> | <code>[Logo](src/models/logo.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Logo](src/models/logo.ts)</code>

**OnError**: <code>[TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalLogosError](src/resources/terminal-settings-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchCompaniesCompanyIdTerminalSettings(request: TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise&lt;TerminalSettings, TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates payment terminal settings for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal).

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from the Adyen PSP level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsCompanyLevel.patchCompaniesCompanyIdTerminalSettings({
    companyId,
  });
  // TODO: Handle 'response' of type TerminalSettings
} catch (err) {
  if (
    err instanceof TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>body?</code> | <code>[TerminalSettings](src/models/terminal-settings.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalSettings](src/models/terminal-settings.ts)</code>

**OnError**: <code>[TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalSettingsError](src/resources/terminal-settings-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TerminalSettingsMerchantLevel

> Source: [TerminalSettingsMerchantLevel](src/resources/terminal-settings-merchant-level.ts)

<details>
<summary><code>getMerchantsMerchantIdTerminalLogos(request: TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosRequest, options?: RequestOptions): ApiPromise&lt;Logo, TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the logo that is configured for a specific payment terminal model at the merchant account identified in the path. 
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of the specified model under the merchant account, unless a different logo is configured at a lower level (store or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsMerchantLevel.getMerchantsMerchantIdTerminalLogos({
    merchantId,
    model,
  });
  // TODO: Handle 'response' of type Logo
} catch (err) {
  if (
    err instanceof TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>model</code> | <code>string</code> | The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Logo](src/models/logo.ts)</code>

**OnError**: <code>[TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosError](src/resources/terminal-settings-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdTerminalSettings(request: TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise&lt;TerminalSettings, TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the payment terminal settings that are configured for the merchant account identified in the path. These settings apply to all terminals under the merchant account unless different values are configured at a lower level (store or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsMerchantLevel.getMerchantsMerchantIdTerminalSettings({
    merchantId,
  });
  // TODO: Handle 'response' of type TerminalSettings
} catch (err) {
  if (
    err instanceof TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalSettings](src/models/terminal-settings.ts)</code>

**OnError**: <code>[TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsError](src/resources/terminal-settings-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdTerminalLogos(request: TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosRequest, options?: RequestOptions): ApiPromise&lt;Logo, TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the logo for a specific payment terminal model at the merchant account identified in the path. You can update the logo for only one terminal model at a time. 
This logo applies to all terminals of the specified model under the merchant account, unless a different logo is configured at a lower level (store or individual terminal).

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from the company account, specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsMerchantLevel.patchMerchantsMerchantIdTerminalLogos({
    merchantId,
    model,
  });
  // TODO: Handle 'response' of type Logo
} catch (err) {
  if (
    err instanceof TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>model</code> | <code>string</code> | The terminal model. Allowed values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T. |
| <code>body?</code> | <code>[Logo](src/models/logo.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Logo](src/models/logo.ts)</code>

**OnError**: <code>[TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosError](src/resources/terminal-settings-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdTerminalSettings(request: TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise&lt;TerminalSettings, TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates payment terminal settings for the merchant account identified in the path.
These settings apply to all terminals under the merchant account, unless different values are configured at a lower level (store or individual terminal).

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write



For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsMerchantLevel.patchMerchantsMerchantIdTerminalSettings({
    merchantId,
  });
  // TODO: Handle 'response' of type TerminalSettings
} catch (err) {
  if (
    err instanceof TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>body?</code> | <code>[TerminalSettings](src/models/terminal-settings.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalSettings](src/models/terminal-settings.ts)</code>

**OnError**: <code>[TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalSettingsError](src/resources/terminal-settings-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TerminalSettingsStoreLevel

> Source: [TerminalSettingsStoreLevel](src/resources/terminal-settings-store-level.ts)

<details>
<summary><code>getMerchantsMerchantIdStoresReferenceTerminalLogos(request: TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosRequest, options?: RequestOptions): ApiPromise&lt;Logo, TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the logo that is configured for a specific payment terminal model at the store identified in the path. 
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsStoreLevel.getMerchantsMerchantIdStoresReferenceTerminalLogos(
    { merchantId, reference, model },
  );
  // TODO: Handle 'response' of type Logo
} catch (err) {
  if (
    err instanceof TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>reference</code> | <code>string</code> | The reference that identifies the store. |
| <code>model</code> | <code>string</code> | The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Logo](src/models/logo.ts)</code>

**OnError**: <code>[TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosError](src/resources/terminal-settings-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdStoresReferenceTerminalSettings(request: TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsRequest, options?: RequestOptions): ApiPromise&lt;TerminalSettings, TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.terminalSettingsStoreLevel.getMerchantsMerchantIdStoresReferenceTerminalSettings({
      merchantId,
      reference,
    });
  // TODO: Handle 'response' of type TerminalSettings
} catch (err) {
  if (
    err instanceof TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>reference</code> | <code>string</code> | The reference that identifies the store. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalSettings](src/models/terminal-settings.ts)</code>

**OnError**: <code>[TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsError](src/resources/terminal-settings-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStoresStoreIdTerminalLogos(request: TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosRequest, options?: RequestOptions): ApiPromise&lt;Logo, TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the logo that is configured for a specific payment terminal model at the store identified in the path. 
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of that model under the store unless a different logo is configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsStoreLevel.getStoresStoreIdTerminalLogos({ storeId, model });
  // TODO: Handle 'response' of type Logo
} catch (err) {
  if (
    err instanceof TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storeId</code> | <code>string</code> | The unique identifier of the store. |
| <code>model</code> | <code>string</code> | The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Logo](src/models/logo.ts)</code>

**OnError**: <code>[TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosError](src/resources/terminal-settings-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStoresStoreIdTerminalSettings(request: TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise&lt;TerminalSettings, TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsStoreLevel.getStoresStoreIdTerminalSettings({ storeId });
  // TODO: Handle 'response' of type TerminalSettings
} catch (err) {
  if (
    err instanceof TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storeId</code> | <code>string</code> | The unique identifier of the store. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalSettings](src/models/terminal-settings.ts)</code>

**OnError**: <code>[TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsError](src/resources/terminal-settings-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdStoresReferenceTerminalLogos(request: TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest, options?: RequestOptions): ApiPromise&lt;Logo, TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. 

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.terminalSettingsStoreLevel.patchMerchantsMerchantIdStoresReferenceTerminalLogos({
      merchantId,
      reference,
      model,
    });
  // TODO: Handle 'response' of type Logo
} catch (err) {
  if (
    err instanceof TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>reference</code> | <code>string</code> | The reference that identifies the store. |
| <code>model</code> | <code>string</code> | The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T |
| <code>body?</code> | <code>[Logo](src/models/logo.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Logo](src/models/logo.ts)</code>

**OnError**: <code>[TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosError](src/resources/terminal-settings-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdStoresReferenceTerminalSettings(request: TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest, options?: RequestOptions): ApiPromise&lt;TerminalSettings, TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal.

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.terminalSettingsStoreLevel.patchMerchantsMerchantIdStoresReferenceTerminalSettings({
      merchantId,
      reference,
    });
  // TODO: Handle 'response' of type TerminalSettings
} catch (err) {
  if (
    err instanceof TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>reference</code> | <code>string</code> | The reference that identifies the store. |
| <code>body?</code> | <code>[TerminalSettings](src/models/terminal-settings.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalSettings](src/models/terminal-settings.ts)</code>

**OnError**: <code>[TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError](src/resources/terminal-settings-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchStoresStoreIdTerminalLogos(request: TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosRequest, options?: RequestOptions): ApiPromise&lt;Logo, TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. 

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsStoreLevel.patchStoresStoreIdTerminalLogos({
    storeId,
    model,
  });
  // TODO: Handle 'response' of type Logo
} catch (err) {
  if (
    err instanceof TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storeId</code> | <code>string</code> | The unique identifier of the store. |
| <code>model</code> | <code>string</code> | The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T. |
| <code>body?</code> | <code>[Logo](src/models/logo.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Logo](src/models/logo.ts)</code>

**OnError**: <code>[TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosError](src/resources/terminal-settings-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchStoresStoreIdTerminalSettings(request: TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise&lt;TerminalSettings, TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal.

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsStoreLevel.patchStoresStoreIdTerminalSettings({ storeId });
  // TODO: Handle 'response' of type TerminalSettings
} catch (err) {
  if (
    err instanceof TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storeId</code> | <code>string</code> | The unique identifier of the store. |
| <code>body?</code> | <code>[TerminalSettings](src/models/terminal-settings.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalSettings](src/models/terminal-settings.ts)</code>

**OnError**: <code>[TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsError](src/resources/terminal-settings-store-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TerminalSettingsTerminalLevel

> Source: [TerminalSettingsTerminalLevel](src/resources/terminal-settings-terminal-level.ts)

<details>
<summary><code>getTerminalsTerminalIdTerminalLogos(request: TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosRequest, options?: RequestOptions): ApiPromise&lt;Logo, TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the logo that is configured for the payment terminal identified in the path.
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsTerminalLevel.getTerminalsTerminalIdTerminalLogos({
    terminalId,
  });
  // TODO: Handle 'response' of type Logo
} catch (err) {
  if (
    err instanceof TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>terminalId</code> | <code>string</code> | The unique identifier of the payment terminal. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Logo](src/models/logo.ts)</code>

**OnError**: <code>[TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosError](src/resources/terminal-settings-terminal-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTerminalsTerminalIdTerminalSettings(request: TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise&lt;TerminalSettings, TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the settings that are configured for the payment terminal identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsTerminalLevel.getTerminalsTerminalIdTerminalSettings({
    terminalId,
  });
  // TODO: Handle 'response' of type TerminalSettings
} catch (err) {
  if (
    err instanceof TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>terminalId</code> | <code>string</code> | The unique identifier of the payment terminal. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalSettings](src/models/terminal-settings.ts)</code>

**OnError**: <code>[TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsError](src/resources/terminal-settings-terminal-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchTerminalsTerminalIdTerminalLogos(request: TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosRequest, options?: RequestOptions): ApiPromise&lt;Logo, TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the logo for the payment terminal identified in the path.

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from a higher level (store, merchant account, or company account), specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsTerminalLevel.patchTerminalsTerminalIdTerminalLogos({
    terminalId,
  });
  // TODO: Handle 'response' of type Logo
} catch (err) {
  if (
    err instanceof TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>terminalId</code> | <code>string</code> | The unique identifier of the payment terminal. |
| <code>body?</code> | <code>[Logo](src/models/logo.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Logo](src/models/logo.ts)</code>

**OnError**: <code>[TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosError](src/resources/terminal-settings-terminal-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchTerminalsTerminalIdTerminalSettings(request: TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise&lt;TerminalSettings, TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the settings that are configured for the payment terminal identified in the path.

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminalSettingsTerminalLevel.patchTerminalsTerminalIdTerminalSettings({
    terminalId,
  });
  // TODO: Handle 'response' of type TerminalSettings
} catch (err) {
  if (
    err instanceof TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalSettingsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>terminalId</code> | <code>string</code> | The unique identifier of the payment terminal. |
| <code>body?</code> | <code>[TerminalSettings](src/models/terminal-settings.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TerminalSettings](src/models/terminal-settings.ts)</code>

**OnError**: <code>[TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalSettingsError](src/resources/terminal-settings-terminal-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AndroidFilesCompanyLevel

> Source: [AndroidFilesCompanyLevel](src/resources/android-files-company-level.ts)

<details>
<summary><code>getCompaniesCompanyIdAndroidApps(request: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsRequest, options?: RequestOptions): ApiPromise&lt;AndroidAppsResponse, AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the Android apps that are available for the company identified in the path. 
These apps have been uploaded to Adyen and can be installed or uninstalled on Android payment terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Android files read
* Management API—Android files read and write
* Management API—Terminal actions read
* Management API—Terminal actions read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.androidFilesCompanyLevel.getCompaniesCompanyIdAndroidApps({ companyId });
  // TODO: Handle 'response' of type AndroidAppsResponse
} catch (err) {
  if (
    err instanceof AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 20 items on a page. |
| <code>packageName?</code> | <code>string</code> | The package name that uniquely identifies the Android app. |
| <code>versionCode?</code> | <code>number</code> | The version number of the app. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AndroidAppsResponse](src/models/android-apps-response.ts)</code>

**OnError**: <code>[AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsError](src/resources/android-files-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdAndroidAppsId(request: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdRequest, options?: RequestOptions): ApiPromise&lt;AndroidApp, AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the Android app identified in the path. 
These apps have been uploaded to Adyen and can be installed or uninstalled on Android payment terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Android files read
* Management API—Android files read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.androidFilesCompanyLevel.getCompaniesCompanyIdAndroidAppsId({
    companyId,
    id,
  });
  // TODO: Handle 'response' of type AndroidApp
} catch (err) {
  if (
    err instanceof AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>id</code> | <code>string</code> | The unique identifier of the app. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AndroidApp](src/models/android-app.ts)</code>

**OnError**: <code>[AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdError](src/resources/android-files-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdAndroidCertificates(request: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesRequest, options?: RequestOptions): ApiPromise&lt;AndroidCertificatesResponse, AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the Android certificates that are available for the company identified in the path.
Typically, these certificates enable running apps on Android payment terminals. The certificates in the list have been uploaded to Adyen and can be installed or uninstalled on Android terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Android files read
* Management API—Android files read and write
* Management API—Terminal actions read
* Management API—Terminal actions read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.androidFilesCompanyLevel.getCompaniesCompanyIdAndroidCertificates({
    companyId,
  });
  // TODO: Handle 'response' of type AndroidCertificatesResponse
} catch (err) {
  if (
    err instanceof AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 20 items on a page. |
| <code>certificateName?</code> | <code>string</code> | The name of the certificate. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AndroidCertificatesResponse](src/models/android-certificates-response.ts)</code>

**OnError**: <code>[AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesError](src/resources/android-files-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchCompaniesCompanyIdAndroidAppsId(request: AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdRequest, options?: RequestOptions): ApiPromise&lt;ReprocessAndroidAppResponse, AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reuploads the Android app identified in the path. 
To make this request, your API credential must have this [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Android files read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
>By choosing to upload, install, or run any third-party applications on an Adyen payment terminal, you accept full responsibility and liability for any consequences of uploading, installing, or running any such applications.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.androidFilesCompanyLevel.patchCompaniesCompanyIdAndroidAppsId({
    companyId,
    id,
  });
  // TODO: Handle 'response' of type ReprocessAndroidAppResponse
} catch (err) {
  if (
    err instanceof AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>id</code> | <code>string</code> | The unique identifier of the app. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReprocessAndroidAppResponse](src/models/reprocess-android-app-response.ts)</code>

**OnError**: <code>[AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdError](src/resources/android-files-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdAndroidApps(request: AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsRequest, options?: RequestOptions): ApiPromise&lt;UploadAndroidAppResponse, AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads an Android APK file to Adyen.
The maximum APK file size is 200 MB.
To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Android files read and write

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
>By choosing to upload, install, or run any third-party applications on an Adyen payment terminal, you accept full responsibility and liability for any consequences of uploading, installing, or running any such applications.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.androidFilesCompanyLevel.postCompaniesCompanyIdAndroidApps({ companyId });
  // TODO: Handle 'response' of type UploadAndroidAppResponse
} catch (err) {
  if (
    err instanceof AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UploadAndroidAppResponse](src/models/upload-android-app-response.ts)</code>

**OnError**: <code>[AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsError](src/resources/android-files-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdAndroidCertificates(request: AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidCertificatesRequest, options?: RequestOptions): ApiPromise&lt;UploadAndroidCertificateResponse, AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidCertificatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads an Android Certificate file to Adyen.

In the live environment, requests to this endpoint are subject to [rate limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.androidFilesCompanyLevel.postCompaniesCompanyIdAndroidCertificates({
    companyId,
  });
  // TODO: Handle 'response' of type UploadAndroidCertificateResponse
} catch (err) {
  if (
    err instanceof AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidCertificatesError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UploadAndroidCertificateResponse](src/models/upload-android-certificate-response.ts)</code>

**OnError**: <code>[AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidCertificatesError](src/resources/android-files-company-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SplitConfigurationMerchantLevel

> Source: [SplitConfigurationMerchantLevel](src/resources/split-configuration-merchant-level.ts)

<details>
<summary><code>deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(request: SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest, options?: RequestOptions): ApiPromise&lt;SplitConfiguration, SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the split configuration profile specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API - SplitConfiguration read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.splitConfigurationMerchantLevel.deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
      { merchantId, splitConfigurationId },
    );
  // TODO: Handle 'response' of type SplitConfiguration
} catch (err) {
  if (
    err instanceof
      SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>splitConfigurationId</code> | <code>string</code> | The unique identifier of the split configuration. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SplitConfiguration](src/models/split-configuration.ts)</code>

**OnError**: <code>[SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError](src/resources/split-configuration-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(request: SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRequest, options?: RequestOptions): ApiPromise&lt;SplitConfiguration, SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the rule specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API - SplitConfiguration read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.splitConfigurationMerchantLevel.deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(
      { merchantId, splitConfigurationId, ruleId },
    );
  // TODO: Handle 'response' of type SplitConfiguration
} catch (err) {
  if (
    err instanceof
      SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>splitConfigurationId</code> | <code>string</code> | The unique identifier of the split configuration. |
| <code>ruleId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SplitConfiguration](src/models/split-configuration.ts)</code>

**OnError**: <code>[SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError](src/resources/split-configuration-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdSplitConfigurations(request: SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsRequest, options?: RequestOptions): ApiPromise&lt;SplitConfigurationList, SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of split configuration profiles for the merchant account.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API - SplitConfiguration read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.splitConfigurationMerchantLevel.getMerchantsMerchantIdSplitConfigurations({
    merchantId,
  });
  // TODO: Handle 'response' of type SplitConfigurationList
} catch (err) {
  if (
    err instanceof SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SplitConfigurationList](src/models/split-configuration-list.ts)</code>

**OnError**: <code>[SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsError](src/resources/split-configuration-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(request: SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest, options?: RequestOptions): ApiPromise&lt;SplitConfiguration, SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the split configuration profile specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API - SplitConfiguration read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.splitConfigurationMerchantLevel.getMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
      { merchantId, splitConfigurationId },
    );
  // TODO: Handle 'response' of type SplitConfiguration
} catch (err) {
  if (
    err instanceof
      SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>splitConfigurationId</code> | <code>string</code> | The unique identifier of the split configuration. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SplitConfiguration](src/models/split-configuration.ts)</code>

**OnError**: <code>[SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError](src/resources/split-configuration-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(request: SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest, options?: RequestOptions): ApiPromise&lt;SplitConfiguration, SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the description of the split configuration profile specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API - SplitConfiguration read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.splitConfigurationMerchantLevel.patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
      { merchantId, splitConfigurationId },
    );
  // TODO: Handle 'response' of type SplitConfiguration
} catch (err) {
  if (
    err instanceof
      SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>splitConfigurationId</code> | <code>string</code> | The unique identifier of the split configuration. |
| <code>body?</code> | <code>[UpdateSplitConfigurationRequest](src/models/update-split-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SplitConfiguration](src/models/split-configuration.ts)</code>

**OnError**: <code>[SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError](src/resources/split-configuration-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(request: SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRequest, options?: RequestOptions): ApiPromise&lt;SplitConfiguration, SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the [split conditions of the rule](https://docs.adyen.com/platforms/automatic-split-configuration/manage-split-configurations/api/#update-condition) specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API - SplitConfiguration read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.splitConfigurationMerchantLevel.patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(
      { merchantId, splitConfigurationId, ruleId },
    );
  // TODO: Handle 'response' of type SplitConfiguration
} catch (err) {
  if (
    err instanceof
      SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>splitConfigurationId</code> | <code>string</code> | The identifier of the split configuration. |
| <code>ruleId</code> | <code>string</code> | The unique identifier of the split configuration rule. |
| <code>body?</code> | <code>[UpdateSplitConfigurationRuleRequest](src/models/update-split-configuration-rule-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SplitConfiguration](src/models/split-configuration.ts)</code>

**OnError**: <code>[SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError](src/resources/split-configuration-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMerchantsSplitConfigurationsRulesSplitLogic(request: SplitConfigurationMerchantLevel.PatchMerchantsSplitConfigurationsRulesSplitLogicRequest, options?: RequestOptions): ApiPromise&lt;SplitConfiguration, SplitConfigurationMerchantLevel.PatchMerchantsSplitConfigurationsRulesSplitLogicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the [split logic](https://docs.adyen.com/platforms/automatic-split-configuration/manage-split-configurations/api/#update-split-logic) specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API - SplitConfiguration read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.splitConfigurationMerchantLevel.patchMerchantsSplitConfigurationsRulesSplitLogic({
      merchantId,
      splitConfigurationId,
      ruleId,
      splitLogicId,
    });
  // TODO: Handle 'response' of type SplitConfiguration
} catch (err) {
  if (
    err instanceof SplitConfigurationMerchantLevel.PatchMerchantsSplitConfigurationsRulesSplitLogicError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>splitConfigurationId</code> | <code>string</code> | The unique identifier of the split configuration. |
| <code>ruleId</code> | <code>string</code> | The unique identifier of the split configuration rule. |
| <code>splitLogicId</code> | <code>string</code> | The unique identifier of the split configuration split. |
| <code>body?</code> | <code>[UpdateSplitConfigurationLogicRequest](src/models/update-split-configuration-logic-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SplitConfiguration](src/models/split-configuration.ts)</code>

**OnError**: <code>[SplitConfigurationMerchantLevel.PatchMerchantsSplitConfigurationsRulesSplitLogicError](src/resources/split-configuration-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdSplitConfigurations(request: SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsRequest, options?: RequestOptions): ApiPromise&lt;SplitConfiguration, SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a split configuration profile to [split payments automatically](https://docs.adyen.com/platforms/automatic-split-configuration/). After you [associate it with a store](https://docs.adyen.com/api-explorer/Management/latest/patch/merchants/(merchantId)/stores/(storeId)#request-splitConfiguration) in your merchant account, it splits the funds of all transactions processed through that store between your liable balance account and [your user's balance account](https://docs.adyen.com/api-explorer/Management/latest/patch/merchants/(merchantId)/stores/(storeId)#request-splitConfiguration-balanceAccountId).

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API - SplitConfiguration read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.splitConfigurationMerchantLevel.postMerchantsMerchantIdSplitConfigurations({
    merchantId,
  });
  // TODO: Handle 'response' of type SplitConfiguration
} catch (err) {
  if (
    err instanceof SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>body?</code> | <code>[SplitConfiguration](src/models/split-configuration.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SplitConfiguration](src/models/split-configuration.ts)</code>

**OnError**: <code>[SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsError](src/resources/split-configuration-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(request: SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest, options?: RequestOptions): ApiPromise&lt;SplitConfiguration, SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

[Creates a rule](https://docs.adyen.com/platforms/automatic-split-configuration/manage-split-configurations/api/#create-rule) in the split configuration profile specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API - SplitConfiguration read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.splitConfigurationMerchantLevel.postMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
      { merchantId, splitConfigurationId },
    );
  // TODO: Handle 'response' of type SplitConfiguration
} catch (err) {
  if (
    err instanceof
      SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>splitConfigurationId</code> | <code>string</code> | The unique identifier of the split configuration. |
| <code>body?</code> | <code>[SplitConfigurationRule](src/models/split-configuration-rule.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SplitConfiguration](src/models/split-configuration.ts)</code>

**OnError**: <code>[SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError](src/resources/split-configuration-merchant-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DonationCampaigns

> Source: [DonationCampaigns](src/resources/donation-campaigns.ts)

<details>
<summary><code>deleteCompaniesCompanyIdCampaignManagementDonationCampaignId(request: DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the donation campaign specified in the path. This request is only allowed if the campaign has the status **inactive**.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Campaign Management read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.donationCampaigns.deleteCompaniesCompanyIdCampaignManagementDonationCampaignId({
    companyId,
    donationCampaignId,
  });
} catch (err) {
  if (
    err instanceof DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>donationCampaignId</code> | <code>string</code> | The unique identifier of the donation campaign to be deleted. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError](src/resources/donation-campaigns.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId(request: DonationCampaigns.GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdRequest, options?: RequestOptions): ApiPromise&lt;ListDonationCampaignsResponse, DonationCampaigns.GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of donation campaigns associated with the account holder specified in the path. You can filter the list by campaign status.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Campaign Management read
* Management API—Campaign Management read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.donationCampaigns.getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId({
      companyId,
      accountHolderId,
    });
  // TODO: Handle 'response' of type ListDonationCampaignsResponse
} catch (err) {
  if (
    err instanceof
      DonationCampaigns.GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>accountHolderId</code> | <code>string</code> | The unique identifier of the account holder. |
| <code>status?</code> | <code>string</code> | The campaign status to return campaigns that match. Allowed values: **inactive**, **active**, or **ended**. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 10 items on a page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListDonationCampaignsResponse](src/models/list-donation-campaigns-response.ts)</code>

**OnError**: <code>[DonationCampaigns.GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError](src/resources/donation-campaigns.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchCompaniesCompanyIdCampaignManagementDonationCampaignId(request: DonationCampaigns.PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdRequest, options?: RequestOptions): ApiPromise&lt;DonationCampaign1, DonationCampaigns.PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the properties of the donation campaign specified in the path. Note the following restrictions: 

* You cannot use a PATCH request to update the campaign status. To activate or end a campaign, make a POST request to the `/campaignManagement/{campaignId}/status/{status}` endpoint.
* You get a validation error if you add account holders that are not compatible with the nonprofit.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Campaign Management read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.donationCampaigns.patchCompaniesCompanyIdCampaignManagementDonationCampaignId(
    { companyId, donationCampaignId },
  );
  // TODO: Handle 'response' of type DonationCampaign1
} catch (err) {
  if (
    err instanceof DonationCampaigns.PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>donationCampaignId</code> | <code>string</code> | The unique identifier of the donation campaign to be updated. |
| <code>body?</code> | <code>[DonationCampaignUpdate](src/models/donation-campaign-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DonationCampaign1](src/models/donation-campaign1.ts)</code>

**OnError**: <code>[DonationCampaigns.PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError](src/resources/donation-campaigns.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdCampaignManagement(request: DonationCampaigns.PostCompaniesCompanyIdCampaignManagementRequest, options?: RequestOptions): ApiPromise&lt;DonationCampaign1, DonationCampaigns.PostCompaniesCompanyIdCampaignManagementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new donation campaign, to give shoppers the option to donate to a nonprofit organization when making a payment. A campaign can be for online payments, in-person payments, or both online and in-person payments.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Campaign Management read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.donationCampaigns.postCompaniesCompanyIdCampaignManagement({ companyId });
  // TODO: Handle 'response' of type DonationCampaign1
} catch (err) {
  if (
    err instanceof DonationCampaigns.PostCompaniesCompanyIdCampaignManagementError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>body?</code> | <code>[DonationCampaignRequest](src/models/donation-campaign-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DonationCampaign1](src/models/donation-campaign1.ts)</code>

**OnError**: <code>[DonationCampaigns.PostCompaniesCompanyIdCampaignManagementError](src/resources/donation-campaigns.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus(request: DonationCampaigns.PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusRequest, options?: RequestOptions): ApiPromise&lt;DonationCampaign1, DonationCampaigns.PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts or stops the donation campaign specified in the path, by providing a path parameter. 
Use the path parameter **activate** to start an inactive campaign, or **end** to stop an active campaign. Other status transitions are not allowed.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Campaign Management read and write

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.donationCampaigns.postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus({
      companyId,
      donationCampaignId,
      status,
    });
  // TODO: Handle 'response' of type DonationCampaign1
} catch (err) {
  if (
    err instanceof
      DonationCampaigns.PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>donationCampaignId</code> | <code>string</code> | The unique identifier of the donation campaign to activate or end. |
| <code>status</code> | <code>[CampaignStatusTransition](src/models/campaign-status-transition.ts)</code> | The desired status change. Possible values: **activate** or **end**. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DonationCampaign1](src/models/donation-campaign1.ts)</code>

**OnError**: <code>[DonationCampaigns.PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError](src/resources/donation-campaigns.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCompaniesCompanyIdNonprofits(request: DonationCampaigns.PostCompaniesCompanyIdNonprofitsRequest, options?: RequestOptions): ApiPromise&lt;ListNonprofitsResponse, DonationCampaigns.PostCompaniesCompanyIdNonprofitsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of supported nonprofit organizations to choose from when creating a donation campaign. The list only contains nonprofits that are compatible with all the account holders specified in the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.donationCampaigns.postCompaniesCompanyIdNonprofits({ companyId });
  // TODO: Handle 'response' of type ListNonprofitsResponse
} catch (err) {
  if (
    err instanceof DonationCampaigns.PostCompaniesCompanyIdNonprofitsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyId</code> | <code>string</code> | The unique identifier of the company account. |
| <code>searchTerm?</code> | <code>string</code> | A query to return nonprofit organizations for, maximum 100 characters. For example, `&searchTerm=clean%20water`. |
| <code>pageNumber?</code> | <code>number</code> | The number of the page to fetch. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page, maximum 100. The default is 10 items on a page. |
| <code>goal?</code> | <code>string[]</code> | One or more United Nations Sustainable Development Goals to return nonprofit organizations for. Format: `unsdg_<number>`, for example, `&goal=unsdg_6&goal=unsdg_2`. |
| <code>body?</code> | <code>[ListNonprofitsRequest](src/models/list-nonprofits-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListNonprofitsResponse](src/models/list-nonprofits-response.ts)</code>

**OnError**: <code>[DonationCampaigns.PostCompaniesCompanyIdNonprofitsError](src/resources/donation-campaigns.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AccountHolders

> Source: [AccountHolders](src/resources/account-holders.ts)

<details>
<summary><code>getAccountHoldersId(request: AccountHolders.GetAccountHoldersIdRequest, options?: RequestOptions): ApiPromise&lt;AccountHolder, AccountHolders.GetAccountHoldersIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.getAccountHoldersId({ id });
  // TODO: Handle 'response' of type AccountHolder
} catch (err) {
  if (err instanceof AccountHolders.GetAccountHoldersIdError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the account holder. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountHolder](src/models/account-holder.ts)</code>

**OnError**: <code>[AccountHolders.GetAccountHoldersIdError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccountHoldersIdBalanceAccounts(request: AccountHolders.GetAccountHoldersIdBalanceAccountsRequest, options?: RequestOptions): ApiPromise&lt;PaginatedBalanceAccountsResponse, AccountHolders.GetAccountHoldersIdBalanceAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of the balance accounts associated with an account holder. To fetch multiple pages, use the query parameters. 

For example, to limit the page to 5 balance accounts and skip the first 10, use `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.getAccountHoldersIdBalanceAccounts({ id });
  // TODO: Handle 'response' of type PaginatedBalanceAccountsResponse
} catch (err) {
  if (
    err instanceof AccountHolders.GetAccountHoldersIdBalanceAccountsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the account holder. |
| <code>offset?</code> | <code>number</code> | The number of items that you want to skip. |
| <code>limit?</code> | <code>number</code> | The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedBalanceAccountsResponse](src/models/paginated-balance-accounts-response.ts)</code>

**OnError**: <code>[AccountHolders.GetAccountHoldersIdBalanceAccountsError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccountHoldersIdTaxFormSummary(request: AccountHolders.GetAccountHoldersIdTaxFormSummaryRequest, options?: RequestOptions): ApiPromise&lt;TaxFormSummaryResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a summary of all tax forms for an account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.getAccountHoldersIdTaxFormSummary({ id, formType });
  // TODO: Handle 'response' of type TaxFormSummaryResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the account holder. |
| <code>formType</code> | <code>string</code> | The type of tax form you want a summary for. Accepted values are **US1099k** and **US1099nec**. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaxFormSummaryResponse](src/models/tax-form-summary-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccountHoldersIdTaxForms(request: AccountHolders.GetAccountHoldersIdTaxFormsRequest, options?: RequestOptions): ApiPromise&lt;GetTaxFormResponse1, AccountHolders.GetAccountHoldersIdTaxFormsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a tax form for account holders operating in the US. For more information, refer to US tax forms for [marketplaces](https://docs.adyen.com/marketplaces/us-tax-forms/) or [platforms](https://docs.adyen.com/platforms/us-tax-forms/) .

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.getAccountHoldersIdTaxForms({ id, formType, year });
  // TODO: Handle 'response' of type GetTaxFormResponse1
} catch (err) {
  if (
    err instanceof AccountHolders.GetAccountHoldersIdTaxFormsError && err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the account holder. |
| <code>formType</code> | <code>[FormType](src/models/form-type.ts)</code> | The type of tax form you want to retrieve. Accepted values are **US1099k** and **US1099nec**. |
| <code>year</code> | <code>number</code> | The tax year in **YYYY** format for the tax form you want to retrieve. |
| <code>legalEntityId?</code> | <code>string</code> | The legal entity reference whose tax form you want to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTaxFormResponse1](src/models/get-tax-form-response1.ts)</code>

**OnError**: <code>[AccountHolders.GetAccountHoldersIdTaxFormsError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccountHoldersIdTransactionRules(request: AccountHolders.GetAccountHoldersIdTransactionRulesRequest, options?: RequestOptions): ApiPromise&lt;TransactionRulesResponse, AccountHolders.GetAccountHoldersIdTransactionRulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of transaction rules associated with an account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.getAccountHoldersIdTransactionRules({ id });
  // TODO: Handle 'response' of type TransactionRulesResponse
} catch (err) {
  if (
    err instanceof AccountHolders.GetAccountHoldersIdTransactionRulesError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the account holder. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionRulesResponse](src/models/transaction-rules-response.ts)</code>

**OnError**: <code>[AccountHolders.GetAccountHoldersIdTransactionRulesError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchAccountHoldersId(request: AccountHolders.PatchAccountHoldersIdRequest, options?: RequestOptions): ApiPromise&lt;AccountHolder, AccountHolders.PatchAccountHoldersIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an account holder. When updating an account holder resource, if a parameter is not provided in the request, it is left unchanged.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.patchAccountHoldersId({ id });
  // TODO: Handle 'response' of type AccountHolder
} catch (err) {
  if (err instanceof AccountHolders.PatchAccountHoldersIdError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the account holder. |
| <code>body?</code> | <code>[AccountHolderUpdateRequest](src/models/account-holder-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountHolder](src/models/account-holder.ts)</code>

**OnError**: <code>[AccountHolders.PatchAccountHoldersIdError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postAccountHolders(request: AccountHolders.PostAccountHoldersRequest, options?: RequestOptions): ApiPromise&lt;AccountHolder, AccountHolders.PostAccountHoldersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an account holder linked to a [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.postAccountHolders();
  // TODO: Handle 'response' of type AccountHolder
} catch (err) {
  if (err instanceof AccountHolders.PostAccountHoldersError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AccountHolderInfo](src/models/account-holder-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountHolder](src/models/account-holder.ts)</code>

**OnError**: <code>[AccountHolders.PostAccountHoldersError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCloseAccountHolder(request: AccountHolders.PostCloseAccountHolderRequest, options?: RequestOptions): ApiPromise&lt;CloseAccountHolderResponse, AccountHolders.PostCloseAccountHolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the [status of an account holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses) to **Closed**. This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a **Closed** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status), the payments are sent to your liable account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.postCloseAccountHolder();
  // TODO: Handle 'response' of type CloseAccountHolderResponse
} catch (err) {
  if (err instanceof AccountHolders.PostCloseAccountHolderError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CloseAccountHolderRequest](src/models/close-account-holder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloseAccountHolderResponse](src/models/close-account-holder-response.ts)</code>

**OnError**: <code>[AccountHolders.PostCloseAccountHolderError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCloseStores(request: AccountHolders.PostCloseStoresRequest, options?: RequestOptions): ApiPromise&lt;GenericResponse, AccountHolders.PostCloseStoresError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Closes stores associated with an account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.postCloseStores();
  // TODO: Handle 'response' of type GenericResponse
} catch (err) {
  if (err instanceof AccountHolders.PostCloseStoresError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CloseStoresRequest](src/models/close-stores-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericResponse](src/models/generic-response.ts)</code>

**OnError**: <code>[AccountHolders.PostCloseStoresError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCreateAccountHolder(request: AccountHolders.PostCreateAccountHolderRequest, options?: RequestOptions): ApiPromise&lt;CreateAccountHolderResponse, AccountHolders.PostCreateAccountHolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an account holder that [represents the sub-merchant's entity](https://docs.adyen.com/classic-platforms/account-structure#your-platform) in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to [Account holder and accounts](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#legal-entity-types).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.postCreateAccountHolder();
  // TODO: Handle 'response' of type CreateAccountHolderResponse
} catch (err) {
  if (err instanceof AccountHolders.PostCreateAccountHolderError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateAccountHolderRequest](src/models/create-account-holder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateAccountHolderResponse](src/models/create-account-holder-response.ts)</code>

**OnError**: <code>[AccountHolders.PostCreateAccountHolderError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetAccountHolder(request: AccountHolders.PostGetAccountHolderRequest, options?: RequestOptions): ApiPromise&lt;GetAccountHolderResponse, AccountHolders.PostGetAccountHolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of an account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.postGetAccountHolder();
  // TODO: Handle 'response' of type GetAccountHolderResponse
} catch (err) {
  if (err instanceof AccountHolders.PostGetAccountHolderError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetAccountHolderRequest](src/models/get-account-holder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetAccountHolderResponse](src/models/get-account-holder-response.ts)</code>

**OnError**: <code>[AccountHolders.PostGetAccountHolderError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetTaxForm(request: AccountHolders.PostGetTaxFormRequest, options?: RequestOptions): ApiPromise&lt;GetTaxFormResponse, AccountHolders.PostGetTaxFormError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a tax form for account holders operating in the US. For more information, refer to [Providing tax forms](https://docs.adyen.com/classic-platforms/tax-forms).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.postGetTaxForm();
  // TODO: Handle 'response' of type GetTaxFormResponse
} catch (err) {
  if (err instanceof AccountHolders.PostGetTaxFormError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetTaxFormRequest](src/models/get-tax-form-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTaxFormResponse](src/models/get-tax-form-response.ts)</code>

**OnError**: <code>[AccountHolders.PostGetTaxFormError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postSuspendAccountHolder(request: AccountHolders.PostSuspendAccountHolderRequest, options?: RequestOptions): ApiPromise&lt;SuspendAccountHolderResponse, AccountHolders.PostSuspendAccountHolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the [status of an account holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses) to **Suspended**.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.postSuspendAccountHolder();
  // TODO: Handle 'response' of type SuspendAccountHolderResponse
} catch (err) {
  if (err instanceof AccountHolders.PostSuspendAccountHolderError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SuspendAccountHolderRequest](src/models/suspend-account-holder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuspendAccountHolderResponse](src/models/suspend-account-holder-response.ts)</code>

**OnError**: <code>[AccountHolders.PostSuspendAccountHolderError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postUnSuspendAccountHolder(request: AccountHolders.PostUnSuspendAccountHolderRequest, options?: RequestOptions): ApiPromise&lt;UnSuspendAccountHolderResponse, AccountHolders.PostUnSuspendAccountHolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the [status of an account holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses) from **Suspended** to **Inactive**. 
Account holders can have a **Suspended** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status) if you suspend them through the [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder) endpoint or if a verification deadline expires.

You can only unsuspend account holders if they do not have verification checks with a **FAILED** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.postUnSuspendAccountHolder();
  // TODO: Handle 'response' of type UnSuspendAccountHolderResponse
} catch (err) {
  if (err instanceof AccountHolders.PostUnSuspendAccountHolderError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UnSuspendAccountHolderRequest](src/models/un-suspend-account-holder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UnSuspendAccountHolderResponse](src/models/un-suspend-account-holder-response.ts)</code>

**OnError**: <code>[AccountHolders.PostUnSuspendAccountHolderError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postUpdateAccountHolder(request: AccountHolders.PostUpdateAccountHolderRequest, options?: RequestOptions): ApiPromise&lt;UpdateAccountHolderResponse, AccountHolders.PostUpdateAccountHolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders.

When updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the following object:

* `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes, as well as other existing key-value pairs.

When updating any field in the following objects, you must submit all the fields required for validation:

 * `address`

* `fullPhoneNumber`

* `bankAccountDetails.BankAccountDetail`

* `businessDetails.shareholders.ShareholderContact`

 For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated.

To add a bank account or shareholder, provide the bank account or shareholder details without a `bankAccountUUID` or a `shareholderCode`.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.postUpdateAccountHolder();
  // TODO: Handle 'response' of type UpdateAccountHolderResponse
} catch (err) {
  if (err instanceof AccountHolders.PostUpdateAccountHolderError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UpdateAccountHolderRequest](src/models/update-account-holder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateAccountHolderResponse](src/models/update-account-holder-response.ts)</code>

**OnError**: <code>[AccountHolders.PostUpdateAccountHolderError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postUpdateAccountHolderState(request: AccountHolders.PostUpdateAccountHolderStateRequest, options?: RequestOptions): ApiPromise&lt;GetAccountHolderStatusResponse, AccountHolders.PostUpdateAccountHolderStateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables or enables the processing or payout state of an account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountHolders.postUpdateAccountHolderState();
  // TODO: Handle 'response' of type GetAccountHolderStatusResponse
} catch (err) {
  if (
    err instanceof AccountHolders.PostUpdateAccountHolderStateError && err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UpdateAccountHolderStateRequest](src/models/update-account-holder-state-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetAccountHolderStatusResponse](src/models/get-account-holder-status-response.ts)</code>

**OnError**: <code>[AccountHolders.PostUpdateAccountHolderStateError](src/resources/account-holders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Accounts

> Source: [Accounts](src/resources/accounts.ts)

<details>
<summary><code>postCloseAccount(request: Accounts.PostCloseAccountRequest, options?: RequestOptions): ApiPromise&lt;CloseAccountResponse, Accounts.PostCloseAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Closes an account. If an account is closed, you cannot process transactions, pay out its funds, or reopen it. If payments are made to a closed account, the payments are sent to your liable account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.postCloseAccount();
  // TODO: Handle 'response' of type CloseAccountResponse
} catch (err) {
  if (err instanceof Accounts.PostCloseAccountError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CloseAccountRequest](src/models/close-account-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloseAccountResponse](src/models/close-account-response.ts)</code>

**OnError**: <code>[Accounts.PostCloseAccountError](src/resources/accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCreateAccount(request: Accounts.PostCreateAccountRequest, options?: RequestOptions): ApiPromise&lt;CreateAccountResponse, Accounts.PostCreateAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an account under an account holder. An account holder can have [multiple accounts](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#create-additional-accounts).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.postCreateAccount();
  // TODO: Handle 'response' of type CreateAccountResponse
} catch (err) {
  if (err instanceof Accounts.PostCreateAccountError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CreateAccountRequest](src/models/create-account-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateAccountResponse](src/models/create-account-response.ts)</code>

**OnError**: <code>[Accounts.PostCreateAccountError](src/resources/accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postUpdateAccount(request: Accounts.PostUpdateAccountRequest, options?: RequestOptions): ApiPromise&lt;UpdateAccountResponse, Accounts.PostUpdateAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the description or payout schedule of an account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.postUpdateAccount();
  // TODO: Handle 'response' of type UpdateAccountResponse
} catch (err) {
  if (err instanceof Accounts.PostUpdateAccountError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UpdateAccountRequest](src/models/update-account-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateAccountResponse](src/models/update-account-response.ts)</code>

**OnError**: <code>[Accounts.PostUpdateAccountError](src/resources/accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Verification

> Source: [Verification](src/resources/verification.ts)

<details>
<summary><code>postCheckAccountHolder(request: Verification.PostCheckAccountHolderRequest, options?: RequestOptions): ApiPromise&lt;GenericResponse, Verification.PostCheckAccountHolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers the verification of an account holder even if the checks are not yet required for the volume that they are currently processing.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.verification.postCheckAccountHolder();
  // TODO: Handle 'response' of type GenericResponse
} catch (err) {
  if (err instanceof Verification.PostCheckAccountHolderError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PerformVerificationRequest](src/models/perform-verification-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericResponse](src/models/generic-response.ts)</code>

**OnError**: <code>[Verification.PostCheckAccountHolderError](src/resources/verification.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDeleteBankAccounts(request: Verification.PostDeleteBankAccountsRequest, options?: RequestOptions): ApiPromise&lt;GenericResponse, Verification.PostDeleteBankAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes bank accounts associated with an account holder. 

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.verification.postDeleteBankAccounts();
  // TODO: Handle 'response' of type GenericResponse
} catch (err) {
  if (err instanceof Verification.PostDeleteBankAccountsError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DeleteBankAccountRequest](src/models/delete-bank-account-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericResponse](src/models/generic-response.ts)</code>

**OnError**: <code>[Verification.PostDeleteBankAccountsError](src/resources/verification.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDeleteLegalArrangements(request: Verification.PostDeleteLegalArrangementsRequest, options?: RequestOptions): ApiPromise&lt;GenericResponse, Verification.PostDeleteLegalArrangementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes legal arrangements and/or legal arrangement entities associated with an account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.verification.postDeleteLegalArrangements();
  // TODO: Handle 'response' of type GenericResponse
} catch (err) {
  if (err instanceof Verification.PostDeleteLegalArrangementsError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DeleteLegalArrangementRequest](src/models/delete-legal-arrangement-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericResponse](src/models/generic-response.ts)</code>

**OnError**: <code>[Verification.PostDeleteLegalArrangementsError](src/resources/verification.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDeletePayoutMethods(request: Verification.PostDeletePayoutMethodsRequest, options?: RequestOptions): ApiPromise&lt;GenericResponse, Verification.PostDeletePayoutMethodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes payout methods associated with an account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.verification.postDeletePayoutMethods();
  // TODO: Handle 'response' of type GenericResponse
} catch (err) {
  if (err instanceof Verification.PostDeletePayoutMethodsError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DeletePayoutMethodRequest](src/models/delete-payout-method-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericResponse](src/models/generic-response.ts)</code>

**OnError**: <code>[Verification.PostDeletePayoutMethodsError](src/resources/verification.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDeleteShareholders(request: Verification.PostDeleteShareholdersRequest, options?: RequestOptions): ApiPromise&lt;GenericResponse, Verification.PostDeleteShareholdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes shareholders associated with an account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.verification.postDeleteShareholders();
  // TODO: Handle 'response' of type GenericResponse
} catch (err) {
  if (err instanceof Verification.PostDeleteShareholdersError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DeleteShareholderRequest](src/models/delete-shareholder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericResponse](src/models/generic-response.ts)</code>

**OnError**: <code>[Verification.PostDeleteShareholdersError](src/resources/verification.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDeleteSignatories(request: Verification.PostDeleteSignatoriesRequest, options?: RequestOptions): ApiPromise&lt;GenericResponse, Verification.PostDeleteSignatoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes signatories associated with an account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.verification.postDeleteSignatories();
  // TODO: Handle 'response' of type GenericResponse
} catch (err) {
  if (err instanceof Verification.PostDeleteSignatoriesError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[DeleteSignatoriesRequest](src/models/delete-signatories-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericResponse](src/models/generic-response.ts)</code>

**OnError**: <code>[Verification.PostDeleteSignatoriesError](src/resources/verification.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetUploadedDocuments(request: Verification.PostGetUploadedDocumentsRequest, options?: RequestOptions): ApiPromise&lt;GetUploadedDocumentsResponse, Verification.PostGetUploadedDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns documents that were previously uploaded for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/classic-platforms/verification-process).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.verification.postGetUploadedDocuments();
  // TODO: Handle 'response' of type GetUploadedDocumentsResponse
} catch (err) {
  if (err instanceof Verification.PostGetUploadedDocumentsError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetUploadedDocumentsRequest](src/models/get-uploaded-documents-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetUploadedDocumentsResponse](src/models/get-uploaded-documents-response.ts)</code>

**OnError**: <code>[Verification.PostGetUploadedDocumentsError](src/resources/verification.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postUploadDocument(request: Verification.PostUploadDocumentRequest, options?: RequestOptions): ApiPromise&lt;UpdateAccountHolderResponse, Verification.PostUploadDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a document for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/classic-platforms/verification-process).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.verification.postUploadDocument();
  // TODO: Handle 'response' of type UpdateAccountHolderResponse
} catch (err) {
  if (err instanceof Verification.PostUploadDocumentError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UploadDocumentRequest](src/models/upload-document-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateAccountHolderResponse](src/models/update-account-holder-response.ts)</code>

**OnError**: <code>[Verification.PostUploadDocumentError](src/resources/verification.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BalancesOverview

> Source: [BalancesOverview](src/resources/balances-overview.ts)

<details>
<summary><code>getBalanceOverviewCompaniesCompanyAccountCodeBalances(request: BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesRequest, options?: RequestOptions): ApiPromise&lt;CompanyBalances, BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array with details about the balances available for all merchant accounts under your company account. For each merchant account, the response returns the following:


* **Available funds**: The funds in the merchant account that have been settled and are available for use.


* **Pending balance**: The funds in the merchant account that have not been settled yet.


* **Next payout amount**: The amount that will be settled to your bank account with the next payout.


* **Reserve**: The available amount to cover refunds, payouts, chargebacks, and other operational expenses that cannot be covered by your in-process funds.


* **Deposit**: The amount withheld by Adyen to cover potential losses and liabilities due to payment processing.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.balancesOverview.getBalanceOverviewCompaniesCompanyAccountCodeBalances({
    companyAccountCode,
    currency,
  });
  // TODO: Handle 'response' of type CompanyBalances
} catch (err) {
  if (
    err instanceof BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyAccountCode</code> | <code>string</code> | The unique identifier of your company account. |
| <code>currency</code> | <code>string</code> | The currency for which you want a balances overview. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyBalances](src/models/company-balances.ts)</code>

**OnError**: <code>[BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError](src/resources/balances-overview.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceOverviewMerchantsMerchantAccountCodeBalances(request: BalancesOverview.GetBalanceOverviewMerchantsMerchantAccountCodeBalancesRequest, options?: RequestOptions): ApiPromise&lt;MerchantBalance, BalancesOverview.GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an overview of the different balances available for the merchant account. This includes details about the following:


* **Available funds**: The funds in the merchant account that have been settled and are available for use.


* **Pending balance**: The funds in the merchant account that have not been settled yet.


* **Next payout amount**: The amount that will be settled to your bank account with the next payout.


* **Reserve**: The available amount to cover refunds, payouts, chargebacks, and other operational expenses that cannot be covered by your in-process funds.


* **Deposit**: The amount withheld by Adyen to cover potential losses and liabilities due to payment processing.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.balancesOverview.getBalanceOverviewMerchantsMerchantAccountCodeBalances({
    merchantAccountCode,
    currency,
  });
  // TODO: Handle 'response' of type MerchantBalance
} catch (err) {
  if (
    err instanceof BalancesOverview.GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantAccountCode</code> | <code>string</code> | The unique identifier of your merchant account. |
| <code>currency</code> | <code>string</code> | The currency for which you want a balances overview. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MerchantBalance](src/models/merchant-balance.ts)</code>

**OnError**: <code>[BalancesOverview.GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError](src/resources/balances-overview.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BalanceTransfers

> Source: [BalanceTransfers](src/resources/balance-transfers.ts)

<details>
<summary><code>postBalanceTransfers(request: BalanceTransfers.PostBalanceTransfersRequest, options?: RequestOptions): ApiPromise&lt;BalanceTransferResponse, BalanceTransfers.PostBalanceTransfersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Performs a balance transfer between merchant accounts. The following conditions must be met before you can successfully transfer balances:
* The source and destination merchant accounts must be under the same company account and legal entity.
* The source merchant account must have sufficient funds.
* The source and destination merchant accounts must have at least one common processing currency.\n\n
When sending multiple API requests with the same source and destination merchant accounts, send the requests sequentially and *not* in parallel. Some requests may not be processed if the requests are sent in parallel.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.balanceTransfers.postBalanceTransfers({ body });
  // TODO: Handle 'response' of type BalanceTransferResponse
} catch (err) {
  if (
    err instanceof BalanceTransfers.PostBalanceTransfersError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BalanceTransferRequest](src/models/balance-transfer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceTransferResponse](src/models/balance-transfer-response.ts)</code>

**OnError**: <code>[BalanceTransfers.PostBalanceTransfersError](src/resources/balance-transfers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Platform

> Source: [Platform](src/resources/platform.ts)

<details>
<summary><code>getBalancePlatformsId(request: Platform.GetBalancePlatformsIdRequest, options?: RequestOptions): ApiPromise&lt;BalancePlatform, Platform.GetBalancePlatformsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a balance platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.platform.getBalancePlatformsId({ id });
  // TODO: Handle 'response' of type BalancePlatform
} catch (err) {
  if (err instanceof Platform.GetBalancePlatformsIdError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance platform. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalancePlatform](src/models/balance-platform.ts)</code>

**OnError**: <code>[Platform.GetBalancePlatformsIdError](src/resources/platform.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalancePlatformsIdAccountHolders(request: Platform.GetBalancePlatformsIdAccountHoldersRequest, options?: RequestOptions): ApiPromise&lt;PaginatedAccountHoldersResponse, Platform.GetBalancePlatformsIdAccountHoldersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters. 

For example, to limit the page to 5 account holders and to skip the first 20, use `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.platform.getBalancePlatformsIdAccountHolders({ id });
  // TODO: Handle 'response' of type PaginatedAccountHoldersResponse
} catch (err) {
  if (
    err instanceof Platform.GetBalancePlatformsIdAccountHoldersError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance platform. |
| <code>offset?</code> | <code>number</code> | The number of items that you want to skip. |
| <code>limit?</code> | <code>number</code> | The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedAccountHoldersResponse](src/models/paginated-account-holders-response.ts)</code>

**OnError**: <code>[Platform.GetBalancePlatformsIdAccountHoldersError](src/resources/platform.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalancePlatformsIdTransactionRules(request: Platform.GetBalancePlatformsIdTransactionRulesRequest, options?: RequestOptions): ApiPromise&lt;TransactionRulesResponse, Platform.GetBalancePlatformsIdTransactionRulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of transaction rules associated with a balance platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.platform.getBalancePlatformsIdTransactionRules({ id });
  // TODO: Handle 'response' of type TransactionRulesResponse
} catch (err) {
  if (
    err instanceof Platform.GetBalancePlatformsIdTransactionRulesError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance platform. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionRulesResponse](src/models/transaction-rules-response.ts)</code>

**OnError**: <code>[Platform.GetBalancePlatformsIdTransactionRulesError](src/resources/platform.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BalanceAccounts

> Source: [BalanceAccounts](src/resources/balance-accounts.ts)

<details>
<summary><code>getBalanceAccountsId(request: BalanceAccounts.GetBalanceAccountsIdRequest, options?: RequestOptions): ApiPromise&lt;BalanceAccount, BalanceAccounts.GetBalanceAccountsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a balance account and its balances for the default currency and other currencies with a non-zero balance.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.balanceAccounts.getBalanceAccountsId({ id });
  // TODO: Handle 'response' of type BalanceAccount
} catch (err) {
  if (err instanceof BalanceAccounts.GetBalanceAccountsIdError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceAccount](src/models/balance-account.ts)</code>

**OnError**: <code>[BalanceAccounts.GetBalanceAccountsIdError](src/resources/balance-accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceAccountsIdPaymentInstruments(request: BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsRequest, options?: RequestOptions): ApiPromise&lt;PaginatedPaymentInstrumentsResponse, BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of the payment instruments associated with a balance account. 

To fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment instruments which are in active status and to skip the first 6, use `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6&status=active`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.balanceAccounts.getBalanceAccountsIdPaymentInstruments({ id });
  // TODO: Handle 'response' of type PaginatedPaymentInstrumentsResponse
} catch (err) {
  if (
    err instanceof BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>offset?</code> | <code>number</code> | The number of items that you want to skip. |
| <code>limit?</code> | <code>number</code> | The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page. |
| <code>status?</code> | <code>string</code> | The status of the payment instruments that you want to get. By default, the response includes payment instruments with any status. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPaymentInstrumentsResponse](src/models/paginated-payment-instruments-response.ts)</code>

**OnError**: <code>[BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsError](src/resources/balance-accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceAccountsIdTransactionRules(request: BalanceAccounts.GetBalanceAccountsIdTransactionRulesRequest, options?: RequestOptions): ApiPromise&lt;TransactionRulesResponse, BalanceAccounts.GetBalanceAccountsIdTransactionRulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of transaction rules associated with a balance account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.balanceAccounts.getBalanceAccountsIdTransactionRules({ id });
  // TODO: Handle 'response' of type TransactionRulesResponse
} catch (err) {
  if (
    err instanceof BalanceAccounts.GetBalanceAccountsIdTransactionRulesError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionRulesResponse](src/models/transaction-rules-response.ts)</code>

**OnError**: <code>[BalanceAccounts.GetBalanceAccountsIdTransactionRulesError](src/resources/balance-accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchBalanceAccountsId(request: BalanceAccounts.PatchBalanceAccountsIdRequest, options?: RequestOptions): ApiPromise&lt;BalanceAccount, BalanceAccounts.PatchBalanceAccountsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a balance account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.balanceAccounts.patchBalanceAccountsId({ id });
  // TODO: Handle 'response' of type BalanceAccount
} catch (err) {
  if (err instanceof BalanceAccounts.PatchBalanceAccountsIdError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>body?</code> | <code>[BalanceAccountUpdateRequest](src/models/balance-account-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceAccount](src/models/balance-account.ts)</code>

**OnError**: <code>[BalanceAccounts.PatchBalanceAccountsIdError](src/resources/balance-accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postBalanceAccounts(request: BalanceAccounts.PostBalanceAccountsRequest, options?: RequestOptions): ApiPromise&lt;BalanceAccount, BalanceAccounts.PostBalanceAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a balance account that holds the funds of the associated account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.balanceAccounts.postBalanceAccounts();
  // TODO: Handle 'response' of type BalanceAccount
} catch (err) {
  if (err instanceof BalanceAccounts.PostBalanceAccountsError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[BalanceAccountInfo](src/models/balance-account-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceAccount](src/models/balance-account.ts)</code>

**OnError**: <code>[BalanceAccounts.PostBalanceAccountsError](src/resources/balance-accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Balances

> Source: [Balances](src/resources/balances.ts)

<details>
<summary><code>deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(request: Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest, options?: RequestOptions): ApiPromise&lt;unknown, Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a balance webhook setting that contains the conditions for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.balances.deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId({
      balancePlatformId,
      webhookId,
      settingId,
    });
  // TODO: Handle 'response' of type unknown
} catch (err) {
  if (
    err instanceof Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balancePlatformId</code> | <code>string</code> | The unique identifier of the balance platform. |
| <code>webhookId</code> | <code>string</code> | The unique identifier of the balance webhook. |
| <code>settingId</code> | <code>string</code> | The unique identifier of the balance webhook setting. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>unknown</code>

**OnError**: <code>[Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError](src/resources/balances.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(request: Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRequest, options?: RequestOptions): ApiPromise&lt;WebhookSettings, Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all balance webhook settings configured for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.balances.getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings({
    balancePlatformId,
    webhookId,
  });
  // TODO: Handle 'response' of type WebhookSettings
} catch (err) {
  if (
    err instanceof Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balancePlatformId</code> | <code>string</code> | The unique identifier of the balance platform. |
| <code>webhookId</code> | <code>string</code> | The unique identifier of the balance webhook. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSettings](src/models/webhook-settings.ts)</code>

**OnError**: <code>[Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError](src/resources/balances.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(request: Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest, options?: RequestOptions): ApiPromise&lt;WebhookSetting, Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a specific balance webhook setting configured for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.balances.getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId({
      balancePlatformId,
      webhookId,
      settingId,
    });
  // TODO: Handle 'response' of type WebhookSetting
} catch (err) {
  if (
    err instanceof Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balancePlatformId</code> | <code>string</code> | The unique identifier of the balance platform. |
| <code>webhookId</code> | <code>string</code> | The unique identifier of the balance webhook. |
| <code>settingId</code> | <code>string</code> | The unique identifier of the balance webhook setting. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSetting](src/models/unions/webhook-setting.ts)</code>

**OnError**: <code>[Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError](src/resources/balances.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(request: Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest, options?: RequestOptions): ApiPromise&lt;WebhookSetting, Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the conditions the balance change needs to meet for Adyen to send a [balance webhook](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.balances.patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId({
      balancePlatformId,
      webhookId,
      settingId,
      body,
    });
  // TODO: Handle 'response' of type WebhookSetting
} catch (err) {
  if (
    err instanceof Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balancePlatformId</code> | <code>string</code> | The unique identifier of the balance platform. |
| <code>webhookId</code> | <code>string</code> | The unique identifier of the balance webhook. |
| <code>settingId</code> | <code>string</code> | The unique identifier of the balance webhook setting. |
| <code>body</code> | <code>[BalanceWebhookSettingInfoUpdate](src/models/balance-webhook-setting-info-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSetting](src/models/unions/webhook-setting.ts)</code>

**OnError**: <code>[Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError](src/resources/balances.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(request: Balances.PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRequest, options?: RequestOptions): ApiPromise&lt;WebhookSetting, Balances.PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configures the criteria for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/1/post/balancePlatform.balanceAccount.balance.updated).

Adyen sends balance webhooks to notify you of balance changes in your balance platform. They can be triggered when the balance reaches, exceeds, or drops below a specific value in a specific currency.

You can get notified about balance changes in your entire balance platform, in the balance accounts of a specific user, or a specific balance account. The hierarchy between the webhook settings are based on the following business logic:

* Settings on a higher level apply to all lower level resources (balance platform > account holder > balance acocunt).

* The most granular setting overrides higher level settings (balance account > account holder > balance platform).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.balances.postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings({
    balancePlatformId,
    webhookId,
    body,
  });
  // TODO: Handle 'response' of type WebhookSetting
} catch (err) {
  if (
    err instanceof Balances.PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balancePlatformId</code> | <code>string</code> | The unique identifier of the balance platform. |
| <code>webhookId</code> | <code>string</code> | The unique identifier of the balance webhook. |
| <code>body</code> | <code>[BalanceWebhookSettingInfo](src/models/balance-webhook-setting-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSetting](src/models/unions/webhook-setting.ts)</code>

**OnError**: <code>[Balances.PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError](src/resources/balances.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManagedPayoutSchedules

> Source: [ManagedPayoutSchedules](src/resources/managed-payout-schedules.ts)

<details>
<summary><code>deleteBalanceAccountsBalanceAccountIdPayoutSchedulesId(request: ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a payout schedule applied to a balance account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.managedPayoutSchedules.deleteBalanceAccountsBalanceAccountIdPayoutSchedulesId({
    balanceAccountId,
    id,
  });
} catch (err) {
  if (
    err instanceof ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>id</code> | <code>string</code> | The unique identifier of the payout schedule applied to the balance account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError](src/resources/managed-payout-schedules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceAccountsBalanceAccountIdPayoutSchedules(request: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesRequest, options?: RequestOptions): ApiPromise&lt;BalanceAccountConfigurations, ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all managed payout schedules that are configured on a balance account. You can use query parameters to filter the elements that are returned in the list.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managedPayoutSchedules.getBalanceAccountsBalanceAccountIdPayoutSchedules({
    balanceAccountId,
  });
  // TODO: Handle 'response' of type BalanceAccountConfigurations
} catch (err) {
  if (
    err instanceof ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>currency?</code> | <code>string</code> | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the currency used in the payout schedule. |
| <code>cursor?</code> | <code>string</code> | The `cursor` returned in the links of the previous response. |
| <code>limit?</code> | <code>number</code> | The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceAccountConfigurations](src/models/balance-account-configurations.ts)</code>

**OnError**: <code>[ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesError](src/resources/managed-payout-schedules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceAccountsBalanceAccountIdPayoutSchedulesId(request: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest, options?: RequestOptions): ApiPromise&lt;BalanceAccountConfiguration, ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified payout schedule.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managedPayoutSchedules.getBalanceAccountsBalanceAccountIdPayoutSchedulesId({
    balanceAccountId,
    id,
  });
  // TODO: Handle 'response' of type BalanceAccountConfiguration
} catch (err) {
  if (
    err instanceof ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>id</code> | <code>string</code> | The unique identifier of the payout schedule for the balance account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceAccountConfiguration](src/models/balance-account-configuration.ts)</code>

**OnError**: <code>[ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError](src/resources/managed-payout-schedules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions(request: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRequest, options?: RequestOptions): ApiPromise&lt;PayoutScheduleExecutions, ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

View information about the executions of a managed payout schedule on the specified balance account. An execution is an attempt to make a payout according to the payout schedule. 

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.managedPayoutSchedules.getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions({
      balanceAccountId,
      id,
      offset,
    });
  // TODO: Handle 'response' of type PayoutScheduleExecutions
} catch (err) {
  if (
    err instanceof
      ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>id</code> | <code>string</code> | The unique identifier of the payout schedule on the balance account. |
| <code>offset</code> | <code>number</code> | The page number to be returned.<br><br>Default: **1** |
| <code>results?</code> | <code>[ExecutionResult](src/models/execution-result.ts)[]</code> | Contains a list of payout statuses. If included, the response returns only executed payouts that currently have one of the specified statuses.<br><br>Possible statuses:<br>- **succeeded**: The payout was sent successfully.<br>- **failed**: The payout was not sent due to an error.<br>- **skipped**: The payout was not triggered as expected. |
| <code>limit?</code> | <code>number</code> | The number of items returned per page.<br><br>Default: **10** |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutScheduleExecutions](src/models/payout-schedule-executions.ts)</code>

**OnError**: <code>[ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError](src/resources/managed-payout-schedules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalancePlatformsBalancePlatformIdPayoutSchedules(request: ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesRequest, options?: RequestOptions): ApiPromise&lt;BalancePlatformConfigurations, ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the payout schedules that are configured for your balance platform. You can use query parameters to filter the elements that are returned in the list.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managedPayoutSchedules.getBalancePlatformsBalancePlatformIdPayoutSchedules({
    balancePlatformId,
  });
  // TODO: Handle 'response' of type BalancePlatformConfigurations
} catch (err) {
  if (
    err instanceof ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balancePlatformId</code> | <code>string</code> | The unique identifier of the balance platform. |
| <code>countryCode?</code> | <code>string</code> | The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country to which the payout configuration applies. |
| <code>currency?</code> | <code>string</code> | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the currency used in the payout configuration. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalancePlatformConfigurations](src/models/balance-platform-configurations.ts)</code>

**OnError**: <code>[ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesError](src/resources/managed-payout-schedules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalancePlatformsBalancePlatformIdPayoutSchedulesId(request: ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdRequest, options?: RequestOptions): ApiPromise&lt;BalancePlatformConfiguration, ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified managed payout schedule configured on your balance platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managedPayoutSchedules.getBalancePlatformsBalancePlatformIdPayoutSchedulesId({
    balancePlatformId,
    id,
  });
  // TODO: Handle 'response' of type BalancePlatformConfiguration
} catch (err) {
  if (
    err instanceof ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balancePlatformId</code> | <code>string</code> | The unique identifier of the balance platform. |
| <code>id</code> | <code>string</code> | The unique identifier of the payout configuration for your balance platform. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalancePlatformConfiguration](src/models/balance-platform-configuration.ts)</code>

**OnError**: <code>[ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError](src/resources/managed-payout-schedules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchBalanceAccountsBalanceAccountIdPayoutSchedulesId(request: ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest, options?: RequestOptions): ApiPromise&lt;BalanceAccountConfiguration, ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a managed payout schedule applied to a balance account. If an optional parameter is not included in the request, it remains unchanged.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managedPayoutSchedules.patchBalanceAccountsBalanceAccountIdPayoutSchedulesId({
    balanceAccountId,
    id,
    body,
  });
  // TODO: Handle 'response' of type BalanceAccountConfiguration
} catch (err) {
  if (
    err instanceof ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>id</code> | <code>string</code> | The unique identifier of the payout schedule applied to the balance account. |
| <code>body</code> | <code>[BalanceAccountConfigurationUpdate](src/models/balance-account-configuration-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceAccountConfiguration](src/models/balance-account-configuration.ts)</code>

**OnError**: <code>[ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError](src/resources/managed-payout-schedules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postBalanceAccountsBalanceAccountIdPayoutSchedules(request: ManagedPayoutSchedules.PostBalanceAccountsBalanceAccountIdPayoutSchedulesRequest, options?: RequestOptions): ApiPromise&lt;BalanceAccountConfiguration, ManagedPayoutSchedules.PostBalanceAccountsBalanceAccountIdPayoutSchedulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Apply a managed payout schedule to a balance account. This payout schedule is based on an existing payout schedule in your balance platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managedPayoutSchedules.postBalanceAccountsBalanceAccountIdPayoutSchedules({
    balanceAccountId,
    body,
  });
  // TODO: Handle 'response' of type BalanceAccountConfiguration
} catch (err) {
  if (
    err instanceof ManagedPayoutSchedules.PostBalanceAccountsBalanceAccountIdPayoutSchedulesError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>body</code> | <code>[BalanceAccountConfigurationRequest](src/models/balance-account-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceAccountConfiguration](src/models/balance-account-configuration.ts)</code>

**OnError**: <code>[ManagedPayoutSchedules.PostBalanceAccountsBalanceAccountIdPayoutSchedulesError](src/resources/managed-payout-schedules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomPayoutSchedulesSweeps

> Source: [CustomPayoutSchedulesSweeps](src/resources/custom-payout-schedules-sweeps.ts)

<details>
<summary><code>deleteBalanceAccountsBalanceAccountIdSweepsSweepId(request: CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a sweep for a balance account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.customPayoutSchedulesSweeps.deleteBalanceAccountsBalanceAccountIdSweepsSweepId({
    balanceAccountId,
    sweepId,
  });
} catch (err) {
  if (
    err instanceof CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>sweepId</code> | <code>string</code> | The unique identifier of the sweep. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError](src/resources/custom-payout-schedules-sweeps.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceAccountsBalanceAccountIdSweeps(request: CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsRequest, options?: RequestOptions): ApiPromise&lt;BalanceSweepConfigurationsResponse, CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the sweeps configured for a balance account.

To fetch multiple pages, use the query parameters. For example, to limit the page to 5 sweeps and to skip the first 10, use `/balanceAccounts/{balanceAccountId}/sweeps?limit=5&offset=10`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customPayoutSchedulesSweeps.getBalanceAccountsBalanceAccountIdSweeps({
    balanceAccountId,
  });
  // TODO: Handle 'response' of type BalanceSweepConfigurationsResponse
} catch (err) {
  if (
    err instanceof CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>offset?</code> | <code>number</code> | The number of items that you want to skip. |
| <code>limit?</code> | <code>number</code> | The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceSweepConfigurationsResponse](src/models/balance-sweep-configurations-response.ts)</code>

**OnError**: <code>[CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsError](src/resources/custom-payout-schedules-sweeps.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceAccountsBalanceAccountIdSweepsSweepId(request: CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdRequest, options?: RequestOptions): ApiPromise&lt;SweepConfigurationV2, CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a sweep.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customPayoutSchedulesSweeps.getBalanceAccountsBalanceAccountIdSweepsSweepId({
    balanceAccountId,
    sweepId,
  });
  // TODO: Handle 'response' of type SweepConfigurationV2
} catch (err) {
  if (
    err instanceof CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>sweepId</code> | <code>string</code> | The unique identifier of the sweep. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SweepConfigurationV2](src/models/sweep-configuration-v2.ts)</code>

**OnError**: <code>[CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdError](src/resources/custom-payout-schedules-sweeps.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchBalanceAccountsBalanceAccountIdSweepsSweepId(request: CustomPayoutSchedulesSweeps.PatchBalanceAccountsBalanceAccountIdSweepsSweepIdRequest, options?: RequestOptions): ApiPromise&lt;SweepConfigurationV2, CustomPayoutSchedulesSweeps.PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a sweep. When updating a sweep resource, note that if a request parameter is not provided, the parameter is left unchanged.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customPayoutSchedulesSweeps.patchBalanceAccountsBalanceAccountIdSweepsSweepId(
    { balanceAccountId, sweepId },
  );
  // TODO: Handle 'response' of type SweepConfigurationV2
} catch (err) {
  if (
    err instanceof CustomPayoutSchedulesSweeps.PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>sweepId</code> | <code>string</code> | The unique identifier of the sweep. |
| <code>body?</code> | <code>[UpdateSweepConfigurationV2](src/models/update-sweep-configuration-v2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SweepConfigurationV2](src/models/sweep-configuration-v2.ts)</code>

**OnError**: <code>[CustomPayoutSchedulesSweeps.PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError](src/resources/custom-payout-schedules-sweeps.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postBalanceAccountsBalanceAccountIdSweeps(request: CustomPayoutSchedulesSweeps.PostBalanceAccountsBalanceAccountIdSweepsRequest, options?: RequestOptions): ApiPromise&lt;SweepConfigurationV2, CustomPayoutSchedulesSweeps.PostBalanceAccountsBalanceAccountIdSweepsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a sweep that results in moving funds from or to a balance account.

A sweep pulls in or pushes out funds based on a defined schedule, amount, currency, and a source or a destination.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.customPayoutSchedulesSweeps.postBalanceAccountsBalanceAccountIdSweeps({
    balanceAccountId,
  });
  // TODO: Handle 'response' of type SweepConfigurationV2
} catch (err) {
  if (
    err instanceof CustomPayoutSchedulesSweeps.PostBalanceAccountsBalanceAccountIdSweepsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>body?</code> | <code>[CreateSweepConfigurationV2](src/models/create-sweep-configuration-v2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SweepConfigurationV2](src/models/sweep-configuration-v2.ts)</code>

**OnError**: <code>[CustomPayoutSchedulesSweeps.PostBalanceAccountsBalanceAccountIdSweepsError](src/resources/custom-payout-schedules-sweeps.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuthorizedCardUsers

> Source: [AuthorizedCardUsers](src/resources/authorized-card-users.ts)

<details>
<summary><code>deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(request: AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the list of authorized users assigned to a card.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.authorizedCardUsers.deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers({
    paymentInstrumentId,
  });
} catch (err) {
  if (
    err instanceof AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentInstrumentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError](src/resources/authorized-card-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(request: AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest, options?: RequestOptions): ApiPromise&lt;AuthorisedCardUsers, AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authorized users for a card.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.authorizedCardUsers.getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers({
      paymentInstrumentId,
    });
  // TODO: Handle 'response' of type AuthorisedCardUsers
} catch (err) {
  if (
    err instanceof AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentInstrumentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthorisedCardUsers](src/models/authorised-card-users.ts)</code>

**OnError**: <code>[AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError](src/resources/authorized-card-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(request: AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the list of authorized users for a card.

>This request replaces all existing authorized users for the card.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.authorizedCardUsers.patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers({
    paymentInstrumentId,
    body,
  });
} catch (err) {
  if (
    err instanceof AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentInstrumentId</code> | <code>string</code> | - |
| <code>body</code> | <code>[AuthorisedCardUsers](src/models/authorised-card-users.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError](src/resources/authorized-card-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(request: AuthorizedCardUsers.PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, AuthorizedCardUsers.PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns authorized users to a card. Users must have the **authorisedPaymentInstrumentUser** capability to be able to use the card.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.authorizedCardUsers.postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers({
    paymentInstrumentId,
    body,
  });
} catch (err) {
  if (
    err instanceof AuthorizedCardUsers.PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentInstrumentId</code> | <code>string</code> | - |
| <code>body</code> | <code>[AuthorisedCardUsers](src/models/authorised-card-users.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[AuthorizedCardUsers.PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError](src/resources/authorized-card-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RecurringTopUps

> Source: [RecurringTopUps](src/resources/recurring-top-ups.ts)

<details>
<summary><code>deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(request: RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRequest, options?: RequestOptions): ApiPromise&lt;unknown, RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a recurring top up configuration by `topUpId`.

For more information, refer to [Manage recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringTopUps.deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId({
    balanceAccountId,
    topUpId,
  });
  // TODO: Handle 'response' of type unknown
} catch (err) {
  if (
    err instanceof RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>topUpId</code> | <code>string</code> | The unique identifier of the recurring top-up you want to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>unknown</code>

**OnError**: <code>[RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError](src/resources/recurring-top-ups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceAccountsBalanceAccountIdRecurringTopUps(request: RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsRequest, options?: RequestOptions): ApiPromise&lt;RecurringTopUpsResult, RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

View all recurring top ups configured for a specific `balanceAccountId`.

For more information, refer to [Manage recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringTopUps.getBalanceAccountsBalanceAccountIdRecurringTopUps({
    balanceAccountId,
  });
  // TODO: Handle 'response' of type RecurringTopUpsResult
} catch (err) {
  if (
    err instanceof RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>limit?</code> | <code>number</code> | The number of items to return per page. Value must be between 1 and 100. |
| <code>cursor?</code> | <code>string</code> | The cursor used for pagination. Required if you want to see the next or previous page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringTopUpsResult](src/models/recurring-top-ups-result.ts)</code>

**OnError**: <code>[RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsError](src/resources/recurring-top-ups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(request: RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRequest, options?: RequestOptions): ApiPromise&lt;RecurringTopUp, RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the configuration of an existing recurring top up.

For more information, refer to [Manage recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringTopUps.patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId({
    balanceAccountId,
    topUpId,
    body,
  });
  // TODO: Handle 'response' of type RecurringTopUp
} catch (err) {
  if (
    err instanceof RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>topUpId</code> | <code>string</code> | The unique identifier of the recurring top-up you want to update. |
| <code>body</code> | <code>[PatchableCreateRecurringTopUp](src/models/patchable-create-recurring-top-up.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringTopUp](src/models/recurring-top-up.ts)</code>

**OnError**: <code>[RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError](src/resources/recurring-top-ups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postBalanceAccountsBalanceAccountIdRecurringTopUps(request: RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsRequest, options?: RequestOptions): ApiPromise&lt;RecurringTopUp, RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a recurring top up configuration.

For more information, refer to [Create recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/create-recurring-top-ups).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.recurringTopUps.postBalanceAccountsBalanceAccountIdRecurringTopUps({
    balanceAccountId,
    body,
  });
  // TODO: Handle 'response' of type RecurringTopUp
} catch (err) {
  if (
    err instanceof RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>body</code> | <code>[CreateRecurringTopUp](src/models/create-recurring-top-up.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringTopUp](src/models/recurring-top-up.ts)</code>

**OnError**: <code>[RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsError](src/resources/recurring-top-ups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentInstruments

> Source: [PaymentInstruments](src/resources/payment-instruments.ts)

<details>
<summary><code>getPaymentInstrumentsId(request: PaymentInstruments.GetPaymentInstrumentsIdRequest, options?: RequestOptions): ApiPromise&lt;PaymentInstrument1, PaymentInstruments.GetPaymentInstrumentsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a payment instrument.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInstruments.getPaymentInstrumentsId({ id });
  // TODO: Handle 'response' of type PaymentInstrument1
} catch (err) {
  if (
    err instanceof PaymentInstruments.GetPaymentInstrumentsIdError && err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the payment instrument. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrument1](src/models/payment-instrument1.ts)</code>

**OnError**: <code>[PaymentInstruments.GetPaymentInstrumentsIdError](src/resources/payment-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentInstrumentsIdNetworkTokenActivationData(request: PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataRequest, options?: RequestOptions): ApiPromise&lt;NetworkTokenActivationDataResponse, PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the network token activation data for a payment instrument.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInstruments.getPaymentInstrumentsIdNetworkTokenActivationData({ id });
  // TODO: Handle 'response' of type NetworkTokenActivationDataResponse
} catch (err) {
  if (
    err instanceof PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the payment instrument. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NetworkTokenActivationDataResponse](src/models/network-token-activation-data-response.ts)</code>

**OnError**: <code>[PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataError](src/resources/payment-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentInstrumentsIdNetworkTokens(request: PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensRequest, options?: RequestOptions): ApiPromise&lt;ListNetworkTokensResponse, PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the network tokens connected to a payment instrument.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInstruments.getPaymentInstrumentsIdNetworkTokens({ id });
  // TODO: Handle 'response' of type ListNetworkTokensResponse
} catch (err) {
  if (
    err instanceof PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the payment instrument. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListNetworkTokensResponse](src/models/list-network-tokens-response.ts)</code>

**OnError**: <code>[PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensError](src/resources/payment-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentInstrumentsIdReveal(request: PaymentInstruments.GetPaymentInstrumentsIdRevealRequest, options?: RequestOptions): ApiPromise&lt;PaymentInstrumentRevealInfo, PaymentInstruments.GetPaymentInstrumentsIdRevealError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the primary account number (PAN) of a payment instrument.

To make this request, your API credential must have the following [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):

* Balance Platform BCL PCI role

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInstruments.getPaymentInstrumentsIdReveal({ id });
  // TODO: Handle 'response' of type PaymentInstrumentRevealInfo
} catch (err) {
  if (
    err instanceof PaymentInstruments.GetPaymentInstrumentsIdRevealError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the payment instrument. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrumentRevealInfo](src/models/payment-instrument-reveal-info.ts)</code>

**OnError**: <code>[PaymentInstruments.GetPaymentInstrumentsIdRevealError](src/resources/payment-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentInstrumentsIdTransactionRules(request: PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesRequest, options?: RequestOptions): ApiPromise&lt;TransactionRulesResponse, PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of transaction rules associated with a payment instrument.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInstruments.getPaymentInstrumentsIdTransactionRules({ id });
  // TODO: Handle 'response' of type TransactionRulesResponse
} catch (err) {
  if (
    err instanceof PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the payment instrument. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionRulesResponse](src/models/transaction-rules-response.ts)</code>

**OnError**: <code>[PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesError](src/resources/payment-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchPaymentInstrumentsId(request: PaymentInstruments.PatchPaymentInstrumentsIdRequest, options?: RequestOptions): ApiPromise&lt;UpdatePaymentInstrument, PaymentInstruments.PatchPaymentInstrumentsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a payment instrument. Once a payment instrument is already active, you can only update its status. However, for cards created with **inactive** status, you can still update the balance account associated with the card.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInstruments.patchPaymentInstrumentsId({ id });
  // TODO: Handle 'response' of type UpdatePaymentInstrument
} catch (err) {
  if (
    err instanceof PaymentInstruments.PatchPaymentInstrumentsIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the payment instrument. |
| <code>body?</code> | <code>[PaymentInstrumentUpdateRequest](src/models/payment-instrument-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdatePaymentInstrument](src/models/update-payment-instrument.ts)</code>

**OnError**: <code>[PaymentInstruments.PatchPaymentInstrumentsIdError](src/resources/payment-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentInstruments(request: PaymentInstruments.PostPaymentInstrumentsRequest, options?: RequestOptions): ApiPromise&lt;PaymentInstrument1, PaymentInstruments.PostPaymentInstrumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a payment instrument to issue a physical card, a virtual card, or a business account to your user.

 For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/platforms/business-accounts).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInstruments.postPaymentInstruments();
  // TODO: Handle 'response' of type PaymentInstrument1
} catch (err) {
  if (
    err instanceof PaymentInstruments.PostPaymentInstrumentsError && err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PaymentInstrumentInfo](src/models/payment-instrument-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrument1](src/models/payment-instrument1.ts)</code>

**OnError**: <code>[PaymentInstruments.PostPaymentInstrumentsError](src/resources/payment-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentInstrumentsIdNetworkTokenActivationData(request: PaymentInstruments.PostPaymentInstrumentsIdNetworkTokenActivationDataRequest, options?: RequestOptions): ApiPromise&lt;NetworkTokenActivationDataResponse, PaymentInstruments.PostPaymentInstrumentsIdNetworkTokenActivationDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create provisioning data for a network token. Use the provisioning data to add a user's payment instrument to their digital wallet.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInstruments.postPaymentInstrumentsIdNetworkTokenActivationData({ id });
  // TODO: Handle 'response' of type NetworkTokenActivationDataResponse
} catch (err) {
  if (
    err instanceof PaymentInstruments.PostPaymentInstrumentsIdNetworkTokenActivationDataError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the payment instrument. |
| <code>body?</code> | <code>[NetworkTokenActivationDataRequest](src/models/network-token-activation-data-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NetworkTokenActivationDataResponse](src/models/network-token-activation-data-response.ts)</code>

**OnError**: <code>[PaymentInstruments.PostPaymentInstrumentsIdNetworkTokenActivationDataError](src/resources/payment-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentInstrumentsReveal(request: PaymentInstruments.PostPaymentInstrumentsRevealRequest, options?: RequestOptions): ApiPromise&lt;PaymentInstrumentRevealResponse, PaymentInstruments.PostPaymentInstrumentsRevealError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the encrypted data of a specified payment instrument. These data include:

- The primary account number (PAN)
- The card verification code (CVC)
- The expiry date

You can decrypt the data to reveal it in your user interface.

To make this request, your API credential must have the following role:
* Bank Issuing PAN Reveal Webservice role

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInstruments.postPaymentInstrumentsReveal();
  // TODO: Handle 'response' of type PaymentInstrumentRevealResponse
} catch (err) {
  if (
    err instanceof PaymentInstruments.PostPaymentInstrumentsRevealError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PaymentInstrumentRevealRequest](src/models/payment-instrument-reveal-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrumentRevealResponse](src/models/payment-instrument-reveal-response.ts)</code>

**OnError**: <code>[PaymentInstruments.PostPaymentInstrumentsRevealError](src/resources/payment-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentInstrumentGroups

> Source: [PaymentInstrumentGroups](src/resources/payment-instrument-groups.ts)

<details>
<summary><code>getPaymentInstrumentGroupsId(request: PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdRequest, options?: RequestOptions): ApiPromise&lt;PaymentInstrumentGroup, PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a payment instrument group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInstrumentGroups.getPaymentInstrumentGroupsId({ id });
  // TODO: Handle 'response' of type PaymentInstrumentGroup
} catch (err) {
  if (
    err instanceof PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the payment instrument group. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrumentGroup](src/models/payment-instrument-group.ts)</code>

**OnError**: <code>[PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdError](src/resources/payment-instrument-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentInstrumentGroupsIdTransactionRules(request: PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesRequest, options?: RequestOptions): ApiPromise&lt;TransactionRulesResponse, PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the transaction rules associated with a payment instrument group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInstrumentGroups.getPaymentInstrumentGroupsIdTransactionRules({ id });
  // TODO: Handle 'response' of type TransactionRulesResponse
} catch (err) {
  if (
    err instanceof PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the payment instrument group. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionRulesResponse](src/models/transaction-rules-response.ts)</code>

**OnError**: <code>[PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesError](src/resources/payment-instrument-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPaymentInstrumentGroups(request: PaymentInstrumentGroups.PostPaymentInstrumentGroupsRequest, options?: RequestOptions): ApiPromise&lt;PaymentInstrumentGroup, PaymentInstrumentGroups.PostPaymentInstrumentGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a payment instrument group to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInstrumentGroups.postPaymentInstrumentGroups();
  // TODO: Handle 'response' of type PaymentInstrumentGroup
} catch (err) {
  if (
    err instanceof PaymentInstrumentGroups.PostPaymentInstrumentGroupsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PaymentInstrumentGroupInfo](src/models/payment-instrument-group-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentInstrumentGroup](src/models/payment-instrument-group.ts)</code>

**OnError**: <code>[PaymentInstrumentGroups.PostPaymentInstrumentGroupsError](src/resources/payment-instrument-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TransactionRules

> Source: [TransactionRules](src/resources/transaction-rules.ts)

<details>
<summary><code>deleteTransactionRulesTransactionRuleId(request: TransactionRules.DeleteTransactionRulesTransactionRuleIdRequest, options?: RequestOptions): ApiPromise&lt;TransactionRule, TransactionRules.DeleteTransactionRulesTransactionRuleIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a transaction rule.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionRules.deleteTransactionRulesTransactionRuleId({
    transactionRuleId,
  });
  // TODO: Handle 'response' of type TransactionRule
} catch (err) {
  if (
    err instanceof TransactionRules.DeleteTransactionRulesTransactionRuleIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionRuleId</code> | <code>string</code> | The unique identifier of the transaction rule. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionRule](src/models/transaction-rule.ts)</code>

**OnError**: <code>[TransactionRules.DeleteTransactionRulesTransactionRuleIdError](src/resources/transaction-rules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransactionRulesTransactionRuleId(request: TransactionRules.GetTransactionRulesTransactionRuleIdRequest, options?: RequestOptions): ApiPromise&lt;TransactionRuleResponse, TransactionRules.GetTransactionRulesTransactionRuleIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a transaction rule.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionRules.getTransactionRulesTransactionRuleId({ transactionRuleId });
  // TODO: Handle 'response' of type TransactionRuleResponse
} catch (err) {
  if (
    err instanceof TransactionRules.GetTransactionRulesTransactionRuleIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionRuleId</code> | <code>string</code> | The unique identifier of the transaction rule. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionRuleResponse](src/models/transaction-rule-response.ts)</code>

**OnError**: <code>[TransactionRules.GetTransactionRulesTransactionRuleIdError](src/resources/transaction-rules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchTransactionRulesTransactionRuleId(request: TransactionRules.PatchTransactionRulesTransactionRuleIdRequest, options?: RequestOptions): ApiPromise&lt;TransactionRule, TransactionRules.PatchTransactionRulesTransactionRuleIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a transaction rule. 

* To update only the status of a transaction rule, send only the `status` parameter. All other parameters not provided in the request are left unchanged.

* When updating any other parameter, you need to send all existing resource parameters. If you omit a parameter in the request, that parameter is removed from the resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionRules.patchTransactionRulesTransactionRuleId({
    transactionRuleId,
  });
  // TODO: Handle 'response' of type TransactionRule
} catch (err) {
  if (
    err instanceof TransactionRules.PatchTransactionRulesTransactionRuleIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionRuleId</code> | <code>string</code> | The unique identifier of the transaction rule. |
| <code>body?</code> | <code>[TransactionRuleInfo](src/models/transaction-rule-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionRule](src/models/transaction-rule.ts)</code>

**OnError**: <code>[TransactionRules.PatchTransactionRulesTransactionRuleIdError](src/resources/transaction-rules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postTransactionRules(request: TransactionRules.PostTransactionRulesRequest, options?: RequestOptions): ApiPromise&lt;TransactionRule, TransactionRules.PostTransactionRulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a [transaction rule](https://docs.adyen.com/issuing/transaction-rules). When your user makes a transaction with their Adyen-issued card, the transaction is allowed or declined based on the conditions and outcome defined in the transaction rule. You can apply the transaction rule to several cards, such as all the cards in your platform, or to a specific card. For use cases, see [examples](https://docs.adyen.com/issuing/transaction-rules/examples).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionRules.postTransactionRules();
  // TODO: Handle 'response' of type TransactionRule
} catch (err) {
  if (err instanceof TransactionRules.PostTransactionRulesError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TransactionRuleInfo](src/models/transaction-rule-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionRule](src/models/transaction-rule.ts)</code>

**OnError**: <code>[TransactionRules.PostTransactionRulesError](src/resources/transaction-rules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BankAccountValidation

> Source: [BankAccountValidation](src/resources/bank-account-validation.ts)

<details>
<summary><code>postValidateBankAccountIdentification(request: BankAccountValidation.PostValidateBankAccountIdentificationRequest, options?: RequestOptions): ApiPromise&lt;undefined, BankAccountValidation.PostValidateBankAccountIdentificationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validates bank account identification details. You can use this endpoint to validate bank account details before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) or [create a transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.bankAccountValidation.postValidateBankAccountIdentification();
} catch (err) {
  if (
    err instanceof BankAccountValidation.PostValidateBankAccountIdentificationError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[BankAccountIdentificationValidationRequest](src/models/bank-account-identification-validation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[BankAccountValidation.PostValidateBankAccountIdentificationError](src/resources/bank-account-validation.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## NetworkTokens

> Source: [NetworkTokens](src/resources/network-tokens.ts)

<details>
<summary><code>getNetworkTokensNetworkTokenId(request: NetworkTokens.GetNetworkTokensNetworkTokenIdRequest, options?: RequestOptions): ApiPromise&lt;GetNetworkTokenResponse, NetworkTokens.GetNetworkTokensNetworkTokenIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a network token.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.networkTokens.getNetworkTokensNetworkTokenId({ networkTokenId });
  // TODO: Handle 'response' of type GetNetworkTokenResponse
} catch (err) {
  if (
    err instanceof NetworkTokens.GetNetworkTokensNetworkTokenIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>networkTokenId</code> | <code>string</code> | The unique identifier of the network token. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetNetworkTokenResponse](src/models/get-network-token-response.ts)</code>

**OnError**: <code>[NetworkTokens.GetNetworkTokensNetworkTokenIdError](src/resources/network-tokens.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchNetworkTokensNetworkTokenId(request: NetworkTokens.PatchNetworkTokensNetworkTokenIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, NetworkTokens.PatchNetworkTokensNetworkTokenIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the status of the network token.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.networkTokens.patchNetworkTokensNetworkTokenId({ networkTokenId });
} catch (err) {
  if (
    err instanceof NetworkTokens.PatchNetworkTokensNetworkTokenIdError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>networkTokenId</code> | <code>string</code> | The unique identifier of the network token. |
| <code>body?</code> | <code>[UpdateNetworkTokenRequest](src/models/update-network-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[NetworkTokens.PatchNetworkTokensNetworkTokenIdError](src/resources/network-tokens.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GrantAccounts

> Source: [GrantAccounts](src/resources/grant-accounts.ts)

<details>
<summary><code>getGrantAccountsId(request: GrantAccounts.GetGrantAccountsIdRequest, options?: RequestOptions): ApiPromise&lt;CapitalGrantAccount, GrantAccounts.GetGrantAccountsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the [grant account](https://docs.adyen.com/platforms/capital#grant-account).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantAccounts.getGrantAccountsId({ id });
  // TODO: Handle 'response' of type CapitalGrantAccount
} catch (err) {
  if (err instanceof GrantAccounts.GetGrantAccountsIdError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the grant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CapitalGrantAccount](src/models/capital-grant-account.ts)</code>

**OnError**: <code>[GrantAccounts.GetGrantAccountsIdError](src/resources/grant-accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGrantAccountsId1(request: GrantAccounts.GetGrantAccountsId1Request, options?: RequestOptions): ApiPromise&lt;GrantAccount, GrantAccounts.GetGrantAccountsId1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the specified grant account. This account tracks existing grants in your marketplace or platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantAccounts.getGrantAccountsId1({ id });
  // TODO: Handle 'response' of type GrantAccount
} catch (err) {
  if (
    err instanceof GrantAccounts.GetGrantAccountsId1Error && err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the grant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GrantAccount](src/models/grant-account.ts)</code>

**OnError**: <code>[GrantAccounts.GetGrantAccountsId1Error](src/resources/grant-accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GrantOffersApi

> Source: [GrantOffersApi](src/resources/grant-offers-api.ts)

<details>
<summary><code>getGrantOffers(request: GrantOffersApi.GetGrantOffersRequest, options?: RequestOptions): ApiPromise&lt;GrantOffers, GrantOffersApi.GetGrantOffersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all [grant offers](https://docs.adyen.com/platforms/capital#grant-offers) available for `accountHolderId` specified as a query parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantOffersApi.getGrantOffers({ accountHolderId });
  // TODO: Handle 'response' of type GrantOffers
} catch (err) {
  if (err instanceof GrantOffersApi.GetGrantOffersError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountHolderId</code> | <code>string</code> | The unique identifier of the grant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GrantOffers](src/models/grant-offers.ts)</code>

**OnError**: <code>[GrantOffersApi.GetGrantOffersError](src/resources/grant-offers-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGrantOffersGrantOfferId(request: GrantOffersApi.GetGrantOffersGrantOfferIdRequest, options?: RequestOptions): ApiPromise&lt;GrantOffer, GrantOffersApi.GetGrantOffersGrantOfferIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a single grant offer.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantOffersApi.getGrantOffersGrantOfferId({ grantOfferId });
  // TODO: Handle 'response' of type GrantOffer
} catch (err) {
  if (
    err instanceof GrantOffersApi.GetGrantOffersGrantOfferIdError && err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>grantOfferId</code> | <code>string</code> | The unique identifier of the grant offer. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GrantOffer](src/models/grant-offer.ts)</code>

**OnError**: <code>[GrantOffersApi.GetGrantOffersGrantOfferIdError](src/resources/grant-offers-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGrantOffersId(request: GrantOffersApi.GetGrantOffersIdRequest, options?: RequestOptions): ApiPromise&lt;GrantOffer1, GrantOffersApi.GetGrantOffersIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the specified static offer.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantOffersApi.getGrantOffersId({ id });
  // TODO: Handle 'response' of type GrantOffer1
} catch (err) {
  if (
    err instanceof GrantOffersApi.GetGrantOffersIdError && err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the static offer. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GrantOffer1](src/models/grant-offer1.ts)</code>

**OnError**: <code>[GrantOffersApi.GetGrantOffersIdError](src/resources/grant-offers-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGrantOffers1(request: GrantOffersApi.GetGrantOffers1Request, options?: RequestOptions): ApiPromise&lt;GrantOffers, GrantOffersApi.GetGrantOffers1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all [static offers](https://docs.adyen.com/capital/get-grant-offers/static-offers) available for `accountHolderId` specified as a query parameter. This also includes static offers created for financing amounts that the user selected from [dynamic offers](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantOffersApi.getGrantOffers1({ accountHolderId });
  // TODO: Handle 'response' of type GrantOffers
} catch (err) {
  if (
    err instanceof GrantOffersApi.GetGrantOffers1Error && err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountHolderId</code> | <code>string</code> | The unique identifier of the account holder for which you want to get the available static offers. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GrantOffers](src/models/grant-offers.ts)</code>

**OnError**: <code>[GrantOffersApi.GetGrantOffers1Error](src/resources/grant-offers-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CardOrders

> Source: [CardOrders](src/resources/card-orders.ts)

<details>
<summary><code>getCardorders(request: CardOrders.GetCardordersRequest, options?: RequestOptions): ApiPromise&lt;PaginatedGetCardOrderResponse, CardOrders.GetCardordersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of card orders.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cardOrders.getCardorders();
  // TODO: Handle 'response' of type PaginatedGetCardOrderResponse
} catch (err) {
  if (err instanceof CardOrders.GetCardordersError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | The unique identifier of the card order. |
| <code>cardManufacturingProfileId?</code> | <code>string</code> | The unique identifier of the card manufacturer profile. |
| <code>status?</code> | <code>string</code> | The status of the card order. |
| <code>txVariantCode?</code> | <code>string</code> | The unique code of the card manufacturer profile.<br><br>Possible values: **mcmaestro**, **mc**, **visa**, **mcdebit**. |
| <code>createdSince?</code> | <code>Date</code> (date-time) | Only include card orders that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**. |
| <code>createdUntil?</code> | <code>Date</code> (date-time) | Only include card orders that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**. |
| <code>lockedSince?</code> | <code>Date</code> (date-time) | Only include card orders that have been locked on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**. |
| <code>lockedUntil?</code> | <code>Date</code> (date-time) | Only include card orders that have been locked on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**. |
| <code>serviceCenter?</code> | <code>string</code> | The service center at which the card is issued. The value is case-sensitive. |
| <code>offset?</code> | <code>number</code> | Specifies the position of an element in a list of card orders. The response includes a list of card orders that starts at the specified offset.<br><br>**Default:** 0, which means that the response contains all the elements in the list of card orders. |
| <code>limit?</code> | <code>number</code> | The number of card orders returned per page. **Default:** 10. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedGetCardOrderResponse](src/models/paginated-get-card-order-response.ts)</code>

**OnError**: <code>[CardOrders.GetCardordersError](src/resources/card-orders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCardordersIdItems(request: CardOrders.GetCardordersIdItemsRequest, options?: RequestOptions): ApiPromise&lt;PaginatedGetCardOrderItemResponse, CardOrders.GetCardordersIdItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the item list of a specific card order.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cardOrders.getCardordersIdItems({ id });
  // TODO: Handle 'response' of type PaginatedGetCardOrderItemResponse
} catch (err) {
  if (err instanceof CardOrders.GetCardordersIdItemsError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the card order. |
| <code>offset?</code> | <code>number</code> | Specifies the position of an element in a list of card orders. The response includes a list of card order items that starts at the specified offset.<br><br>**Default:** 0, which means that the response contains all the elements in the list of card order items. |
| <code>limit?</code> | <code>number</code> | The number of card order items returned per page. **Default:** 10. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedGetCardOrderItemResponse](src/models/paginated-get-card-order-item-response.ts)</code>

**OnError**: <code>[CardOrders.GetCardordersIdItemsError](src/resources/card-orders.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DirectDebitMandates

> Source: [DirectDebitMandates](src/resources/direct-debit-mandates.ts)

<details>
<summary><code>getMandates(request: DirectDebitMandates.GetMandatesRequest, options?: RequestOptions): ApiPromise&lt;ListMandatesResponse, DirectDebitMandates.GetMandatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all [direct debit mandates](https://docs.adyen.com/business-accounts/accept-direct-debits-uk) created for a business account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.directDebitMandates.getMandates();
  // TODO: Handle 'response' of type ListMandatesResponse
} catch (err) {
  if (
    err instanceof DirectDebitMandates.GetMandatesError && err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>balanceAccountId?</code> | <code>string</code> | The unique identifier of the balance account linked to the payment instrument. |
| <code>paymentInstrumentId?</code> | <code>string</code> | The unique identifier of the payment instrument linked to the mandate. |
| <code>cursor?</code> | <code>string</code> | The pagination cursor returned in a previous GET `/mandates` request. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMandatesResponse](src/models/list-mandates-response.ts)</code>

**OnError**: <code>[DirectDebitMandates.GetMandatesError](src/resources/direct-debit-mandates.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMandatesMandateId(request: DirectDebitMandates.GetMandatesMandateIdRequest, options?: RequestOptions): ApiPromise&lt;Mandate1, DirectDebitMandates.GetMandatesMandateIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the specified [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.directDebitMandates.getMandatesMandateId({ mandateId });
  // TODO: Handle 'response' of type Mandate1
} catch (err) {
  if (
    err instanceof DirectDebitMandates.GetMandatesMandateIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mandateId</code> | <code>string</code> | The unique identifier of the mandate. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Mandate1](src/models/mandate1.ts)</code>

**OnError**: <code>[DirectDebitMandates.GetMandatesMandateIdError](src/resources/direct-debit-mandates.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchMandatesMandateId(request: DirectDebitMandates.PatchMandatesMandateIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, DirectDebitMandates.PatchMandatesMandateIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Amend the specified [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.directDebitMandates.patchMandatesMandateId({ mandateId, body });
} catch (err) {
  if (
    err instanceof DirectDebitMandates.PatchMandatesMandateIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mandateId</code> | <code>string</code> | The unique identifier of the mandate. |
| <code>body</code> | <code>[MandateUpdate](src/models/mandate-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[DirectDebitMandates.PatchMandatesMandateIdError](src/resources/direct-debit-mandates.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMandatesMandateIdCancel(request: DirectDebitMandates.PostMandatesMandateIdCancelRequest, options?: RequestOptions): ApiPromise&lt;undefined, DirectDebitMandates.PostMandatesMandateIdCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a specified [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.directDebitMandates.postMandatesMandateIdCancel({ mandateId });
} catch (err) {
  if (
    err instanceof DirectDebitMandates.PostMandatesMandateIdCancelError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mandateId</code> | <code>string</code> | The unique identifier of the mandate. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[DirectDebitMandates.PostMandatesMandateIdCancelError](src/resources/direct-debit-mandates.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageCardPin

> Source: [ManageCardPin](src/resources/manage-card-pin.ts)

<details>
<summary><code>getPublicKey(request: ManageCardPin.GetPublicKeyRequest, options?: RequestOptions): ApiPromise&lt;PublicKeyResponse, ManageCardPin.GetPublicKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) public key to encrypt or decrypt card data.

 You need the RSA public key to generate the `encryptedKey` required to:
- [Change a PIN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/pins/change).
- [Reveal a PIN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/pins/reveal).
- [Reveal a PAN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/paymentInstruments/reveal).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageCardPin.getPublicKey();
  // TODO: Handle 'response' of type PublicKeyResponse
} catch (err) {
  if (err instanceof ManageCardPin.GetPublicKeyError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purpose?</code> | <code>string</code> | The purpose of the public key.<br><br>Possible values: **pinChange**, **pinReveal**, **panReveal**.<br><br>Default value: **pinReveal**. |
| <code>format?</code> | <code>string</code> | The encoding format of public key.<br><br>Possible values: **jwk**, **pem**.<br><br>Default value: **pem**. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicKeyResponse](src/models/public-key-response.ts)</code>

**OnError**: <code>[ManageCardPin.GetPublicKeyError](src/resources/manage-card-pin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPinsChange(request: ManageCardPin.PostPinsChangeRequest, options?: RequestOptions): ApiPromise&lt;PinChangeResponse, ManageCardPin.PostPinsChangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the personal identification number (PIN) of a specified card.

To make this request, your API credential must have the following role:
* Bank Issuing PIN Change Webservice role

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageCardPin.postPinsChange();
  // TODO: Handle 'response' of type PinChangeResponse
} catch (err) {
  if (err instanceof ManageCardPin.PostPinsChangeError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[PinChangeRequest](src/models/pin-change-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PinChangeResponse](src/models/pin-change-response.ts)</code>

**OnError**: <code>[ManageCardPin.PostPinsChangeError](src/resources/manage-card-pin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postPinsReveal(request: ManageCardPin.PostPinsRevealRequest, options?: RequestOptions): ApiPromise&lt;RevealPinResponse, ManageCardPin.PostPinsRevealError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an encrypted PIN block that contains the PIN of a specified card. You can use the decrypted data to reveal the PIN in your user interface.

To make this request, your API credential must have the following role:
* Bank Issuing PIN Reveal Webservice role

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageCardPin.postPinsReveal();
  // TODO: Handle 'response' of type RevealPinResponse
} catch (err) {
  if (err instanceof ManageCardPin.PostPinsRevealError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[RevealPinRequest](src/models/reveal-pin-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RevealPinResponse](src/models/reveal-pin-response.ts)</code>

**OnError**: <code>[ManageCardPin.PostPinsRevealError](src/resources/manage-card-pin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TransferRoutes

> Source: [TransferRoutes](src/resources/transfer-routes.ts)

<details>
<summary><code>postTransferRoutesCalculate(request: TransferRoutes.PostTransferRoutesCalculateRequest, options?: RequestOptions): ApiPromise&lt;TransferRouteResponse, TransferRoutes.PostTransferRoutesCalculateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns available transfer routes based on a combination of transfer `country`, `currency`, `counterparty`, and `priorities`. Use this endpoint to find optimal transfer priorities and associated requirements before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferRoutes.postTransferRoutesCalculate();
  // TODO: Handle 'response' of type TransferRouteResponse
} catch (err) {
  if (
    err instanceof TransferRoutes.PostTransferRoutesCalculateError && err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TransferRouteRequest](src/models/transfer-route-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferRouteResponse](src/models/transfer-route-response.ts)</code>

**OnError**: <code>[TransferRoutes.PostTransferRoutesCalculateError](src/resources/transfer-routes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ScaDeviceManagement

> Source: [ScaDeviceManagement](src/resources/sca-device-management.ts)

<details>
<summary><code>deleteScaDevicesDeviceId(request: ScaDeviceManagement.DeleteScaDevicesDeviceIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, ScaDeviceManagement.DeleteScaDevicesDeviceIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Strong Customer Authentication (SCA) device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.scaDeviceManagement.deleteScaDevicesDeviceId({ deviceId });
} catch (err) {
  if (
    err instanceof ScaDeviceManagement.DeleteScaDevicesDeviceIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId</code> | <code>string</code> | The unique identifier of the SCA device to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ScaDeviceManagement.DeleteScaDevicesDeviceIdError](src/resources/sca-device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchScaDevicesDeviceId(request: ScaDeviceManagement.PatchScaDevicesDeviceIdRequest, options?: RequestOptions): ApiPromise&lt;FinishScaDeviceRegistrationResponse, ScaDeviceManagement.PatchScaDevicesDeviceIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finishes the registration process for a new Strong Customer Authentication (SCA) device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.scaDeviceManagement.patchScaDevicesDeviceId({ deviceId });
  // TODO: Handle 'response' of type FinishScaDeviceRegistrationResponse
} catch (err) {
  if (
    err instanceof ScaDeviceManagement.PatchScaDevicesDeviceIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId</code> | <code>string</code> | The unique identifier of the SCA device that you are associating with a resource. |
| <code>body?</code> | <code>[FinishScaDeviceRegistrationRequest](src/models/finish-sca-device-registration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FinishScaDeviceRegistrationResponse](src/models/finish-sca-device-registration-response.ts)</code>

**OnError**: <code>[ScaDeviceManagement.PatchScaDevicesDeviceIdError](src/resources/sca-device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postScaDevices(request: ScaDeviceManagement.PostScaDevicesRequest, options?: RequestOptions): ApiPromise&lt;BeginScaDeviceRegistrationResponse, ScaDeviceManagement.PostScaDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Begins the registration process for a new Strong Customer Authentication (SCA) device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.scaDeviceManagement.postScaDevices();
  // TODO: Handle 'response' of type BeginScaDeviceRegistrationResponse
} catch (err) {
  if (
    err instanceof ScaDeviceManagement.PostScaDevicesError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[BeginScaDeviceRegistrationRequest](src/models/begin-sca-device-registration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BeginScaDeviceRegistrationResponse](src/models/begin-sca-device-registration-response.ts)</code>

**OnError**: <code>[ScaDeviceManagement.PostScaDevicesError](src/resources/sca-device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postScaDevicesDeviceIdScaAssociations(request: ScaDeviceManagement.PostScaDevicesDeviceIdScaAssociationsRequest, options?: RequestOptions): ApiPromise&lt;SubmitScaAssociationResponse, ScaDeviceManagement.PostScaDevicesDeviceIdScaAssociationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an association between an SCA-enabled device and an entity, such as an account holder. This action does not guarantee the association is immediately ready for use; its status may be `pendingApproval` if the account holder has existing devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.scaDeviceManagement.postScaDevicesDeviceIdScaAssociations({ deviceId });
  // TODO: Handle 'response' of type SubmitScaAssociationResponse
} catch (err) {
  if (
    err instanceof ScaDeviceManagement.PostScaDevicesDeviceIdScaAssociationsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId</code> | <code>string</code> | The unique identifier of the SCA device that you are associating with a resource. |
| <code>body?</code> | <code>[SubmitScaAssociationRequest](src/models/submit-sca-association-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubmitScaAssociationResponse](src/models/submit-sca-association-response.ts)</code>

**OnError**: <code>[ScaDeviceManagement.PostScaDevicesDeviceIdScaAssociationsError](src/resources/sca-device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TransferLimitsBalanceAccountLevel

> Source: [TransferLimitsBalanceAccountLevel](src/resources/transfer-limits-balance-account-level.ts)

<details>
<summary><code>deleteBalanceAccountsIdTransferLimitsTransferLimitId(request: TransferLimitsBalanceAccountLevel.DeleteBalanceAccountsIdTransferLimitsTransferLimitIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, TransferLimitsBalanceAccountLevel.DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a scheduled or pending transfer limit using its unique `transferLimitId`. You cannot delete an active limit.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.transferLimitsBalanceAccountLevel.deleteBalanceAccountsIdTransferLimitsTransferLimitId({
    id,
    transferLimitId,
  });
} catch (err) {
  if (
    err instanceof
      TransferLimitsBalanceAccountLevel.DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>transferLimitId</code> | <code>string</code> | The unique identifier of the transfer limit. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[TransferLimitsBalanceAccountLevel.DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError](src/resources/transfer-limits-balance-account-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceAccountsIdTransferLimits(request: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsRequest, options?: RequestOptions): ApiPromise&lt;TransferLimitListResponse, TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Filter and view the transfer limits configured for a balance account using the balance account's unique `id` and the available query parameters.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferLimitsBalanceAccountLevel.getBalanceAccountsIdTransferLimits({ id });
  // TODO: Handle 'response' of type TransferLimitListResponse
} catch (err) {
  if (
    err instanceof TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>scope?</code> | <code>[Scope](src/models/scope.ts)</code> | The scope to which the transfer limit applies. Possible values:<br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day. |
| <code>transferType?</code> | <code>[TransferType](src/models/transfer-type.ts)</code> | The type of transfer to which the limit applies. Possible values:<br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority. |
| <code>status?</code> | <code>[LimitStatus](src/models/limit-status.ts)</code> | The status of the transfer limit. Possible values:   <br>* **active**: the limit is currently active.<br>* **inactive**: the limit is currently inactive.<br>* **pendingSCA**: the limit is pending until your user performs SCA.<br>* **scheduled**: the limit is scheduled to become active at a future date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferLimitListResponse](src/models/transfer-limit-list-response.ts)</code>

**OnError**: <code>[TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsError](src/resources/transfer-limits-balance-account-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceAccountsIdTransferLimitsCurrent(request: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentRequest, options?: RequestOptions): ApiPromise&lt;TransferLimitListResponse, TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all transfer limits that currently apply to a balance account using the unique `id` of the balance account.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferLimitsBalanceAccountLevel.getBalanceAccountsIdTransferLimitsCurrent({
    id,
  });
  // TODO: Handle 'response' of type TransferLimitListResponse
} catch (err) {
  if (
    err instanceof TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>scope?</code> | <code>[Scope](src/models/scope.ts)</code> | The scope to which the transfer limit applies. Possible values:<br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day. |
| <code>transferType?</code> | <code>[TransferType](src/models/transfer-type.ts)</code> | The type of transfer to which the limit applies. Possible values:<br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferLimitListResponse](src/models/transfer-limit-list-response.ts)</code>

**OnError**: <code>[TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentError](src/resources/transfer-limits-balance-account-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalanceAccountsIdTransferLimitsTransferLimitId(request: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsTransferLimitIdRequest, options?: RequestOptions): ApiPromise&lt;TransferLimit, TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsTransferLimitIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the details of a transfer limit using its unique `transferLimitId`.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.transferLimitsBalanceAccountLevel.getBalanceAccountsIdTransferLimitsTransferLimitId({
      id,
      transferLimitId,
    });
  // TODO: Handle 'response' of type TransferLimit
} catch (err) {
  if (
    err instanceof TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsTransferLimitIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>transferLimitId</code> | <code>string</code> | The unique identifier of the transfer limit. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferLimit](src/models/transfer-limit.ts)</code>

**OnError**: <code>[TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsTransferLimitIdError](src/resources/transfer-limits-balance-account-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postBalanceAccountsIdTransferLimits(request: TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsRequest, options?: RequestOptions): ApiPromise&lt;TransferLimit, TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a transfer limit for your balance account using the unique `id` of your balance account.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferLimitsBalanceAccountLevel.postBalanceAccountsIdTransferLimits({
    id,
    body,
  });
  // TODO: Handle 'response' of type TransferLimit
} catch (err) {
  if (
    err instanceof TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>wwwAuthenticate?</code> | <code>string</code> | Header for authenticating through SCA |
| <code>body</code> | <code>[CreateTransferLimitRequest](src/models/create-transfer-limit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferLimit](src/models/transfer-limit.ts)</code>

**OnError**: <code>[TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsError](src/resources/transfer-limits-balance-account-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postBalanceAccountsIdTransferLimitsApprove(request: TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsApproveRequest, options?: RequestOptions): ApiPromise&lt;undefined, TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsApproveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve transfer limits that are pending SCA authentication.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.transferLimitsBalanceAccountLevel.postBalanceAccountsIdTransferLimitsApprove({ id, body });
} catch (err) {
  if (
    err instanceof TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsApproveError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance account. |
| <code>wwwAuthenticate?</code> | <code>string</code> | Header for authenticating using SCA. |
| <code>body</code> | <code>[ApproveTransferLimitRequest](src/models/approve-transfer-limit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsApproveError](src/resources/transfer-limits-balance-account-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TransferLimitsBalancePlatformLevel

> Source: [TransferLimitsBalancePlatformLevel](src/resources/transfer-limits-balance-platform-level.ts)

<details>
<summary><code>deleteBalancePlatformsIdTransferLimitsTransferLimitId(request: TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a scheduled or pending transfer limit using its unique `transferLimitId`. You cannot delete an active limit.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.transferLimitsBalancePlatformLevel.deleteBalancePlatformsIdTransferLimitsTransferLimitId({
    id,
    transferLimitId,
  });
} catch (err) {
  if (
    err instanceof
      TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance platform. |
| <code>transferLimitId</code> | <code>string</code> | The unique identifier of the transfer limit. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError](src/resources/transfer-limits-balance-platform-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalancePlatformsIdTransferLimits(request: TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsRequest, options?: RequestOptions): ApiPromise&lt;TransferLimitListResponse, TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Filter and view the transfer limits configured for your balance platform using the balance platform's unique `id` and the available query parameters.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferLimitsBalancePlatformLevel.getBalancePlatformsIdTransferLimits({
    id,
  });
  // TODO: Handle 'response' of type TransferLimitListResponse
} catch (err) {
  if (
    err instanceof TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance platform. |
| <code>scope?</code> | <code>[Scope](src/models/scope.ts)</code> | The scope to which the transfer limit applies. Possible values:<br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day. |
| <code>transferType?</code> | <code>[TransferType](src/models/transfer-type.ts)</code> | The type of transfer to which the limit applies. Possible values:<br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority. |
| <code>status?</code> | <code>[LimitStatus](src/models/limit-status.ts)</code> | The status of the transfer limit. Possible values:   <br>* **active**: the limit is currently active.<br>* **inactive**: the limit is currently inactive.<br>* **pendingSCA**: the limit is pending until your user performs SCA.<br>* **scheduled**: the limit is scheduled to become active at a future date. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferLimitListResponse](src/models/transfer-limit-list-response.ts)</code>

**OnError**: <code>[TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsError](src/resources/transfer-limits-balance-platform-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBalancePlatformsIdTransferLimitsTransferLimitId(request: TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdRequest, options?: RequestOptions): ApiPromise&lt;TransferLimit, TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the details of a transfer limit using its unique `transferLimitId`.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.transferLimitsBalancePlatformLevel.getBalancePlatformsIdTransferLimitsTransferLimitId({
      id,
      transferLimitId,
    });
  // TODO: Handle 'response' of type TransferLimit
} catch (err) {
  if (
    err instanceof
      TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance platform. |
| <code>transferLimitId</code> | <code>string</code> | The unique identifier of the transfer limit. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferLimit](src/models/transfer-limit.ts)</code>

**OnError**: <code>[TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdError](src/resources/transfer-limits-balance-platform-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postBalancePlatformsIdTransferLimits(request: TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsRequest, options?: RequestOptions): ApiPromise&lt;TransferLimit, TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a transfer limit for your balance platform using the unique `id` of your balance platform.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferLimitsBalancePlatformLevel.postBalancePlatformsIdTransferLimits({
    id,
    body,
  });
  // TODO: Handle 'response' of type TransferLimit
} catch (err) {
  if (
    err instanceof TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the balance platform. |
| <code>body</code> | <code>[CreateTransferLimitRequest](src/models/create-transfer-limit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferLimit](src/models/transfer-limit.ts)</code>

**OnError**: <code>[TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsError](src/resources/transfer-limits-balance-platform-level.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageScaDevices

> Source: [ManageScaDevices](src/resources/manage-sca-devices.ts)

<details>
<summary><code>deleteRegisteredDevicesId(request: ManageScaDevices.DeleteRegisteredDevicesIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, ManageScaDevices.DeleteRegisteredDevicesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an SCA device from the list of registered devices of a specific payment instrument.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.manageScaDevices.deleteRegisteredDevicesId({ id, paymentInstrumentId });
} catch (err) {
  if (
    err instanceof ManageScaDevices.DeleteRegisteredDevicesIdError && err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the SCA device. |
| <code>paymentInstrumentId</code> | <code>string</code> | The unique identifier of the payment instrument linked to the SCA device. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ManageScaDevices.DeleteRegisteredDevicesIdError](src/resources/manage-sca-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRegisteredDevices(request: ManageScaDevices.GetRegisteredDevicesRequest, options?: RequestOptions): ApiPromise&lt;SearchRegisteredDevicesResponse, ManageScaDevices.GetRegisteredDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of the SCA devices you have currently registered for a specific payment instrument.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageScaDevices.getRegisteredDevices({ paymentInstrumentId });
  // TODO: Handle 'response' of type SearchRegisteredDevicesResponse
} catch (err) {
  if (err instanceof ManageScaDevices.GetRegisteredDevicesError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentInstrumentId</code> | <code>string</code> | The unique identifier of a payment instrument. It limits the returned list to SCA devices associated to this payment instrument. |
| <code>pageNumber?</code> | <code>number</code> | The index of the page to retrieve. The index of the first page is 0 (zero).<br><br>Default: 0. |
| <code>pageSize?</code> | <code>number</code> | The number of items to have on a page.<br><br>Default: 20. Maximum: 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchRegisteredDevicesResponse](src/models/search-registered-devices-response.ts)</code>

**OnError**: <code>[ManageScaDevices.GetRegisteredDevicesError](src/resources/manage-sca-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchRegisteredDevicesDeviceIdAssociations(request: ManageScaDevices.PatchRegisteredDevicesDeviceIdAssociationsRequest, options?: RequestOptions): ApiPromise&lt;AssociationFinaliseResponse, ManageScaDevices.PatchRegisteredDevicesDeviceIdAssociationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Completes an association between a user's registered SCA device and an Adyen resource. For example, you can associate an SCA device with additional [business accounts](https://docs.adyen.com/platforms/business-accounts/sca/register-devices) or [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/register-devices).

To complete the association, this endpoint validates the authentication data of the registered device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageScaDevices.patchRegisteredDevicesDeviceIdAssociations({ deviceId });
  // TODO: Handle 'response' of type AssociationFinaliseResponse
} catch (err) {
  if (
    err instanceof ManageScaDevices.PatchRegisteredDevicesDeviceIdAssociationsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId</code> | <code>string</code> | The unique identifier of the SCA device that you are associating with a resource. |
| <code>body?</code> | <code>[AssociationFinaliseRequest](src/models/association-finalise-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AssociationFinaliseResponse](src/models/association-finalise-response.ts)</code>

**OnError**: <code>[ManageScaDevices.PatchRegisteredDevicesDeviceIdAssociationsError](src/resources/manage-sca-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchRegisteredDevicesId(request: ManageScaDevices.PatchRegisteredDevicesIdRequest, options?: RequestOptions): ApiPromise&lt;RegisterScaFinalResponse, ManageScaDevices.PatchRegisteredDevicesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Completes the registration of an SCA device by validating the authentication data of the device. You can register SCA devices for [business accounts](https://docs.adyen.com/platforms/business-accounts/sca) or [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk).



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageScaDevices.patchRegisteredDevicesId({ id });
  // TODO: Handle 'response' of type RegisterScaFinalResponse
} catch (err) {
  if (
    err instanceof ManageScaDevices.PatchRegisteredDevicesIdError && err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the SCA device. You obtain this `id` in the response of a POST&nbsp;[/registeredDevices](https://docs.adyen.com/api-explorer/balanceplatform/2/post/registeredDevices#responses-200-id) request. |
| <code>body?</code> | <code>[RegisterScaRequest](src/models/register-sca-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RegisterScaFinalResponse](src/models/register-sca-final-response.ts)</code>

**OnError**: <code>[ManageScaDevices.PatchRegisteredDevicesIdError](src/resources/manage-sca-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postRegisteredDevices(request: ManageScaDevices.PostRegisteredDevicesRequest, options?: RequestOptions): ApiPromise&lt;RegisterScaResponse, ManageScaDevices.PostRegisteredDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates the registration of a user's device for Strong Customer Authentication (SCA). You can register SCA devices for [business accounts](https://docs.adyen.com/platforms/business-accounts/sca/register-devices) or [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/register-devices).

For a successful request, the device must be eligible for SCA.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageScaDevices.postRegisteredDevices();
  // TODO: Handle 'response' of type RegisterScaResponse
} catch (err) {
  if (err instanceof ManageScaDevices.PostRegisteredDevicesError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[RegisterScaRequest](src/models/register-sca-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RegisterScaResponse](src/models/register-sca-response.ts)</code>

**OnError**: <code>[ManageScaDevices.PostRegisteredDevicesError](src/resources/manage-sca-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postRegisteredDevicesDeviceIdAssociations(request: ManageScaDevices.PostRegisteredDevicesDeviceIdAssociationsRequest, options?: RequestOptions): ApiPromise&lt;AssociationInitiateResponse, ManageScaDevices.PostRegisteredDevicesDeviceIdAssociationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates an association between a user's registered SCA device and an Adyen resource. For example, you can associate an SCA device with additional [business accounts](https://docs.adyen.com/platforms/business-accounts/sca/register-devices) or [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/register-devices).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageScaDevices.postRegisteredDevicesDeviceIdAssociations({ deviceId });
  // TODO: Handle 'response' of type AssociationInitiateResponse
} catch (err) {
  if (
    err instanceof ManageScaDevices.PostRegisteredDevicesDeviceIdAssociationsError &&
      err.payload.kind === "restServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId</code> | <code>string</code> | The unique identifier of the SCA device that you are associating with a resource. |
| <code>body?</code> | <code>[AssociationInitiateRequest](src/models/association-initiate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AssociationInitiateResponse](src/models/association-initiate-response.ts)</code>

**OnError**: <code>[ManageScaDevices.PostRegisteredDevicesDeviceIdAssociationsError](src/resources/manage-sca-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ScaAssociationManagement

> Source: [ScaAssociationManagement](src/resources/sca-association-management.ts)

<details>
<summary><code>deleteScaAssociations(request: ScaAssociationManagement.DeleteScaAssociationsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ScaAssociationManagement.DeleteScaAssociationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes one or more SCA associations for a device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.scaAssociationManagement.deleteScaAssociations({ wwwAuthenticate });
} catch (err) {
  if (
    err instanceof ScaAssociationManagement.DeleteScaAssociationsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wwwAuthenticate</code> | <code>string</code> | The header for authenticating through SCA. |
| <code>body?</code> | <code>[RemoveAssociationRequest](src/models/remove-association-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ScaAssociationManagement.DeleteScaAssociationsError](src/resources/sca-association-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScaAssociations(request: ScaAssociationManagement.GetScaAssociationsRequest, options?: RequestOptions): ApiPromise&lt;ListAssociationsResponse, ScaAssociationManagement.GetScaAssociationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of the SCA devices associated with a specific entity.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.scaAssociationManagement.getScaAssociations({
    entityType,
    entityId,
    pageSize,
    pageNumber,
  });
  // TODO: Handle 'response' of type ListAssociationsResponse
} catch (err) {
  if (
    err instanceof ScaAssociationManagement.GetScaAssociationsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityType</code> | <code>[ScaEntityType](src/models/sca-entity-type.ts)</code> | The type of entity you want to retrieve a list of associations for. <br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**. |
| <code>entityId</code> | <code>string</code> | The unique identifier of the entity. |
| <code>pageSize</code> | <code>number</code> | The number of items to have on a page. <br><br>Default: **5**. |
| <code>pageNumber</code> | <code>number</code> | The index of the page to retrieve. The index of the first page is **0** (zero). <br><br>Default:  **0**. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAssociationsResponse](src/models/list-associations-response.ts)</code>

**OnError**: <code>[ScaAssociationManagement.GetScaAssociationsError](src/resources/sca-association-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchScaAssociations(request: ScaAssociationManagement.PatchScaAssociationsRequest, options?: RequestOptions): ApiPromise&lt;ApproveAssociationResponse, ScaAssociationManagement.PatchScaAssociationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approves a previously created association that is in a pending state.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.scaAssociationManagement.patchScaAssociations({ wwwAuthenticate });
  // TODO: Handle 'response' of type ApproveAssociationResponse
} catch (err) {
  if (
    err instanceof ScaAssociationManagement.PatchScaAssociationsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wwwAuthenticate</code> | <code>string</code> | The header for authenticating through SCA. |
| <code>body?</code> | <code>[ApproveAssociationRequest](src/models/approve-association-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApproveAssociationResponse](src/models/approve-association-response.ts)</code>

**OnError**: <code>[ScaAssociationManagement.PatchScaAssociationsError](src/resources/sca-association-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Transfers

> Source: [Transfers](src/resources/transfers.ts)

<details>
<summary><code>getTransfers(request: Transfers.GetTransfersRequest, options?: RequestOptions): ApiPromise&lt;FindTransfersResponse, Transfers.GetTransfersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all the transfers related to a balance account, account holder, or balance platform.

When making this request, you must include at least one of the following:
- `balanceAccountId`
- `accountHolderId`
- `balancePlatform`.

This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next and previous pages when applicable. You can use the links to page through the results.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.getTransfers({ createdSince, createdUntil });
  // TODO: Handle 'response' of type FindTransfersResponse
} catch (err) {
  if (err instanceof Transfers.GetTransfersError && err.payload.kind === "transferServiceRestServiceError") {
    // TODO: Handle 'err.payload.body' of type TransferServiceRestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>createdSince</code> | <code>Date</code> (date-time) | Only include transfers that have been created on or after this point in time. The value must be in ISO 8601 format and not earlier than 6 months before the `createdUntil` date. For example, **2021-05-30T15:07:40Z**. |
| <code>createdUntil</code> | <code>Date</code> (date-time) | Only include transfers that have been created on or before this point in time. The value must be in ISO 8601 format and not later than 6 months after the `createdSince` date. For example, **2021-05-30T15:07:40Z**. |
| <code>balancePlatform?</code> | <code>string</code> | The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).<br><br>Required if you don't provide a `balanceAccountId` or `accountHolderId`. |
| <code>accountHolderId?</code> | <code>string</code> | The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).<br><br>Required if you don't provide a `balanceAccountId` or `balancePlatform`.<br><br>If you provide a `balanceAccountId`, the `accountHolderId` must be related to the `balanceAccountId`. |
| <code>balanceAccountId?</code> | <code>string</code> | The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).<br><br>Required if you don't provide an `accountHolderId` or `balancePlatform`.<br><br>If you provide an `accountHolderId`, the `balanceAccountId` must be related to the `accountHolderId`. |
| <code>paymentInstrumentId?</code> | <code>string</code> | The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).<br><br>To use this parameter, you must also provide a `balanceAccountId`, `accountHolderId`, or `balancePlatform`.<br><br>The `paymentInstrumentId` must be related to the `balanceAccountId` or `accountHolderId` that you provide. |
| <code>reference?</code> | <code>string</code> | The reference you provided in the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) request |
| <code>category?</code> | <code>[Category2](src/models/category2.ts)</code> | The category of the transfer.<br><br>Possible values:<br><br> - **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.<br><br>- **card**: A transfer involving a third-party card.<br><br>- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.<br><br>- **issuedCard**: A transfer initiated by an Adyen-issued card.<br><br>- **platformPayment**: Funds movements related to payments that are acquired for your users.<br><br>- **topUp**: An incoming transfer initiated by your user to top up their balance account. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Determines the sort order of the returned transfers. The sort order is based on the creation date of the transfers.<br><br>Possible values:<br><br> - **asc**: Ascending order, from oldest to most recent.<br><br>- **desc**: Descending order, from most recent to oldest.<br><br>Default value: **asc**. |
| <code>cursor?</code> | <code>string</code> | The `cursor` returned in the links of the previous response. |
| <code>limit?</code> | <code>number</code> | The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindTransfersResponse](src/models/find-transfers-response.ts)</code>

**OnError**: <code>[Transfers.GetTransfersError](src/resources/transfers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransfersId(request: Transfers.GetTransfersIdRequest, options?: RequestOptions): ApiPromise&lt;TransferData, Transfers.GetTransfersIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a specified transfer.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.getTransfersId({ id });
  // TODO: Handle 'response' of type TransferData
} catch (err) {
  if (
    err instanceof Transfers.GetTransfersIdError && err.payload.kind === "transferServiceRestServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type TransferServiceRestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the transfer. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferData](src/models/transfer-data.ts)</code>

**OnError**: <code>[Transfers.GetTransfersIdError](src/resources/transfers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postTransfers(request: Transfers.PostTransfersRequest, options?: RequestOptions): ApiPromise&lt;Transfer, Transfers.PostTransfersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

>Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version.

Starts a request to transfer funds to:
- [Balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts)
- [Transfer instruments](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments)
- [Third-party bank accounts](https://docs.adyen.com/payouts/payout-service/pay-out-to-bank-accounts)
- [Third-party cards](https://docs.adyen.com/payouts/payout-service/pay-out-to-cards)

Adyen sends the outcome of the transfer request through webhooks.

To use this endpoint:
- Your API credential must have the **TransferService Webservice Initiate** [role](https://docs.adyen.com/platforms/manage-access/webservice-roles/?tab=transfers_3).
- The account holder must have the required [capabilities](https://docs.adyen.com/platforms/verification-overview/capabilities).

Reach out to your Adyen contact to set up these permissions.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.postTransfers();
  // TODO: Handle 'response' of type Transfer
} catch (err) {
  if (err instanceof Transfers.PostTransfersError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>wwwAuthenticate?</code> | <code>string</code> | Header for authenticating through SCA |
| <code>body?</code> | <code>[TransferInfo](src/models/transfer-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Transfer](src/models/transfer.ts)</code>

**OnError**: <code>[Transfers.PostTransfersError](src/resources/transfers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postTransfersApprove(request: Transfers.PostTransfersApproveRequest, options?: RequestOptions): ApiPromise&lt;unknown, Transfers.PostTransfersApproveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates the approval of a list of transfers that triggered an additional [review](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers#request-review). Adyen sends the outcome of the approval request through webhooks.

To use this endpoint:
- Your API credential must have the **TransferService Approve** [role](https://docs.adyen.com/platforms/manage-access/webservice-roles/?tab=transfers_3).
- The account holder must have the required [capabilities](https://docs.adyen.com/platforms/verification-overview/capabilities).

Reach out to your Adyen contact to set up these permissions.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.postTransfersApprove();
  // TODO: Handle 'response' of type unknown
} catch (err) {
  if (err instanceof Transfers.PostTransfersApproveError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>wwwAuthenticate?</code> | <code>string</code> | Header for authenticating through SCA |
| <code>body?</code> | <code>[ApproveTransfersRequest](src/models/approve-transfers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>unknown</code>

**OnError**: <code>[Transfers.PostTransfersApproveError](src/resources/transfers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postTransfersCancel(request: Transfers.PostTransfersCancelRequest, options?: RequestOptions): ApiPromise&lt;unknown, Transfers.PostTransfersCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates the cancellation of a list of transfers that triggered an additional [review](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers#request-review). Adyen sends the outcome of the cancel request through webhooks.

To use this endpoint:
- Your API credential must have the **TransferService Approve** [role](https://docs.adyen.com/platforms/manage-access/webservice-roles/?tab=transfers_3).
- The account holder must have the required [capabilities](https://docs.adyen.com/platforms/verification-overview/capabilities).

Reach out to your Adyen contact to set up these permissions.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.postTransfersCancel();
  // TODO: Handle 'response' of type unknown
} catch (err) {
  if (
    err instanceof Transfers.PostTransfersCancelError &&
      err.payload.kind === "transferServiceRestServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type TransferServiceRestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[CancelTransfersRequest](src/models/cancel-transfers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>unknown</code>

**OnError**: <code>[Transfers.PostTransfersCancelError](src/resources/transfers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postTransfersTransferIdReturns(request: Transfers.PostTransfersTransferIdReturnsRequest, options?: RequestOptions): ApiPromise&lt;ReturnTransferResponse, Transfers.PostTransfersTransferIdReturnsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates the return of previously transferred funds without creating a new `transferId`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.postTransfersTransferIdReturns({ transferId });
  // TODO: Handle 'response' of type ReturnTransferResponse
} catch (err) {
  if (
    err instanceof Transfers.PostTransfersTransferIdReturnsError &&
      err.payload.kind === "transferServiceRestServiceError"
  ) {
    // TODO: Handle 'err.payload.body' of type TransferServiceRestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transferId</code> | <code>string</code> | The unique identifier of the transfer to be returned. |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[ReturnTransferRequest](src/models/return-transfer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReturnTransferResponse](src/models/return-transfer-response.ts)</code>

**OnError**: <code>[Transfers.PostTransfersTransferIdReturnsError](src/resources/transfers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](src/resources/transactions.ts)

<details>
<summary><code>getTransactions(request: Transactions.GetTransactionsRequest, options?: RequestOptions): ApiPromise&lt;TransactionSearchResponse, Transactions.GetTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

>Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version.

Returns all the transactions related to a balance account, account holder, or balance platform.

When making this request, you must include at least one of the following:
- `balanceAccountId`
- `accountHolderId`
- `balancePlatform`.

This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next and previous pages when applicable. You can use the links to page through the results.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.getTransactions({ createdSince, createdUntil });
  // TODO: Handle 'response' of type TransactionSearchResponse
} catch (err) {
  if (err instanceof Transactions.GetTransactionsError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>createdSince</code> | <code>Date</code> (date-time) | Only include transactions that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**. |
| <code>createdUntil</code> | <code>Date</code> (date-time) | Only include transactions that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**. |
| <code>balancePlatform?</code> | <code>string</code> | The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).<br><br>Required if you don't provide a `balanceAccountId` or `accountHolderId`. |
| <code>paymentInstrumentId?</code> | <code>string</code> | The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).<br><br>To use this parameter, you must also provide a `balanceAccountId`, `accountHolderId`, or `balancePlatform`.<br><br>The `paymentInstrumentId` must be related to the `balanceAccountId` or `accountHolderId` that you provide. |
| <code>accountHolderId?</code> | <code>string</code> | The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).<br><br>Required if you don't provide a `balanceAccountId` or `balancePlatform`.<br><br>If you provide a `balanceAccountId`, the `accountHolderId` must be related to the `balanceAccountId`. |
| <code>balanceAccountId?</code> | <code>string</code> | The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).<br><br>Required if you don't provide an `accountHolderId` or `balancePlatform`.<br><br>If you provide an `accountHolderId`, the `balanceAccountId` must be related to the `accountHolderId`. |
| <code>cursor?</code> | <code>string</code> | The `cursor` returned in the links of the previous response. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Determines the sort order of the returned transactions. The sort order is based on the creation date of the transaction.<br><br>Possible values:<br><br> - **asc**: Ascending order, from oldest to most recent.<br><br>- **desc**: Descending order, from most recent to oldest.<br><br>Default value: **asc**. |
| <code>limit?</code> | <code>number</code> | The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionSearchResponse](src/models/transaction-search-response.ts)</code>

**OnError**: <code>[Transactions.GetTransactionsError](src/resources/transactions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransactionsId(request: Transactions.GetTransactionsIdRequest, options?: RequestOptions): ApiPromise&lt;Transaction, Transactions.GetTransactionsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

>Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version.

Returns a transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.getTransactionsId({ id });
  // TODO: Handle 'response' of type Transaction
} catch (err) {
  if (err instanceof Transactions.GetTransactionsIdError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the transaction. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Transaction](src/models/transaction.ts)</code>

**OnError**: <code>[Transactions.GetTransactionsIdError](src/resources/transactions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Capital

> Source: [Capital](src/resources/capital.ts)

<details>
<summary><code>getGrants(request: Capital.GetGrantsRequest, options?: RequestOptions): ApiPromise&lt;CapitalGrants, Capital.GetGrantsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of grants with status and outstanding balances.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.capital.getGrants();
  // TODO: Handle 'response' of type CapitalGrants
} catch (err) {
  if (err instanceof Capital.GetGrantsError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>counterpartyAccountHolderId?</code> | <code>string</code> | The counterparty account holder id. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CapitalGrants](src/models/capital-grants.ts)</code>

**OnError**: <code>[Capital.GetGrantsError](src/resources/capital.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGrantsId(request: Capital.GetGrantsIdRequest, options?: RequestOptions): ApiPromise&lt;CapitalGrant, Capital.GetGrantsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a capital account specified in the path.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.capital.getGrantsId({ id });
  // TODO: Handle 'response' of type CapitalGrant
} catch (err) {
  if (err instanceof Capital.GetGrantsIdError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the grant. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CapitalGrant](src/models/capital-grant.ts)</code>

**OnError**: <code>[Capital.GetGrantsIdError](src/resources/capital.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGrants(request: Capital.PostGrantsRequest, options?: RequestOptions): ApiPromise&lt;CapitalGrant, Capital.PostGrantsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests the payout of the selected grant offer.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.capital.postGrants();
  // TODO: Handle 'response' of type CapitalGrant
} catch (err) {
  if (err instanceof Capital.PostGrantsError && err.payload.kind === "restServiceError") {
    // TODO: Handle 'err.payload.body' of type RestServiceError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| <code>body?</code> | <code>[CapitalGrantInfo](src/models/capital-grant-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CapitalGrant](src/models/capital-grant.ts)</code>

**OnError**: <code>[Capital.PostGrantsError](src/resources/capital.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CashOutApi

> Source: [CashOutApi](src/resources/cash-out-api.ts)

<details>
<summary><code>postCashouts(request: CashOutApi.PostCashoutsRequest, options?: RequestOptions): ApiPromise&lt;CashOut, CashOutApi.PostCashoutsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a [cashout](https://docs.adyen.com/platforms/cash-out-instantly) request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cashOutApi.postCashouts({ body });
  // TODO: Handle 'response' of type CashOut
} catch (err) {
  if (err instanceof CashOutApi.PostCashoutsError && err.payload.kind === "defaultErrorResponseEntity") {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CashOutInfo](src/models/cash-out-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CashOut](src/models/cash-out.ts)</code>

**OnError**: <code>[CashOutApi.PostCashoutsError](src/resources/cash-out-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DynamicOffers

> Source: [DynamicOffers](src/resources/dynamic-offers.ts)

<details>
<summary><code>getDynamicOffers(request: DynamicOffers.GetDynamicOffersRequest, options?: RequestOptions): ApiPromise&lt;GetDynamicOffersResponse, DynamicOffers.GetDynamicOffersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all [dynamic offers](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/) available for `accountHolderId` specified as a query parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dynamicOffers.getDynamicOffers({ accountHolderId });
  // TODO: Handle 'response' of type GetDynamicOffersResponse
} catch (err) {
  if (
    err instanceof DynamicOffers.GetDynamicOffersError && err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountHolderId</code> | <code>string</code> | The unique identifier of the account holder that the dynamic offer is for. |
| <code>financingType?</code> | <code>[FinancingType](src/models/financing-type.ts)</code> | The type of financing that the offer is for. If the value is not specified, returns all available types.<br><br>Possible values: **businessFinancing** |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetDynamicOffersResponse](src/models/get-dynamic-offers-response.ts)</code>

**OnError**: <code>[DynamicOffers.GetDynamicOffersError](src/resources/dynamic-offers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDynamicOffersIdCalculate(request: DynamicOffers.PostDynamicOffersIdCalculateRequest, options?: RequestOptions): ApiPromise&lt;CalculatedGrantOffer, DynamicOffers.PostDynamicOffersIdCalculateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculates a preliminary offer for the financing amount that the user selected from a [dynamic offer](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/). The preliminary offer is for informational purposes only and cannot be used to initiate a grant.

Requests to this endpoint are subject to rate limits:

- Live environments: 120 requests per minute.

- Test environments: 120 requests per minute.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dynamicOffers.postDynamicOffersIdCalculate({ id });
  // TODO: Handle 'response' of type CalculatedGrantOffer
} catch (err) {
  if (
    err instanceof DynamicOffers.PostDynamicOffersIdCalculateError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the dynamic offer from which the user selected the financing amount. |
| <code>body?</code> | <code>[CalculateGrantOfferRequest](src/models/calculate-grant-offer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CalculatedGrantOffer](src/models/calculated-grant-offer.ts)</code>

**OnError**: <code>[DynamicOffers.PostDynamicOffersIdCalculateError](src/resources/dynamic-offers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDynamicOffersIdGrantOffer(request: DynamicOffers.PostDynamicOffersIdGrantOfferRequest, options?: RequestOptions): ApiPromise&lt;GrantOffer1, DynamicOffers.PostDynamicOffersIdGrantOfferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a static offer for the financing amount that the user selected from the [dynamic offer](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/).

Requests to this endpoint are subject to rate limits:

- Live environments: 30 requests per minute.

- Test environments: 30 requests per minute.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dynamicOffers.postDynamicOffersIdGrantOffer({ id });
  // TODO: Handle 'response' of type GrantOffer1
} catch (err) {
  if (
    err instanceof DynamicOffers.PostDynamicOffersIdGrantOfferError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the dynamic offer from which the user selected the financing amount. |
| <code>body?</code> | <code>[CreateGrantOfferRequest](src/models/create-grant-offer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GrantOffer1](src/models/grant-offer1.ts)</code>

**OnError**: <code>[DynamicOffers.PostDynamicOffersIdGrantOfferError](src/resources/dynamic-offers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GrantsApi

> Source: [GrantsApi](src/resources/grants-api.ts)

<details>
<summary><code>getGrantsGrantId(request: GrantsApi.GetGrantsGrantIdRequest, options?: RequestOptions): ApiPromise&lt;Grant, GrantsApi.GetGrantsGrantIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the specified grant.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.getGrantsGrantId({ grantId });
  // TODO: Handle 'response' of type Grant
} catch (err) {
  if (err instanceof GrantsApi.GetGrantsGrantIdError && err.payload.kind === "defaultErrorResponseEntity") {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>grantId</code> | <code>string</code> | The unique identifier of the grant reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Grant](src/models/grant.ts)</code>

**OnError**: <code>[GrantsApi.GetGrantsGrantIdError](src/resources/grants-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGrantsGrantIdDisbursements(request: GrantsApi.GetGrantsGrantIdDisbursementsRequest, options?: RequestOptions): ApiPromise&lt;Disbursements, GrantsApi.GetGrantsGrantIdDisbursementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the disbursements of a specified grant.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.getGrantsGrantIdDisbursements({ grantId });
  // TODO: Handle 'response' of type Disbursements
} catch (err) {
  if (
    err instanceof GrantsApi.GetGrantsGrantIdDisbursementsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>grantId</code> | <code>string</code> | The unique identifier of the grant reference. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Disbursements](src/models/disbursements.ts)</code>

**OnError**: <code>[GrantsApi.GetGrantsGrantIdDisbursementsError](src/resources/grants-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGrantsGrantIdDisbursementsDisbursementId(request: GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdRequest, options?: RequestOptions): ApiPromise&lt;Disbursement, GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a disbursement specified in the path.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.getGrantsGrantIdDisbursementsDisbursementId({
    grantId,
    disbursementId,
  });
  // TODO: Handle 'response' of type Disbursement
} catch (err) {
  if (
    err instanceof GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>grantId</code> | <code>string</code> | The unique identifier of the grant reference. |
| <code>disbursementId</code> | <code>string</code> | The unique identifier of the disbursement. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Disbursement](src/models/disbursement.ts)</code>

**OnError**: <code>[GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdError](src/resources/grants-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGrants2(request: GrantsApi.GetGrants2Request, options?: RequestOptions): ApiPromise&lt;Grants, GrantsApi.GetGrants2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the grants of a specific account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.getGrants2({ counterpartyAccountHolderId });
  // TODO: Handle 'response' of type Grants
} catch (err) {
  if (err instanceof GrantsApi.GetGrants2Error && err.payload.kind === "defaultErrorResponseEntity") {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>counterpartyAccountHolderId</code> | <code>string</code> | The unique identifier of the account holder that received the grants. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Grants](src/models/grants.ts)</code>

**OnError**: <code>[GrantsApi.GetGrants2Error](src/resources/grants-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchGrantsGrantIdDisbursementsDisbursementId(request: GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdRequest, options?: RequestOptions): ApiPromise&lt;Disbursement, GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the percentage of your user's net income that is deducted for repaying the grant.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.patchGrantsGrantIdDisbursementsDisbursementId({
    grantId,
    disbursementId,
    body,
  });
  // TODO: Handle 'response' of type Disbursement
} catch (err) {
  if (
    err instanceof GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>grantId</code> | <code>string</code> | The unique identifier of the grant reference. |
| <code>disbursementId</code> | <code>string</code> | The unique identifier of the disbursement. |
| <code>body</code> | <code>[DisbursementInfoUpdate](src/models/disbursement-info-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Disbursement](src/models/disbursement.ts)</code>

**OnError**: <code>[GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdError](src/resources/grants-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGrants2(request: GrantsApi.PostGrants2Request, options?: RequestOptions): ApiPromise&lt;Grant, GrantsApi.PostGrants2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Make a request for a grant on behalf of an account holder.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.postGrants2();
  // TODO: Handle 'response' of type Grant
} catch (err) {
  if (err instanceof GrantsApi.PostGrants2Error && err.payload.kind === "defaultErrorResponseEntity") {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CapitalGrantInfo](src/models/capital-grant-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Grant](src/models/grant.ts)</code>

**OnError**: <code>[GrantsApi.PostGrants2Error](src/resources/grants-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SessionAuthentication

> Source: [SessionAuthentication](src/resources/session-authentication.ts)

<details>
<summary><code>postAuthCertificate(request: SessionAuthentication.PostAuthCertificateRequest, options?: RequestOptions): ApiPromise&lt;CertificateLoadingResponse, SessionAuthentication.PostAuthCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Establishes a secure communication session between the Mobile SDK and the Adyen payments platform, through mutual authentication. The request sends a setup token that identifies the SDK and the device. The response returns a session token that the SDK can use to authenticate responses received from the Adyen payments platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionAuthentication.postAuthCertificate();
  // TODO: Handle 'response' of type CertificateLoadingResponse
} catch (err) {
  if (
    err instanceof SessionAuthentication.PostAuthCertificateError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xApiKey?</code> | <code>string</code> | The API key to authenticate API requests. |
| <code>body?</code> | <code>[CertificateLoadingRequest](src/models/certificate-loading-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CertificateLoadingResponse](src/models/certificate-loading-response.ts)</code>

**OnError**: <code>[SessionAuthentication.PostAuthCertificateError](src/resources/session-authentication.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postSessions2(request: SessionAuthentication.PostSessions2Request, options?: RequestOptions): ApiPromise&lt;AuthenticationSessionResponse, SessionAuthentication.PostSessions2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a session token that is required to integrate [components](https://docs.adyen.com/platforms/components-overview).

The response contains encrypted session data. The front end then uses the session data to make the required server-side calls for the component.

To create a token, you must meet specific requirements. These requirements vary depending on the type of component. For more information, see the documentation for [Onboarding](https://docs.adyen.com/platforms/onboard-users/components) and [Platform Experience](https://docs.adyen.com/platforms/build-user-dashboards) components.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionAuthentication.postSessions2({ body });
  // TODO: Handle 'response' of type AuthenticationSessionResponse
} catch (err) {
  if (
    err instanceof SessionAuthentication.PostSessions2Error &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AuthenticationSessionRequest](src/models/authentication-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthenticationSessionResponse](src/models/authentication-session-response.ts)</code>

**OnError**: <code>[SessionAuthentication.PostSessions2Error](src/resources/session-authentication.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LegalEntities

> Source: [LegalEntities](src/resources/legal-entities.ts)

<details>
<summary><code>getLegalEntitiesId(request: LegalEntities.GetLegalEntitiesIdRequest, options?: RequestOptions): ApiPromise&lt;LegalEntity3, LegalEntities.GetLegalEntitiesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.legalEntities.getLegalEntitiesId({ id });
  // TODO: Handle 'response' of type LegalEntity3
} catch (err) {
  if (err instanceof LegalEntities.GetLegalEntitiesIdError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LegalEntity3](src/models/legal-entity3.ts)</code>

**OnError**: <code>[LegalEntities.GetLegalEntitiesIdError](src/resources/legal-entities.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLegalEntitiesIdBusinessLines(request: LegalEntities.GetLegalEntitiesIdBusinessLinesRequest, options?: RequestOptions): ApiPromise&lt;BusinessLines, LegalEntities.GetLegalEntitiesIdBusinessLinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the business lines owned by a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.legalEntities.getLegalEntitiesIdBusinessLines({ id });
  // TODO: Handle 'response' of type BusinessLines
} catch (err) {
  if (
    err instanceof LegalEntities.GetLegalEntitiesIdBusinessLinesError && err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BusinessLines](src/models/business-lines.ts)</code>

**OnError**: <code>[LegalEntities.GetLegalEntitiesIdBusinessLinesError](src/resources/legal-entities.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchLegalEntitiesId(request: LegalEntities.PatchLegalEntitiesIdRequest, options?: RequestOptions): ApiPromise&lt;LegalEntity3, LegalEntities.PatchLegalEntitiesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a legal entity.

 >To change the legal entity type, include only the new `type` in your request.

If you need to update information for the legal entity, make a separate request. To update the `entityAssociations` array, you need to replace the entire array.For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.legalEntities.patchLegalEntitiesId({ id });
  // TODO: Handle 'response' of type LegalEntity3
} catch (err) {
  if (err instanceof LegalEntities.PatchLegalEntitiesIdError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity. |
| <code>xRequestedVerificationCode?</code> | <code>string</code> | Use the requested verification code 0_0001 to resolve any suberrors associated with the legal entity. Requested verification codes can only be used in your test environment. |
| <code>body?</code> | <code>[LegalEntityInfo](src/models/legal-entity-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LegalEntity3](src/models/legal-entity3.ts)</code>

**OnError**: <code>[LegalEntities.PatchLegalEntitiesIdError](src/resources/legal-entities.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postLegalEntities(request: LegalEntities.PostLegalEntitiesRequest, options?: RequestOptions): ApiPromise&lt;LegalEntity3, LegalEntities.PostLegalEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a legal entity. 

This resource contains information about the user that will be onboarded in your platform. Adyen uses this information to perform verification checks as required by payment industry regulations. Adyen informs you of the verification results through webhooks or API responses.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.legalEntities.postLegalEntities();
  // TODO: Handle 'response' of type LegalEntity3
} catch (err) {
  if (err instanceof LegalEntities.PostLegalEntitiesError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xRequestedVerificationCode?</code> | <code>string</code> | Use a suberror code as your requested verification code. You can include one code at a time in your request header. Requested verification codes can only be used in your test environment. |
| <code>body?</code> | <code>[LegalEntityInfoRequiredType](src/models/legal-entity-info-required-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LegalEntity3](src/models/legal-entity3.ts)</code>

**OnError**: <code>[LegalEntities.PostLegalEntitiesError](src/resources/legal-entities.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postLegalEntitiesIdCheckVerificationErrors(request: LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsRequest, options?: RequestOptions): ApiPromise&lt;VerificationErrors, LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the verification errors for a legal entity and its supporting entities.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.legalEntities.postLegalEntitiesIdCheckVerificationErrors({ id });
  // TODO: Handle 'response' of type VerificationErrors
} catch (err) {
  if (
    err instanceof LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VerificationErrors](src/models/verification-errors.ts)</code>

**OnError**: <code>[LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsError](src/resources/legal-entities.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postLegalEntitiesIdConfirmDataReview(request: LegalEntities.PostLegalEntitiesIdConfirmDataReviewRequest, options?: RequestOptions): ApiPromise&lt;DataReviewConfirmationResponse, LegalEntities.PostLegalEntitiesIdConfirmDataReviewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirms that your user has reviewed the data for the legal entity specified in the path. Call this endpoint to inform Adyen that your user reviewed and verified that the data is up-to-date. The endpoint returns the timestamp of when Adyen received the request.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.legalEntities.postLegalEntitiesIdConfirmDataReview({ id });
  // TODO: Handle 'response' of type DataReviewConfirmationResponse
} catch (err) {
  if (
    err instanceof LegalEntities.PostLegalEntitiesIdConfirmDataReviewError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataReviewConfirmationResponse](src/models/data-review-confirmation-response.ts)</code>

**OnError**: <code>[LegalEntities.PostLegalEntitiesIdConfirmDataReviewError](src/resources/legal-entities.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postLegalEntitiesIdRequestPeriodicReview(request: LegalEntities.PostLegalEntitiesIdRequestPeriodicReviewRequest, options?: RequestOptions): ApiPromise&lt;unknown, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests a periodic data review for the legal entity of the user specified in the path.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.legalEntities.postLegalEntitiesIdRequestPeriodicReview({ id });
  // TODO: Handle 'response' of type unknown
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>unknown</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TransferInstruments

> Source: [TransferInstruments](src/resources/transfer-instruments.ts)

<details>
<summary><code>deleteTransferInstrumentsId(request: TransferInstruments.DeleteTransferInstrumentsIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, TransferInstruments.DeleteTransferInstrumentsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a transfer instrument.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.transferInstruments.deleteTransferInstrumentsId({ id });
} catch (err) {
  if (
    err instanceof TransferInstruments.DeleteTransferInstrumentsIdError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the transfer instrument to be deleted. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[TransferInstruments.DeleteTransferInstrumentsIdError](src/resources/transfer-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransferInstrumentsId(request: TransferInstruments.GetTransferInstrumentsIdRequest, options?: RequestOptions): ApiPromise&lt;TransferInstrument, TransferInstruments.GetTransferInstrumentsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a transfer instrument.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferInstruments.getTransferInstrumentsId({ id });
  // TODO: Handle 'response' of type TransferInstrument
} catch (err) {
  if (
    err instanceof TransferInstruments.GetTransferInstrumentsIdError && err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the transfer instrument. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferInstrument](src/models/transfer-instrument.ts)</code>

**OnError**: <code>[TransferInstruments.GetTransferInstrumentsIdError](src/resources/transfer-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchTransferInstrumentsId(request: TransferInstruments.PatchTransferInstrumentsIdRequest, options?: RequestOptions): ApiPromise&lt;TransferInstrument, TransferInstruments.PatchTransferInstrumentsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a transfer instrument.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferInstruments.patchTransferInstrumentsId({ id });
  // TODO: Handle 'response' of type TransferInstrument
} catch (err) {
  if (
    err instanceof TransferInstruments.PatchTransferInstrumentsIdError && err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the transfer instrument. |
| <code>xRequestedVerificationCode?</code> | <code>string</code> | Use the requested verification code 0_0001 to resolve any suberrors associated with the transfer instrument. Requested verification codes can only be used in your test environment. |
| <code>body?</code> | <code>[TransferInstrumentInfo](src/models/transfer-instrument-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferInstrument](src/models/transfer-instrument.ts)</code>

**OnError**: <code>[TransferInstruments.PatchTransferInstrumentsIdError](src/resources/transfer-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postTransferInstruments(request: TransferInstruments.PostTransferInstrumentsRequest, options?: RequestOptions): ApiPromise&lt;TransferInstrument, TransferInstruments.PostTransferInstrumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a transfer instrument. 

A transfer instrument is a bank account that a legal entity owns. Adyen performs verification checks on the transfer instrument as required by payment industry regulations. We inform you of the verification results through webhooks or API responses.

When the transfer instrument passes the verification checks, you can start sending funds from the balance platform to the transfer instrument (such as payouts).

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferInstruments.postTransferInstruments();
  // TODO: Handle 'response' of type TransferInstrument
} catch (err) {
  if (
    err instanceof TransferInstruments.PostTransferInstrumentsError && err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xRequestedVerificationCode?</code> | <code>string</code> | Use a suberror code as your requested verification code. You can include one code at a time in your request header. Requested verification codes can only be used in your test environment. |
| <code>body?</code> | <code>[TransferInstrumentInfo](src/models/transfer-instrument-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferInstrument](src/models/transfer-instrument.ts)</code>

**OnError**: <code>[TransferInstruments.PostTransferInstrumentsError](src/resources/transfer-instruments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BusinessLinesApi

> Source: [BusinessLinesApi](src/resources/business-lines-api.ts)

<details>
<summary><code>deleteBusinessLinesId(request: BusinessLinesApi.DeleteBusinessLinesIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, BusinessLinesApi.DeleteBusinessLinesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a business line.

 >If you delete a business line linked to a [payment method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it can affect your merchant account's ability to use the [payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings). The business line is removed from all linked merchant accounts.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.businessLinesApi.deleteBusinessLinesId({ id });
} catch (err) {
  if (err instanceof BusinessLinesApi.DeleteBusinessLinesIdError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the business line to be deleted. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[BusinessLinesApi.DeleteBusinessLinesIdError](src/resources/business-lines-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBusinessLinesId(request: BusinessLinesApi.GetBusinessLinesIdRequest, options?: RequestOptions): ApiPromise&lt;BusinessLine, BusinessLinesApi.GetBusinessLinesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the detail of a business line.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.businessLinesApi.getBusinessLinesId({ id });
  // TODO: Handle 'response' of type BusinessLine
} catch (err) {
  if (err instanceof BusinessLinesApi.GetBusinessLinesIdError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the business line. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BusinessLine](src/models/business-line.ts)</code>

**OnError**: <code>[BusinessLinesApi.GetBusinessLinesIdError](src/resources/business-lines-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchBusinessLinesId(request: BusinessLinesApi.PatchBusinessLinesIdRequest, options?: RequestOptions): ApiPromise&lt;BusinessLine, BusinessLinesApi.PatchBusinessLinesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a business line.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.businessLinesApi.patchBusinessLinesId({ id });
  // TODO: Handle 'response' of type BusinessLine
} catch (err) {
  if (err instanceof BusinessLinesApi.PatchBusinessLinesIdError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the business line. |
| <code>body?</code> | <code>[BusinessLineInfoUpdate](src/models/business-line-info-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BusinessLine](src/models/business-line.ts)</code>

**OnError**: <code>[BusinessLinesApi.PatchBusinessLinesIdError](src/resources/business-lines-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postBusinessLines(request: BusinessLinesApi.PostBusinessLinesRequest, options?: RequestOptions): ApiPromise&lt;BusinessLine, BusinessLinesApi.PostBusinessLinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a business line. 

This resource contains information about your user's line of business, including their industry and their source of funds. Adyen uses this information to verify your users as required by payment industry regulations.Adyen informs you of the verification results through webhooks or API responses.

You can create a maximum of 200 business lines per legal entity for payment processing.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.businessLinesApi.postBusinessLines();
  // TODO: Handle 'response' of type BusinessLine
} catch (err) {
  if (err instanceof BusinessLinesApi.PostBusinessLinesError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[BusinessLineInfo](src/models/business-line-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BusinessLine](src/models/business-line.ts)</code>

**OnError**: <code>[BusinessLinesApi.PostBusinessLinesError](src/resources/business-lines-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/resources/documents.ts)

<details>
<summary><code>deleteDocumentsId(request: Documents.DeleteDocumentsIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Documents.DeleteDocumentsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a document.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.documents.deleteDocumentsId({ id });
} catch (err) {
  if (err instanceof Documents.DeleteDocumentsIdError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the document to be deleted. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Documents.DeleteDocumentsIdError](src/resources/documents.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDocumentsId(request: Documents.GetDocumentsIdRequest, options?: RequestOptions): ApiPromise&lt;Document, Documents.GetDocumentsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a document.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.getDocumentsId({ id });
  // TODO: Handle 'response' of type Document
} catch (err) {
  if (err instanceof Documents.GetDocumentsIdError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the document. |
| <code>skipContent?</code> | <code>boolean</code> | Do not load document content while fetching the document. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Document](src/models/document.ts)</code>

**OnError**: <code>[Documents.GetDocumentsIdError](src/resources/documents.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchDocumentsId(request: Documents.PatchDocumentsIdRequest, options?: RequestOptions): ApiPromise&lt;Document, Documents.PatchDocumentsIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a document.

 >You can upload a maximum of 15 pages for photo IDs.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.patchDocumentsId({ id });
  // TODO: Handle 'response' of type Document
} catch (err) {
  if (err instanceof Documents.PatchDocumentsIdError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the document to be updated. |
| <code>xRequestedVerificationCode?</code> | <code>string</code> | Use the requested verification code 0_0001 to resolve any suberrors associated with the document. Requested verification codes can only be used in your test environment. |
| <code>body?</code> | <code>[Document](src/models/document.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Document](src/models/document.ts)</code>

**OnError**: <code>[Documents.PatchDocumentsIdError](src/resources/documents.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDocuments(request: Documents.PostDocumentsRequest, options?: RequestOptions): ApiPromise&lt;Document, Documents.PostDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a document for verification checks.

 Adyen uses the information from the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities) to run automated verification checks. If these checks fail, you will be notified to provide additional documents.

 You should only upload documents when Adyen requests additional information for the legal entity.

 >You can upload a maximum of 15 pages for photo IDs.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.postDocuments();
  // TODO: Handle 'response' of type Document
} catch (err) {
  if (err instanceof Documents.PostDocumentsError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xRequestedVerificationCode?</code> | <code>string</code> | Use a suberror code as your requested verification code. You can include one code at a time in your request header. Requested verification codes can only be used in your test environment. |
| <code>body?</code> | <code>[Document](src/models/document.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Document](src/models/document.ts)</code>

**OnError**: <code>[Documents.PostDocumentsError](src/resources/documents.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TermsOfService

> Source: [TermsOfService](src/resources/terms-of-service.ts)

<details>
<summary><code>getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference(request: TermsOfService.GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRequest, options?: RequestOptions): ApiPromise&lt;GetAcceptedTermsOfServiceDocumentResponse, TermsOfService.GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the accepted Terms of Service document for a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.termsOfService.getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference(
      { id, termsofserviceacceptancereference },
    );
  // TODO: Handle 'response' of type GetAcceptedTermsOfServiceDocumentResponse
} catch (err) {
  if (
    err instanceof
      TermsOfService.GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity. For sole proprietorship, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization. |
| <code>termsofserviceacceptancereference</code> | <code>string</code> | An Adyen-generated reference for the accepted Terms of Service. |
| <code>termsOfServiceDocumentFormat?</code> | <code>string</code> | The format of the Terms of Service document. Possible values: **JSON**, **PDF**, or **TXT** |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetAcceptedTermsOfServiceDocumentResponse](src/models/get-accepted-terms-of-service-document-response.ts)</code>

**OnError**: <code>[TermsOfService.GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError](src/resources/terms-of-service.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLegalEntitiesIdTermsOfServiceAcceptanceInfos(request: TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest, options?: RequestOptions): ApiPromise&lt;GetTermsOfServiceAcceptanceInfosResponse, TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Terms of Service information for a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.termsOfService.getLegalEntitiesIdTermsOfServiceAcceptanceInfos({ id });
  // TODO: Handle 'response' of type GetTermsOfServiceAcceptanceInfosResponse
} catch (err) {
  if (
    err instanceof TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTermsOfServiceAcceptanceInfosResponse](src/models/get-terms-of-service-acceptance-infos-response.ts)</code>

**OnError**: <code>[TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError](src/resources/terms-of-service.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLegalEntitiesIdTermsOfServiceStatus(request: TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusRequest, options?: RequestOptions): ApiPromise&lt;CalculateTermsOfServiceStatusResponse, TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the required types of Terms of Service that need to be accepted by a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.termsOfService.getLegalEntitiesIdTermsOfServiceStatus({ id });
  // TODO: Handle 'response' of type CalculateTermsOfServiceStatusResponse
} catch (err) {
  if (
    err instanceof TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CalculateTermsOfServiceStatusResponse](src/models/calculate-terms-of-service-status-response.ts)</code>

**OnError**: <code>[TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusError](src/resources/terms-of-service.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid(request: TermsOfService.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest, options?: RequestOptions): ApiPromise&lt;AcceptTermsOfServiceResponse, TermsOfService.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts Terms of Service.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.termsOfService.patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid({
    id,
    termsofservicedocumentid,
  });
  // TODO: Handle 'response' of type AcceptTermsOfServiceResponse
} catch (err) {
  if (
    err instanceof TermsOfService.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity.<br><br>For sole proprietorships, this is the individual legal entity ID of the owner.<br><br>For organizations, this is the ID of the organization.<br><br>For legal representatives of individuals, this is the ID of the individual. |
| <code>termsofservicedocumentid</code> | <code>string</code> | The unique identifier of the Terms of Service document. |
| <code>body?</code> | <code>[AcceptTermsOfServiceRequest](src/models/accept-terms-of-service-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AcceptTermsOfServiceResponse](src/models/accept-terms-of-service-response.ts)</code>

**OnError**: <code>[TermsOfService.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError](src/resources/terms-of-service.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postLegalEntitiesIdTermsOfService(request: TermsOfService.PostLegalEntitiesIdTermsOfServiceRequest, options?: RequestOptions): ApiPromise&lt;GetTermsOfServiceDocumentResponse, TermsOfService.PostLegalEntitiesIdTermsOfServiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Terms of Service document for a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.termsOfService.postLegalEntitiesIdTermsOfService({ id });
  // TODO: Handle 'response' of type GetTermsOfServiceDocumentResponse
} catch (err) {
  if (
    err instanceof TermsOfService.PostLegalEntitiesIdTermsOfServiceError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization. |
| <code>body?</code> | <code>[GetTermsOfServiceDocumentRequest](src/models/get-terms-of-service-document-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTermsOfServiceDocumentResponse](src/models/get-terms-of-service-document-response.ts)</code>

**OnError**: <code>[TermsOfService.PostLegalEntitiesIdTermsOfServiceError](src/resources/terms-of-service.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PciQuestionnaires

> Source: [PciQuestionnaires](src/resources/pci-questionnaires.ts)

<details>
<summary><code>getLegalEntitiesIdPciQuestionnaires(request: PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesRequest, options?: RequestOptions): ApiPromise&lt;GetPciQuestionnaireInfosResponse, PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of signed PCI questionnaires.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pciQuestionnaires.getLegalEntitiesIdPciQuestionnaires({ id });
  // TODO: Handle 'response' of type GetPciQuestionnaireInfosResponse
} catch (err) {
  if (
    err instanceof PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity to get PCI questionnaire information. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetPciQuestionnaireInfosResponse](src/models/get-pci-questionnaire-infos-response.ts)</code>

**OnError**: <code>[PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesError](src/resources/pci-questionnaires.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLegalEntitiesIdPciQuestionnairesPciid(request: PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidRequest, options?: RequestOptions): ApiPromise&lt;GetPciQuestionnaireResponse, PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the signed PCI questionnaire.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pciQuestionnaires.getLegalEntitiesIdPciQuestionnairesPciid({ id, pciid });
  // TODO: Handle 'response' of type GetPciQuestionnaireResponse
} catch (err) {
  if (
    err instanceof PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The legal entity ID of the individual who signed the PCI questionnaire. |
| <code>pciid</code> | <code>string</code> | The unique identifier of the signed PCI questionnaire. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetPciQuestionnaireResponse](src/models/get-pci-questionnaire-response.ts)</code>

**OnError**: <code>[PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidError](src/resources/pci-questionnaires.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates(request: PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRequest, options?: RequestOptions): ApiPromise&lt;GeneratePciDescriptionResponse, PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates the required PCI questionnaires based on the user's [salesChannel](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__reqParam_salesChannels).

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pciQuestionnaires.postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates({
    id,
  });
  // TODO: Handle 'response' of type GeneratePciDescriptionResponse
} catch (err) {
  if (
    err instanceof PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity to get PCI questionnaire information. |
| <code>body?</code> | <code>[GeneratePciDescriptionRequest](src/models/generate-pci-description-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeneratePciDescriptionResponse](src/models/generate-pci-description-response.ts)</code>

**OnError**: <code>[PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError](src/resources/pci-questionnaires.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postLegalEntitiesIdPciQuestionnairesSignPciTemplates(request: PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesRequest, options?: RequestOptions): ApiPromise&lt;PciSigningResponse, PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Signs the required PCI questionnaire.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pciQuestionnaires.postLegalEntitiesIdPciQuestionnairesSignPciTemplates({
    id,
  });
  // TODO: Handle 'response' of type PciSigningResponse
} catch (err) {
  if (
    err instanceof PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The legal entity ID of the user that has a contractual relationship with your platform. |
| <code>body?</code> | <code>[PciSigningRequest](src/models/pci-signing-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PciSigningResponse](src/models/pci-signing-response.ts)</code>

**OnError**: <code>[PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError](src/resources/pci-questionnaires.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postLegalEntitiesIdPciQuestionnairesSigningRequired(request: PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSigningRequiredRequest, options?: RequestOptions): ApiPromise&lt;CalculatePciStatusResponse, PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSigningRequiredError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate PCI status of a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pciQuestionnaires.postLegalEntitiesIdPciQuestionnairesSigningRequired({ id });
  // TODO: Handle 'response' of type CalculatePciStatusResponse
} catch (err) {
  if (
    err instanceof PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSigningRequiredError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity to calculate PCI status. |
| <code>body?</code> | <code>[CalculatePciStatusRequest](src/models/calculate-pci-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CalculatePciStatusResponse](src/models/calculate-pci-status-response.ts)</code>

**OnError**: <code>[PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSigningRequiredError](src/resources/pci-questionnaires.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TaxEDeliveryConsent

> Source: [TaxEDeliveryConsent](src/resources/tax-edelivery-consent.ts)

<details>
<summary><code>postLegalEntitiesIdCheckTaxElectronicDeliveryConsent(request: TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentRequest, options?: RequestOptions): ApiPromise&lt;CheckTaxElectronicDeliveryConsentResponse, TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the consent status for electronic delivery of tax forms.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.taxEDeliveryConsent.postLegalEntitiesIdCheckTaxElectronicDeliveryConsent({
    id,
  });
  // TODO: Handle 'response' of type CheckTaxElectronicDeliveryConsentResponse
} catch (err) {
  if (
    err instanceof TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckTaxElectronicDeliveryConsentResponse](src/models/check-tax-electronic-delivery-consent-response.ts)</code>

**OnError**: <code>[TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError](src/resources/tax-edelivery-consent.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postLegalEntitiesIdSetTaxElectronicDeliveryConsent(request: TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentRequest, options?: RequestOptions): ApiPromise&lt;undefined, TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the consent status for electronic delivery of tax forms.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.taxEDeliveryConsent.postLegalEntitiesIdSetTaxElectronicDeliveryConsent({ id });
} catch (err) {
  if (
    err instanceof TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization. |
| <code>body?</code> | <code>[SetTaxElectronicDeliveryConsentRequest](src/models/set-tax-electronic-delivery-consent-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError](src/resources/tax-edelivery-consent.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HostedOnboarding

> Source: [HostedOnboarding](src/resources/hosted-onboarding.ts)

<details>
<summary><code>getThemes(options?: RequestOptions): ApiPromise&lt;OnboardingThemes, HostedOnboarding.GetThemesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of hosted onboarding page themes.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.hostedOnboarding.getThemes();
  // TODO: Handle 'response' of type OnboardingThemes
} catch (err) {
  if (err instanceof HostedOnboarding.GetThemesError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnboardingThemes](src/models/onboarding-themes.ts)</code>

**OnError**: <code>[HostedOnboarding.GetThemesError](src/resources/hosted-onboarding.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getThemesId(request: HostedOnboarding.GetThemesIdRequest, options?: RequestOptions): ApiPromise&lt;OnboardingTheme, HostedOnboarding.GetThemesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the theme identified in the path.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.hostedOnboarding.getThemesId({ id });
  // TODO: Handle 'response' of type OnboardingTheme
} catch (err) {
  if (err instanceof HostedOnboarding.GetThemesIdError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the theme |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnboardingTheme](src/models/onboarding-theme.ts)</code>

**OnError**: <code>[HostedOnboarding.GetThemesIdError](src/resources/hosted-onboarding.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postLegalEntitiesIdOnboardingLinks(request: HostedOnboarding.PostLegalEntitiesIdOnboardingLinksRequest, options?: RequestOptions): ApiPromise&lt;OnboardingLink, HostedOnboarding.PostLegalEntitiesIdOnboardingLinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a link to an Adyen-hosted onboarding page where you need to redirect your user.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.hostedOnboarding.postLegalEntitiesIdOnboardingLinks({ id });
  // TODO: Handle 'response' of type OnboardingLink
} catch (err) {
  if (
    err instanceof HostedOnboarding.PostLegalEntitiesIdOnboardingLinksError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the legal entity |
| <code>body?</code> | <code>[OnboardingLinkInfo](src/models/onboarding-link-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OnboardingLink](src/models/onboarding-link.ts)</code>

**OnError**: <code>[HostedOnboarding.PostLegalEntitiesIdOnboardingLinksError](src/resources/hosted-onboarding.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HostedOnboardingPage

> Source: [HostedOnboardingPage](src/resources/hosted-onboarding-page.ts)

<details>
<summary><code>postGetOnboardingUrl(request: HostedOnboardingPage.PostGetOnboardingUrlRequest, options?: RequestOptions): ApiPromise&lt;GetOnboardingUrlResponse, HostedOnboardingPage.PostGetOnboardingUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/classic-platforms/onboard-users/hosted-onboarding-page).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.hostedOnboardingPage.postGetOnboardingUrl();
  // TODO: Handle 'response' of type GetOnboardingUrlResponse
} catch (err) {
  if (err instanceof HostedOnboardingPage.PostGetOnboardingUrlError && err.payload.kind === "serviceError1") {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetOnboardingUrlRequest](src/models/get-onboarding-url-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOnboardingUrlResponse](src/models/get-onboarding-url-response.ts)</code>

**OnError**: <code>[HostedOnboardingPage.PostGetOnboardingUrlError](src/resources/hosted-onboarding-page.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PciComplianceQuestionnairePage

> Source: [PciComplianceQuestionnairePage](src/resources/pci-compliance-questionnaire-page.ts)

<details>
<summary><code>postGetPciQuestionnaireUrl(request: PciComplianceQuestionnairePage.PostGetPciQuestionnaireUrlRequest, options?: RequestOptions): ApiPromise&lt;GetPciUrlResponse, PciComplianceQuestionnairePage.PostGetPciQuestionnaireUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a link to a PCI compliance questionnaire that you can send to your account holder.
 > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/classic-platforms/platforms-for-partners).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pciComplianceQuestionnairePage.postGetPciQuestionnaireUrl();
  // TODO: Handle 'response' of type GetPciUrlResponse
} catch (err) {
  if (
    err instanceof PciComplianceQuestionnairePage.PostGetPciQuestionnaireUrlError &&
      err.payload.kind === "serviceError1"
  ) {
    // TODO: Handle 'err.payload.body' of type ServiceError1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetPciUrlRequest](src/models/get-pci-url-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetPciUrlResponse](src/models/get-pci-url-response.ts)</code>

**OnError**: <code>[PciComplianceQuestionnairePage.PostGetPciQuestionnaireUrlError](src/resources/pci-compliance-questionnaire-page.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IDealProfiles

> Source: [IDealProfiles](src/resources/ideal-profiles.ts)

<details>
<summary><code>postIdealProfileAuthLink(request: IDealProfiles.PostIdealProfileAuthLinkRequest, options?: RequestOptions): ApiPromise&lt;IdealAuthLinkResponse, IDealProfiles.PostIdealProfileAuthLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Manage an already registered iDEAL profile. Generates a redirection URL to manage the iDEAL profile linked to the account holder from the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.iDealProfiles.postIdealProfileAuthLink({ body });
  // TODO: Handle 'response' of type IdealAuthLinkResponse
} catch (err) {
  if (
    err instanceof IDealProfiles.PostIdealProfileAuthLinkError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IdealAuthLinkRequest](src/models/ideal-auth-link-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IdealAuthLinkResponse](src/models/ideal-auth-link-response.ts)</code>

**OnError**: <code>[IDealProfiles.PostIdealProfileAuthLinkError](src/resources/ideal-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postIdealProfileAuthenticate(request: IDealProfiles.PostIdealProfileAuthenticateRequest, options?: RequestOptions): ApiPromise&lt;IdealAuthenticateResponse, IDealProfiles.PostIdealProfileAuthenticateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates an redirection URL to finish the authentication flow when requested by iDEAL. Before calling this endpoint, make sure that your user has completed multi-factor authentication.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.iDealProfiles.postIdealProfileAuthenticate({ body });
  // TODO: Handle 'response' of type IdealAuthenticateResponse
} catch (err) {
  if (
    err instanceof IDealProfiles.PostIdealProfileAuthenticateError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IdealAuthenticateRequest](src/models/ideal-authenticate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IdealAuthenticateResponse](src/models/ideal-authenticate-response.ts)</code>

**OnError**: <code>[IDealProfiles.PostIdealProfileAuthenticateError](src/resources/ideal-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postIdealProfileRegister(request: IDealProfiles.PostIdealProfileRegisterRequest, options?: RequestOptions): ApiPromise&lt;ProfileRegistrationResponse, IDealProfiles.PostIdealProfileRegisterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register a new iDEAL profile. The profile is linked to the account holder and payment instruments included in the request. The user must be redirected to the URL in the response to finish their IDEAL profile registration.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.iDealProfiles.postIdealProfileRegister({ body });
  // TODO: Handle 'response' of type ProfileRegistrationResponse
} catch (err) {
  if (
    err instanceof IDealProfiles.PostIdealProfileRegisterError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProfileRegistrationRequest](src/models/profile-registration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProfileRegistrationResponse](src/models/profile-registration-response.ts)</code>

**OnError**: <code>[IDealProfiles.PostIdealProfileRegisterError](src/resources/ideal-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AccountVerification

> Source: [AccountVerification](src/resources/account-verification.ts)

<details>
<summary><code>getAccountVerificationReportsCode(request: AccountVerification.GetAccountVerificationReportsCodeRequest, options?: RequestOptions): ApiPromise&lt;AccountVerificationReportResponse, AccountVerification.GetAccountVerificationReportsCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the account verification report using a unique code from a successful open banking connection. This report provides identity verification and bank account details.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountVerification.getAccountVerificationReportsCode({ code });
  // TODO: Handle 'response' of type AccountVerificationReportResponse
} catch (err) {
  if (
    err instanceof AccountVerification.GetAccountVerificationReportsCodeError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>string</code> | The unique code you receive after a successful open banking flow that is included as a query parameter in the `redirectUrl` callback. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountVerificationReportResponse](src/models/account-verification-report-response.ts)</code>

**OnError**: <code>[AccountVerification.GetAccountVerificationReportsCodeError](src/resources/account-verification.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postAccountVerificationRoutes(request: AccountVerification.PostAccountVerificationRoutesRequest, options?: RequestOptions): ApiPromise&lt;AccountVerificationRoutesResponse, AccountVerification.PostAccountVerificationRoutesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a list of routes for verifying bank accounts of third-party individuals. Successful connections generate a unique code used for requesting bank reports and verifying identity.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountVerification.postAccountVerificationRoutes({ body });
  // TODO: Handle 'response' of type AccountVerificationRoutesResponse
} catch (err) {
  if (
    err instanceof AccountVerification.PostAccountVerificationRoutesError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AccountVerificationRoutesRequest](src/models/account-verification-routes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountVerificationRoutesResponse](src/models/account-verification-routes-response.ts)</code>

**OnError**: <code>[AccountVerification.PostAccountVerificationRoutesError](src/resources/account-verification.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DisputeAttachments

> Source: [DisputeAttachments](src/resources/dispute-attachments.ts)

<details>
<summary><code>deleteDisputesDisputeIdAttachmentsAttachmentId(request: DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the attachment from the raised dispute. Adyen may keep this file for compliance purposes.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.disputeAttachments.deleteDisputesDisputeIdAttachmentsAttachmentId({ disputeId, attachmentId });
} catch (err) {
  if (
    err instanceof DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>disputeId</code> | <code>string</code> | The unique identifier of the raised dispute. |
| <code>attachmentId</code> | <code>string</code> | The unique identifier of the attachment. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[DisputeAttachments.DeleteDisputesDisputeIdAttachmentsAttachmentIdError](src/resources/dispute-attachments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDisputesDisputeIdAttachments(request: DisputeAttachments.GetDisputesDisputeIdAttachmentsRequest, options?: RequestOptions): ApiPromise&lt;DisputeAttachment[], DisputeAttachments.GetDisputesDisputeIdAttachmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of attachments associated with a dispute ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputeAttachments.getDisputesDisputeIdAttachments({ disputeId });
  // TODO: Handle 'response' of type DisputeAttachment[]
} catch (err) {
  if (
    err instanceof DisputeAttachments.GetDisputesDisputeIdAttachmentsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>disputeId</code> | <code>string</code> | The unique identifier of the raised dispute. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputeAttachment](src/models/dispute-attachment.ts)[]</code>

**OnError**: <code>[DisputeAttachments.GetDisputesDisputeIdAttachmentsError](src/resources/dispute-attachments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDisputesDisputeIdAttachmentsAttachmentId(request: DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdRequest, options?: RequestOptions): ApiPromise&lt;DisputeAttachment, DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for a single attachment, providing the specific dispute ID and attachment ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputeAttachments.getDisputesDisputeIdAttachmentsAttachmentId({
    disputeId,
    attachmentId,
  });
  // TODO: Handle 'response' of type DisputeAttachment
} catch (err) {
  if (
    err instanceof DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>disputeId</code> | <code>string</code> | The unique identifier of the raised dispute. |
| <code>attachmentId</code> | <code>string</code> | The unique identifier of the attachment. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputeAttachment](src/models/dispute-attachment.ts)</code>

**OnError**: <code>[DisputeAttachments.GetDisputesDisputeIdAttachmentsAttachmentIdError](src/resources/dispute-attachments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDisputesDisputeIdAttachments(request: DisputeAttachments.PostDisputesDisputeIdAttachmentsRequest, options?: RequestOptions): ApiPromise&lt;AttachDocumentResponse, DisputeAttachments.PostDisputesDisputeIdAttachmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add supporting information as an attachment for the raised dispute. Upload receipts, communication, or any other documentation to support the dispute.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputeAttachments.postDisputesDisputeIdAttachments({ disputeId, body });
  // TODO: Handle 'response' of type AttachDocumentResponse
} catch (err) {
  if (
    err instanceof DisputeAttachments.PostDisputesDisputeIdAttachmentsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>disputeId</code> | <code>string</code> | The unique identifier of the raised dispute. |
| <code>body</code> | <code>[DisputeAttachment](src/models/dispute-attachment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachDocumentResponse](src/models/attach-document-response.ts)</code>

**OnError**: <code>[DisputeAttachments.PostDisputesDisputeIdAttachmentsError](src/resources/dispute-attachments.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RaiseDisputes

> Source: [RaiseDisputes](src/resources/raise-disputes.ts)

<details>
<summary><code>getDisputes(request: RaiseDisputes.GetDisputesRequest, options?: RequestOptions): ApiPromise&lt;DisputeResponse[][], RaiseDisputes.GetDisputesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of raised disputes that match the query parameters.

This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.raiseDisputes.getDisputes();
  // TODO: Handle 'response' of type DisputeResponse[][]
} catch (err) {
  if (err instanceof RaiseDisputes.GetDisputesError && err.payload.kind === "defaultErrorResponseEntity") {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status?</code> | <code>string</code> | The current status of the dispute.<br><br>Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**. |
| <code>paymentInstrument?</code> | <code>string</code> | The unique identifier of the payment instrument. |
| <code>createdSince?</code> | <code>string</code> | Only include disputes that have been created on or after this point in time. The value must be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601\)  format. For example, 2021-05-30T15:07:40Z. |
| <code>createdUntil?</code> | <code>string</code> | Only include disputes that have been created on or before this point in time. The value must be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601\) format. For example, **2021-05-30T15:07:40Z**. |
| <code>offset?</code> | <code>string</code> | The number of items that you want to skip. |
| <code>limit?</code> | <code>string</code> | The number of items returned per page, maximum of 500 items. By default, the response returns 100 items per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputeResponse](src/models/dispute-response.ts)[][]</code>

**OnError**: <code>[RaiseDisputes.GetDisputesError](src/resources/raise-disputes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDisputesId(request: RaiseDisputes.GetDisputesIdRequest, options?: RequestOptions): ApiPromise&lt;DisputeResponse, RaiseDisputes.GetDisputesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a raised dispute by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.raiseDisputes.getDisputesId({ id });
  // TODO: Handle 'response' of type DisputeResponse
} catch (err) {
  if (err instanceof RaiseDisputes.GetDisputesIdError && err.payload.kind === "defaultErrorResponseEntity") {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the raised dispute. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputeResponse](src/models/dispute-response.ts)</code>

**OnError**: <code>[RaiseDisputes.GetDisputesIdError](src/resources/raise-disputes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchDisputesId(request: RaiseDisputes.PatchDisputesIdRequest, options?: RequestOptions): ApiPromise&lt;DisputeResponse, RaiseDisputes.PatchDisputesIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update information related to a raised dispute, or change a dispute's status from **draft** to **submitted** or **closed**.

**Note:** Changing the status of a dispute to **submitted** or **closed** is a final action. You cannot make updates to a **submitted** or **closed** dispute. Make sure to upload all supporting attachments using the `POST /disputes/{id}/attachments` endpoint before you submit a dispute. When you update a dispute to **submitted**, Adyen sends the raised dispute to the card scheme for review and acquirer defense. When you update a raised dispute to **closed**, Adyen closes the dispute, and the dispute is no longer eligible for review by the card scheme.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.raiseDisputes.patchDisputesId({ id });
  // TODO: Handle 'response' of type DisputeResponse
} catch (err) {
  if (
    err instanceof RaiseDisputes.PatchDisputesIdError && err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the raised dispute. |
| <code>body?</code> | <code>[PatchableDisputeRequest](src/models/patchable-dispute-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputeResponse](src/models/dispute-response.ts)</code>

**OnError**: <code>[RaiseDisputes.PatchDisputesIdError](src/resources/raise-disputes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDisputes(request: RaiseDisputes.PostDisputesRequest, options?: RequestOptions): ApiPromise&lt;DisputeResponse, RaiseDisputes.PostDisputesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Raise a dispute for an underlying transaction, providing a dispute type and the amount you want to dispute.

Raising a dispute returns a dispute ID, which you can use to update details about the dispute, provide supporting documentation, close the dispute, or submit the dispute for a chargeback. You can also use the dispute ID to view the status of the dispute.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.raiseDisputes.postDisputes({ body });
  // TODO: Handle 'response' of type DisputeResponse
} catch (err) {
  if (err instanceof RaiseDisputes.PostDisputesError && err.payload.kind === "defaultErrorResponseEntity") {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DisputeRequest](src/models/dispute-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputeResponse](src/models/dispute-response.ts)</code>

**OnError**: <code>[RaiseDisputes.PostDisputesError](src/resources/raise-disputes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentsApp

> Source: [PaymentsApp](src/resources/payments-app.ts)

<details>
<summary><code>getMerchantsMerchantIdPaymentsApps(request: PaymentsApp.GetMerchantsMerchantIdPaymentsAppsRequest, options?: RequestOptions): ApiPromise&lt;PaymentsAppResponse, PaymentsApp.GetMerchantsMerchantIdPaymentsAppsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of Payments App instances for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Adyen Payments App role


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentsApp.getMerchantsMerchantIdPaymentsApps({ merchantId });
  // TODO: Handle 'response' of type PaymentsAppResponse
} catch (err) {
  if (
    err instanceof PaymentsApp.GetMerchantsMerchantIdPaymentsAppsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>statuses?</code> | <code>string</code> | The status of the Payments App. Comma-separated list of one or more values. If no value is provided, the list returns all statuses. <br><br>Possible values:<br><br>* **BOARDING**<br><br> * **BOARDED**<br><br> * **REVOKED** |
| <code>limit?</code> | <code>number</code> | The number of items to return. |
| <code>offset?</code> | <code>number</code> | The number of items to skip. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentsAppResponse](src/models/payments-app-response.ts)</code>

**OnError**: <code>[PaymentsApp.GetMerchantsMerchantIdPaymentsAppsError](src/resources/payments-app.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantsMerchantIdStoresStoreIdPaymentsApps(request: PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsRequest, options?: RequestOptions): ApiPromise&lt;PaymentsAppResponse, PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of Payments App instances for the store identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Adyen Payments App role


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentsApp.getMerchantsMerchantIdStoresStoreIdPaymentsApps({
    merchantId,
    storeId,
  });
  // TODO: Handle 'response' of type PaymentsAppResponse
} catch (err) {
  if (
    err instanceof PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>storeId</code> | <code>string</code> | The unique identifier of the store. |
| <code>statuses?</code> | <code>string</code> | The status of the Payments App. Comma-separated list of one or more values. If no value is provided, the list returns all statuses. <br><br>Possible values:<br><br>* **BOARDING**<br><br> * **BOARDED**<br><br> * **REVOKED** |
| <code>limit?</code> | <code>number</code> | The number of items to return. |
| <code>offset?</code> | <code>number</code> | The number of items to skip. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentsAppResponse](src/models/payments-app-response.ts)</code>

**OnError**: <code>[PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError](src/resources/payments-app.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdGeneratePaymentsAppBoardingToken(request: PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenRequest, options?: RequestOptions): ApiPromise&lt;BoardingTokenResponse, PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a boarding token used to authenticate the installation of a Payments App instance on an Android device. The boarding token is created for the `boardingRequestToken` of the Payments App for the merchant account identified in the path. 

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Adyen Payments App role


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentsApp.postMerchantsMerchantIdGeneratePaymentsAppBoardingToken({
    merchantId,
    body,
  });
  // TODO: Handle 'response' of type BoardingTokenResponse
} catch (err) {
  if (
    err instanceof PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>body</code> | <code>[BoardingTokenRequest](src/models/boarding-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BoardingTokenResponse](src/models/boarding-token-response.ts)</code>

**OnError**: <code>[PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError](src/resources/payments-app.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdPaymentsAppsInstallationIdRevoke(request: PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRequest, options?: RequestOptions): ApiPromise&lt;unknown, PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes the authentication of the Payments App instance for the `installationId` and merchant account identified in the path. This call revokes the authentication of the Payments App instance with the `installationId` identified in the path for both merchant accounts and stores.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Adyen Payments App role


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentsApp.postMerchantsMerchantIdPaymentsAppsInstallationIdRevoke({
    merchantId,
    installationId,
  });
  // TODO: Handle 'response' of type unknown
} catch (err) {
  if (
    err instanceof PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>installationId</code> | <code>string</code> | The unique identifier of the Payments App instance on a device. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>unknown</code>

**OnError**: <code>[PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError](src/resources/payments-app.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken(request: PaymentsApp.PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenRequest, options?: RequestOptions): ApiPromise&lt;BoardingTokenResponse, PaymentsApp.PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a boarding token used to authenticate the installation of a Payments App instance on an Android device. The boarding token is created for the `boardingRequestToken` of the Payments App for the store identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Adyen Payments App role


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.paymentsApp.postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken({
      merchantId,
      storeId,
      body,
    });
  // TODO: Handle 'response' of type BoardingTokenResponse
} catch (err) {
  if (
    err instanceof PaymentsApp.PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError &&
      err.payload.kind === "defaultErrorResponseEntity"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultErrorResponseEntity
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The unique identifier of the merchant account. |
| <code>storeId</code> | <code>string</code> | The unique identifier of the store. |
| <code>body</code> | <code>[BoardingTokenRequest](src/models/boarding-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BoardingTokenResponse](src/models/boarding-token-response.ts)</code>

**OnError**: <code>[PaymentsApp.PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError](src/resources/payments-app.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

