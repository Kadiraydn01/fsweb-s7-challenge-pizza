import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
const Order2 = () => {
  return (
    <Form>
      <FormGroup>
        <h4>
          Boyut Seçiniz <span className="yildiz">*</span>{" "}
        </h4>
        <FormGroup check>
          <Input name="radio1" type="radio" />
          <Label check>Küçük</Label>
        </FormGroup>
        <FormGroup check>
          <Input name="radio1" type="radio" />
          <Label check>Orta</Label>
        </FormGroup>
        <FormGroup check>
          <Input name="radio1" type="radio" />
          <Label check>Büyük</Label>
        </FormGroup>
      </FormGroup>
    </Form>
  );
};

export default Order2;
