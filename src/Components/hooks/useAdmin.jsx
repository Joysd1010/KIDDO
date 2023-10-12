import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
    const [axios] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
      queryKey: ["isAdmin", user?.email],
      enabled:!!user?.email,
  
      queryFn: async () => {
        const res = await axios.get(`/user/seller/${user?.email}`);
        
        return res.data.instructor;
      },
    });
    return [isAdmin, isAdminLoading];
  };
export default useAdmin;