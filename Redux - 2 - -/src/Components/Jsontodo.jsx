import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addjsontodo } from "../Redux/action";
import { useState } from "react";
import Loading from "./Loading";

const Jsontodo = () => {
  const [jtitle, setJtitle] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const jsontododata = useSelector((state) => {
    return state;
  });
  //   console.log(jsontododata.json);

  async function getTodoData() {
    setLoading(true);
    let res = await axios({
      method: "get",
      url: "http://localhost:3000/todos",
    });
    // console.log(res.data);
    dispatch(addjsontodo(res.data));
    setLoading(false);
  }

  async function handleJadd() {
    let res = await axios({
      method: "post",
      url: "http://localhost:3000/todos",
      data: {
        title: jtitle,
        status: false,
      },
    });
    // console.log(res.data);
    setJtitle("");
    getTodoData();
  }
  async function handleStatus(id, status) {
    let res = await axios({
      method: "patch",
      url: `http://localhost:3000/todos/${id}`,
      data: {
        status: !status,
      },
    });
    getTodoData();
  }

  function handlejson(event) {
    setJtitle(event.target.value);
  }

  useEffect(() => {
    getTodoData();
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
      <button onClick={handleJadd}>Add</button>

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
