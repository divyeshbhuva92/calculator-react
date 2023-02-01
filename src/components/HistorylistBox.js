import { React } from "react";

const HistorylistBox = ({ historylist }) => {
  return (
    <div className="historybox">
      <div className="History">History</div>
      <div className="historylist">
        {historylist.map((history, index) => (
          <div className="historyEle" key={index}>
            {/* {console.log(index)} */}
            <p className="que">{history.que} =</p>
            <p className="ans">{history.ans}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorylistBox;
