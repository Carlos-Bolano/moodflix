export default function SearchForm({
  prompt,
  setPrompt,
  loading,
  handleSubmit,
}: {
  prompt: string;
  setPrompt: (value: string) => void;
  loading: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}) {
  return (
    <div className="my-10">
      <form
        className="flex flex-col gap-4 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <textarea
          className="focus:outline-red-400 border-2 p-4 w-full rounded-md text-gray-900 text-sm"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="How are you feeling?"
          rows={3}
          cols={60}
          required
        />
        <button
          disabled={loading}
          className="bg-red-400 px-4 py-2 rounded-md text-white disabled:bg-red-300 transition-colors duration-300"
          type="submit"
        >
          {loading ? "Getting recommendations" : "Get recommendations 🍿"}
        </button>
      </form>
    </div>
  );
}
