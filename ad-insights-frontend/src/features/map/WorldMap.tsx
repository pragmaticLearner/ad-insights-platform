import { useEffect, useRef, useState } from "react";
import * as d3 from "d3-geo";
import type {Feature, FeatureCollection, Geometry} from "geojson";
import { feature } from "topojson-client";
import type {Topology} from "topojson-specification";

const worldMapJson = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
// "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"

export default function WorldMap() {
    const [countries, setCountries] = useState<Feature<Geometry>[]>([]);
    const [hovered, setHovered] = useState(null);

    const projection = d3.geoNaturalEarth1().scale(300).translate([800, 500]);
    const pathGenerator = d3.geoPath().projection(projection);

    useEffect(() => {
        fetch(worldMapJson)
            .then(r => r.json())
            .then((topo: Topology) => {
                const world = feature(topo, topo.objects.countries) as FeatureCollection<Geometry>;
                setCountries(world.features);
            });
    }, []);

    return (
        <svg
            viewBox={"0 0 1600 800"}
            width="100%"
            height="100%"
        >
            {countries.map(country => (
                <path
                    key={country.id}
                    d={pathGenerator(country)}
                    fill={hovered === country.id ? "#4A90D9" : "#CBD5E0"}
                    stroke={"#fff"}
                    strokeWidth={0.5}
                    style={{
                        transition: "all 200ms ease",
                        filter: hovered === country.id
                            ? "drop-shadow(0 4px 12px rgba(0,0,0,5))"
                            : "none",
                        transform: hovered === country.id
                            ? "translateY(-10px)"
                            : "none",
                        cursor: "pointer"
                    }}
                    onMouseEnter={() => setHovered(country.id)}
                    onMouseLeave={() => setHovered(country.id)}
                    onClick={() => console.log(country.id)}
                />
            ))}
        </svg>
    );
}
