import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import HeighAndWeight from "./Height&Weight";
import ProgressBar from "./ProgressBar";
import TypeAndAbility from "./Ability";
import Description from "./Description";
import NameAndId from "./NameAndId";
import Breeding from "./Breeding";
import Type from "./Type";
import PokeImage from "./poke_Image";

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
    speciesInfo,
    name,
    pokemonInfo,
    egg_groups,
    gender_rate,
    id
}) => {
    return (
        <>
            <div className="mob-poke-image">

            <PokeImage id={id}/>
            </div>
            <NameAndId name={name} pokemonInfo={pokemonInfo} />
            <Type types={types} />
            <Description speciesInfo={speciesInfo} />
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
                        <Breeding
                            speciesInfo={speciesInfo}
                            egg_groups={egg_groups}
                            gender_rate={gender_rate}
                        />
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
