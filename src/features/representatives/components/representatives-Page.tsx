import TopNav from "@/components/top-nav";
import { AddRepresentative } from "./add-representatives";
import { Representatives, SeperationDiv } from "./representatives-view";

export async function RepresentativesManagementPage() {
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
