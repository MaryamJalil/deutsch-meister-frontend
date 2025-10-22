import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardPage() {
  return (
    <div className="pt-20 flex">
      <DashboardSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Welcome back!</h1>
        <p className="text-gray-600">Continue your German learning journey.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-blue-700">Course {n}</h2>
              <p className="text-sm text-gray-500 mb-3">Progress: {n * 20}%</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Continue
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
