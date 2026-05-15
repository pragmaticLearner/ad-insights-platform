import {Grid, GridItem} from "@chakra-ui/react";
import HomePageNavBar from "../components/navbar/HomePageNavBar.tsx";

export default function HomePage() {
    return (
        <Grid
            templateAreas={`"nav nav" "aside main"`}
        >
            <GridItem area={"nav"}>
                <HomePageNavBar />
            </GridItem>

            <GridItem area={"aside"} bg={"gold"}>
                Aside
            </GridItem>

            <GridItem area={"main"} bg={"dodgerblue"}>
                Main
            </GridItem>
        </Grid>
    );
}
