import React from "react";
import { COLORS } from "@/constant/color";
import { Box, Button, Container, Typography } from "@mui/material";
import { PACKAGE_CARD } from "@/constant/content";
import CheckIcon from "@mui/icons-material/Check";
import Grid from "@mui/material/Grid";
import CustomizeButton from "@/components/Button/Button";
import WebhookIcon from '@mui/icons-material/Webhook';

const PackageCard = () => {
  return (
    <div>
      <Box sx={{ bgcolor: "#e0e0e0", p: { md: 16, sm: 5, xs: 1 } }}>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontFamily: "fantasy",
            p: 2,
            fontSize: { md: 60, sm: 60, xs: 50 },
          }}
        >
          PACKAGE
        </Typography>
        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <Grid container spacing={5}>
            {PACKAGE_CARD.map((data, i) => (
              <Grid item md={4} sm={6} xs={12} key={i}>
                <Box
                  sx={{
                    borderRadius: "8px",
                    p: 2,
                    border: "1px solid #bdbdbd",
                    bgcolor: "white",
                    width: "100%",
                    boxShadow:"3px 5px 15px gray"
                  }}
                >
                  <WebhookIcon
                    sx={{
                      bgcolor: "black",
                      color:"orange",
                      fontSize: 80,
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      m: "auto",
                      p:1
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      fontSize: { md: 25, sm: 40, xs: 25 },
                      pt:5,
                      fontWeight:"bold",
                      fontStyle:"italic"
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography sx={{textAlign: "center",fontSize:{md:40,sm:35,xs:25} }}>
                    <small>$</small>
                    <b>{data.price}</b>
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", p: 1 }}
                  >
                    <CheckIcon sx={{ color: COLORS.primary.main }} />
                    {data.tip1}
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", p: 1 }}
                  >
                    <CheckIcon sx={{ color: COLORS.primary.main }} />
                    {data.tip2}
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", p: 1 }}
                  >
                    <CheckIcon sx={{ color: COLORS.primary.main }} />
                    {data.tip3}
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", p: 1 }}
                  >
                    <CheckIcon sx={{ color: COLORS.primary.main }} />
                    {data.tip4}
                  </Typography>
                  <CustomizeButton title={"PURCHASE"} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default PackageCard;
