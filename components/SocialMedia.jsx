import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import SwipeableViews from "react-swipeable-views" // Import react-swipeable-views

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}>
			{value === index && (
				<Box
					sx={{
						px: 4,
						"@media (max-width: 960px)": {
							px: 3,
						},
					}}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	}
}

export default function SocialMedia() {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const handleChangeIndex = (index) => {
		setValue(index)
	}

	return (
		<Box sx={{ flexGrow: 1, bgcolor: "transparent", display: "flex", height: "auto" }}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				textColor="secondary"
				indicatorColor="secondary"
				sx={{ borderRight: 1, borderColor: "divider" }}>
				<Tab
					label={
						<div className="flex gap-x-3 w-full">
							<img src="/SocialMediaImg/instagram.svg" alt="Instagram Younas" />
							Instagram
						</div>
					}
					{...a11yProps(0)}
					scrollButtons="auto"
					sx={{
						fontWeight: "Bold",
						color: "#ced4d7",
						fontSize: ["0.7rem", "1rem"],
					}}
				/>
				<Tab
					label={
						<div className="flex gap-x-3 w-full">
							<img src="/SocialMediaImg/tiktok.svg" alt="Tiktok Younas" />
							Tiktok
						</div>
					}
					{...a11yProps(1)}
					scrollButtons="auto"
					sx={{
						fontWeight: "Bold",
						color: "#ced4d7",
						fontSize: ["0.7rem", "1rem"],
					}}
				/>
				<Tab
					label={
						<div className="flex gap-x-3 w-full">
							<img src="/SocialMediaImg/whatsapp.svg" alt="Whatsapp Younas" />
							Whatsapp
						</div>
					}
					{...a11yProps(2)}
					scrollButtons="auto"
					sx={{
						fontWeight: "Bold",
						color: "#ced4d7",
						fontSize: ["0.7rem", "1rem"],
					}}
				/>
				<Tab
					label={
						<div className="flex gap-x-3 w-full">
							<img src="/SocialMediaImg/linkedin.svg" alt="Linkedin Younas" />
							Linkedin
						</div>
					}
					{...a11yProps(3)}
					scrollButtons="auto"
					sx={{
						fontWeight: "Bold",
						color: "#ced4d7",
						fontSize: ["0.7rem", "1rem"],
					}}
				/>
      <Tab
					label={
						<div className="flex gap-x-3 w-full">
							<img src="/SocialMediaImg/github.svg" alt="Github Younas" />
							Github
						</div>
					}
					{...a11yProps(4)}
					scrollButtons="auto"
					sx={{
						fontWeight: "Bold",
						color: "#ced4d7",
						fontSize: ["0.7rem", "1rem"],
					}}
				/>
			</Tabs>


			<SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
				<TabPanel value={value} index={0}>
					<a href="https://www.instagram.com/younas.18.2">
						<img
							src="/SocialMediaImg/Instagram.jpg"
							alt="Instagram Younas"
							className="object-contain h-auto w-[10rem] md:w-[14.3rem]  rounded-xl "
						/>
					</a>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<a href="https://www.tiktok.com/@younas.18.02">
						<img
							src="/SocialMediaImg/tiktok.jpg"
							alt="Tiktok Younas"
							className="object-contain h-auto w-[10rem] md:w-[14.3rem] rounded-xl"
						/>
					</a>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<a href="https://wa.me/923184836125?text=Hi%20I've%20visited%20your%20site%20and%20I%20want%20services">
						<img
							src="/SocialMediaImg/whatsapp.jpg"
							alt="Whatsapp Younas"
							className="object-contain h-auto w-[10rem] md:w-[14.3rem] rounded-xl"
						/>
					</a>
				</TabPanel>
				<TabPanel value={value} index={3}>
					<a href="https://www.linkedin.com/in/younas-munawar-69a011351">
						<img
							src="/SocialMediaImg/linkedin.jpg"
							alt="Linkedin Younas"
							className="object-contain h-auto w-[10rem] md:w-[14.3rem] rounded-xl"
						/>
					</a>
				</TabPanel>
        <TabPanel value={value} index={4}>
					<a href="https://github.com/Younasmunawar">
						<img
							src="/SocialMediaImg/github.jpg"
							alt="Github Younas"
							className="object-contain h-auto w-[10rem] md:w-[14.3rem] rounded-xl"
						/>
					</a>
				</TabPanel>
			</SwipeableViews>
		</Box>
	)
}
