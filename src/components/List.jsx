const List = ({infoList}) => {
    console.log(infoList.length);
    return (
        <div className="container main_list">
             {
                infoList.length > 0 ? infoList.map((item) => (   
                    <p>{item.ip}</p>
                )) :  <p>Loading</p> 
            }
        </div>
    );
};

export { List };
