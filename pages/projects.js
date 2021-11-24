import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Projects/Hero";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
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

const Projects = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <Hero />
        <div className="media mx-auto flex items-center">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="scrollable"
                scrollButtons="auto"
                centered
              >
                <Tab label="In Progress" {...a11yProps(0)} />
                <Tab label="Complete" {...a11yProps(1)} />
                <Tab label="Hold" {...a11yProps(2)} />
                <Tab label="Cheat Sheet" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className="flex justify-center items-center">
                <iframe
                  className="pages h-[60rem] sm:h-[110rem] md:h-[155rem] 2xl:h-[208rem]"
                  src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/1Ap9B"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="flex justify-center items-center">
                <iframe
                  className="pages h-[60rem] sm:h-[110rem] md:h-[155rem] 2xl:h-[208rem]"
                  src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/p_lqbwj8z4nc"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="flex justify-center items-center">
                <iframe
                  className="pages h-[60rem] sm:h-[110rem] md:h-[155rem] 2xl:h-[208rem]"
                  src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/p_omj4uriloc"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="flex justify-center items-center">
                <iframe
                  className="pages h-[15rem] sm:h-[20rem] md:h-[26rem] 2xl:h-[35rem]"
                  src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/p_cqvwrsnboc"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </TabPanel>
          </Box>
        </div>

        {/* {selected === "inprogress" && (
          <div className="flex justify-center items-center">
            <iframe
              className="pages h-[155rem] 2xl:h-[208rem]"
              src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/1Ap9B"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        )}
        {selected === "completion" && (
          <div className="flex justify-center items-center">
            <iframe
              className="pages h-[155rem] 2xl:h-[208rem]"
              src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/p_lqbwj8z4nc"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        )}
        {selected === "tab 3" && (
          <div className="flex justify-center items-center">
            <iframe
              className="pages h-[155rem] 2xl:h-[208rem]"
              src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/p_f7jayqnboc"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        )}
        {selected === "tab 4" && (
          <div className="flex justify-center items-center">
            <iframe
              className="pages h-[26rem] 2xl:h-[35rem]"
              src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/p_cqvwrsnboc"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        )} */}
      </Layout>
    </div>
  );
};

export default Projects;
