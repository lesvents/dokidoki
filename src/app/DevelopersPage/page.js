"use client";

import Footer from "../components/Footer";
import "../styles/DevelopersPage.module.css";
import { developersList, logosList } from "../data/Lists.js";
import Image from "next/image";
import styles from "../styles/DevelopersPage.module.css";
import Player_lottie from "../components/LoadingAmin";
import Link from "next/link";

export default function Developer() {
  return (
    <div id={styles.container}>
      <Player_lottie />
      <Body />
    </div>
  );
}

function Body() {
  return (
    <>
      <div
        // className="flex flex-col items-center space-y-8 p-6"
        id={styles.body_container}
      >
        <Team />
        <Technology />
      </div>
      <Footer path="/GamePage" />
    </>
  );
}

function Team() {
  return (
    <div id={styles.division_container}>
      <Division job="程序" />
      <Division job="美术" />
      <Division job="策划" />
    </div>
  );
}

function Division({ job }) {
  return (
    <div id={styles.division}>
      <p id={styles.division_title}>{job}</p>
      {developersList
        .filter((e) => job === e.job)
        .map((e) => (
          <Card headshot={e.headshotSrc} name={e.name} key={e.id} />
        ))}
    </div>
  );
}

function Card({ headshot, name }) {
  return (
    <Link
      href="https://www.taptap.cn/poster/NEzmMvINUugV?share_id=9f7afdcf9542&invite_id=3228&user_id=484028779&utm_medium=share&invite_code=aj9LJJXD&utm_source=mobile_qq"
      target="_blank"
      rel="noopener noreferrer"
      title="请相信我们吧✨"
    >
      <div id={styles.card}>
        <Image
          src={headshot}
          alt=""
          width={60}
          height={60}
          id={styles.headshot}
        />
        <span id={styles.name_container}>
          <label id={styles.name}>{name}</label>
        </span>
      </div>
    </Link>
  );
}

function Technology() {
  return (
    <div>
      <div className="max-w-md mx-auto p-6 bg-(255,255,255)-100 rounded-lg shadow-lg">
        <label id={styles.about_title}>相关技术</label>
        <LogoDivision name="unity" />
        <LogoDivision name="next.js" />
      </div>

      <Letter />
    </div>
  );
}

function LogoDivision({ name }) {
  return (
    <div id={styles.tec}>
      {logosList
        .filter((e) => name === e.name)
        .map((e) => (
          <LogoCard key={e.id} imgSrc={e.imgSrc} name={e.name} />
        ))}
    </div>
  );
}

function LogoCard({ imgSrc, name }) {
  return (
    <div>
      <Image src={imgSrc} alt="" width={100} height={100} />
      <label>{name}</label>
    </div>
  );
}

function Letter() {
  return (
    <div
      id={styles.letter}
      className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg"
    >
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        致辞
      </h1>
      <p className="text-gray-700 text-base mb-4 leading-relaxed">
        这是大学生业余时间所制作的游戏,起源自一次gamejam,希望在我们激情创作的同时也给大家带来了乐趣
      </p>
      <p className="text-gray-700 text-base mb-4 leading-relaxed">
        本网站使用了next.js,虽然体量很小但也是我第一次尝试next.js了(感想 好用啊)
      </p>
      <p className="text-gray-700 text-base leading-relaxed">
        欢迎来玩家群也说出你的感想呀:
        <span className="font-semibold text-blue-600"></span>952703175
      </p>
    </div>
  );
}
