const Location = ({ infoList }) => {
    if (infoList) {
        if (infoList.success === false) {
            return <p>{infoList.error.info}</p>;
        } else {
            return (
                <div className="container">
                    {infoList ? (
                        <div className="main_location">
                            <div className="main_location-logo">
                                <img
                                    className="main_location-img"
                                    src={infoList.location.country_flag}
                                    alt="Flag"
                                />
                                <p>{infoList.location.country_flag_emoji}</p>
                            </div>
                            <p>Country: {infoList.country_name}</p>
                            <p>The capital: {infoList.location.capital}</p>
                            <p>Phone code: {infoList.location.calling_code}</p>
                            <p>{infoList.location.geoname_id}</p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            );
        }
    }
};

export { Location };
