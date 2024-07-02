export default function WelcomeRow() {
  return (
    <div className="flex mb-6 items-center">
      <div className="w-1/2 grow">
        <h1 className="text-primary text-xl">Welcome, <b>Radina</b></h1>
      </div>
      <div className="">
        <div className="bg-gray-200 flex items-center rounded-md overflow-hidden">
          <span className="px-3">Radina</span>
        </div>
      </div>
    </div>
  );
}
