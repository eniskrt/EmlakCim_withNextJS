"use client"
import Image from "next/image";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import img from "../../public/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg"
import { deleteAdvertAction } from "@/action/new-product";
import Link from "next/link";

const Card = ({ ilanNo,
    emlakTipi,
    m2,
    odaSayisi,
    balkon,
    otopark,
    kimden,
    fiyat,
    resim,
    id,
    baslik,  }) => {

      const handleDelete = async (id) => {

        try {
          const res = await deleteAdvertAction(id);
        } catch (err) {
          console.log(err);
        }
       }
      

  return (
    <div className="col">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="d-flex justify-content-between m-2">
          <h4>{baslik}</h4>
          <div className="d-flex gap-3 me-3">
            <Link type="button" href={`/${id}`}>
              <FaEdit size={"1.5rem"} color="orange"/>
            </Link>
            <FaTrash size={"1.5rem"} color="red" onClick={()=>handleDelete(id)}/>
          </div>
          </div>
          <div className="col-md-5">
            <Image src={img} width={"auto"} height={"auto"} className="img-fluid rounded-start" alt={baslik} />
          </div>
          <div className="col-md-7">
            <div className="card-body">
                <h3>{fiyat} ₺</h3>
              <h5>İlan No : {ilanNo}</h5>
              <h5>Emlak Tipi : {emlakTipi}</h5>
              <h5>m<sup>2</sup> : {m2}</h5>
              <h5>Oda Sayısı : {odaSayisi}</h5>
              <h5>Balkon : {balkon ? "Var" : "Yok"}</h5>
              <h5>Otopark : {otopark ? "Var": "Yok"}</h5>
              <h5>Kimden : {kimden}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
