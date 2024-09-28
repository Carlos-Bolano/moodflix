export default function ErrorMessage({ error }: { error: string }) {
  return (
    <div className="flex items-center justify-center mt-5 col-span-2">
      <p className=" text-center">{error}</p>
    </div>
  );
}
