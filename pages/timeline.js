import Head from "next/head";
import Layout from "../components/Layout";
import Box from "../components/Timeline/Box";
import Hero from "../components/Timeline/Hero";
import Zoom from "react-reveal/Zoom";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { google } from "googleapis";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box2 from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

// import { getData } from "../lib/api";

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      // hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box2 sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box2>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Config variables
const SPREADSHEET_ID = "1SHsVkzhnx5qCPc9UXubvsa7NnFOaazf_Zc_vHdVc61A";
const SHEET_ID = "1602677078";
const GOOGLE_SHEETS_CLIENT_EMAIL =
  "timline@timeline-326009.iam.gserviceaccount.com";
const PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCkwxVn7nJQYHZA\ntl+lEOFDCf2PVzyHzyoMuYkYziWvFTKFylBPhDSHYIsCbO383CFFlrs+x65+2Xwv\n+OV6KqfM8JLOs7A/Ydkcp9Jz0v1QrQn2KgU8LBOuXWhwVSgBzS8Jipfu/q+1M2zR\nSC/zZaEiziuqutE/8X+3LvpPfILOzOjSzC5LeJlFGmTWKkuHPVz7YGkBGZGY3S+6\nfJa6peor5dm3yOOksoQnhTgVqHuriCYa5UtmbqDppsNXQbDb/gDNHkAY/KUAwMAu\nRJeDG/S77dFTq1jvNbvuSk1CQcXQShy8o8Ig+oizZEr7Fhh19IMTQ7+UgDt1hfYb\nh4jbRTsTAgMBAAECggEACpm0kF3ChBJYuVwidjPKUm5bnnPN5Kz69xueyvZEbWnP\nONVl6l/Go2keOHc6rpiZGWmTvXvKacXjXBDG7t+8sQ5PW7Yq4kEQ32uaujH6c0zW\nxbw5XwA0+fRvij6oVslVO+drVAiV1HItD5/12dKRlfQu0gq3+MW4YlhG6YNIxTZG\nVlsw9Ld89FPglAHLXese4pDT2PyrneZPRgWvDs/Q0PHTAOy3Tr96i/i6pFKgj+Vo\nvipmLUqGsJ6sYmAfOSiU4sZeYFs47yqgC/C2Y2s/JqvLIaWX7tqWfl++2AdNitP3\nPZn/0m5l1rBwGlG+w2fh42BkaueIZMWnMWd7etg9/QKBgQDWxtISqxoyZ02GUMQ2\nd340zLWYZiVfUqscLLgVH2nh4yCm2mRo+H98QWRGLyFUijK7CZJPV4+3sTuY7jIH\nf8QPwMC6wQl/nUZTiDheE4jhAyalFTxya6OPSAOaO595YSrpwdanpP/lu1Bvkejo\npE9MLZJSnzTtdC2LLQK5ldUpBwKBgQDEYsQF9Qmih2onec9l62E+mtDrBu6yCtJp\nQviAue7bdiz9/4+h9OrLN+yC+R7StMduMJ0QqK1PFuHr9pW2Nu30m9jaFiFFXHZQ\nM0Chfc3As1j1dAem1AvDX74UdHyfDsS7N67ATE4pmMU3Ay+7VIkdzoOCEY85tVQr\ne3STYzRWlQKBgQCR0kuvARy4PAsWtp+Bm3/EuXhSEIgvQCGM74/MR5fMFjmFD6I8\n4vsrkfpS7IzkqS/obYc492pMfbjJDHBLRyQGzggMxCN+0Xl+HW6n8PtuSoVicBiq\nVwqlrW9EuFZ+QsqwCzuCdzSG9baXCanoyiZMwmQmVJHK5qZFaDoBZwli4QKBgCUK\nX+CjxAp0sg/6CKU3jSLqvmbl6tWH9wHFkOtupl+cXYYW0reAY1yrEp/tbuPdFxRw\ndN90gSO+tCP2YWx51c3iKzePHv1fIC2mTRVojgs/iJLbLKpJqmJSR57CDdNOTMrn\nCL3aZo+v8dqbbkBOBIKrteAtga8nxVViNq2p83A1AoGAMHxJAOytw79VWSXDQRmf\n3V1iYyijUr/GiZ6MWVsWBtWyvoQNLkWXI9Ypc0Db/0Xd1NxagfsMit5fm42PZLd+\nhwsk8nwEJNKDzuqm0AVBC7LCq7tNGwB89i3AvYMJEAPxh8pGg0n2t8WrdLb9htTH\npaEZ5ZV9CQVFvY39bvV4wCo=\n-----END PRIVATE KEY-----\n";

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
  const [nir2, setNir2] = useState([]);
  const [nir3, setNir3] = useState([]);
  const [project, setProject] = useState([]);
  const [project2, setProject2] = useState([]);
  const [project3, setProject3] = useState([]);
  const [department, setDepartment] = useState("All Department");
  const [menu, setMenu] = useState([]);

  const [value, setValue] = useState(0);
  const classes = useTabStyles();

  const handleValue = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  useEffect(() => {
    let newMenu = [];
    if (data) {
      data.map((d) => {
        if (
          !newMenu.includes(d[8]) &&
          d[8] !== "" &&
          d[8] !== undefined &&
          d[8] !== "Department"
        ) {
          newMenu.push(d[8]);
        }
      });
    }
    console.log(newMenu);
    setMenu(newMenu);
  }, [data]);

  const handleData = (depart) => {
    let newNir = [];
    let newNir2 = [];
    let newNir3 = [];
    let newProjects = [];
    let newProjects2 = [];
    let newProjects3 = [];

    data.map((d) => {
      let tdate = d[13];

      let tmonth = "";
      if (tdate !== undefined) tmonth = tdate.split("/");
      if (depart === null || depart === d[8]) {
        // console.log(+tmonth[2] === date.getFullYear())
        // if(+tmonth[2] === date.getFullYear()) console.log(+tmonth[2])

        if (
          typeof tmonth !== "string" &&
          +tmonth[1] === date.getMonth() + 1 &&
          +tmonth[2] === date.getFullYear()
        ) {
          console.log("d2", d[2]);
          if (d[2] === "NIR") {
            console.log(d[8]);
            newNir.push(d);
          } else if (d[2] === "Project") {
            newProjects.push(d);
          }
        } else {
          if (typeof tmonth !== "string") {
            if (date.getMonth() + 1 !== 12) {
              if (+tmonth[1] === date.getMonth() + 2) {
                console.log("hello", tmonth[1]);
                if (d[2] === "NIR") {
                  newNir2.push(d);
                } else if (d[2] === "Project") {
                  newProjects2.push(d);
                }
              } else if (
                date.getMonth() + 1 !== 11 &&
                +tmonth[1] === date.getMonth() + 3
              ) {
                console.log("hello", tmonth[1]);
                if (d[2] === "NIR") {
                  newNir3.push(d);
                } else if (d[2] === "Project") {
                  newProjects3.push(d);
                }
              } else if (
                date.getMonth() + 1 === 11 &&
                +tmonth[1] === 1 &&
                +tmonth[2] === date.getFullYear() + 1
              ) {
                console.log("hello", tmonth[1]);
                if (d[2] === "NIR") {
                  newNir3.push(d);
                } else if (d[2] === "Project") {
                  newProjects3.push(d);
                }
              }
            } else if (
              date.getMonth() + 1 === 12 &&
              +tmonth[1] === 1 &&
              +tmonth[2] === date.getFullYear() + 1
            ) {
              if (d[2] === "NIR") {
                newNir2.push(d);
              } else if (d[2] === "Project") {
                newProjects2.push(d);
              }
            } else if (
              date.getMonth() + 1 === 12 &&
              +tmonth[1] === 2 &&
              +tmonth[2] === date.getFullYear() + 1
            ) {
              if (d[2] === "NIR") {
                newNir3.push(d);
              } else if (d[2] === "Project") {
                newProjects3.push(d);
              }
            }
          }
        }
      }
    });

    setProject(newProjects);
    setProject2(newProjects2);
    setProject3(newProjects3);

    setNir(newNir);
    setNir2(newNir2);
    setNir3(newNir3);
  };

  const handleChange = (event) => {
    setDepartment(event.target.value);

    if (event.target.value === "All Department") handleData(null);
    else handleData(event.target.value);
  };

  useEffect(() => {
    handleData(null);
  }, [data]);

  return (
    <div>
      <Head>
        <title>Timeline</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        {/* <img
          className="absolute mt-[135rem] w-32 "
          src="/home/keyFigures.svg"
        /> */}
        <img
          className="absolute right-0  w-32 mt-[30rem] hidden sm:block"
          src="/home/keyFigures.svg"
          style={{ transform: "scaleX(-1)" }}
        />
        <div className="">
          <Hero />
          <div className="flex justify-center mb-8 text-sm gap-4 items-center">
            {/* <FormControl>
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={department}
                label="Department"
                onChange={handleChange}
                
              >
                <MenuItem value={"All Department"} sx={{fontSize: "0.8rem"}}>All Departments</MenuItem>
                {menu.map((m) => (
                  <MenuItem key={m} value={m} sx={{fontSize: "0.8rem"}}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <label htmlFor="departs" className="text-sm text-[#707070]">
              Department
            </label>
            <div className="selectdiv">
              <select
                id="departs"
                name="departs"
                className="p-4 focus:outline-none rounded-md text-sm text-[#707070]"
                value={department}
                onChange={handleChange}
              >
                <option value="All Department">All Departments</option>
                {menu.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex-col justify-center items-center mb-[6rem] hidden sm:flex">
            <Zoom delay={500}>
              <div className="top-timeline">
                {months[date.getMonth()]} {date.getFullYear()}
              </div>
            </Zoom>
            <div className="flex justify-center items-center gap-4">
              {nir.length === 0 && project.length === 0 ? (
                <div className="w-[34rem] flex justify-center items-center my-[2rem]">
                  <Box
                    text={"No Projects and NIRs in this month"}
                    color="#E0E0E0"
                    anim="left"
                  />
                </div>
              ) : (
                <>
                  <div className="w-[34rem] flex flex-col items-end my-[2rem]">
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
                    <div className="w-[34rem] flex flex-col items-start my-[2rem]">
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
                </>
              )}
            </div>
            <Zoom delay={500}>
              <div className="top-timeline">
                {date.getMonth() === 11
                  ? months[0]
                  : months[date.getMonth() + 1]}{" "}
                {date.getMonth() === 11
                  ? date.getFullYear() + 1
                  : date.getFullYear()}
              </div>
            </Zoom>
            <div className="flex justify-center items-center gap-4">
              {nir2.length === 0 && project2.length === 0 ? (
                <div className="w-[34rem] flex justify-center items-center my-[2rem]">
                  <Box
                    text={"No Projects and NIRs in this month"}
                    color="#E0E0E0"
                    anim="left"
                  />
                </div>
              ) : (
                <>
                  <div className="w-[34rem] flex flex-col items-end my-[2rem]">
                    {project2.map((n, index) => (
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
                    <div className="w-[34rem] flex flex-col items-start my-[2rem]">
                      {nir2.map((n, index) => (
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
                </>
              )}
            </div>
            <Zoom delay={500}>
              <div className="top-timeline">
                {date.getMonth() + 1 === 11
                  ? months[0]
                  : date.getMonth() + 1 === 12
                  ? months[1]
                  : months[date.getMonth() + 2]}{" "}
                {date.getMonth() + 1 === 11
                  ? date.getFullYear() + 1
                  : date.getMonth() + 1 === 12
                  ? date.getFullYear() + 1
                  : date.getFullYear()}
              </div>
            </Zoom>
            <div className="flex justify-center items-center gap-4">
              {nir3.length === 0 && project3.length === 0 ? (
                <div className="w-[34rem] flex justify-center items-center my-[2rem]">
                  <Box
                    text={"No Projects and NIRs in this month"}
                    color="#E0E0E0"
                    anim="left"
                  />
                </div>
              ) : (
                <>
                  <div className="w-[34rem] flex flex-col items-end my-[2rem]">
                    {project3.map((n, index) => (
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
                    <div className="w-[34rem] flex flex-col items-start my-[2rem]">
                      {nir3.map((n, index) => (
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
                </>
              )}
            </div>
          </div>
        </div>
        <div className="media mx-auto flex items-center sm:hidden">
          <Box2 sx={{ width: "100%" }}>
            <Box2 sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                classes={{ root: classes.root, scroller: classes.scroller }}
                indicatorColor="primary"
                textColor="primary"
                variant={"scrollable"}
                scrollButtons={"on"}
                // classes={{ root: classes.root, scroller: classes.scroller }}
                value={value}
                onChange={handleValue}
                aria-label="basic tabs example"
                // variant="scrollable"
                // scrollButtons="auto"
                // centered
              >
                <Tab label="NIR" {...a11yProps(0)} />
                <Tab label="Projects" {...a11yProps(1)} />
              </Tabs>
            </Box2>
            <TabPanel value={value} index={0}>
              <>
               
                <div className="flex flex-col justify-center items-center mb-[6rem]">
                  <Zoom delay={500}>
                    <div className="top-timeline">
                      {months[date.getMonth()]} {date.getFullYear()}
                    </div>
                  </Zoom>
                  <div className="flex justify-center items-center gap-4">
                    {nir.length === 0 && project.length === 0 ? (
                      <div className="w-full flex justify-center items-center my-[2rem]">
                        <Box
                          text={"No Projects and NIRs in this month"}
                          color="#E0E0E0"
                          anim="left"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="w-full flex justify-center items-center my-[2rem] flex-col">
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
                  
                      </>
                    )}
                  </div>
                  <Zoom delay={500}>
                    <div className="top-timeline">
                      {date.getMonth() === 11
                        ? months[0]
                        : months[date.getMonth() + 1]}{" "}
                      {date.getMonth() === 11
                        ? date.getFullYear() + 1
                        : date.getFullYear()}
                    </div>
                  </Zoom>
                  <div className="flex justify-center items-center gap-4">
                    {nir2.length === 0 && project2.length === 0 ? (
                      <div className="w-full flex justify-center items-center my-[2rem]">
                        <Box
                          text={"No Projects and NIRs in this month"}
                          color="#E0E0E0"
                          anim="left"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="w-full flex justify-center items-center my-[2rem] flex-col">
                          {project2.map((n, index) => (
                            <Box
                              key={index}
                              text={n[5]}
                              date={`${n[13]} (${n[4]})`}
                              color="#E0E0E0"
                              anim="left"
                            />
                          ))}
                        </div>
                        
                      </>
                    )}
                  </div>
                  <Zoom delay={500}>
                    <div className="top-timeline">
                      {date.getMonth() + 1 === 11
                        ? months[0]
                        : date.getMonth() + 1 === 12
                        ? months[1]
                        : months[date.getMonth() + 2]}{" "}
                      {date.getMonth() + 1 === 11
                        ? date.getFullYear() + 1
                        : date.getMonth() + 1 === 12
                        ? date.getFullYear() + 1
                        : date.getFullYear()}
                    </div>
                  </Zoom>
                  <div className="flex justify-center items-center gap-4">
                    {nir3.length === 0 && project3.length === 0 ? (
                      <div className="w-full flex justify-center items-center my-[2rem]">
                        <Box
                          text={"No Projects and NIRs in this month"}
                          color="#E0E0E0"
                          anim="left"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="w-full flex justify-center items-center my-[2rem]">
                          {project3.map((n, index) => (
                            <Box
                              key={index}
                              text={n[5]}
                              date={`${n[13]} (${n[4]})`}
                              color="#E0E0E0"
                              anim="left"
                            />
                          ))}
                        </div>
                      
                      </>
                    )}
                  </div>
                </div>
              </>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div className="flex flex-col justify-center items-center mb-[6rem] ">
                  <Zoom delay={500}>
                    <div className="top-timeline">
                      {months[date.getMonth()]} {date.getFullYear()}
                    </div>
                  </Zoom>
                  <div className="flex justify-center items-center gap-4">
                    {nir.length === 0 && project.length === 0 ? (
                      <div className="w-full flex justify-center items-center my-[2rem]">
                        <Box
                          text={"No Projects and NIRs in this month"}
                          color="#B2EBF2"
                          anim="left"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="w-full flex justify-center items-center my-[2rem] flex-col">
                          {nir.map((n, index) => (
                            <Box
                              key={index}
                              text={n[5]}
                              date={`${n[13]} (${n[4]})`}
                              color="#B2EBF2"
                              anim="left"
                            />
                          ))}
                        </div>
                  
                      </>
                    )}
                  </div>
                  <Zoom delay={500}>
                    <div className="top-timeline">
                      {date.getMonth() === 11
                        ? months[0]
                        : months[date.getMonth() + 1]}{" "}
                      {date.getMonth() === 11
                        ? date.getFullYear() + 1
                        : date.getFullYear()}
                    </div>
                  </Zoom>
                  <div className="flex justify-center items-center gap-4">
                    {nir2.length === 0 && project2.length === 0 ? (
                      <div className="w-full flex justify-center items-center my-[2rem]">
                        <Box
                          text={"No Projects and NIRs in this month"}
                          color="#B2EBF2"
                          anim="left"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="w-full flex justify-center items-center my-[2rem] flex-col">
                          {nir2.map((n, index) => (
                            <Box
                              key={index}
                              text={n[5]}
                              date={`${n[13]} (${n[4]})`}
                              color="#B2EBF2"
                              anim="left"
                            />
                          ))}
                        </div>
                        
                      </>
                    )}
                  </div>
                  <Zoom delay={500}>
                    <div className="top-timeline">
                      {date.getMonth() + 1 === 11
                        ? months[0]
                        : date.getMonth() + 1 === 12
                        ? months[1]
                        : months[date.getMonth() + 2]}{" "}
                      {date.getMonth() + 1 === 11
                        ? date.getFullYear() + 1
                        : date.getMonth() + 1 === 12
                        ? date.getFullYear() + 1
                        : date.getFullYear()}
                    </div>
                  </Zoom>
                  <div className="flex justify-center items-center gap-4">
                    {nir3.length === 0 && project3.length === 0 ? (
                      <div className="w-full flex justify-center items-center my-[2rem]">
                        <Box
                          text={"No Projects and NIRs in this month"}
                          color="#B2EBF2"
                          anim="left"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="w-full flex justify-center items-center my-[2rem]">
                          {nir3.map((n, index) => (
                            <Box
                              key={index}
                              text={n[5]}
                              date={`${n[13]} (${n[4]})`}
                              color="#B2EBF2"
                              anim="left"
                            />
                          ))}
                        </div>
                      
                      </>
                    )}
                  </div>
                </div>
            </TabPanel>
          </Box2>
        </div>
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
    range: `Task_Table!A1:N1000`,
  });

  return {
    props: {
      data: response.data.values,
    },
  };
}

// export async function getServerSideProps({ query }) {
//   // const auth = await google.auth.getClient({
//   //   scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
//   // });

//   // const sheets = google.sheets({ version: "v4", auth });

//   // const response = await sheets.spreadsheets.values.get({
//   //   spreadsheetId: process.env.SHEET_ID,
//   //   range: `Task_Table!A1:N1000`,
//   // });

//   const response = await getData();

//   return {
//     props: {
//       // data: response.data.values,
//       data: response,
//     },
//     revalidate: 1,
//   };
// }

// export async function getStaticProps(context) {
//   const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
//     const jwt = new google.auth.JWT(
//       process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
//       null,
//       // we need to replace the escaped newline characters
//       // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
//       process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
//       scopes
//     );

//     const sheets = google.sheets({ version: "v4", auth: jwt });
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId: process.env.SPREADSHEET_ID,
//       range: `Task_Table!A1:N1000`,
//     });

//     const rows = response.data.values;

//   return {
//     props: {
//       data: rows,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every second
//     revalidate: 1, // In seconds
//   };
// }
