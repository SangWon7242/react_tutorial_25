interface IntroduceProps {
  name: string;
  age: number;
}

const Introduce = ({ name, age }: IntroduceProps) => {
  return (
    <div>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Introduce name="홍길동" age={20} />
    </div>
  );
}
