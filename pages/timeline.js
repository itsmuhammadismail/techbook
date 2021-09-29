import Head from "next/head";
import Layout from "../components/Layout";
import Box from "../components/Timeline/Box";
import Hero from "../components/Timeline/Hero";
import Zoom from "react-reveal/Zoom";

import { google } from "googleapis";
import { useEffect, useState } from "react";

// Config variables
const SPREADSHEET_ID = "1SHsVkzhnx5qCPc9UXubvsa7NnFOaazf_Zc_vHdVc61A";
const SHEET_ID = "1602677078";
const CLIENT_EMAIL = "timline@timeline-326009.iam.gserviceaccount.com";
const PRIVATE_KEY =
  "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCRrnLubIGQHZur\nOeyZO3Uh4ukIVzMDGo6ySKiZT7CMKf+nDCdtftZagcVBEyIGSiqpDXsCt6d9oOPB\n1ABC1fmzmDstJbtZ33SU9H4tBf6o6hlS9WPXC58YpIEx4PhZfZcHC/cKEy9kbsvm\njwdntDOKsPFrKVPjvxX5xmtACUlVlQut2hzffixvii8zuWnQNksBnIwu1ooy8nyW\nrDCDdTrWDTocgryk5We+9OI6r8+znVRJVhKbeh9MpzWDvKYEYC+/M4WVlt0uckS7\nWkt1xXH73QG9PGPjsZlJKm3pPfYyy/95oi7Y7OEUTnkHrB5glbwHfnUD6fYrPvMV\nlE5OFSydAgMBAAECggEAAei2Hz0cC6XIH5S1J5hW5T6Wx3IBv9++9+dJ5oii8NLT\nEdfakaMP5KSQiGp36IkGcF2gxiz7GPw15Er778fVbvsxdcVNR+aiFoxj/MgbzR4i\nqRjkK6BT413AuKiGMJ3NgcRwO5zClN3CC8TwcKcYZexl8mE+PBlQ6Sftu11JH1AZ\np0WD/rAkjBJxDpBrXRgyhb8TOdIGL74ig4yhHgDC+N21Qnvdr7zgX9wLgTEBNqIW\nxpgW5CD9iIOliNvVrvtHvuB5PtJ/cwQ1jzy6qIDH3r9ltDsU5waf8tfsroGpXqWu\n4rZS5nmAA7Y5eiGI5FO3cGTqnK/PE1vV3cRyFYf+kQKBgQDJwIjFTS5cGqHM3idb\nK4goYxuouvPppQ6YzjoOJcGklQDtuOuHV1Ie6MD0nlcqq1ADjzxzfAmbG5RZ0RY9\nrMGOBz9EfM/oT/cqidhHcg95sknDy68lK9iMRGNDS1dkVzlKecyMm1g0RE3ptvBr\nPzjL6GNbbNQBFY7dnn3/SODycQKBgQC42lSZfvpRBnjxg6x1pS8GC1WqaH3c6YGc\nFmcnmeCBn4NhXzTBUNGowDfPiF8dc8FsT9Jy9yqqaXEKIb5VSUfi8eAQUiDKZ10l\niWY5qt2UNDtYWjplCChzCEbl7Y/UbgjfbOOV5ZdxowK7HHcABTgk5DwteS8/8i8R\nlZCV9Kla7QKBgQCzHPqP55ib7ozs++GG4FvuNybMIsX/DSmrYZNLEhwbiKmdY0m/\nCzf99vevdI/Acv0DW/v4Lwu8J70KDEWplaD0/dweaoyOG8g8fMqFi27PxQgWCtPA\ntW94ABL8IHxCuelEBGQkBJpHNMjTEDXbkPJUnUjwVurU15XRjS8hIEuNEQKBgBmY\nygwzRBBCOC8hT5k+1WMd4K/nJj6X6wWlKIWYTjlE0FmEaHa4bT/T1iabuKgIZmlM\nKFUZGsRcM3X2tDd1HUo0uhUoejfs1j4jZ49mtKYYEXuritiAp7E+HSsrmTYOQpZF\nqsIP98eZjgBA8c2D64FYRWj6leth6tihgFLzfRwFAoGAE1MO8+/UUAGL8XHd1sFJ\nCX0gxnYEHE5npxAEO/b+UNP+Tk1r7eD8at0y0/EIaY42vu+JZe9Z7/bnObEMGe8J\n+kvLwSfAFD8g3MAeHbR48oncN0GthiyPDO78+t2q5Xbv6NDu0Jg7jb29TRLCpMrZ\ntuUyTIGdmorJRYM+F+MdnS8=";

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var date = new Date();

export default function Timeline({ data }) {
  const [nir, setNir] = useState([]);
  const [project, setProject] = useState([]);
  useEffect(() => {
    let newNir = [];
    let newProjects = [];
    data.map((d) => {
      let tdate = d[13];
      let tmonth = "";
      if (tdate !== undefined) tmonth = tdate.split("/");
      console.log(typeof tmonth);
      if (typeof tmonth !== "string" && +tmonth[1] === date.getMonth() + 1)
        if (d[2] === "NIR") {
          newNir.push(d);
        } else if (d[2] === "Project") {
          newProjects.push(d);
        }
    });
    setProject(newProjects);
    setNir(newNir);
  }, [data]);

  return (
    <div>
      <Head>
        <title>Techbook</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <img
          className="absolute mt-[135rem] w-32 "
          src="/home/keyFigures.svg"
        />
        <img
          className="absolute right-0  w-32 mt-[60rem]"
          src="/home/keyFigures.svg"
          style={{ transform: "scaleX(-1)" }}
        />
        <div className="lg:container mx-auto">
          <Hero />

          <div className="flex flex-col justify-center items-center mb-[6rem]">
            <Zoom delay={500}>
              <div className="top-timeline">
                {months[date.getMonth()]} {date.getFullYear()}
              </div>
            </Zoom>
            <div className="flex justify-center items-center gap-4">
              <div className="">
                {project.map((n, index) => (
                  <Box
                    key={index}
                    text={n[5]}
                    date={`${n[13]} (${n[4]})`}
                    color="#E0E0E0"
                    anim="left"
                  />
                ))}
              </div>
              <div className="line-timeline self-stretch"></div>
              <div className=" flex flex-col">
                <div className="">
                  {nir.map((n, index) => (
                    <Box
                      key={index}
                      text={n[5]}
                      date={`${n[13]} (${n[4]})`}
                      color="#B2EBF2"
                      anim="right"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: `Task_Table!A1:N1000`,
  });

  return {
    props: {
      data: response.data.values,
    },
  };
}
