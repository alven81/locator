const List = ({listData}) => {
    console.log(listData.length);
    return (
        <div className="container main_list">
            {
                listData.length ? <p>Loading</p> : 
                listData.map((item) => (
                    
                    <p>{item.ip}</p>
                    
                ))
                    
            }


        </div>
    );
};

export { List };

// {consist.map((value, id) => (
//     <li key={id}>{value}</li>
// ))}