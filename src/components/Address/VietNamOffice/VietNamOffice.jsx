import React from "react";
import TypoMedium from "../../Typography/TypoMedium/TypoMedium";
import TypoSmall from "../../Typography/TypoSmall/TypoSmall";

const VietNamOffice = () => {
  return (
    <>
      <TypoMedium text="Vietnam Office" />
      <TypoSmall text="14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city" />
      <TypoSmall text="Business resigtration: 0315421202" />
      <TypoSmall text={`Tel: 028-3520-2367    sales@dkinno.com`} />
      <TypoSmall text="Copyright 2021 DaouKiwoom Innocation C0., Ltd" />
    </>
  );
};

export default VietNamOffice;
