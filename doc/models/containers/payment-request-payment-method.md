
# Payment Request Payment Method

## Class Name

`PaymentRequestPaymentMethod`

## Cases

| Type |
|  --- |
| [`ACHDirectDebit`](../../../doc/models/ach-direct-debit.md) |
| [`Affirm`](../../../doc/models/affirm.md) |
| [`Afterpay`](../../../doc/models/afterpay.md) |
| [`Alma`](../../../doc/models/alma.md) |
| [`AmazonPay`](../../../doc/models/amazon-pay.md) |
| [`ANCV`](../../../doc/models/ancv.md) |
| [`AndroidPay`](../../../doc/models/android-pay.md) |
| [`ApplePayDetails`](../../../doc/models/apple-pay-details.md) |
| [`AuPay`](../../../doc/models/au-pay.md) |
| [`BACSDirectDebit`](../../../doc/models/bacs-direct-debit.md) |
| [`BillDesk`](../../../doc/models/bill-desk.md) |
| [`BLIK`](../../../doc/models/blik.md) |
| [`CardDetails`](../../../doc/models/card-details.md) |
| [`StoredPaymentMethod`](../../../doc/models/stored-payment-method.md) |
| [`Cellulant`](../../../doc/models/cellulant.md) |
| [`DBarai`](../../../doc/models/d-barai.md) |
| [`DirectDebitAu`](../../../doc/models/direct-debit-au.md) |
| [`Doku`](../../../doc/models/doku.md) |
| [`Dragonpay`](../../../doc/models/dragonpay.md) |
| [`EBankingFinland`](../../../doc/models/e-banking-finland.md) |
| [`Voucher`](../../../doc/models/voucher.md) |
| [`EFTDirectDebit`](../../../doc/models/eft-direct-debit.md) |
| [`DetailsOfTokensThatAreNotStoredWithAdyen`](../../../doc/models/details-of-tokens-that-are-not-stored-with-adyen.md) |
| [`Fastlane`](../../../doc/models/fastlane.md) |
| [`StoredPaymentMethod2`](../../../doc/models/stored-payment-method-2.md) |
| [`GooglePayDetails`](../../../doc/models/google-pay-details.md) |
| [`IdealDetails`](../../../doc/models/ideal-details.md) |
| [`Klarna`](../../../doc/models/klarna.md) |
| [`KlarnaNetwork`](../../../doc/models/klarna-network.md) |
| [`Masterpass`](../../../doc/models/masterpass.md) |
| [`MBWay`](../../../doc/models/mb-way.md) |
| [`MobilePay`](../../../doc/models/mobile-pay.md) |
| [`MOLPay`](../../../doc/models/mol-pay.md) |
| [`OpenInvoice`](../../../doc/models/open-invoice.md) |
| [`PayByBankAISDirectDebit`](../../../doc/models/pay-by-bank-ais-direct-debit.md) |
| [`PayByBank`](../../../doc/models/pay-by-bank.md) |
| [`PayPal`](../../../doc/models/pay-pal.md) |
| [`PayPay`](../../../doc/models/pay-pay.md) |
| [`PayTo`](../../../doc/models/pay-to.md) |
| [`PayU`](../../../doc/models/pay-u.md) |
| [`PayWithGoogleDetails`](../../../doc/models/pay-with-google-details.md) |
| [`PaymentDetails`](../../../doc/models/payment-details.md) |
| [`StoredPaymentMethod4`](../../../doc/models/stored-payment-method-4.md) |
| [`StoredPaymentMethod5`](../../../doc/models/stored-payment-method-5.md) |
| [`PSELatam`](../../../doc/models/pse-latam.md) |
| [`RakutenPay`](../../../doc/models/rakuten-pay.md) |
| [`Ratepay`](../../../doc/models/ratepay.md) |
| [`Riverty`](../../../doc/models/riverty.md) |
| [`SamsungPay`](../../../doc/models/samsung-pay.md) |
| [`SEPADirectDebit`](../../../doc/models/sepa-direct-debit.md) |
| [`StoredPaymentMethod6`](../../../doc/models/stored-payment-method-6.md) |
| [`Twint`](../../../doc/models/twint.md) |
| [`UPICollect`](../../../doc/models/upi-collect.md) |
| [`UPIIntent`](../../../doc/models/upi-intent.md) |
| [`UPIQR`](../../../doc/models/upiqr.md) |
| [`Vipps`](../../../doc/models/vipps.md) |
| [`VisaCheckout`](../../../doc/models/visa-checkout.md) |
| [`WeChatPay`](../../../doc/models/we-chat-pay.md) |
| [`WeChatPayMiniProgram`](../../../doc/models/we-chat-pay-mini-program.md) |
| [`Zip`](../../../doc/models/zip.md) |

## ACHDirectDebit

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: TypeEnum.Ach,
};
```

## Affirm

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type1Enum.Affirm,
};
```

## Afterpay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type2Enum.AfterpayDefault,
};
```

## Alma

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
};
```

## AmazonPay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type4Enum.Amazonpay,
};
```

## ANCV

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
};
```

## AndroidPay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type6Enum.Androidpay,
};
```

## ApplePayDetails

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  applePayToken: 'applePayToken0',
  type: Type7Enum.Applepay,
};
```

## AuPay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type9Enum.Aupay,
};
```

## BACSDirectDebit

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type10Enum.DirectdebitGB,
};
```

## BillDesk

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  issuer: 'issuer0',
  type: Type12Enum.BilldeskOnline,
};
```

## BLIK

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
};
```

## CardDetails

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type14Enum.Scheme,
};
```

## StoredPaymentMethod

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type16Enum.Cashapp,
};
```

## Cellulant

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type17Enum.Cellulant,
};
```

## DBarai

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type20Enum.Dbarai,
};
```

## DirectDebitAu

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  holderName: 'holderName0',
  type: Type22Enum.DirectdebitAU,
};
```

## Doku

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  firstName: 'firstName6',
  lastName: 'lastName2',
  shopperEmail: 'shopperEmail8',
  type: Type23Enum.DokuBniVa,
};
```

## Dragonpay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  issuer: 'issuer2',
  type: Type28Enum.DragonpayOtcNonBanking,
};
```

## EBankingFinland

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: 'ebanking_FI',
};
```

## Voucher

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  firstName: 'firstName6',
  lastName: 'lastName2',
  shopperEmail: 'shopperEmail2',
  telephoneNumber: 'telephoneNumber0',
  type: Type29Enum.EcontextStores,
};
```

## EFTDirectDebit

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type30Enum.EftDirectdebitCA,
};
```

## DetailsOfTokensThatAreNotStoredWithAdyen

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  storedPaymentMethodId: 'storedPaymentMethodId8',
  subtype: 'hilton',
  type: 'externalToken',
};
```

## Fastlane

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  fastlaneData: 'fastlaneData2',
  type: 'fastlane',
};
```

## StoredPaymentMethod2

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  issuer: 'issuer4',
  type: Type31Enum.Eps,
};
```

## GooglePayDetails

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  googlePayToken: 'googlePayToken8',
  type: Type24Enum.Googlepay,
};
```

## IdealDetails

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type25Enum.Ideal,
};
```

## Klarna

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type34Enum.Klarna,
};
```

## KlarnaNetwork

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: 'klarna_network',
};
```

## Masterpass

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  masterpassTransactionId: 'masterpassTransactionId0',
  type: Type35Enum.Masterpass,
};
```

## MBWay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  shopperEmail: 'shopperEmail4',
  telephoneNumber: 'telephoneNumber4',
  type: Type36Enum.Mbway,
};
```

## MobilePay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type37Enum.Mobilepay,
};
```

## MOLPay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  issuer: 'issuer0',
  type: Type38Enum.MolpayEbankingFpxMY,
};
```

## OpenInvoice

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type39Enum.Openinvoice,
};
```

## PayByBankAISDirectDebit

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: 'paybybank_AIS_DD',
};
```

## PayByBank

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: 'paybybank',
};
```

## PayPal

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: 'paypal',
};
```

## PayPay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type40Enum.Paypay,
};
```

## PayTo

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type41Enum.Payto,
};
```

## PayU

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: 'payu_IN_upi',
};
```

## PayWithGoogleDetails

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  googlePayToken: 'googlePayToken0',
  type: Type26Enum.Paywithgoogle,
};
```

## PaymentDetails

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
};
```

## StoredPaymentMethod4

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
};
```

## StoredPaymentMethod5

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type45Enum.PaybybankPix,
};
```

## PSELatam

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  bank: 'bank4',
  clientType: 'clientType4',
  identification: 'identification4',
  identificationType: 'identificationType8',
};
```

## RakutenPay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type47Enum.Rakutenpay,
};
```

## Ratepay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type48Enum.Ratepay,
};
```

## Riverty

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type49Enum.Riverty,
};
```

## SamsungPay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  samsungPayToken: 'samsungPayToken6',
  type: Type50Enum.Samsungpay,
};
```

## SEPADirectDebit

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  iban: 'iban4',
  ownerName: 'ownerName4',
  type: Type51Enum.Sepadirectdebit,
};
```

## StoredPaymentMethod6

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
};
```

## Twint

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
};
```

## UPICollect

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: 'upi_collect',
};
```

## UPIIntent

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: 'upi_intent',
};
```

## UPIQR

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: 'upi_qr',
};
```

## Vipps

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  telephoneNumber: 'telephoneNumber0',
  type: Type54Enum.Vipps,
};
```

## VisaCheckout

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  visaCheckoutCallId: 'visaCheckoutCallId0',
  type: Type55Enum.Visacheckout,
};
```

## WeChatPay

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type56Enum.Wechatpay,
};
```

## WeChatPayMiniProgram

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type57Enum.WechatpayMiniProgram,
};
```

## Zip

### Initialization Code

#### Example

```ts
const value: PaymentRequestPaymentMethod = {
  type: Type58Enum.Zip,
};
```

