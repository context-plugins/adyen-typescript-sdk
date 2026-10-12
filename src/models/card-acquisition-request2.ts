import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cardAcquisitionTransaction1Schema,
  type CardAcquisitionTransaction1,
} from "./card-acquisition-transaction1.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";

/** Content of the Card Acquisition Request message. */
export type CardAcquisitionRequest2 = {
  /** Data related to the Sale System. */
  saleData: SaleData1;
  /** Data related to the payment and loyalty card acquisition. */
  cardAcquisitionTransaction: CardAcquisitionTransaction1;
};

export const cardAcquisitionRequest2Schema: Schema<CardAcquisitionRequest2> =
  s.object<CardAcquisitionRequest2>({
    saleData: saleData1Schema,
    cardAcquisitionTransaction: cardAcquisitionTransaction1Schema,
    _keysMap: {
      saleData: "SaleData",
      cardAcquisitionTransaction: "CardAcquisitionTransaction",
    },
  });
