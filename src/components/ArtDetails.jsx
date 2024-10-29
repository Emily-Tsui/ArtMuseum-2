import ArtChart from "./ArtChart";

const ArtDetails = ({ artwork }) => {
    return (
        <div>
            <h2>{artwork.title}</h2>
            <p>Artist: {artwork.artist}</p>
            <p>Date: {artwork.date}</p>
            {/* Display more artwork details here */}
        </div>
    );
};

export default ArtDetails;