import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import { Table } from "react";

const MemberInfo = () => {
  const [memberInfo, setMemberInfo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const memberInfo = async () => {
      const rsp = await AxiosApi.memberGet(id);
      if (rsp.status === 200) setMemberInfo(rsp.data);
      console.log(rsp.data);
    };
    memberInfo();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {memberInfo &&
          memberInfo.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.join}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default MemberInfo;
