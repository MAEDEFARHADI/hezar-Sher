import { useEffect, useState } from "react";
import axios from "axios";
import hafezPoems from "../assets/hafez/hafez.json";
function GetFaalApi() {
    const [ashaar, setashaar] = useState([]);
    useEffect(() => {
        axios.get("https://ganjgah.ir/api/ganjoor/poets").then(({ data }) => {
            const facade = [];

            for (let i = 0; i < data.length; i++) {
                const sher = data[i];
        
                facade.push({
                    id: sher.id,
                    name: sher.nickname,
                    image: `https://ganjgah.ir${sher.imageUrl}`,
                });
            }
            setashaar(facade);

        });
    }, []);
    return { ashaar };
}

export default GetFaalApi;
