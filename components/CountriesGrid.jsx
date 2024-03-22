"use client";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CountriesGrid({ data }) {
  const [option, setOption] = useState('');
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(data);
  const router = useRouter();
  
  useEffect(() => {
    const filteredByRegion = data.filter(country => {
      if (option === '') {
        return true; 
      }
      return country.region.toLowerCase() === option;
    });

    const filteredBySearch = filteredByRegion.filter(country =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredCountries(filteredBySearch);
  }, [option, search, data]);

  const handleClick = () => {

  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: "3rem",
          gap: "10rem",
        }}
      >
        <FormControl sx={{ width: "25rem" }} variant="outlined">
          <InputLabel htmlFor="search">Search for a country</InputLabel>
          <OutlinedInput
            id="search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            label="Search for a country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ width: "15rem" }}>
          <InputLabel id="region">Filter by Region</InputLabel>
          <Select
            labelId="region"
            id="region"
            value={option}
            label="America"
            onChange={(e) => setOption(e.target.value)}
          >
            <MenuItem value="">-- Select a Region --</MenuItem>
            <MenuItem value="africa">Africa</MenuItem>
            <MenuItem value="americas">Americas</MenuItem>
            <MenuItem value="asia">Asia</MenuItem>
            <MenuItem value="europe">Europe</MenuItem>
            <MenuItem value="oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={2}>
        {filteredCountries.map((country) => (
          <Grid xs={12} sm={6} md={4} lg={3} item key={country.name.official}>
            <Card onClick={handleClick} sx={{ maxWidth: 600 }}>
              <CardMedia
                sx={{ height: 180, backgroundColor: "blue" }}
                image={country.flags.svg}
                title={country.name.common}
              />
              <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {country.name.common}
                </Typography>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Population: </strong> {country.population}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Region: </strong> {country.region}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Capital: </strong> {country.capital}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
