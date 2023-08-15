import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Order2 = ({ selectedSize, onSelectSize }) => {
  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    onSelectSize(selectedSize);
  };

  return (
    <Form>
      <FormGroup>
        <h4>
          Boyut Seçiniz <span className="yildiz">*</span>{" "}
        </h4>
        <FormGroup check>
          <Label check>
            <Input
              name="radio1"
              type="radio"
              value="küçük"
              checked={selectedSize === "küçük"}
              onChange={handleSizeChange}
            />
            Küçük
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              name="radio1"
              type="radio"
              value="orta"
              checked={selectedSize === "orta"}
              onChange={handleSizeChange}
            />
            Orta
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              name="radio1"
              type="radio"
              value="büyük"
              checked={selectedSize === "büyük"}
              onChange={handleSizeChange}
            />
            Büyük
          </Label>
        </FormGroup>
      </FormGroup>
    </Form>
  );
};

export default Order2;
