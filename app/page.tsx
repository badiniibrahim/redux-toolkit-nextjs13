"use client"

import { useGetUsersQuery } from "@/services/userApi";

export default function Home() {
  const { data } = useGetUsersQuery(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data && data.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
    </main>
  )
}
