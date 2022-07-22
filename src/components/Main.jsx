import { List } from "./List";
import User from "./User";
import { Location } from "./Location";
import { data } from "../utils/temp";
import { first } from "../utils/temp";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
    const [listData, setListData] = useState([]);
    const [inputText, setInputText] = useState("");
    const [localIp, setLocalIp] = useState("");
    const access_key = "e85498ee2f2225efefe73f1c08bc6165";

    //on start
    useEffect(() => {
        if (localIp) {
            request(localIp)
            console.log(localIp);
        }
    }, [localIp])

    useEffect(() => {
        axios(
            "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
        )
            .then(response => response)
            .then(data => setLocalIp(data.data.IPv4));
    }, [])

    const request = (inputText) => {
        axios
            .get(
                `http://api.ipstack.com/${inputText}?access_key=${access_key}`
            )
            .then(function (response) {
                console.log("response", response.data);
                if (response) buildListData(response.data);
            })
            .catch(function (error) {
                console.log("ERROR", error);
            });
    };

    const buildListData = (input) => {
        console.log("in input: ", input)
        const tempListData = [...listData];
        tempListData.push(input);
        setListData(tempListData);
        //console.log(listData);
    };

    return (
        <div className="main_locator">
            <div className="main_locator-list">
                {listData && <List infoList={listData} />}
            </div>
            <div className="main_locator-info">
                <div className="main_locator-info-location">
                    <div>{listData && <User infoUser={listData[0]} />}</div>
                    <div>{listData && <Location infoList={listData[0]} />}</div>
                </div>
                <div className="main_locator-info-search">
                    <input onChange={(e) => setInputText(e.target.value)} />
                    {/* <button onClick={() => buildListData(data)}>search</button> */}
                    <button onClick={() => request(inputText)}>search</button> 
                </div>
                <div className="main_locator-info-location">
                    <div>
                        <div>{listData && <User infoUser={listData[listData.length-1]} />}</div>
                    </div>
                    <div>
                        <div>{listData && <Location infoList={listData[listData.length-1]} />}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
