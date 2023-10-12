import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSeller = () => {
  const { user } = useAuth();
  const [axios] = useAxiosSecure();
  const { data: isSeller, isLoading: isSellerLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled:!!user?.email,

    queryFn: async () => {
      const res = await axios.get(`/user/seller/${user?.email}`);
      
      return res.data.instructor;
    },
  });
  return [isSeller, isSellerLoading];
};
export default useSeller;