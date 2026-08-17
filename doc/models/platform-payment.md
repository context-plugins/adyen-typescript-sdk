
# Platform Payment

## Structure

`PlatformPayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modificationMerchantReference` | `string \| undefined` | Optional | The capture's merchant reference included in the transfer. |
| `modificationPspReference` | `string \| undefined` | Optional | The capture reference included in the transfer. |
| `paymentMerchantReference` | `string \| undefined` | Optional | The payment's merchant reference included in the transfer. |
| `platformPaymentType` | [`PlatformPaymentTypeEnum \| undefined`](../../doc/models/platform-payment-type-enum.md) | Optional | Specifies the nature of the transfer. This parameter helps categorize transfers so you can reconcile transactions at a later time, using the Balance Platform Accounting Report for [marketplaces](https://docs.adyen.com/marketplaces/reports-and-fees/balance-platform-accounting-report/) or [platforms](https://docs.adyen.com/platforms/reports-and-fees/balance-platform-accounting-report/).<br><br>Possible values:<br><br>* **AcquiringFees**: The acquiring fee (the aggregated amount of interchange and scheme fee) incurred on a transaction.<br><br>* **AdyenCommission**: The transaction fee due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/guides/payments-training-guide/get-the-best-from-your-card-processing).<br><br>* **AdyenFees**: All transaction fees due to Adyen. This is the aggregated amount of Adyen's commission and markup.<br><br>* **AdyenMarkup**: The transaction fee due to Adyen under [Interchange++ pricing](https://www.adyen.com/pricing).<br><br>* **BalanceAccount**: The amount booked to your user after the deduction of the relevant fees.<br><br>* **Commission**: Your platform's or marketplace's commission on a transaction.<br><br>* **DCCPlatformCommission**: **deprecated** The Dynamic Currency Conversion (DCC) fee on a transaction.<br><br>* **DCCMarkup**: The Dynamic Currency Conversion (DCC) fee on a transaction.<br><br>* **Interchange**: The interchange fee (fee paid to the issuer) incurred on a transaction.<br><br>* **PaymentFee**: The aggregated amount of all transaction fees.<br><br>* **Remainder**: The leftover amount after currency conversion.<br><br>* **SchemeFee**: The scheme fee incurred on a transaction.<br><br>* **Surcharge**: The surcharge paid by the customer on a transaction.<br><br>* **Tip**: The tip paid by the customer.<br><br>* **TopUp**: An incoming transfer to top up your user's balance account.<br><br>* **VAT**: The value-added tax charged on the payment. |
| `pspPaymentReference` | `string \| undefined` | Optional | The payment reference included in the transfer. |
| `type` | [`Type63Enum \| undefined`](../../doc/models/type-63-enum.md) | Optional | **platformPayment**<br><br>**Default**: `Type63Enum.PlatformPayment` |

## Example

```ts
import { PlatformPayment, PlatformPaymentTypeEnum, Type63Enum } from 'adyen';

const platformPayment: PlatformPayment = {
  modificationMerchantReference: 'modificationMerchantReference8',
  modificationPspReference: 'modificationPspReference0',
  paymentMerchantReference: 'paymentMerchantReference2',
  platformPaymentType: PlatformPaymentTypeEnum.Interchange,
  pspPaymentReference: 'pspPaymentReference8',
  type: Type63Enum.PlatformPayment,
};
```

