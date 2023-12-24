export async function updateData(data: dataPortfolioDto) {
  try {
    const res = await fetch(`/api/data?id=${data._id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {}
}
