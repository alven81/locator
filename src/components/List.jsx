const List = ({ infoList }) => {
    return (
        <div className="container main_list">
            {infoList.length > 0 ? (
                infoList.map((item, index) => (
                    <div key={index}>
                        <p>{item.ip}</p>
                    </div>
                ))
            ) : (
                <p>Waiting...</p>
            )}
        </div>
    );
};

export { List };
