import { toast } from 'react-toastify';
export async function updateData(data: dataPortfolioDto) {
  try {
    const id = toast.loading('Please wait...');
    const res = await fetch(`/api/data?id=${data._id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    if (res.ok) {
      toast.update(id, {
        autoClose: 2000,
        render: 'data have been saved.',
        type: 'success',
        isLoading: false,
      });
    } else {
      toast.update(id, {
        autoClose: 3000,
        render: 'Something went wrong',
        type: 'error',
        isLoading: false,
      });
    }
  } catch (error) {}
}
