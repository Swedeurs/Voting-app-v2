import { db } from "@/db";
import { createRepository } from "../repository";
import HomeButton from "./home-button";


export default async function ConcludedElectionsPage() {
  const repository = createRepository(db);


  const elections = await repository.getAllElections();


  const concludedElections = elections.filter(
    (election) => election.electionStatus === "Concluded",
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
        <HomeButton />
      </div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#333",
          borderBottom: "2px solid #ddd",
          paddingBottom: "10px",
        }}
      >
        Concluded Elections
      </h1>
      {concludedElections.length > 0 ? (
        concludedElections.map((election) => (
          <div
            key={election.id}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ddd",
              marginBottom: "10px",
              padding: "8px",
              borderRadius: "5px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "5px",
                backgroundColor: "red",
                borderRadius: "5px 0 0 5px",
                marginRight: "8px",
              }}
            ></div>
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: "0 0 4px 0", fontSize: "1.2rem", color: "#333" }}>
                {election.electionName}
              </h2>
              <p style={{ margin: "0 0 4px 0", fontSize: "0.9rem", color: "#666" }}>
                {election.electionDescription}
              </p>
              <p style={{ margin: 0, fontWeight: "bold", color: "red", fontSize: "0.9rem" }}>
                Status: {election.electionStatus}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#666" }}>
          No concluded elections found.
        </p>
      )}
    </div>
  );
}
