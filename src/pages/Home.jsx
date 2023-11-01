import { useState, useEffect, useContext } from "react";
import AxiosApi from "../api/AxiosApi";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserInfo";
import styled from "styled-components";

const MembersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 600px;
  margin: 10px auto;
`;

const MemberInfoWrapper = styled.div`
  border: 1px solid #ccc;
  width: 240px;
  height: 240px;
  padding: 16px;
  border-radius: 8px;
  background-color: antiquewhite;
`;

const MemberId = styled.p`
  font-weight: bold;
`;

const MemberName = styled.p`
  font-style: italic;
`;

const MemberEmail = styled.p`
  color: #555;
`;

const MemberJoinDate = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

const Home = () => {
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useState("");
  const isLogin = window.localStorage.getItem("isLogin");

  // Context에서 값 읽기
  const context = useContext(UserContext);
  const { userId, password } = context;

  console.log(isLogin);
  if (isLogin !== "TRUE") navigate("/");

  useEffect(() => {
    const memberInfo = async () => {
      const rsp = await AxiosApi.memberGet("ALL"); // 전체 조회
      if (rsp.status === 200) setMemberInfo(rsp.data);
      console.log(rsp.data);
    };
    memberInfo();
  }, []);

  const onClickMember = (id) => {
    console.log("onCLick member : " + id);
    //window.localStorage.setItem("selId", id);
    navigate(`/memberInfo/${id}`);
  };

  return (
    <>
      <MembersWrapper>
        {memberInfo &&
          memberInfo.map((member) => (
            <MemberInfoWrapper
              key={member.id}
              onClick={() => onClickMember(member.id)}
            >
              <MemberId>ID: {member.id}</MemberId>
              <MemberName>{member.name}</MemberName>
              <MemberEmail>Email: {member.email}</MemberEmail>
              <MemberJoinDate>Joined on: {member.join}</MemberJoinDate>
            </MemberInfoWrapper>
          ))}
      </MembersWrapper>
    </>
  );
};
export default Home;
