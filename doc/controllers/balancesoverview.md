# Balancesoverview

```ts
const balancesoverviewApi = new BalancesoverviewApi(client);
```

## Class Name

`BalancesoverviewApi`

## Methods

* [Get-Balance Overview-Companies-Company Account Code-Balances](../../doc/controllers/balancesoverview.md#get-balance-overview-companies-company-account-code-balances)
* [Get-Balance Overview-Merchants-Merchant Account Code-Balances](../../doc/controllers/balancesoverview.md#get-balance-overview-merchants-merchant-account-code-balances)


# Get-Balance Overview-Companies-Company Account Code-Balances

Returns an array with details about the balances available for all merchant accounts under your company account. For each merchant account, the response returns the following:

* **Available funds**: The funds in the merchant account that have been settled and are available for use.

* **Pending balance**: The funds in the merchant account that have not been settled yet.

* **Next payout amount**: The amount that will be settled to your bank account with the next payout.

* **Reserve**: The available amount to cover refunds, payouts, chargebacks, and other operational expenses that cannot be covered by your in-process funds.

* **Deposit**: The amount withheld by Adyen to cover potential losses and liabilities due to payment processing.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalanceOverviewCompaniesCompanyAccountCodeBalances(
  companyAccountCode: string,
  currency: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CompanyBalances>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyAccountCode` | `string` | Template, Required | The unique identifier of your company account. |
| `currency` | `string` | Query, Required | The currency for which you want a balances overview.<br><br>**Constraints**: *Minimum Length*: `1` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CompanyBalances`](../../doc/models/company-balances.md).

## Example Usage

```ts
const companyAccountCode = 'companyAccountCode6';

const currency = 'currency0';

try {
  const response = await balancesOverviewApi.getBalanceOverviewCompaniesCompanyAccountCodeBalances(
    companyAccountCode,
    currency
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
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |


# Get-Balance Overview-Merchants-Merchant Account Code-Balances

Returns an overview of the different balances available for the merchant account. This includes details about the following:

* **Available funds**: The funds in the merchant account that have been settled and are available for use.

* **Pending balance**: The funds in the merchant account that have not been settled yet.

* **Next payout amount**: The amount that will be settled to your bank account with the next payout.

* **Reserve**: The available amount to cover refunds, payouts, chargebacks, and other operational expenses that cannot be covered by your in-process funds.

* **Deposit**: The amount withheld by Adyen to cover potential losses and liabilities due to payment processing.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBalanceOverviewMerchantsMerchantAccountCodeBalances(
  merchantAccountCode: string,
  currency: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MerchantBalance>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccountCode` | `string` | Template, Required | The unique identifier of your merchant account. |
| `currency` | `string` | Query, Required | The currency for which you want a balances overview.<br><br>**Constraints**: *Minimum Length*: `1` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`MerchantBalance`](../../doc/models/merchant-balance.md).

## Example Usage

```ts
const merchantAccountCode = 'merchantAccountCode8';

const currency = 'currency0';

try {
  const response = await balancesOverviewApi.getBalanceOverviewMerchantsMerchantAccountCodeBalances(
    merchantAccountCode,
    currency
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
| 403 | Forbidden - insufficient permissions to process the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Content - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

