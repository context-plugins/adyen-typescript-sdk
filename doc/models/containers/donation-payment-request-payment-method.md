
# Donation Payment Request Payment Method

## Class Name

`DonationPaymentRequestPaymentMethod`

## Cases

| Type |
|  --- |
| [`ApplePayDonations`](../../../doc/models/apple-pay-donations.md) |
| [`CardDonations`](../../../doc/models/card-donations.md) |
| [`GooglePayDonations`](../../../doc/models/google-pay-donations.md) |
| [`IdealDonations`](../../../doc/models/ideal-donations.md) |
| [`PayWithGoogleDonations`](../../../doc/models/pay-with-google-donations.md) |
| [`StoredPaymentMethod1`](../../../doc/models/stored-payment-method-1.md) |

## ApplePayDonations

### Initialization Code

#### Example

```ts
const value: DonationPaymentRequestPaymentMethod = {
  applePayToken: 'applePayToken4',
  type: Type7Enum.Applepay,
};
```

## CardDonations

### Initialization Code

#### Example

```ts
const value: DonationPaymentRequestPaymentMethod = {
  type: Type14Enum.Scheme,
};
```

## GooglePayDonations

### Initialization Code

#### Example

```ts
const value: DonationPaymentRequestPaymentMethod = {
  googlePayToken: 'googlePayToken0',
  type: Type24Enum.Googlepay,
};
```

## IdealDonations

### Initialization Code

#### Example

```ts
const value: DonationPaymentRequestPaymentMethod = {
  type: Type25Enum.Ideal,
};
```

## PayWithGoogleDonations

### Initialization Code

#### Example

```ts
const value: DonationPaymentRequestPaymentMethod = {
  googlePayToken: 'googlePayToken2',
  type: Type26Enum.Paywithgoogle,
};
```

## StoredPaymentMethod1

### Initialization Code

#### Example

```ts
const value: DonationPaymentRequestPaymentMethod = {
  type: Type27Enum.Sepadirectdebit,
};
```

