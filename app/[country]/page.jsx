import { api } from "@/api/request";
import CountryContent from "@/components/CountryContent";
import CustomButton from "@/components/CustomButton";
import { Box } from "@mui/material";

async function getCountry(country) {
  return await api({
    method: "GET",
    endpoint: "/alpha/" + country,
  });
}

export async function generateMetadata({ params: { country } }) {
  const data = (await getCountry(country))[0];
  return { title: data.name.common };
}

export default async function CountryPage({ params: { country } }) {
  const data = (await getCountry(country))[0];
  return (
    <Box component={"main"}>
      <CustomButton {...{ 
        my: '3rem'
      }} />

      <CountryContent data={data} />
    </Box>
  );
}
