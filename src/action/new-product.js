"use server";
import { convertFormDataToJson, getYupErrors, response } from "@/providers/form-validation";
import { createAdvert, deleteAdvert, updateAdvert } from "@/service/products-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";


const FormSchema = Yup.object({
    ilanNo:Yup.number()
            .required("Required"),
    emlakTipi:Yup.string()
            .required("Required"),
    m2:Yup.number()
            .required("Required"),
    odaSayisi:Yup.number()
            .required("Required"),
    balkon:Yup.boolean()
            .required("Required"),
    otopark:Yup.boolean()
            .required("Required"),
    kimden:Yup.string()
            .required("Required"),
    fiyat:Yup.number()
            .required("Required"),
    baslik:Yup.string()
            .required("Required"),
});

export const createAdvertAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);
        console.log("sd",fields);
		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await createAdvert(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}
	} catch (err) {
		if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}

		throw err;
	}

	revalidatePath("/");
    redirect("/")

}

export const deleteAdvertAction = async (id) => {
	if (!id) throw new Error("id is missing");

	const res = await deleteAdvert(id);
	//const data = await res.json();
	// Backend den json tipinde olmayan bir mesaj geldi[i icin hata veriyor]
	
	if (!res.ok) {
		throw new Error('Something went wrong');
	}

	revalidatePath("/");
	redirect("/");
};

export const updateAdvertAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await updateAdvert(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}
	} catch (err) {
		if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}

		throw err;
	}

	revalidatePath("/");
	redirect(`/}`);
};