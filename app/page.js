"use client";
export default async function Home() {
  const handelClick = async () => {
    const response = await fetch("/api", {
      method: "POST",
      body: {
        name: "Sajal",
      },
    });

    console.log(await response.json());
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex justify-center">
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handelClick}
        >
          Set Cookie
        </button>
      </div>
    </main>
  );
}
