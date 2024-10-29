import { useParams } from "react-router-dom";
import ArtDetails from "../src/components/ArtDetails";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const DetailView = () => {
    const { title } = useParams();
    const location = useLocation();
    const art = location.state?.art;

    const [artwork, setArtwork] = useState(null);

    useEffect(() => {
        // Assuming title is unique, you can filter the artwork from the list or make an API call if needed
        // This will work if you fetch the list again or have a centralized data store for `list`
    }, [title]);

    return (
        <div>
            <h1>{art.title}</h1>
                <p>Media id: {art.media_id || "Unknown"}</p>
                <p>Year End: {art.year_end || "Not available"}</p>
                <p>Medium: {art.medium || "Not specified"}</p>
                <p>On Display: {art.on_display || "Not available"}</p>
        </div>
    );
};

export default DetailView;