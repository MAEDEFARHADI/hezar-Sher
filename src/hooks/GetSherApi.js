import axios from "axios";
import { useState, useEffect, useCallback } from "react";

function GetSherApi(id) {
    const [name, setName] = useState("");
    const [info, setinfo] = useState("");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [dobeyti, setdobeyti] = useState([]);
    const [shouldRefresh, setShouldRefresh] = useState(true);
    const [refreshButtonTransform, setRefreshButtonTransform] = useState(0);
    const taghirdobeyti = [];

    useEffect(() => {
        axios
            .get(`https://ganjgah.ir/api/ganjoor/poet/${id}`)
            .then(({ data }) => {
                const {
                    poet: { nickname, description, imageUrl },
                } = data;
                setImage(`https://ganjgah.ir${imageUrl}`);
                setName(nickname);
                setinfo(description);
            });
    }, [id]);

    useEffect(() => {
        if (shouldRefresh) {
            axios
                .get(`https://ganjgah.ir/api/ganjoor/poem/random?poetId=${id}`)
                .then(({ data }) => {
                    const { title, verses } = data;
                    setTitle(title);
                    verses.forEach((verse, index) => {
                        if (index % 2 === 0) {
                     return  taghirdobeyti.push([verse.text]);
                        }
                        return  taghirdobeyti[taghirdobeyti.length - 1].push(verse.text);
                    });
                  const dobeyti = taghirdobeyti;
                    setdobeyti(dobeyti);
                                        setShouldRefresh(false);
                });
        }
    }, [id, shouldRefresh]);

    const refresh = useCallback(() => {
        setRefreshButtonTransform((prevState) => prevState + 180);
        setdobeyti([]);
        setTitle("");
        setShouldRefresh(true);
    }, []);

    return {
        name,
        info,
        image,
        title,
        dobeyti,
        refresh,
    };
}

export default GetSherApi;
