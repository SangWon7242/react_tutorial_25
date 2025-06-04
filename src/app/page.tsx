export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">리액트 튜토리얼에 오신 것을 환영합니다! 👋</h1>
      <p className="text-lg text-gray-600 mb-8">
        위의 내비게이션 바를 사용하여 다른 페이지로 이동해보세요.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">이 튜토리얼에서 배울 내용</h2>
        <ul className="text-left space-y-2 text-gray-700">
          <li>• React 컴포넌트와 프롭스</li>
          <li>• 상태 관리</li>
          <li>• 라우팅</li>
          <li>• API 연동</li>
        </ul>
      </div>
    </div>
  );
}
