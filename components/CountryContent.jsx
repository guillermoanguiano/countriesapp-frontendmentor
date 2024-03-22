"use client";

import { Box, Chip, Typography } from "@mui/material";
import Image from "next/image";
import Chips from "./Chips";
import { useMediaQuery } from "@mui/material";

const CountryContent = ({ data }) => {

  const mediaQuerySmall = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box sx={{ display: "flex", gap: "6rem", flexDirection: mediaQuerySmall ? 'column' : 'row' }}>
      <Image
        src={data.flags.svg}
        alt={data.flags.alt}
        height={250}
        width={400}
        priority
        style={{
          width: 'auto',
          maxWidth: '100%',
          height: mediaQuerySmall ? 350 : 300,
          objectFit: 'cover'
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: "100%",
        }}
      >
        <div>
          <Typography marginBottom={4} variant="h4">
            {data.name.common}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "3rem",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <Typography variant="body2">
                <strong>Native Name: </strong>{" "}
                {data.name.nativeName.ita?.official || data.name.official}
              </Typography>
              <Typography variant="body2">
                <strong>Population: </strong> {data.population}
              </Typography>
              <Typography variant="body2">
                <strong>Region: </strong> {data.region}
              </Typography>
              <Typography variant="body2">
                <strong>Sub Region: </strong> {data.subregion}
              </Typography>
              <Typography variant="body2">
                <strong>Capital: </strong> {data.capital}
              </Typography>
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <Typography variant="body2">
                <strong>Currencies: </strong>{" "}
                {Object.values(data.currencies)[0]?.name}
              </Typography>
              <Typography variant="body2">
                <strong>Lenguages: </strong> {Object.values(data.languages)[0]}
              </Typography>
            </Box>
          </Box>
        </div>

        <Box
          sx={{
            mb: "1rem",
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            maxWidth: "100%",
            flexWrap: "wrap",
          }}
        >
          <Typography fontWeight={700} variant="body2">
            Border Countries:{" "}
          </Typography>
          <Chips codes={data.borders} />
        </Box>
      </Box>
    </Box>
  );
};

export default CountryContent;
