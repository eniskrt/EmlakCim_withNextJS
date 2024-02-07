import { getAllProducts } from "@/service/products-service";
import Card from "@/components/card";
import Link from "next/link";

export default async function Home() {

  const data = await getAllProducts()

  return (
    <>
      
      <Link
				href="/new-products"
				className="btn btn-warning m-3"
			>
				Yeni İlan Ekle
			</Link>
      <main className="container my-3">
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-3">
        {
          data.map((item) => (
            <Card key={item.id} {...item}/>
          ))
        }
      </div>
      
    </main>
    </>
  );
}
