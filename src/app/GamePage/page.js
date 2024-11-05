"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import { roleslist, storiesList } from "../data/Lists";
import { motion } from "framer-motion";
import styles from "../styles/GamePage.module.css";
import Player_lottie from "../components/LoadingAmin";
import Link from "next/link";

export default function Game() {
  return (
    <div>
      <Player_lottie />
      <Body />
    </div>
  );
}

function Body() {
  return (
    <div id={styles.container}>
      <Story />
      <Role />
      <Footer path="/DevelopersPage" />
    </div>
  );
}

function Story() {
  return (
    <div id={styles.story_container}>
      {" "}
      {/* 使用flex并增加间距 */}
      {storiesList.map((e) => (
        <Display content={e.description} imgSrc={e.imgSrc} key={e.id} />
      ))}
    </div>
  );
}

function Display({ content, imgSrc }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初始透明度为0
      animate={{ opacity: 1 }} // 动画到透明度1
      transition={{ duration: 2 }} // 动画持续时间
      id={styles.phraghraph}
    >
      <div id={styles.content}>{content}</div>
      <Link
        href="https://www.taptap.cn/app/727299"
        target="_blank"
        rel="noopener noreferrer"
        title="请愉快玩耍吧😍"
      >
        <Image src={imgSrc} alt="" width={100} height={100} id={styles.img} />
      </Link>
    </motion.div>
  );
}

function Role() {
  return (
    <div className="space-y-8 p-4 w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center mb-4">人物简介</h1>

      {/* 显示 state 为 true 的图片 */}
      <div className="flex flex-wrap justify-center gap-4">
        {roleslist
          .filter((e) => e.state)
          .map((e) => (
            <div
              key={e.id}
              className="w-24 sm:w-32 md:w-40 text-center flex flex-col items-center"
            >
              <Link
                href="https://www.taptap.cn/app/727299"
                target="_blank"
                rel="noopener noreferrer"
                title="请支持我们吧✨"
              >
                <Image
                  src={e.imgSrc}
                  alt={e.name}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <label className="mt-2 text-sm">{e.name}</label>
              </Link>
            </div>
          ))}
      </div>

      {/* 显示 state 为 false 的图片 */}
      <div className="flex flex-wrap justify-center gap-4">
        {roleslist
          .filter((e) => !e.state)
          .map((e) => (
            <div
              key={e.id}
              className="w-24 sm:w-32 md:w-40 text-center flex flex-col items-center"
            >
              <Link
                href="https://www.taptap.cn/app/727299"
                target="_blank"
                rel="noopener noreferrer"
                title="请支持我们吧✨"
              >
                <Image
                  src={e.imgSrc}
                  alt={e.name}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
