import React, { useState } from "react";
import { FormGroup, Form, Label, Input } from "reactstrap";

const Ekmalzeme = () => {
  const [ekstraMalzemeler, setEkstraMalzemeler] = useState([]);
  const ekstraMalzemeFiyat = 5;

  const toggleEkstraMalzeme = (malzeme) => {
    if (ekstraMalzemeler.includes(malzeme)) {
      setEkstraMalzemeler(ekstraMalzemeler.filter((item) => item !== malzeme));
    } else {
      setEkstraMalzemeler([...ekstraMalzemeler, malzeme]);
    }
  };

  return (
    <div class="ekmalzeme-div">
      <h4>Ek Malzemeler</h4>
      <p>En Fazla 10 malzeme seçebilirsiniz. {ekstraMalzemeFiyat}</p>

      <Form>
        <div class="checkbox-group">
          <FormGroup>
            <Input id="checkbox1" type="checkbox" />
            <Label for="checkbox1">Pepperoni</Label>

            <Input id="checkbox2" type="checkbox" />
            <Label for="checkbox2">Sosis</Label>

            <Input id="checkbox3" type="checkbox" />
            <Label for="checkbox3">Kanada Jambonu</Label>
          </FormGroup>
          <FormGroup>
            <Input id="checkbox4" type="checkbox" />
            <Label for="checkbox4">Tavuk Jambonu</Label>

            <Input id="checkbox5" type="checkbox" />
            <Label for="checkbox5">Soğan</Label>

            <Input id="checkbox6" type="checkbox" />
            <Label for="checkbox6">Domates</Label>
          </FormGroup>
          <FormGroup>
            <Input id="checkbox7" type="checkbox" />
            <Label for="checkbox7">Mısır</Label>

            <Input id="checkbox8" type="checkbox" />
            <Label for="checkbox8">Sucuk</Label>

            <Input id="checkbox9" type="checkbox" />
            <Label for="checkbox9">Jalepeno</Label>
          </FormGroup>
          <FormGroup>
            <Input id="checkbox10" type="checkbox" />
            <Label for="checkbox10">Sarımsak</Label>

            <Input id="checkbox11" type="checkbox" />
            <Label for="checkbox11">Biber</Label>

            <Input id="checkbox12" type="checkbox" />
            <Label for="checkbox12">Salam</Label>
          </FormGroup>
          <FormGroup>
            <Input id="checkbox13" type="checkbox" />
            <Label for="checkbox13">Ananas</Label>

            <Input id="checkbox14" type="checkbox" />
            <Label for="checkbox14">Kabak</Label>

            <Input id="checkbox15" type="checkbox" />
            <Label for="checkbox15">Turşu</Label>
          </FormGroup>
        </div>
      </Form>
      <div>
        <h4>Seçimler</h4>
        {ekstraMalzemeler.map((malzeme, index) => (
          <div key={index}>{malzeme}</div>
        ))}
      </div>
    </div>
  );
};

export default Ekmalzeme;
