import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router";
import {
  GiBelt,
  GiSkirt,
  GiFurBoot,
  GiShoppingBag,
  GiChelseaBoot,
  GiEmeraldNecklace,
  GiHighHeel,
  GiLipstick,
  GiDelicatePerfume,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { FaTshirt } from "react-icons/fa";

const filterItems = [
  {
    id: 1,
    name: "Belt",
    icon: <GiBelt />,
  },
  {
    id: 2,
    name: "Skirts",
    icon: <GiSkirt />,
  },

  {
    id: 3,
    name: "Boots",
    icon: <GiFurBoot />,
  },

  {
    id: 4,
    name: "Jewerly",
    icon: <IoDiamond />,
  },

  {
    id: 5,
    name: "Handbag",
    icon: <GiShoppingBag />,
  },

  {
    id: 6,
    name: "Footwear",
    icon: <GiChelseaBoot />,
  },

  {
    id: 7,
    name: "Sport",
    icon: <MdOutlineSportsVolleyball />,
  },

  {
    id: 8,
    name: "Tshirt",
    icon: <FaTshirt />,
  },

  {
    id: 9,
    name: "Accessories",
    icon: <GiEmeraldNecklace />,
  },

  {
    id: 10,
    name: "High-Heels",
    icon: <GiHighHeel />,
  },

  {
    id: 11,
    name: "Make-up",
    icon: <GiLipstick />,
  },

  {
    id: 12,
    name: "Perfume",
    icon: <GiDelicatePerfume />,
  },
];

export default function Filters() {
  return (
    <Grid
      container
      sx={{
        justifyItems: "center",
        maxWidth: 1104,
        marginInline: "auto",
      }}
    >
      {filterItems.map((item) => {
        return (
          <Grid key={item.id} size={3}>
            <Box>
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  marginLeft: 60,
                  color: "black",
                  textDecoration: "none"
                }}
                to={`/products/${item.name.toLowerCase()}`}
              >
                {item.icon}
                <p>{item.name}</p>
              </Link>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
