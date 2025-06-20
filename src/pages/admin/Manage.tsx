import { useEffect, useState } from "react";
import { getUsers } from "../../api/user";
import useAuthStore from "../../store/useAuthStore";

type UserList = {
  id: number;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

function Manage() {
  const token = useAuthStore((state) => state.token);
  const [users, setUsers] = useState<UserList[]>([]);

  const fetchUsers = async () => {
    try {
      const res = await getUsers(token!);
      setUsers(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Manage;
