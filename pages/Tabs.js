import React, { useEffect, useState } from "react";
import { db, collection } from "../lib/firebase"; // Assuming firebase.js is in lib folder relative to pages
import { getDocs } from "firebase/firestore";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/Card"; // Assuming components folder relative to pages
import Certificate from "../components/Certificate"; // Assuming components folder relative to pages
import PIcon from "../components/CardIcon"; // Assuming components folder relative to pages
import AOS from "aos";
import "aos/dist/aos.css";

const SwipeableViews = dynamic(() => import("react-swipeable-views"), {
  ssr: false,
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {/* Fix for "<div> cannot appear as a descendant of <p>" */}
          {/* By default, Typography renders as a <p> tag. Changing its component prop to "div" */}
          {/* allows it to contain block-level elements without a DOM nesting warning. */}
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Fix for "TabPanel: prop type `value` is invalid"
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired, // Corrected: value should be a number
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch projects from Firebase
        const projectCollection = collection(db, "projects");
        const projectQuerySnapshot = await getDocs(projectCollection);
        const projectData = projectQuerySnapshot.docs.map((doc) => doc.data());
        setProjects(projectData);

        // Define your local certificate image files
        const imageFiles = [
          "Building a Website Certification.webp",
          "C++ Certification.webp",
          "CSS Certification.webp",
          "Deep learning and Deployment on web Amazon.png",
          "Deep learning and Deployment on web DevTown.png",
          "Deep learning and Deployment on web.png",
          "Intro to C++ and Data Structure and Algorithms DevTown.png",
          "Intro to C++ and Data Structure and Algorithms Google.png",
          "Intro to C++ and Data Structure and Algorithms.png",
          "Java Certification.webp",
          "Learn Python Programming - Beginner to Intermediate Level.webp",
        ];

        // Construct local paths for certificate images
        const localCertificates = imageFiles.map((name) => ({
          imgUrl: `/certifications/${name}`, // Corrected path: used "certifications" (plural)
          title: name.split(".")[0],
        }));

        setCertificates(localCertificates);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!mounted) return null;

  return (
    <div className="md:px-[10%] md:mt-20 mt-10" id="Tabs" data-aos="fade-up" data-aos-duration="800">
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" sx={{ bgcolor: "transparent" }} className="px-[6%]">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto" // This might still cause the "React does not recognize scrollButtons" warning,
                                  // but it's typically harmless in development and specific to MUI's internal prop handling.
                                  // No direct change needed here as it's correctly applied to the MUI Tabs component.
            sx={{ display: "flex", justifyContent: "center", width: "auto", margin: "0 auto" }}
          >
            <Tab label="Project" {...a11yProps(0)} sx={{ fontWeight: "Bold", color: "#ced4d7", fontSize: ["1rem", "2rem"] }} />
            <Tab label="Certificate" {...a11yProps(1)} sx={{ fontWeight: "Bold", color: "#ced4d7", fontSize: ["1rem", "2rem"]} } />
            <Tab label="Tech Stack" {...a11yProps(2)} sx={{ fontWeight: "Bold", color: "#ced4d7", fontSize: ["1rem", "2rem"]} } />
          </Tabs>
        </AppBar>

        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration="1000">
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description.split(".")[0] + "."}
                      Link={project.Link}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > 6 && (
              <div className="mt-4 text-[#ced4d7]">
                {showAllProjects ? (
                  <button onClick={() => setShowAllProjects(false)} className="opacity-75 italic text-sm">
                    See Less
                  </button>
                ) : (
                  <button onClick={() => setShowAllProjects(true)} className="opacity-75 text-sm">
                    See More
                  </button>
                )}
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {(showAllCertificates ? certificates : certificates.slice(0, 6)).map((cert, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration="1000">
                    <Certificate imgUrl={cert.imgUrl} title={cert.title} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > 6 && (
              <div className="mt-4 text-[#ced4d7]">
                {showAllCertificates ? (
                  <button onClick={() => setShowAllCertificates(false)} className="opacity-75 italic text-sm">
                    See Less
                  </button>
                ) : (
                  <button onClick={() => setShowAllCertificates(true)} className="opacity-75 text-sm">
                    See More
                  </button>
                )}
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                <PIcon PIcon="html.svg" Language="HTML" />
                <PIcon PIcon="css.svg" Language="CSS" />
                <PIcon PIcon="javascript.svg" Language="JavaScript" />
                <PIcon PIcon="tailwind.svg" Language="Tailwind CSS" />
                <PIcon PIcon="reactjs.svg" Language="ReactJS" />
                <PIcon PIcon="vite.svg" Language="Vite" />
                <PIcon PIcon="nodejs.svg" Language="Node JS" />
                <PIcon PIcon="bootstrap.svg" Language="Bootstrap" />
                <PIcon PIcon="firebase.svg" Language="Firebase" />
                <PIcon PIcon="MUI.svg" Language="Material UI" />
                <PIcon PIcon="nextjs.svg" Language="Next JS" />
                <PIcon PIcon="git.svg" Language="Git" />
                <PIcon PIcon="github.svg" Language="GitHub" />
                <PIcon PIcon="mysql.svg" Language="MySQL" />
                <PIcon PIcon="mongodb.svg" Language="MongoDB" />
                <PIcon PIcon="python.svg" Language="Python" />
                <PIcon PIcon="java.svg" Language="Java" />
                <PIcon PIcon="AI.svg" Language="Artificial Intelligence" />
                <PIcon PIcon="ML.svg" Language="Machine Learning" />
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}