const API_URL ="https://65a2df23a54d8e805ed33128.mockapi.io/emrdata/emlak";



export const getAllProducts = async () => {
    const res = await fetch(`${API_URL}`)
    const data = await res.json();
    return data
}

export const createAdvert = (payload) => {
    console.log(payload)
    return fetch(`${API_URL}`,{
        method:"post",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(payload),
    })
}

export const getAdverById = async (id) => {
	return fetch(`${API_URL}/${id}`, {
		headers: {
            "Content-Type": "application/json"
        },
	});
};

export const deleteAdvert = async (id) => {
	return fetch(`${API_URL}/${id}`, {
		method: "delete",
	});
};

export const updateAdvert = async (payload) => {
	return fetch(`${API_URL}/${payload.id}`, {
		method: "put",
		headers: {
            "Content-Type": "application/json"
        },
		body: JSON.stringify(payload)
	});
};

