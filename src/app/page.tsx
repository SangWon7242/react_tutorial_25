interface User {
  name: string;
  age: number;
}

interface IntroduceProps {
  name: string;
  age: number;
}

interface UserProps {
  user: User;
  isActive: boolean;
  hobbyData: string[];
}

const Introduce = ({ name, age }: IntroduceProps) => {
  return (
    <div>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
    </div>
  );
};

const UserInfo = ({ user, isActive, hobbyData }: UserProps) => {
  return (
    <>
      <h2>정보</h2>
      <div>
        <p>이름 : {user.name}</p>
        <p>나이 : {user.age}</p>
        <p>{isActive ? "활성화" : "비활성화"}</p>
      </div>
      <h2>취미</h2>
      <ul>
        {hobbyData.map((hobby, index) => (
          <li key={index}>
            {index + 1}. {hobby}
          </li>
        ))}
      </ul>
    </>
  );
};

export default function Home() {
  const userData: User = {
    name: "홍길동",
    age: 20,
  };

  const hobbyData: string[] = ["게임", "음악", "운동"];

  return (
    <div>
      <Introduce name="홍길동" age={20} />
      <UserInfo user={userData} isActive={true} hobbyData={hobbyData} />
    </div>
  );
}
