import { useEffect, useState } from "react";
import * as d3 from "d3-geo";
import type {Feature, FeatureCollection, Geometry} from "geojson";
import { feature } from "topojson-client";
import type {Topology} from "topojson-specification";

const worldMapJson = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
// "https://d3js.org/world-110m.v1.json" - in case other map does not work

export default function WorldMap() {
    const [countries, setCountries] = useState<Feature<Geometry>[]>([]);
    const [hovered, setHovered] = useState(null);

    const projection = d3.geoNaturalEarth1().scale(300).translate([750, 550]);
    const pathGenerator = d3.geoPath().projection(projection);

    useEffect(() => {
        fetch(worldMapJson)
            .then(r => r.json())
            .then((topo: Topology) => {
                const world = feature(topo, topo.objects.countries) as FeatureCollection<Geometry>;
                setCountries(world.features);
            });
    }, []);

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
