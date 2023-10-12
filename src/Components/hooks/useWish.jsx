import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure.jsx';
import useAuth from './useAuth';
const useWish = () => {
    const { user, loading } = useAuth();
   
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: wish = [] } = useQuery({
        queryKey: ['wish', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('acces_token'),
        queryFn: async () => {
            const res = await axiosSecure(`/wish?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
        
    })

    return [wish, refetch]
};

export default useWish;