import { useState, useEffect } from "react";

export default function useHook({ State }) {
    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        fetch(`data/${State ? "Cloth" : "Computer"}.json`)
            .then((e) => e.json())
            .then((D) => { setData(D); })
            .catch(() => setError("에러 발생"))
            .finally(() => setLoading(false))
    }, [State]);

    return [Data, Loading, Error];
}