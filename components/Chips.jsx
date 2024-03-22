import { api } from "@/api/request";
import { Chip } from "@mui/material";

async function getCountriesByCode(codes) {
  return await api({
    method: "GET",
    endpoint: "/alpha?codes=" + codes,
  });
}

export default async function Chips({ codes }) {
  if (!codes) return <p>There is no border countries in this country</p>;
  const data = await getCountriesByCode(codes);

  return (
    <>
      {data.map((d) => (
        <Chip label={d.name.common} key={d.name.common}/>
      ))}
    </>
  );
}
