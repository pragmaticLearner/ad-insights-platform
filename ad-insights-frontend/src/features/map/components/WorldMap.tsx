import { useState } from "react";
import * as d3 from "d3-geo";
import type {FeatureCollection, Geometry, GeometryCollection} from "geojson";
import { feature } from "topojson-client";
import type {Topology} from "topojson-specification";
import worldMapJson from "../../../shared/assets/maps/world-map-json-50m.json";


export default function WorldMap() {
    const [hovered, setHovered] = useState(null);

    const projection = d3.geoNaturalEarth1().scale(300).translate([750, 550]);
    const pathGenerator = d3.geoPath().projection(projection);

    const topo = worldMapJson as unknown as Topology<{ countries: GeometryCollection<never> }>;
    const world = feature(topo, topo.objects.countries) as unknown as FeatureCollection<Geometry>;

    const countries = world.features;
    const sortedCountries = hovered !== null
        ? [
            ...countries.filter((_, i) => i !== hovered),
            countries[hovered]
        ]
        : countries;

    return (
        <svg viewBox="0 0 1600 1200" width="100%" height="100%">
            {sortedCountries.map((country) => {
                const originalIndex = countries.indexOf(country);
                return (
                    <g
                        key={originalIndex}
                        style={{
                            transformBox: "fill-box",
                            transformOrigin: "center",
                            transform: hovered === originalIndex
                                ? "translateY(-4px) scale(1.04)"
                                : "translateY(0) scale(1)",
                            transition: "transform 200ms ease",
                            filter: hovered === originalIndex
                                ? "drop-shadow(0px 6px 4px rgba(0,0,0,0.35))"
                                : "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
                            cursor: "pointer"
                        }}
                        onMouseEnter={() => setHovered(originalIndex)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => console.log(country.properties?.name)}
                    >
                        <path
                            d={pathGenerator(country) ?? ""}
                            fill={hovered === originalIndex ? "#4A90D9" : "#CBD5E0"}
                            stroke="#fff"
                            strokeWidth={0.5}
                            style={{ transition: "fill 200ms ease" }}
                        />
                    </g>
                );
            })}
        </svg>
    );
}
