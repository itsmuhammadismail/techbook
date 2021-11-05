import Head from "next/head";
import Hero from "../components/Home/Hero";
import Layout from "../components/Layout";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import KeyFigures from "../components/Home/KeyFigures";
import Upcoming from "../components/Home/Upcoming";
import Resources from "../components/Home/Resources";
import Process from "../components/Home/Process";
import Teams from "../components/Home/Teams";
import Project from "../components/Home/Project";
import ProcessSvg from "../components/Home/ProcessSvg";
import { google } from "googleapis";

const GOOGLE_SHEETS_CLIENT_EMAIL =
  "timline@timeline-326009.iam.gserviceaccount.com";
const PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCkwxVn7nJQYHZA\ntl+lEOFDCf2PVzyHzyoMuYkYziWvFTKFylBPhDSHYIsCbO383CFFlrs+x65+2Xwv\n+OV6KqfM8JLOs7A/Ydkcp9Jz0v1QrQn2KgU8LBOuXWhwVSgBzS8Jipfu/q+1M2zR\nSC/zZaEiziuqutE/8X+3LvpPfILOzOjSzC5LeJlFGmTWKkuHPVz7YGkBGZGY3S+6\nfJa6peor5dm3yOOksoQnhTgVqHuriCYa5UtmbqDppsNXQbDb/gDNHkAY/KUAwMAu\nRJeDG/S77dFTq1jvNbvuSk1CQcXQShy8o8Ig+oizZEr7Fhh19IMTQ7+UgDt1hfYb\nh4jbRTsTAgMBAAECggEACpm0kF3ChBJYuVwidjPKUm5bnnPN5Kz69xueyvZEbWnP\nONVl6l/Go2keOHc6rpiZGWmTvXvKacXjXBDG7t+8sQ5PW7Yq4kEQ32uaujH6c0zW\nxbw5XwA0+fRvij6oVslVO+drVAiV1HItD5/12dKRlfQu0gq3+MW4YlhG6YNIxTZG\nVlsw9Ld89FPglAHLXese4pDT2PyrneZPRgWvDs/Q0PHTAOy3Tr96i/i6pFKgj+Vo\nvipmLUqGsJ6sYmAfOSiU4sZeYFs47yqgC/C2Y2s/JqvLIaWX7tqWfl++2AdNitP3\nPZn/0m5l1rBwGlG+w2fh42BkaueIZMWnMWd7etg9/QKBgQDWxtISqxoyZ02GUMQ2\nd340zLWYZiVfUqscLLgVH2nh4yCm2mRo+H98QWRGLyFUijK7CZJPV4+3sTuY7jIH\nf8QPwMC6wQl/nUZTiDheE4jhAyalFTxya6OPSAOaO595YSrpwdanpP/lu1Bvkejo\npE9MLZJSnzTtdC2LLQK5ldUpBwKBgQDEYsQF9Qmih2onec9l62E+mtDrBu6yCtJp\nQviAue7bdiz9/4+h9OrLN+yC+R7StMduMJ0QqK1PFuHr9pW2Nu30m9jaFiFFXHZQ\nM0Chfc3As1j1dAem1AvDX74UdHyfDsS7N67ATE4pmMU3Ay+7VIkdzoOCEY85tVQr\ne3STYzRWlQKBgQCR0kuvARy4PAsWtp+Bm3/EuXhSEIgvQCGM74/MR5fMFjmFD6I8\n4vsrkfpS7IzkqS/obYc492pMfbjJDHBLRyQGzggMxCN+0Xl+HW6n8PtuSoVicBiq\nVwqlrW9EuFZ+QsqwCzuCdzSG9baXCanoyiZMwmQmVJHK5qZFaDoBZwli4QKBgCUK\nX+CjxAp0sg/6CKU3jSLqvmbl6tWH9wHFkOtupl+cXYYW0reAY1yrEp/tbuPdFxRw\ndN90gSO+tCP2YWx51c3iKzePHv1fIC2mTRVojgs/iJLbLKpJqmJSR57CDdNOTMrn\nCL3aZo+v8dqbbkBOBIKrteAtga8nxVViNq2p83A1AoGAMHxJAOytw79VWSXDQRmf\n3V1iYyijUr/GiZ6MWVsWBtWyvoQNLkWXI9Ypc0Db/0Xd1NxagfsMit5fm42PZLd+\nhwsk8nwEJNKDzuqm0AVBC7LCq7tNGwB89i3AvYMJEAPxh8pGg0n2t8WrdLb9htTH\npaEZ5ZV9CQVFvY39bvV4wCo=\n-----END PRIVATE KEY-----\n";

export default function Home({ data, dataKey }) {
  const scrollRef = useRef();
  const scrollAnim = gsap.utils.selector(scrollRef);

  useEffect(() => {
    gsap.to(scrollRef.current, { y: 22, yoyo: true, repeat: -1, duration: 1 });
  }, []);

  return (
    <div>
      <Head>
        <title>Techbook</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        {/* Hero Section */}
        <Hero />
        {/* Scroll Start */}
        <a href="#keyFigures" className="flex justify-center items-center">
          <svg
            id="Scroll"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={37}
            height={56}
            viewBox="0 0 37 56"
          >
            <defs>
              <clipPath id="scroll_clippath">
                <rect
                  id="Rectangle_16"
                  data-name="Rectangle 16"
                  width={37}
                  height={56}
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Group_18"
              data-name="Group 18"
              clipPath="url(#scroll_clippath)"
            >
              <path
                id="Path_180"
                data-name="Path 180"
                d="M18.6,0A18.656,18.656,0,0,0,0,18.6V37.2a18.6,18.6,0,0,0,37.2,0V18.6A18.656,18.656,0,0,0,18.6,0"
                fill="#ed1818"
              />
              <path
                id="Path_181"
                data-name="Path 181"
                d="M29.9,34.553a13.951,13.951,0,0,1-27.9,0v-18.6a13.951,13.951,0,0,1,27.9,0Z"
                transform="translate(2.65 2.65)"
                fill="#ed1818"
              />
              <path
                id="Path_182"
                className="scrollNotch"
                ref={scrollRef}
                data-name="Path 182"
                d="M9.325,5.5A2.2,2.2,0,0,0,7,7.825V14.8a2.2,2.2,0,0,0,2.325,2.325A2.2,2.2,0,0,0,11.65,14.8V7.825A2.2,2.2,0,0,0,9.325,5.5"
                transform="translate(9.276 7.289)"
                fill="#fff"
              />
            </g>
          </svg>
        </a>
        {/* Scroll End */}
        {/* Key Figures */}
        <KeyFigures data={dataKey} />
        {/* Upcoming */}
        <Upcoming data={data} />
        {/* Project Dashbaord */}
        <Project />
        {/* Teams */}
        <Teams />
        {/* Process */}
        <Process />
        {/* Resources */}
        <Resources />
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
  const auth = new google.auth.JWT(
    GOOGLE_SHEETS_CLIENT_EMAIL,
    null,
    PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes
  );

  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: "1SHsVkzhnx5qCPc9UXubvsa7NnFOaazf_Zc_vHdVc61A",
    range: `Upcoming_Deadlines!A2:E4`,
  });
  const keyRes = await sheets.spreadsheets.values.get({
    spreadsheetId: "1SHsVkzhnx5qCPc9UXubvsa7NnFOaazf_Zc_vHdVc61A",
    range: `key_figures!A2:C1000`,
  });

  return {
    props: {
      data: response.data.values,
      dataKey: keyRes.data.values,
    },
  };
}
