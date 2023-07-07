import React from "react";
import "./Intro.css";
import { FloatingDiv } from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Vector3 from "../../img/vector3.png";
// import Boy from "../../img/boy.png";
import Doraemon from "../../img/doraemon.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am </span>
          <span>グェンヴァン</span>
          <span
            style={{
              maxWidth: "450px",
            }}
          >
            　私は積極的な行動ができることです。様々な挑戦してみたい気持ちがありITの分野を選びました。
            　ウェブ開発に興味があり、ウェブサイトを作成してお客様を喜ばせたいです。勉強だけではなく自分がインターネットで調べてPHPララベルフレームワークの研修授業を受けました。ネットからアクセスが可能なベトナム料理の注文ができるサイトを作成し、ウェブ開発の経験をもって、ミスが出たら調べて修正することでお客様に貢献します。
            個人的なプロジェクト、または会社に入ってから主な案件はreactjs,
            nodejs, typescriptを使用しています。
            またはプロジェクト管理ツールのbacklog、開発手法アジャイル·スクラムも使用できます。
            何事にも真面目に取り組み、集中してやり続ける力を貴社でも発揮したいと思っています。
          </span>
        </div>
        <button className="button i-button">hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Vector3} alt="" />
        <img src={Doraemon} alt="" />
        <img src={Glassesimoji} alt="" />

        <div style={{ top: "64%" }}>
          <FloatingDiv image={Crown} txt1={"Web"} txt2={"Develope"} />
        </div>
        {/* blur div */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            left: "-7rem",
            background: "#C1F5FF",
            top: "8rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};
// <FloatingDiv image={Thumbup} txt1={"best design"} txt2={"award"} />
// <div style={{ top: "-4%", left: "60%" }}>
// <FloatingDiv image={Crown} txt1={"Web"} txt2={"Develope"} />
// </div>
