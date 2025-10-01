
import SearchPageContent from "@/components/pages/search-page/SearchPageContent";


export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  

  const params = await searchParams; 
 
  return <SearchPageContent q={params.q ?? ""} />;
}