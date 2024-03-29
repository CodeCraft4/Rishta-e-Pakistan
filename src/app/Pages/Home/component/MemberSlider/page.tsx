"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PREMIUM_MEMBERS } from "@/constant/content";
import { COLORS } from "@/constant/color";
import Image from "next/image";

const PremiumMember = () => {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState("100%");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <div
        style={{
          width: width + "px",
          display: display ? "block" : "none",
          padding: "10px",
          position: "relative",
          marginTop: "10%",
        }}
      >
        <Image
          src={
            "https://wedding-wonders.bugfinder.net/assets/uploads/content/6332933b3d1851664258875.png"
          }
          alt="sideImg"
          width={100}
          height={100}
          style={{
            position: "absolute",
            marginLeft: "-10%",
            filter: "opacity(60%)",
          }}
        />
        <Box>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontFamily: "fantasy",
              p: 2,
              fontSize: { md: 60, sm: 60, xs: 50 },
            }}
          >
            Premium Members
          </Typography>
          <Slider {...settings}>
            {PREMIUM_MEMBERS.map((item) => (
              <Box
                key={item.profileImg}
                sx={{ p: 3, mt: 8, textAlign: "center" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    m: "auto",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={item.profileImg}
                    alt="profileImage"
                    width={200}
                    height={200}
                    style={{ borderRadius: "50%",border:`2px solid ${COLORS.blueLight.main}` }}
                  />
                </Box>
                <Typography
                  sx={{ mt: 4, fontSize: { md: 18, sm: 18, xs: 15 } }}
                >
                  {item.name}
                </Typography>
                <Typography sx={{ pt: 1 }}>
                  <b>Married:</b>
                  {item.married}
                </Typography>
                <Typography sx={{ pt: 1 }}>
                  <b>Age:</b>
                  {item.age}
                </Typography>
                <Typography sx={{ pt: 1 }}>
                  <b></b>
                  {item.profession}
                </Typography>
                <Typography sx={{ pt: 1 }}>
                  <b>From:</b>
                  {item.from}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </div>
    </div>
  );
};

export default PremiumMember;
