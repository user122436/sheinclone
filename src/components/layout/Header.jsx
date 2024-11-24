import {
  AppBar,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

const pages = [
  {
    id: 1,
    name: "Products",
  },
  {
    id: 2,
    name: "Cart",
  },
];

export default function Header() {
  return (
    <AppBar
      sx={{
        position: "static",
      }}
    >
      <Container>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h6">My App</Typography>
            <Stack direction="row" gap={3}>
              {pages.map((page) => (
                <Link
                  key={page.id}
                  sx={{
                    color: { xs: "primary", sm: "white" },
                    cursor: "pointer",
                  }}
                >
                  {page.name}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
