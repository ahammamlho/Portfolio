


export async function updateData(data: dataPortfolioDto) {
    try {
        const res = await fetch(`http://localhost:3000/api/data?id=${data._id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
        console.log(res);
    } catch (error) {
        console.log(error)
    }
}