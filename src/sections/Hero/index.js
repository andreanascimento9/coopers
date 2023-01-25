/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./style.css";

import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Typography from "../../components/Typography";
import BannerBg from "../../img/banner-hero.svg";
import BannerBgFoto from "../../img/foto-banner.svg";
import ArrowDown from "../../img/arrow-down.svg";

const Hero = () => {
    return (
        // eslint-disable-next-line react/style-prop-object
        <section>
            <div className="container d-flex flex-wrap items-center justify-between">
                <div className="coopers-banner-left">
                    <div className="coopers-banner-title">
                        <Title title="Organize" />
                        <Subtitle title="your daily jobs" />
                    </div>

                    <Typography title="The only way to get things done" />

                    <a href="#" className="btn-green">Go to to-do list</a>
                </div>

                <div className="coopers-banner-right">
                    <img className="banner-bg" alt="banner" src={BannerBg} />
                    <img className="banner-bg-foto" alt="banner" src={BannerBgFoto} />
                </div>
            </div>

            <div className="align-center">
                <img alt="seta" src={ArrowDown} />
            </div>

        </section >
    )
}
export default Hero;