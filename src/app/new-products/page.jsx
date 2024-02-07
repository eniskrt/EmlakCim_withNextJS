"use client"
import { createAdvertAction } from "@/action/new-product";
import { initialResponse, isInvalid } from "@/providers/form-validation";
import Link from "next/link";
import { useFormState } from "react-dom";
import InputMask from "react-input-mask-next";

const NewProductsPage = () => {

  const [state, dispatch] = useFormState(createAdvertAction, initialResponse)
  console.log(state);


  return (
    <div className="container my-3">
      <form action={dispatch} noValidate>
        <div className="input-group mb-3 inputs">
          <label htmlFor="ilanNo">İlan No</label>
          <input
            type="number"
            className={`form-control ${isInvalid(
              state.errors?.ilanNo
            )}`}
            placeholder="İlan No..."
            name="ilanNo"
            id="ilanNo"
          />
          <div className="invalid-feedback">
										{state.errors?.ilanNo}
					</div>
        </div>
        <div className="input-group mb-3 inputs">
          <label htmlFor="emlakTipi">Emlak Tipi</label>
          <select 
              className={`form-select ${isInvalid(
                state.errors?.emlakTipi
              )}`}
              id="emlakTipi"
              name="emlakTipi">
            <option value="">Emlak Tipi Seçiniz</option>
            <option value="Daire">Daire</option>
            <option value="Arsa">Arsa</option>
          </select>
          <div className="invalid-feedback">
										{state.errors?.emlakTipi}
					</div>
        </div>
        <div className="input-group mb-3 inputs">
          <label htmlFor="m2">
            m<sup>2</sup>
          </label>
          <input
            type="m2"
            className={`form-control ${isInvalid(
              state.errors?.m2
            )}`}
            placeholder="m2 giriniz ..."
            name="m2"
            id="m2"
          />
          <div className="invalid-feedback">
										{state.errors?.m2}
					</div>
        </div>
        <div className="input-group mb-3 inputs">
          <label htmlFor="odaSayisi">Oda Sayısı</label>
          <InputMask
            className={`form-control ${isInvalid(
              state.errors?.odaSayisi
            )}`}
            placeholder="İlan No..."
            name="odaSayisi"
            id="odaSayisi"
            mask="9+9"
          />
          <div className="invalid-feedback">
										{state.errors?.odaSayisi}
					</div>
        </div>
        <div className="input-group mb-3 inputs">
          <label htmlFor="balkon">Balkon</label>
          <select 
              className={`form-select ${isInvalid(
                state.errors?.balkon
              )}`}
              id="balkon"
              name="balkon">
            <option value="">Balkon Seçiniz</option>
            <option value={true}>Var</option>
            <option value={false}>Yok</option>
          </select>
          <div className="invalid-feedback">
										{state.errors?.balkon}
					</div>
        </div>
        <div className="input-group mb-3 inputs">
          <label htmlFor="otopark">Otopark</label>
          <select 
              className={`form-select ${isInvalid(
                state.errors?.otopark
              )}`}
              id="otopark"
              name="otopark">
            <option value="">Otopark Seçiniz</option>
            <option value={true}>Var</option>
            <option value={false}>Yok</option>
          </select>
          <div className="invalid-feedback">
										{state.errors?.otopark}
					</div>
        </div>
        <div className="input-group mb-3 inputs">
          <label htmlFor="kimden">Kimden</label>
          <select 
              className={`form-select ${isInvalid(
                state.errors?.kimden
              )}`}
              id="kimden"
              name="kimden">
            <option value="">Kimden</option>
            <option value="Sahibinden">Sahibinden</option>
            <option value="Emlak ofisi">Emlak Ofisi</option>
          </select>
          <div className="invalid-feedback">
										{state.errors?.kimden}
					</div>
        </div>
        <div className="input-group mb-3 inputs">
          <label htmlFor="fiyat">Fiyat</label>
          <input
            type="number"
            className={`form-control ${isInvalid(
              state.errors?.fiyat
            )}`}
            placeholder="Fiyat..."
            name="fiyat"
            id="fiyat"
          />
          <div className="invalid-feedback">
										{state.errors?.fiyat}
					</div>
        </div>
        <div className="input-group mb-3 inputs">
          <label htmlFor="baslik">Başlık</label>
          <input
            type="text"
            className={`form-control ${isInvalid(
              state.errors?.baslik
            )}`}
            placeholder="Başlık..."
            name="baslik"
            id="baslik"
          />
          <div className="invalid-feedback">
										{state.errors?.baslik}
					</div>
        </div>
        <button type="submit" className="btn btn-primary">Gönder</button>
        <Link href="/" className="btn btn-danger ms-3">Geri Dön</Link>
      </form>
    </div>
  );
};

export default NewProductsPage;
