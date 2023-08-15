import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
const Order3 = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleSelect">
          <h4>
            Hamur Seç<span className="yildiz">*</span>
          </h4>
        </Label>
        <br />
        <Input id="exampleSelect" name="select" type="select">
          <option>Seçiminiz!</option>
          <option>Kalın Kenar</option>
          <option>İnce Kenar</option>
        </Input>
      </FormGroup>
    </Form>
  );
};

export default Order3;
