import { useRouter } from "next/router";

function FilteredEventPage() {
  const { searchParams } = useRouter().query;
  return (
    <div>
      <h1>Filtered Page</h1>
      <p>Args: {searchParams.join("-")}</p>
    </div>
  );
}
export default FilteredEventPage;
