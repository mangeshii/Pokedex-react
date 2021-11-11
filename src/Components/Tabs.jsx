import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import HeighAndWeight from "./Height&Weight";
import ProgressBar from "./ProgressBar";
import TypeAndAbility from "./Type&Ability";

const Tabs = ({
    value,
    handleChange,
    new_poke_height,
    poke_height_m,
    poke_weight_kg,
    poke_weight_lbs,
    stats,
    types,
    abilities,
}) => {
    return (
        <>
            <Box
                className="tab-box"
                sx={{ width: "100%", typography: "body1" }}
            >
                <TabContext value={value}>
                    <Box
                        sx={{
                            borderBottom: 1,
                            borderColor: "divider",
                        }}
                    >
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                        >
                            <Tab label="About" value="1" />
                            <Tab label="Base Stats" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <HeighAndWeight
                            new_poke_height={new_poke_height}
                            poke_height_m={poke_height_m}
                            poke_weight_kg={poke_weight_kg}
                            poke_weight_lbs={poke_weight_lbs}
                        />
                        <TypeAndAbility types={types} abilities={abilities} />
                    </TabPanel>
                    <TabPanel value="2">
                        <ProgressBar stats={stats} />
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    );
};
export default Tabs;
