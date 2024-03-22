import { api } from "@/api/request";
import CountriesGrid from "@/components/CountriesGrid";
import { Container } from "@mui/material";

async function getCountries() {
  return await api({
    method: "GET",
    endpoint: "/all",
  });
}

export default async function Home() {
  const countries = await getCountries();
  return <CountriesGrid data={countries} />;
}
