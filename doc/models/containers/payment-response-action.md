
# Payment Response Action

## Class Name

`PaymentResponseAction`

## Cases

| Type |
|  --- |
| [`CheckoutAwaitAction`](../../../doc/models/checkout-await-action.md) |
| [`CheckoutBankTransferAction`](../../../doc/models/checkout-bank-transfer-action.md) |
| [`CheckoutDelegatedAuthenticationAction`](../../../doc/models/checkout-delegated-authentication-action.md) |
| [`CheckoutNativeRedirectAction`](../../../doc/models/checkout-native-redirect-action.md) |
| [`CheckoutQrCodeAction`](../../../doc/models/checkout-qr-code-action.md) |
| [`CheckoutRedirectAction`](../../../doc/models/checkout-redirect-action.md) |
| [`CheckoutSDKAction`](../../../doc/models/checkout-sdk-action.md) |
| [`CheckoutThreeDS2Action`](../../../doc/models/checkout-three-ds-2-action.md) |
| [`CheckoutVoucherAction`](../../../doc/models/checkout-voucher-action.md) |

## CheckoutAwaitAction

### Initialization Code

#### Example

```ts
const value: PaymentResponseAction = {
  type: 'await',
};
```

## CheckoutBankTransferAction

### Initialization Code

#### Example

```ts
const value: PaymentResponseAction = {
  type: 'bankTransfer',
};
```

## CheckoutDelegatedAuthenticationAction

### Initialization Code

#### Example

```ts
const value: PaymentResponseAction = {
  type: 'delegatedAuthentication',
};
```

## CheckoutNativeRedirectAction

### Initialization Code

#### Example

```ts
const value: PaymentResponseAction = {
  type: 'nativeRedirect',
};
```

## CheckoutQrCodeAction

### Initialization Code

#### Example

```ts
const value: PaymentResponseAction = {
  type: 'qrCode',
};
```

## CheckoutRedirectAction

### Initialization Code

#### Example

```ts
const value: PaymentResponseAction = {
  type: 'redirect',
};
```

## CheckoutSDKAction

### Initialization Code

#### Example

```ts
const value: PaymentResponseAction = {
  type: Type19Enum.Sdk,
};
```

## CheckoutThreeDS2Action

### Initialization Code

#### Example

```ts
const value: PaymentResponseAction = {
  type: 'threeDS2',
};
```

## CheckoutVoucherAction

### Initialization Code

#### Example

```ts
const value: PaymentResponseAction = {
  type: 'voucher',
};
```

