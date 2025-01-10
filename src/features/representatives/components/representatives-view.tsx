import { ReactNode } from "react";
import { EditRepresentative} from ".";
import { getAllRepresentativesAction } from "../actions";

type WrapperProps = {
  children: ReactNode;
};

export function SeperationDiv({ children }: WrapperProps) {
  return <div className="p-8 space-y-8">{children}</div>;
}
export async function Representatives() {
  const representatives = await getAllRepresentativesAction();
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Current Representatives
      </h2>
      <div>
        {representatives.map((rep) => (
          <div
            key={rep.id}
            className="bg-white rounded shadow-md p-4 transition hover:shadow-lg"
          >
            <EditRepresentative representative={rep} />
          </div>
        ))}
      </div>
    </div>
  );
}