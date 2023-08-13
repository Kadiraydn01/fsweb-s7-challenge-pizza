import React from "react";
import { Form, Label, Input } from "reactstrap";

const Ekmalzeme = () => {
  return (
    <div class="ekmalzeme-div">
      <h4>Ek Malzemeler</h4>
      <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

      <Form>
        <div class="checkbox-group">
          <Input id="checkbox1" type="checkbox" />
          <Label for="checkbox1">Pepperoni</Label>

          <Input id="checkbox2" type="checkbox" />
          <Label for="checkbox2">Sosis</Label>

          <Input id="checkbox3" type="checkbox" />
          <Label for="checkbox3">Kanada Jambonu</Label>

          <Input id="checkbox4" type="checkbox" />
          <Label for="checkbox4">Tavuk Jambonu</Label>

          <Input id="checkbox5" type="checkbox" />
          <Label for="checkbox5">Soğan</Label>

          <Input id="checkbox6" type="checkbox" />
          <Label for="checkbox6">Domates</Label>

          <Input id="checkbox7" type="checkbox" />
          <Label for="checkbox7">Mısır</Label>

          <Input id="checkbox8" type="checkbox" />
          <Label for="checkbox8">Sucuk</Label>

          <Input id="checkbox9" type="checkbox" />
          <Label for="checkbox9">Jalepeno</Label>

          <Input id="checkbox10" type="checkbox" />
          <Label for="checkbox10">Sarımsak</Label>

          <Input id="checkbox11" type="checkbox" />
          <Label for="checkbox11">Biber</Label>

          <Input id="checkbox12" type="checkbox" />
          <Label for="checkbox12">Sucuk</Label>

          <Input id="checkbox13" type="checkbox" />
          <Label for="checkbox13">Ananas</Label>

          <Input id="checkbox14" type="checkbox" />
          <Label for="checkbox14">Kabak</Label>

          <Input id="checkbox15" type="checkbox" />
          <Label for="checkbox15">Turşu</Label>
        </div>
      </Form>
    </div>
  );
};

export default Ekmalzeme;
