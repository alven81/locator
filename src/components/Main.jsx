import { List } from "./List";
import { User } from "./User";
import { Location } from "./Location";
import { data } from "../utils/temp";
import { useState } from "react";
import axios from "axios";

const Main = () => {
    const [listData, setListData] = useState([]);
    const [inputText, setInputText] = useState("");
    const access_key = "44894fdb87a8efa4d68d6a6959c11f07";

    const request = (inputText) => {
        axios
            .get(
                `http://api.ipstack.com/${inputText}?access_key=${access_key}`,
                {}
            )
            .then(function (response) {
                builtListData(response.data);
            })
            .then(console.log(listData))
            .catch(function (error) {
                console.log(error);
            });
    };

    const builtListData = (input) => {
        //console.log(input)
        const tempListData = listData;
        tempListData.push(input);
        setListData(tempListData);
        console.log(listData);
    };

    return (
        <div className="main_locator">
            <div className="main_locator-list">
           { listData && <List infoList={listData} />}
            </div>
            <div className="main_locator-info">
                <div className="main_locator-info-location">
                    <div>
                        <User />
                    </div>
                    <div>
                        <Location />
                    </div>
                </div>
                <div className="main_locator-info-search">
                    <input onChange={(e) => setInputText(e.target.value)} />
                    <button onClick={() => builtListData(data)}>search</button>
                    {/* <button onClick={() => request(inputText)}>search</button>  */}
                </div>
                <div className="main_locator-info-location">
                    <div>
                        <User />
                    </div>
                    <div>
                        <Location />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
