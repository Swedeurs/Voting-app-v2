import TopNav from "@/components/top-nav";
import { AddRepresentative } from "./add-representatives";
import { Representatives, SeperationDiv } from "./view-representatives";

export async function RepresentativesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNav />
      <SeperationDiv>
        <AddRepresentative />
        <Representatives />
      </SeperationDiv>
    </div>
  );
}
