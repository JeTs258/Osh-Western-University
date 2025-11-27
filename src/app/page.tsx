export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-6">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
          Welcome to Osh University
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Explore our programs, discover cutting-edge research, and join a
          vibrant academic community committed to excellence in education.
        </p>
      </div>
    </div>
  );
}
