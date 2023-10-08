import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure.jsx';
import useAuth from './useAuth';
const useCart = () => {
    const { user, loading } = useAuth();
   
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('acces_token'),
        queryFn: async () => {
            const res = await axiosSecure(`/cart?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
        
    })

    return [cart, refetch]

}
export default useCart;