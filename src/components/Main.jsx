import { List } from "./List";
import { User } from "./User";
import { Location } from "./Location";
import { useState } from "react";
import axios from "axios";

const Main = () => {

    const [listData, setListData] = useState([]);
    const [inputText, setInputText] = useState("");
    const access_key = "9c55f3883b50ad85b49de542782e451d";

    const request = (inputText) => {
        axios.get(`http://api.ipstack.com/${inputText}?access_key=${access_key}`, {
          })
          .then(function (response) {
            builtListData(response.data)
          })
          .then (
            console.log(listData)
          )
          .catch(function (error) {
            console.log(error);
          })
    }

    const builtListData = (input) => {
        //console.log(input)
        const tempListData = listData;
       tempListData.push(input);
       setListData(tempListData)
    }

    return (
        <div className="main_locator">
            <div className="main_locator-list">
                {listData && <List listData={listData}/>}
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
                    <input onChange={e => setInputText(e.target.value)} />
                    <button onClick={() => request(inputText)}>search</button>
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
