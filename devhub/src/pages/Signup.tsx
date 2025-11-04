export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">Signup</h2>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <input
          type="text"
          placeholder="Name"
          className="w-full border mb-3 p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border mb-3 p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border mb-4 p-2 rounded"
        />
        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Create Account
        </button>
      </form>
    </div>
  );
}
