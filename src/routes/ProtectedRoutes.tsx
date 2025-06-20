import { useEffect, useState, type ReactNode } from "react";
import useAuthStore from "../store/useAuthStore";
import { getMe } from "../api/user";

type RoleType = "ADMIN" | "USER";

interface ProtectedRoutesProps {
  el: ReactNode;
  allows?: RoleType[];
}

function ProtectedRoutes({ el, allows }: ProtectedRoutesProps) {
  const [okay, setOkay] = useState<boolean | null>(null);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await getMe(token!);
      const role = res.data.result.role;
      setOkay(allows?.includes(role)!);
    } catch (err) {
      setOkay(false);
      console.log(err);
    }
  };

  if (okay === null) {
    return <h1>Loading...</h1>;
  }

  if (!okay) {
    return <h1>Unauthorized</h1>;
  }

  return el;
}

export default ProtectedRoutes;
