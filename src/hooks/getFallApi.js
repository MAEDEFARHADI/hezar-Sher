import { useEffect, useState } from "react";
import axios from "axios";
import hafezPoems from "../assets/hafez/hafez.json";
function GetFaalApi() {
    const [title, settitle] = useState("");
    const [dobeyti, setdobeyti] = useState([]);
    const [voice, setvoice] = useState("");
    const [tafsir, settafsir] = useState("");
    const taghirdobeyti = [];

    useEffect(() => {
        axios
            .get("https://ganjgah.ir/api/ganjoor/hafez/faal")
            .then(({data}) => {
                const { title, verses, recitations } = data;
                settitle(title);
                setvoice(recitations[0].mp3Url);
                verses.forEach((verse, index) => {
                    if (index % 2 === 0) {
                 return  taghirdobeyti.push([verse.text]);
                    }
                    return  taghirdobeyti[taghirdobeyti.length - 1].push(verse.text);
                });
              const dobeyti = taghirdobeyti;
                setdobeyti(dobeyti);

                const SHER = hafezPoems.find((each) => {
                    for (let i = 0; i < dobeyti.length; i++) {
                        for (let j = 0; j < dobeyti[i].length; j++) {
                            if (each.poem.includes(dobeyti[i][j])) {
                                return true;
                            }
                        }
                    }
                });
                const tafsir = SHER.interpretation;
                settafsir(tafsir);

            
            });
    }, []);

    return { title, dobeyti, voice, tafsir };
}

export default GetFaalApi;
