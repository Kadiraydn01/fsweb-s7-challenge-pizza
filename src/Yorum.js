import React from "react";
import { FormGroup, Form, Label, Input } from "reactstrap";

const Yorum = () => {
  return (
    <div className="yorum">
      <Form>
        <FormGroup>
          <Label for="exampleText">
            <h3>Sipariş Notu</h3>
          </Label>
          <br />
          <Input
            className="yorum-input"
            id="exampleText"
            name="text"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            type="textarea"
          />
        </FormGroup>
      </Form>
    </div>
  );
};

export default Yorum;
