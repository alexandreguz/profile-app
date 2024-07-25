import Link from "next/link";
export default function Dashboard() {
  return (
    <>
      <div className="p-4 sm:ml-64 bg-yellow-700 h-screen">
        <div className="p-4   rounded-lg dark:border-gray-700 mt-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center h-72 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                Calendar
              </p>
            </div>
            <div className="flex items-center justify-center h-72 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                Messages
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-96 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Requests
            </p>
          </div>

          <div className="flex items-center justify-center h-36 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Documents
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
