"use client";
//在next.js13+中，所有的组件都是服务端组件，而我在客户端使用需要提前说一下"use client";
import { useRouter } from "next/navigation";
import styles from "../app/styles/page.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>明离影来</title>
        <meta
          name="taptap_gamejam_dokodoki_明离影来"
          content="这是明离影来的官网"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "产品名称",
            image: "https://example.com/image.jpg",
            description: "产品描述",
            sku: "产品SKU",
            offers: {
              "@type": "Offer",
              url: "https://example.com/product-page",
              priceCurrency: "USD",
              price: "free",
              itemCondition: "https://schema.org/NewCondition",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Head>
      <div id={styles.bottom_layer}> </div>
      <div id={styles.upper_layer}> </div>
      <Body />
    </>
  );
}

function Body() {
  return (
    <div className="flex flex-col items-center space-y-8 p-6">
      <Title />
      <Button />
    </div>
  );
}

function Title() {
  return (
    <div>
      <h1 id={styles.title}>
        <Link
          href="https://www.taptap.cn/app/727299"
          target="_blank"
          rel="noopener noreferrer"
          title="请持续关注dokidoki吧✨"
        >
          明离影来
        </Link>
      </h1>
    </div>
  );
}

function Button() {
  return (
    <div id={styles.btn_container}>
      <DetailsButton label="看看游戏" targetpath="/GamePage" />
      <DetailsButton label="看看开发者" targetpath="/DevelopersPage" />
    </div>
  );
}

function DetailsButton({ label, targetpath }) {
  //使用路由
  const router = useRouter();
  //点击按钮可以到对应的API
  function handleClick(e) {
    e.preventDefault();
    router.push(targetpath);
  }
  return (
    <button id={styles.btn} onClick={handleClick}>
      {label}
    </button>
  );
}
