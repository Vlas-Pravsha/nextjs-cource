export function LoadingMessage() {
  return (
    <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-gray-100 to-gray-300 py-8 shadow-lg">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-gray-700"></div>
        <p className="text-lg font-semibold text-gray-900">Loading posts...</p>
        <p className="text-sm text-gray-600">
          Please wait while we fetch the latest content for you.
        </p>
      </div>
    </div>
  );
}
