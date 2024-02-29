"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import {Box,Typography,Grid,Link} from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MERRAGE_PROPOSAL } from "@/app/constant/content";
import { COLORS } from "@/app/constant/color";




const Resizable =()=> {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState("100%");


  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,  
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    lazyLoad:true,
    touchMove:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <div
        style={{
          width: width + "px",
          display: display ? "block" : "none",
         padding:"10px",
         position:'relative',
         background:"#e0e0e0",
         height:"550px",
        }}
      >
        <img 
        src={"https://wedding-wonders.bugfinder.net/assets/uploads/content/63414f1d42e591665224477.png"}
        style={{position:"absolute",top:0,filter:"opacity(70%)",marginTop:"40px"}}
        alt="logo...."
         />
        <Typography sx={{textAlign:"center",fontFamily:"fantasy",fontSize:{md:80,sm:60,xs:50}}}>MERRAGE PROPOSAL</Typography>
        <Slider {...settings}>
                {MERRAGE_PROPOSAL.map((item,i)=>(
                    <Box key={item} sx={{textAlign:"center",height:"150px",p:3,mt:8}}>
                   <Typography sx={{color:"red",p:5,fontSize:{md:20,sm:20,xs:13}}}>{item.title}</Typography>
                   {MERRAGE_PROPOSAL[i].person.map((e)=>(
                     <Link key={e} href={"#"} sx={{p:1,textDecoration:"none","&:hover":{color:"gray",textDecoration:"underline"},fontSize:{md:14,sm:20,xs:12}}}>{e}</Link>
                     ))}
                     <Typography sx={{display:{md:"block",sm:"block",xs:"none"}}}>More...</Typography>
                    </Box>
                ))}
        </Slider>
      </div>
    </div>
  );
}

export default Resizable;
