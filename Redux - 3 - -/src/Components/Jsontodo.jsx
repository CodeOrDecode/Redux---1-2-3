import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addjsontodo } from "../Redux/action";
import { useState } from "react";
import Loading from "./Loading";
import { getTodoData } from "../Redux/action";
import { handleJadd } from "../Redux/action";

const Jsontodo = () => {
  const [jtitle, setJtitle] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const jsontododata = useSelector((state) => {
    return state;
  });
  //   console.log(jsontododata.json);

  function handleJadd2() {
    let obj = { title: jtitle, status: false };
    dispatch(handleJadd(obj));
    setJtitle("");
  }

  async function handleStatus(id, status) {
    let res = await axios({
      method: "patch",
      url: `http://localhost:3000/todos/${id}`,
      data: {
        status: !status,
      },
    });
    getTodoData(dispatch);
  }

  function handlejson(event) {
    setJtitle(event.target.value);
  }

  useEffect(() => {
    dispatch(getTodoData);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add toto"
        value={jtitle}
        onChange={handlejson}
      />
      <button onClick={handleJadd2}>Add</button>

      {jsontododata.json &&
        jsontododata.json.map((ele) => {
          return (
            <div key={ele.id}>
              <p>{ele.title}</p>
              <button
                onClick={() => {
                  handleStatus(ele.id, ele.status);
                }}
              >
                {ele.status ? "Completed" : "Pending"}
              </button>
            </div>
          );
        })}
    </>
  );
};

export default Jsontodo;
