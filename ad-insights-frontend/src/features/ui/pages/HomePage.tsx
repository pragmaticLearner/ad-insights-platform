import {Grid, GridItem} from "@chakra-ui/react";
import NavBar from "@/features/ui/components/NavBar.tsx";

export default function HomePage() {
    return (
        <Grid
            templateAreas={`"nav nav" "aside main"`}
        >
            <GridItem area={"nav"}>
                <NavBar />
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
